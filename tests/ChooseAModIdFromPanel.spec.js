// @ts-check
import { test, expect } from "@playwright/test";

test.describe("ModId Selection panel tests", async ({ page }) => {
    test("the user can select a preferred mod id from the card", async ({
        page,
    }) => {
        const arrowToOpenTheBox = await page.getByTestId(
            "modIdSelectorPanelButton"
        );
        await arrowToOpenTheBox.click();
        const firstModIdChoice = await page.getByTestId("modIdOption").first();
        await firstModIdChoice.click();
        expect(firstModIdChoice).toBeVisible();
        expect(firstModIdChoice).toBeChecked();
    });
});
