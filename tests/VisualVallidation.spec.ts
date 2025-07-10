import { Page, expect } from "@playwright/test";

test("Validate key sections visible on homepage", async ({ page }) => {
  await page.goto("https://automationintesting.online");
  await expect(page.locator("h1")).toContainText("Welcome"); // headline
  await expect(page.locator(".room")).toHaveCount(3); // room cards
});
