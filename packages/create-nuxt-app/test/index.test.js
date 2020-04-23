import path from 'path'
import test from 'ava'
import sao from 'sao'
import saoConfig from '../lib/saofile'

const generator = path.join(__dirname, '../lib')

const getPkgFields = (pkg) => {
  pkg = JSON.parse(pkg)
  delete pkg.name
  delete pkg.version
  return pkg
}

const normalizeNewlines =
  string => string.replace(/\r\n/g, '\n')

const verifyFileList = async (t, answers = {}) => {
  const stream = await sao.mock({ generator }, answers)
  t.snapshot(stream.fileList, 'Generated files')
}

const verifyPkg = async (t, answers = {}) => {
  const stream = await sao.mock({ generator }, answers)
  const pkg = await stream.readFile('package.json')
  t.snapshot(getPkgFields(pkg), 'package.json')
}

const verifyNuxtConfig = async (t, answers = {}, typescript) => {
  const stream = await sao.mock({ generator }, answers)
  const configFile = answers.server === 'adonis' ? 'config/nuxt.js' : `nuxt.config.${typescript ? 'ts' : 'js'}`
  const config = await stream.readFile(configFile)
  t.snapshot(normalizeNewlines(config), `Generated ${configFile}`)
}

test('verify default answers', async (t) => {
  await verifyFileList(t)
  await verifyPkg(t)
  await verifyNuxtConfig(t)
})

for (const prompt of saoConfig.prompts) {
  if (Array.isArray(prompt.choices)) {
    for (const choice of prompt.choices) {
      test(`verify ${prompt.name}: ${choice.name}`, async (t) => {
        const answer = { [prompt.name]: prompt.type === 'checkbox' ? [choice.value] : choice.value }
        await verifyFileList(t, answer)
        await verifyPkg(t, answer)
        await verifyNuxtConfig(t, answer, false)

        // runtime has a "when" filter on it, make sure we setup answers correctly to satisfy it and run tests again
        if (prompt.name === 'runtime' && choice.name.includes('typescript')) {
          answer.language = 'ts'
          answer.server = 'none'

          await verifyFileList(t, answer)
          await verifyPkg(t, answer)
          await verifyNuxtConfig(t, answer, true)
        }
      })
    }
  }
}
