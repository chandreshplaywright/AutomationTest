import { Page, expect } from "@playwright/test";
import { bookingData, invalidBookingData } from "../utils/testData";

export class BookingPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto("/");
  }

  async checkavailibility({ checkInDate, checkOutDate }) {
    await this.page.evaluate(() => {
      const inputs = document.querySelectorAll("input.form-control");
      inputs.forEach((input) => input.removeAttribute("readonly"));
    });

    // Step 2: Fill check-in (1st input)
    await this.page.locator("input.form-control").nth(0).fill(checkInDate);

    // Step 3: Fill check-out (2nd input)
    await this.page.locator("input.form-control").nth(1).fill(checkOutDate);

    await this.page.click("button.btn.btn-primary");
  }

  async fillBookingFormInvalidData({
    firstname,
    lastname,
    email,
    phoneInvalid,
  }) {
    await this.page.fill('input[name="firstname"]', firstname);
    await this.page.fill('input[name="lastname"]', lastname);
    await this.page.fill('input[name="email"]', email);
    await this.page.fill('input[name="phone"]', phoneInvalid);
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
      this.page.locator(`text=${bookingData.successMessage}`)
    ).toBeVisible();
  }

  async assertBookingFail() {
    await expect(
      this.page.locator(`text=${invalidBookingData.failureMessage}`)
    ).toBeVisible();
  }
}
