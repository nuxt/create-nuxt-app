import path from 'path'
import test from 'ava'
import sao from 'sao'

const template = path.join(__dirname, '..')

const getPkgFields = pkg => {
  pkg = JSON.parse(pkg)
  delete pkg.name
  delete pkg.author
  delete pkg.version
  delete pkg.description
  return pkg
}

const verifyPkg = async (t, answers) => {
  const stream = await sao.mockPrompt(template, answers)

  const pkg = stream.fileContents('package.json')
  t.snapshot(stream.fileList, 'Generated files')
  t.snapshot(getPkgFields(pkg), 'package.json')
}

test('defaults', async t => {
  await verifyPkg(t)
})

test('use express', async t => {
  await verifyPkg(t, {
    server: 'express'
  })
})

test('use koa', async t => {
  await verifyPkg(t, {
    server: 'koa'
  })
})

test('use hapi', async t => {
  await verifyPkg(t, {
    server: 'hapi'
  })
})

test('use feathers', async t => {
  await verifyPkg(t, {
    server: 'feathers'
  })
})

test('use micro', async t => {
  await verifyPkg(t, {
    server: 'micro'
  })
})

test('use axios', async t => {
  await verifyPkg(t, {
    axios: 'yes'
  })
})

test('use eslint', async t => {
  await verifyPkg(t, {
    eslint: 'yes'
  })
})

test('use yarn', async t => {
  await verifyPkg(t, {
    pm: 'yarn'
  })
})
