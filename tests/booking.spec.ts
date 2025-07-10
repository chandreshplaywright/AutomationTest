import { test } from "@playwright/test";
import { BookingPage } from "../pages/BookingPage";
import { bookingData } from "../utils/testData";

test("Book a room", async ({ page }) => {
  const bookingPage = new BookingPage(page);

  await bookingPage.navigate();
  await bookingPage.bookFirstRoom();
  await bookingPage.reservenow();
  await bookingPage.fillBookingForm(bookingData);
  await bookingPage.reservenow();
  await bookingPage.assertBookingSuccess();
});
