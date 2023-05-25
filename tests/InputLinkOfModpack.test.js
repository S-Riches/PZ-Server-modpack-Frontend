// @ts-check
const { By } = require("selenium-webdriver");
const setupChromeDriver = require("./utils/setupDriver.js");
const wait = require("./utils/timeUtils.js");

describe("Send the link to the API", () => {
    // initialise the chrome webdriver
    const driver = setupChromeDriver();

    test("The user enters the link to the mod collection page", async () => {
        // go to the website
        driver.get("http://localhost:3000/");
        // get the element and save it
        const modCollectionInputBox = await driver.findElement(
            By.name("modCollectionInputBox")
        );
        const sendModCollectionToApiButton = await driver.findElement(
            By.name("modCollectionSendButton")
        );
        await modCollectionInputBox.click();
        await modCollectionInputBox.sendKeys(
            "https://steamcommunity.com/sharedfiles/filedetails/?id=2937473702"
        );
        await sendModCollectionToApiButton.click();
        wait(7000);
        const firstCard = await driver
            .findElement(By.xpath('(//*[@class="content"] //h3)[1]'))
            .getText();
        expect(firstCard).toEqual("Multiple Mod Ids Present In:");
    });
});
