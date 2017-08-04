import path from 'path'
import test from 'ava'
import sao from 'sao'

const template = path.join(__dirname, '..')

test('defaults', async t => {
  const stream = await sao.mockPrompt(template)

  t.snapshot(stream.fileList, 'Generated files')
})
