import { test, expect } from '@playwright/test';

test('Book a room successfully', async ({ page }) => {
  await page.goto('https://automationintesting.online');
  await page.fill('#name', 'John Doe');
  await page.fill('#email', 'john@example.com');
  await page.fill('#phone', '079136027369');
  await page.fill('#subject','John Doe Visit');
  await page.fill('#description','Dear Shady Meadows B&B ,Kindly Allow us to book for 1 day');
  await page.click('text=Submit');
  await expect(page.locator('text=Thanks')).toBeVisible();
});