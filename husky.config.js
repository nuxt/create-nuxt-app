module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': 'yarn lint && yarn test',
    'pre-push': 'yarn lint && yarn test'
  }
}
