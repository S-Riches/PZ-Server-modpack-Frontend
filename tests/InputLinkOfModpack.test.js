// @ts-check
const { By, until } = require("selenium-webdriver");
const setupChromeDriver = require("./utils/setupDriver.js");
const sendWorkshopLink = require("./utils/commonUtils.js");

describe("Send the link to the API", () => {
    // initialise the chrome webdriver
    let driver;
    beforeAll(() => {
        driver = setupChromeDriver();
    });

    test("The user enters the link to the mod collection page", async () => {
        driver.get("http://localhost:3000/");
        sendWorkshopLink(driver);
        const firstCard = await driver.wait(
            until.elementLocated(By.xpath("(//h3)[1]")),
            5000
        );

        expect(await firstCard.getText()).toEqual(
            "Multiple Mod Ids Present In:"
        );
    }, 10000);
    afterAll(() => {
        // close window afterwards
        driver.close();
    });
});
