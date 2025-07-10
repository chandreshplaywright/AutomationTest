/*import { test } from "@playwright/test";
import { BookingPage } from "../../pages/BookingPage";
import { invalidBookingData } from "../../utils/testData";

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
*/
