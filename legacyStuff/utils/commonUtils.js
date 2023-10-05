// function to send a workshop link, as i will be doing this alot over different tests
const { By } = require("selenium-webdriver");

async function sendWorkshopLink(driver) {
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
}

module.exports = sendWorkshopLink;
