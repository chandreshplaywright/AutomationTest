import { Page, expect } from "@playwright/test";
import { contactFormData } from "../utils/testData";

export class ContactPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto("/#/contact");
  }

  async fillForm({ name, email, phone, subject, description }) {
    await this.page.fill("#name", name);
    await this.page.fill("#email", email);
    await this.page.fill("#phone", phone);
    await this.page.fill("#subject", subject);
    await this.page.fill("#description", description);
  }

  async submitForm() {
    await this.page.click("text=submit");
  }

  async assertSuccess() {
    await expect(
      this.page.locator(`text=${contactFormData.successMessage}`)
    ).toBeVisible();
  }
}
