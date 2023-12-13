exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    headless: true,
    capabilities: [
        /*
        {
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: ['headless', 'disable-gpu']
        }
    },*/
    {
        maxInstances: 5,
        browserName: 'firefox',
        acceptInsecureCerts: true,
        'moz:firefoxOptions': {
            args: [/*'-headless'*/]
        }
    }
],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://36dfcf06-3e1a-4b7a-a8ad-c442b0240569.serverhub.tripleten-services.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        'chromedriver', 
        'geckodriver', 
        'intercept', 
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}