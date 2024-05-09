const { test, expect } = require("@playwright/test")

test.describe("test", () => {
  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("http://127.0.0.1:5012")
  })

  test(`shows title with text "Hello World"`, async ({ page }) => {
    const text = await page.innerText(".h1")
    expect(text).toBe("Hello World")
  })
})
