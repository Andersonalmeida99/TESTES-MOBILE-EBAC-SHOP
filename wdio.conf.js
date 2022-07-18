const {join} = require('path')

exports.config = {
    hostname: 'Localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
      './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities:[{
        "platformName": "Android",
        "platformVersion":"10.0",
        "deviceName": "ebac-qe",
        "automatioName": "UiAutomator2",
        "app": join(process.cwd(),'./app/android/loja-ebac.apk'),
        "appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity',
        
    }],
    waitFortimeout: 20000 ,
    mochaOpts: {
      timeout: 300000
    }
}