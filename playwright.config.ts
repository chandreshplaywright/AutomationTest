import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    baseURL: "https://automationintesting.online",
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  testDir: "./tests",
});
