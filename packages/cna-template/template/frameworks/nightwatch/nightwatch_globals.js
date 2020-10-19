// External Globals doc: https://nightwatchjs.org/guide/#external-globals

module.exports = {
  // this controls whether to abort the test execution when an assertion failed and skip the rest
  // it's being used in waitFor commands and expect assertions
  abortOnAssertionFailure: true,

  // this will overwrite the default polling interval (currently 500ms) for waitFor commands
  // and expect assertions that use retry
  waitForConditionPollInterval: 500,

  // default timeout value in milliseconds for waitFor commands and implicit waitFor value for
  // expect assertions
  waitForConditionTimeout: 5000,

  // this will cause waitFor commands on elements to throw an error if multiple
  // elements are found using the given locate strategy and selector
  throwOnMultipleElementsReturned: false,

  // controls the timeout value for async hooks. Expects the done() callback to be invoked within this time
  // or an error is thrown
  asyncHookTimeout: 10000,

  // controls the timeout value for when running async unit tests. Expects the done() callback to be invoked within this time
  // or an error is thrown
  unitTestsTimeout: 2000,

  // controls the timeout value for when executing the global async reporter. Expects the done() callback to be invoked within this time
  // or an error is thrown
  customReporterCallbackTimeout: 20000,

  // Automatically retrying failed assertions - You can tell Nightwatch to automatically retry failed assertions until a given timeout is reached, before the test runner gives up and fails the test.
  retryAssertionTimeout: 1000

  // 'default' : {
  //   myGlobal : function() {
  //     return 'I\'m a method';
  //   }
  // },

  // 'test_env' : {
  //   myGlobal: 'test_global',
  //   beforeEach : function() {
  //   }
  // },

  //
  // External before hook is ran at the beginning of the tests run, before creating the Selenium session
  // before(cb) {
  //   cb();
  // },

  //
  // External beforeEach hook ran before each test suite is started
  // beforeEach(browser, cb) {
  //   cb();
  // },

  //
  // External after hook is ran at the very end of the tests run, after closing the Selenium session
  // after(cb) {
  //   cb();
  // },

  //
  // External afterEach hook ran after each test suite is finished
  // afterEach(browser, cb) {
  //   browser.perform(function() {
  //     //console.log('GLOBAL afterEach')
  //     cb();
  //   });
  // },

  //
  // The global reporter is invoked before calling the built-in junit reporter (or a custom reporter specified using the --reporter CLI option).
  // reporter(results, cb) {
  //   cb();
  // }
}
