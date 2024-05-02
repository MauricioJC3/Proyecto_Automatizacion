import { Given, When, Then } from '@wdio/cucumber-framework';
import { CrearCuenta} from '../pageobjects/crearCuenta';

Given("el usuario está en la página de registro {string}", async (url: string) => {
    await browser.url(url);
});

When("el usuario hace clic en el botón {string}", async (opcionBtn) => {
    let crearCuenta = new CrearCuenta();
    crearCuenta.BTN_AGREGAR(opcionBtn);
    
});

When("el usuario ingresa su dirección de correo electrónico en el campo correspondiente {string}", async () => {
    const crearCuenta = new CrearCuenta();
    await crearCuenta.inputAgregarEmail.setValue('correo@ejemplo.com'); // Ejemplo de valor
  });

When("el usuario acepta los términos y condiciones {string}", async () => {
    const crearCuenta = new CrearCuenta();
    await crearCuenta.inputAceptatTerminos.click();
  });

  When("el usuario hace clic en {string}", async () => {
    const crearCuenta = new CrearCuenta();
    await crearCuenta.botonContinuarEmail.click();
  });

  
Then(/^I should see a flash message saying (.*)$/, async (message) => {
   
});