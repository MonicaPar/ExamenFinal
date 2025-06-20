import { test, expect } from '@playwright/test';

test('Dejar feedback como cliente anónimo', async ({ page }) => {
  // Acceder a Juice Shop
  await page.goto('https://juice-shop.herokuapp.com');

  await page.click('button[aria-label="Close Welcome Banner"]', { timeout: 5000 }).catch(() => {});

  // Ir al área de feedback
  await page.click('button[aria-label="Open Sidenav"]');
  await page.getByText('Customer Feedback').click();

  // Llenar el formulario
  await page.fill('textarea#comment', 'Este sitio es excelente para pruebas automatizadas 🎯');
  await page.selectOption('select#rating', '5'); 
  await page.click('button#submitButton');

  // Verificar que el feedback se ha enviado correctamente
  await expect(page.getByText('Feedback enviado correctamente!')).toBeVisible();
  await expect(page.locator('textarea#comment')).toBeEmpty();
});
