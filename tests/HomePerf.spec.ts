import { test } from "@playwright/test";

test("Check homepage performance", async ({ page }) => {
  const start = performance.now();
  await page.goto("https://automationintesting.online");
  const end = performance.now();

  const loadTime = end - start;
  console.log(`Page loaded in ${loadTime.toFixed(2)} ms`);

  if (loadTime > 3000) {
    throw new Error("Page load time exceeded threshold!");
  }
});
