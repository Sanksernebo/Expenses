import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/React App/);
});


test('filter by year', async({page}) => {
  await page.goto('http://localhost:3000/');

  // Select the dropdown element and choose the first option
  await page.selectOption('.expenses-filter select', '2025');


  // control if the new expense was added
  await expect(page.locator('.expense-item')).toHaveCount(0);
})


test('can add expense', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.click('button');
  await page.fill('input[type="text"]', 'Äge Värk');
  await page.fill('input[type="number"]', '9.69');
  await page.fill('input[type="date"]', '2023-03-08');
  await page.click('button[type="submit"]');

// control if the new expense was added
  const expenses = await page.$$('.expense-item');
 await expect(expenses.length).toBe(3);
});
