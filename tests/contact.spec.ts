import { test } from "@playwright/test";
import { ContactPage } from "../pages/ContactPage";
import { contactFormData } from "../utils/testData";

test("Submit contact form", async ({ page }) => {
  const contactPage = new ContactPage(page);

  await contactPage.navigate();
  await contactPage.fillForm(contactFormData);
  await contactPage.submitForm();
  await contactPage.assertSuccess();
});
