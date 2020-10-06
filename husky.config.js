module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': 'yarn test -u',
    'pre-push': 'yarn lint && yarn test'
  }
}
