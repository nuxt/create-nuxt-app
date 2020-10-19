describe('Example test', () => {
  test('open app correctly', (browser) => {
    const main = browser.page.main()
    main.navigate()
    main.assert.visible('@docButton')
    main.assert.visible('@githubButton')
    browser.end()
  })
})
