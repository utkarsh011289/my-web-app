// @ts-check
const { test, expect } = require('@playwright/test');

test('has heading', async ({ page }) => {
  await page.goto('https://my-web-app-amber.vercel.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Create Next App/);
});
test('check header text', async ({ page }) => {
  await page.goto('https://my-web-app-amber.vercel.app/');

  // Expect a title "to contain" a substring.
  const eleRef=await page.getByTestId("header");
  await expect(eleRef).toHaveText(/My First REACT App/);
});

test('check footer text', async ({ page }) => {
  await page.goto('https://my-web-app-amber.vercel.app/');

  // Expect a title "to contain" a substring.
  await expect(page.getByText(/rights belongs to me./)).toBeVisible();
});

 
