import { Page } from "@playwright/test";

export class BookingPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto("https://automationintesting.online");
  }

  async fillBookingForm({ name, email, phone }) {
    await this.page.fill("#name", name);
    await this.page.fill("#email", email);
    await this.page.fill("#phone", phone);
  }

  async bookFirstRoom() {
    await this.page.click(".room:nth-child(1) button");
    await this.page.click("text=Book");
  }

  async assertBookingSuccess() {
    await this.page
      .locator("text=Booking Successful")
      .waitFor({ state: "visible" });
  }
}
