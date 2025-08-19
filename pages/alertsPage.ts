import { Page } from '@playwright/test';

export class AlertsPage {
  constructor(private page: Page) {}

  async navigateToAlerts() {
    // Vamos directamente a la página de alerts para evitar problemas con el menú
    await this.page.goto('https://demoqa.com/alerts');
    
    // Esperamos a que el botón esté visible
    await this.page.waitForSelector('#promtButton', { state: 'visible' });
  }

  async handlePrompt(name: string) {
    // Preparamos el manejador del diálogo ANTES de hacer clic
    this.page.once('dialog', async dialog => {
      await dialog.accept(name);
    });
    
    // Hacemos clic en el botón
    await this.page.click('#promtButton');
  }

  async getPromptResult() {
    return await this.page.locator('#promptResult').textContent();
  }
}