const { join } = require('path')
const allure = require('allure-commandline')
const video = require('wdio-video-reporter')
exports.config = {
  // hostname: 'Localhost',
  //port: 4723,
  // path: '/wd/hub',
  user: "anderson_zPcUbk",
  key: "kbqpRzLaLCv9paAqAsuX",
  //services: ['appium'],
  services: ['browserstack'],
  specs: [
    './test/specs/**/*.spec.js'
  ],
  framework: 'mocha',
  capabilities: [{
    // "platformName": "Android",
    // "platformVersion": "10.0",
    // "deviceName": "ebac-qe",
    //  "automatioName": "UiAutomator2",
    // "app": join(process.cwd(), './app/android/loja-ebac.apk'),
    // "appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity',
    // 'newCommandTimeout': 240

    'app' : 'bs://3763ea2226c675cc0a99b90edf54add42bc14461',
    'device' : 'Samsung Galaxy Note 20',
    'os_version' : '10.0',
     'project' : 'Meu primeiro projeto em Device Farm',
    'build' : '1',
    'name': 'test_login'
  }],
  waitFortimeout: 20000,
  mochaOpts: {
    timeout: 300000
  },
  reporters: ['spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: true,
    }],
    [video, {
      saveAllVideos: true,       // If true, also saves videos for successful test cases
      videoSlowdownMultiplier: 50, // Higher to get slower videos, lower for faster videos [Value 1-100]
    }]

  ],
  onComplete: function () {
    const reportError = new Error('Could not generate Allure report')
    const generation = allure(['generate', 'allure-results', '--clean'])
    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(
        () => reject(reportError),
        5000)

      generation.on('exit', function (exitCode) {
        clearTimeout(generationTimeout)

        if (exitCode !== 0) {
          return reject(reportError)
        }

        console.log('Allure report successfully generated')
        resolve()
      })
    })
  },
  afterStep: async function (step, scenario, { error, duration, passed }, context) {
    if (error) {
      await driver.takeScreenshot();
    }
  }
}