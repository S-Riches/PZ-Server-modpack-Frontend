// @ts-check
import { test, expect } from "@playwright/test";

test.describe("Send the link to the API", async () => {
    test("The user enters the link to the mod collection page", async ({
        page,
    }) => {
        await page.goto("http://localhost:3000/");
        const modCollectionInputBox = await page.getByTestId(
            "modCollectionInputBox"
        );
        const sendModCollectionToApiButton = await page.getByTestId(
            "modCollectionSendButton"
        );
        const firstCard = await page.getByTestId("modOptionCard");
        await modCollectionInputBox.fill(
            "https://steamcommunity.com/sharedfiles/filedetails/?id=2937473702"
        );
        await sendModCollectionToApiButton.click();
    });
});
