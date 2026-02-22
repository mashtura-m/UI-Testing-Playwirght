import {test, expect } from "@playwright/test";
import { generateUser } from "../utils/userfactory";
import { getApiResponce, getEmailSubject } from "../services/gmailReadOnlyApi";


const email=generateUser().email+"+"+Math.floor(Math.random() * 1000)+"@gmail.com";

// test("User Registration Passed", async ({ page }) => {
//   // Navigate to the registration page
//   await page.goto('/register');
//   await page.getByRole("textbox", { name: "First Name" }).fill(generateUser().firstName);
//   await page.getByRole("textbox", { name: "Last Name" }).fill(generateUser().lastName);
//   await page.getByRole("textbox", { name: "Email" }).fill(email);
//   await page.getByRole("textbox", { name: "Password" }).fill(generateUser().password);
//   await page.getByRole("textbox", { name: "Phone Number" }).fill(generateUser().phoneNumber);
//   await page.getByRole("textbox", { name: "Address" }).fill("ABC Street, City, Country");
//   await page.locator('input[type="radio"][value="Female"]').check();
//   await page.getByRole("checkbox", { name: ""}).check();
//   await page.getByRole("button", { name: "REGISTER" }).click();
//   const registrationAlert = page.getByRole("alert");
//   await expect(registrationAlert).toBeVisible();
//   const alertText = await registrationAlert.textContent();
//   expect(alertText).toContain("registered successfully");

// }
// );

test("Congratulation mail received ", async ({ }) => {
  expect(await getEmailSubject()).toContain("Congratulations on Registering");
});
