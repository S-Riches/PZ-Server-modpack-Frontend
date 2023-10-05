const { Builder } = require("selenium-webdriver");
const chromeWebDriver = require("selenium-webdriver/chrome");

/*
creates a chrome driver in selenium
*/

function setupChromeDriver() {
    const driver = new Builder()
        .forBrowser("chrome")
        .setChromeOptions(new chromeWebDriver.Options())
        .build();
    return driver;
}
module.exports = setupChromeDriver;
