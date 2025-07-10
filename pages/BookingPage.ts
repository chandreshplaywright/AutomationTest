import { Page, expect } from "@playwright/test";
import { contactFormData } from "../utils/testData";

export class BookingPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto("/");
  }

  async fillBookingForm({ firstname, lastname, email, phone }) {
    await this.page.fill('input[name="firstname"]', firstname);
    await this.page.fill('input[name="lastname"]', lastname);
    await this.page.fill('input[name="email"]', email);
    await this.page.fill('input[name="phone"]', phone);
  }

  async bookFirstRoom() {
    await this.page.locator("text=Book now").nth(1).click();
  }

  async reservenow() {
    await this.page.click("text=Reserve Now");
  }

  async assertBookingSuccess() {
    await expect(
      this.page.locator(`text=${contactFormData.successMessage}`)
    ).toBeVisible();
  }
}
