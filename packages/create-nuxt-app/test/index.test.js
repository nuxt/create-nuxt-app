const path = require('path')
const test = require('ava')
const sao = require('sao')
const saoConfig = require('../lib/saofile')

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

const verifyNuxtConfig = async (t, answers = {}) => {
  const stream = await sao.mock({ generator }, answers)
  const configFile = 'nuxt.config.js'
  const config = await stream.readFile(configFile)
  t.snapshot(normalizeNewlines(config), `Generated ${configFile}`)
}

const verifyAnswers = async (t, answers = {}) => {
  await verifyFileList(t, answers)
  await verifyPkg(t, answers)
  await verifyNuxtConfig(t, answers)
}

test('verify default answers', async (t) => {
  await verifyAnswers(t)
})

for (const prompt of saoConfig.prompts) {
  if (Array.isArray(prompt.choices)) {
    if (prompt.type === 'checkbox') {
      const choiceNames = prompt.choices.map(choice => choice.name)
      const choiceValues = prompt.choices.map(choice => choice.value)
      test(`verify ${prompt.name}: ${choiceNames.join(', ')}`, async (t) => {
        const answers = { [prompt.name]: choiceValues }
        await verifyAnswers(t, answers)
      })
    }
    for (const choice of prompt.choices) {
      test(`verify ${prompt.name}: ${choice.name}`, async (t) => {
        const answers = { [prompt.name]: prompt.type === 'checkbox' ? [choice.value] : choice.value }
        await verifyAnswers(t, answers)
      })
    }
  }
}
