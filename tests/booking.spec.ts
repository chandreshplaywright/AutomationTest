import { test } from "@playwright/test";
import { BookingPage } from "../pages/BookingPage";
import { bookingData } from "../utils/testData";

test("Book a room using shared data and selectors", async ({ page }) => {
  const bookingPage = new BookingPage(page);

  await bookingPage.navigate();
  await bookingPage.fillBookingForm(bookingData);
  await bookingPage.bookFirstRoom();
  await bookingPage.assertBookingSuccess();
});
