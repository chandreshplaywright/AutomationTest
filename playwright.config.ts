import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  use: {
    baseURL: "https://automationintesting.online",
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
};

export default config;