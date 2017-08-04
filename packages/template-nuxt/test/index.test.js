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

test('defaults', async t => {
  const stream = await sao.mockPrompt(template)

  const pkg = stream.fileContents('package.json')
  t.snapshot(stream.fileList, 'Generated files')
  t.snapshot(getPkgFields(pkg), 'package.json')
})

test('use express', async t => {
  const stream = await sao.mockPrompt(template, {
    server: 'express'
  })

  const pkg = stream.fileContents('package.json')
  t.snapshot(stream.fileList, 'Generated files')
  t.snapshot(getPkgFields(pkg), 'package.json')
})
