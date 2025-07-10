import { test } from "@playwright/test";
import { BookingPage } from "../../pages/BookingPage";
import { bookingData , invalidBookingData } from "../../utils/testData";

test("Book a room", async ({ page }) => {
  const bookingPage = new BookingPage(page);

  await bookingPage.navigate();
  await bookingPage.checkavailibility(bookingData);
  await bookingPage.bookFirstRoom();
  await bookingPage.reservenow();
  await bookingPage.fillBookingForm(bookingData);
  await bookingPage.reservenow();
  await bookingPage.assertBookingSuccess();
});

test("Invalid phone number", async ({ page }) => {
  const bookingPage = new BookingPage(page);

  await bookingPage.navigate();
  await bookingPage.checkavailibility(invalidBookingData);
  await bookingPage.bookFirstRoom();
  await bookingPage.reservenow();
  await bookingPage.fillBookingFormInvalidData(invalidBookingData);
  await bookingPage.reservenow();
  await bookingPage.assertBookingFail();
});
