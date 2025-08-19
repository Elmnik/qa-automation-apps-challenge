import { test, expect } from '@playwright/test';
import { ElementsPage } from '../pages/elementsPage';

test('Test_001 - Text Box form', async ({ page }) => {
  const elementsPage = new ElementsPage(page);
  await elementsPage.navigate();
  await elementsPage.fillTextBox(
    'Juan Perez',
    'juanp@gmail.com',
    'San José, Costa Rica',
    'San José'
  );

  const nameOutput = await page.locator('#output #name').textContent();
  expect(nameOutput).toContain('Juan Perez');
});