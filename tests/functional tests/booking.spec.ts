import { test } from "@playwright/test";
import { BookingPage } from "../../pages/BookingPage";
import { bookingData } from "../../utils/testData";

test("Book a room", async ({ page }) => {
  const bookingPage = new BookingPage(page);

  await test.step("Navigate to the HomemPage", async () => {
    await bookingPage.navigate();
  });

  await test.step("Check Availibility of the room", async () => {
    await bookingPage.checkavailibility(bookingData);
  });

  await test.step("Booke first Available room", async () => {
    await bookingPage.bookFirstRoom();
  });

  await test.step("Click Reserve now button", async () => {
    await bookingPage.reservenow();
  });

  await test.step("Fill Booking Form", async () => {
    await bookingPage.fillBookingForm(bookingData);
  });

  await test.step("Click Reserve now", async () => {
    await bookingPage.reservenow();
  });

  await test.step("Validate room is booked successfully", async () => {
    await bookingPage.assertBookingSuccess();
  });
  
});
