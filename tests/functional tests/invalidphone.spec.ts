import { test } from "@playwright/test";
import { BookingPage } from "../../pages/BookingPage";
import { invalidBookingData } from "../../utils/testData";

test("Invalid Booking Details", async ({ page }) => {
  const bookingPage = new BookingPage(page);

  await test.step("Navigate to the HomePage", async () => {
    await bookingPage.navigate();
  });

  await test.step("Check Availibility of the room", async () => {
    await bookingPage.checkavailibility(invalidBookingData);
  });

  await test.step("Booke first Available room", async () => {
    await bookingPage.bookFirstRoom();
  });

  await test.step("Click Reserve now button", async () => {
    await bookingPage.reservenow();
  });

  await test.step("Fill Invalid Booking Form", async () => {
    await bookingPage.fillBookingFormInvalidData(invalidBookingData);
  });

  await test.step("Click Reserve now", async () => {
    await bookingPage.reservenow();
  });

  await test.step("Validate error message is displayed", async () => {
    await bookingPage.assertBookingFail();
  });
});
