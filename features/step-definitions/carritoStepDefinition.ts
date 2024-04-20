import { Given, When, Then } from '@wdio/cucumber-framework';
import { CrearCuenta} from '../pageobjects/crearCuenta';

Given("el usuario hace clic en el botón {string}", async (opcionBtn) => {
    let crearCuenta = new CrearCuenta();
    crearCuenta.BTN_AGREGAR(opcionBtn);
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
   
});