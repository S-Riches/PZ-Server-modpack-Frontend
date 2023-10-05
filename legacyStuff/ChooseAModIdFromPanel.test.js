// @ts-check
const { By, until } = require("selenium-webdriver");
const setupChromeDriver = require("./utils/setupDriver.js");
const sendWorkshopLink = require("./utils/commonUtils.js");

describe("ModId Selection panel tests", () => {
    let driver;
    beforeAll(() => {
        driver = setupChromeDriver();
    });

    test("the user can select a preferred mod id from the card", async () => {
        driver.get("http://localhost:3000/");
        sendWorkshopLink(driver);
        const arrowToOpenTheBox = await driver.wait(
            until.elementLocated(By.name("modIdSelectorPanelButton")),
            5000
        );
        await arrowToOpenTheBox.click();
        const firstModIdChoice = await driver.wait(
            until.elementLocated(
                By.xpath('(//div[@data-testid="modIdOption"])[1]')
            ),
            5000
        );
        await firstModIdChoice.click();
        expect(firstModIdChoice).toBeVisible();
        expect(firstModIdChoice).toBeChecked();
    }, 10000);
    afterAll(() => {
        // close window afterwards
        driver.close();
    });
});
