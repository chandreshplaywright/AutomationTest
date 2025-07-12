import { test } from "@playwright/test";
import { ContactPage } from "../../pages/ContactPage";
import { contactFormData } from "../../utils/testData";

test("Submit contact form", async ({ page }) => {
  const contactPage = new ContactPage(page);

  await test.step("Navigate to the ContactForm", async () => {

   await contactPage.navigate();
 
  });

  await test.step("Fill ContactForm", async () => {

   await contactPage.fillForm(contactFormData);
 
  });

  await test.step("Submit ContactForm", async () => {

   await contactPage.submitForm();
  
  });

  await test.step("Validate ContactForm is submitted", async () => {

   await contactPage.assertSuccess();
  
  });

});
