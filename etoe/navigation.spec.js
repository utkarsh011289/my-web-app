const { test, expect } = require('@playwright/test');


test('check footer text', async ({ page }) => {
    await page.goto('https://my-web-app-amber.vercel.app/');
  
    // Expect a title "to contain" a substring.
    await page.getByRole('link', { name: 'About' }).click();
    await page.waitForTimeout(5000);

    await page.getByRole('link', { name: 'Contact' }).click();
    await page.waitForTimeout(5000);

    await page.getByRole('link', { name: 'Count' }).click();
    await page.waitForTimeout(5000);

    await page.getByRole('link', { name: 'Photos' }).click();
    await page.waitForTimeout(5000);

    await page.getByRole('link', { name: 'Home' }).click();
    await page.waitForTimeout(5000);



  });
  