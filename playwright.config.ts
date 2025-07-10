import type { PlaywrightTehttps://automationintesting.onlinestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  use: {
    baseURL: "",
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
};

export default config;
