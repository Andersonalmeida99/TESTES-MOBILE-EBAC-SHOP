const {join} = require('path')

exports.config = {
    hostname: 'Localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
      '.test/specs/**/*.js'
    ],
    framework: 'mocha',
    capabilities:[{
        "platformName": "Android",
        "platformVersion":"11.0",
        "deviceName": "ebac-qe",
        "automatioName": "UiAutomator2",
        "app": join(process.cwd(),'./app/android/loja-ebac.apk')
    }]
}