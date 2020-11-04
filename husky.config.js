module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': 'yarn test -u && git add *.md *.snap',
    'pre-push': 'yarn lint && yarn test'
  }
}
