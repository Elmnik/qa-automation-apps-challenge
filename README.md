
---

## 🚀 Tecnologías Utilizadas

- **[Playwright](https://playwright.dev/)**  
- **TypeScript** → Tipado estático para mayor robustez.  
- **Page Object Model (POM)** → Separación de selectores y clases con respecto a los casos de prueba.  
- **HTML Report** → Reportes de ejecución automáticos. 

---

## ✅ Casos de Prueba Automatizados

1. **Test_001 - Text Box form**  
   - Rellenar el formulario y verificar que los datos ingresados se muestren correctamente.

2. **Test_002 - Radio Button Yes**  
   - Seleccionar el radio button “Yes” y validar el resultado mostrado.

3. **Test_003 - Prompt Alert**  
   - Ingresar un nombre en el modal dialog y validar que se muestre en pantalla.

---

## ▶️ Instalación y Ejecución

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/playwright-qa-challenge.git
cd playwright-qa-challenge
Instalar Dependencias: npm install
Instalar navegadores de playwright: npx playwright install
Ejecutar pruebas individuales :npx playwright test tests/alert.test.ts --headed  
Ejecutar pruebas completas: npx playwright test
Verificar reporte de ejecucion: npx playwright show-report

---
Evidencias

Running 3 tests using 3 workers

  ✓  1 tests/alert.test.ts:4:5 › Test_003 - Prompt Alert (4.0s)
  ✓  2 tests/textBox.test.ts:4:5 › Test_001 - Text Box form (4.9s)
  ✓  3 tests/radioButton.test.ts:4:5 › Test_002 - Radio Button Yes (4.8s)

  3 passed (5.6s)

