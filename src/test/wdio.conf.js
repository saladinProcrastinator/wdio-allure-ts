const dotenv = require('dotenv');
dotenv.config();
const maxChromeInstances = parseInt(process.env.MAX_CHROME_INSTANCES) || 5;
const waitForTimeouts = parseInt(process.env.DEFAULT_TIME_OUT) || 3000;
/**
 * Default configurations for wdio-allure-ts based projects
 * For more options see https://webdriver.io/docs/configurationfile.html
 *
 */
exports.config = {
  specs: ['./lib/test/specs/**/*Spec.js'],
  suites: { regression: ['./lib/test/specs/**/*Spec.js'] },

  // Browser capabilities
  capabilities: [
    {
      browserName: 'chrome',
      maxInstances: maxChromeInstances,
      'goog:chromeOptions': {
        args: ['--window-size=1920,1080', '--headless', '--incognito'],
      },
    },
  ],
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'silent',
  // Default timeout for all waitFor* commands.
  waitforTimeout: waitForTimeouts,
  //
  // Default timeout in milliseconds for request
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 10000,
  //
  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  services: ['selenium-standalone'], // Framework you want to run your specs with.
  seleniumArgs: {
    drivers: {
      chrome: {
        version: process.env.CHROME_DRIVER_VERSION,
      },
    },
  },
  seleniumInstallArgs: {
    drivers: {
      chrome: {
        version: process.env.CHROME_DRIVER_VERSION,
      },
    },
  },
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: http://webdriver.io/guide/testrunner/frameworks.html
  //
  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: 'mocha',
  mochaOpts: {
    timeout: 300000,
  },
};
