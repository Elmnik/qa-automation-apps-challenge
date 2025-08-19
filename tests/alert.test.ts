import { test, expect } from '@playwright/test';
import { AlertsPage } from '../pages/alertsPage';

test('Test_003 - Prompt Alert', async ({ page }) => {
  const alertsPage = new AlertsPage(page);
  
  // Paso 1: Ir directamente a la página de alerts
  await alertsPage.navigateToAlerts();
  
  // Paso 2: Manejar el prompt
  const name = 'elmer';
  await alertsPage.handlePrompt(name);
  
  // Paso 3: Verificar el resultado
  const result = await alertsPage.getPromptResult();
  expect(result).toContain(name);
});