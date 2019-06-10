import path from 'path'
import test from 'ava'
import sao from 'sao'
import saoConfig from '../saofile'

const generator = path.join(__dirname, '..')

const getPkgFields = (pkg) => {
  pkg = JSON.parse(pkg)
  delete pkg.name
  delete pkg.author
  delete pkg.version
  delete pkg.description
  return pkg
}

const verifyPkg = async (t, answers) => {
  const stream = await sao.mock({ generator }, answers)

  const pkg = await stream.readFile('package.json')
  t.snapshot(stream.fileList, 'Generated package.json')
  t.snapshot(getPkgFields(pkg), 'package.json')
}

const verifyNuxtConfig = async (t, answers = {}) => {
  const stream = await sao.mock({ generator }, answers)
  const configFile = answers.server === 'adonis' ? 'config/nuxt.js' : 'nuxt.config.js'
  const config = await stream.readFile(configFile)
  t.snapshot(config, `Generated ${configFile}`)
}

test('verify default answers', async (t) => {
  await verifyPkg(t)
  await verifyNuxtConfig(t)
})

for (const prompt of saoConfig.prompts) {
  if (Array.isArray(prompt.choices)) {
    for (const choice of prompt.choices) {
      test(`verify ${prompt.name}: ${choice.name}`, async (t) => {
        const answer = { [prompt.name]: prompt.type === 'list' ? choice.value : [choice.value] }
        await verifyPkg(t, answer)
        await verifyNuxtConfig(t, answer)
      })
    }
  }
}
