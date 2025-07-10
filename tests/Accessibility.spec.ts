import { test } from "@playwright/test";
import { injectAxe, checkA11y } from "axe-playwright";

test("Homepage should be accessible", async ({ page }) => {
  await page.goto("https://automationintesting.online");
  await injectAxe(page);
  await checkA11y(page, undefined, {
    detailedReport: true,
    detailedReportOptions: { html: true },
  });
});
