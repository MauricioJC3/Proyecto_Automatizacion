import { Given, When, Then } from '@wdio/cucumber-framework';
import { CrearCuenta} from '../pageobjects/crearCuenta';
import { when } from 'jquery';

Given("el usuario está en la página de registro de Mercado Libre {string}", async () => {
  const crearCuenta = new CrearCuenta();
});

//EL USUARIO AGREGA CORREO ELECTRÓNICO

When("el usuario hace clic en el botón {string}", async (opcionBtn) => {
  let crearCuenta = new CrearCuenta();
  await crearCuenta.BTN_AGREGAR(opcionBtn);
});

When("el usuario ingresa su dirección de correo electrónico en el campo correspondiente {string}", async () => {
  const crearCuenta = new CrearCuenta();
  await crearCuenta.inputAgregarEmail.setValue('correo@ejemplo.com'); // Ejemplo de valor
});

When("el usuario acepta los términos y condiciones {string}", async () => {
  const crearCuenta = new CrearCuenta();
  await crearCuenta.inputAceptatTerminos.click();
});

When("el usuario hace clic en {string}", async (opcionContinuar) => {
  const crearCuenta = new CrearCuenta();
  await crearCuenta.BTN_CONTINUAR(opcionContinuar);
});


//EL USUARIO AGREGA NOMBRE Y APELLIDO
When("el usuario hace clic en el botón {string}", async (opcionBtn) => {
  const crearCuenta = new CrearCuenta();
  await crearCuenta.BTN_AGREGAR(opcionBtn);
});

When("el usuario ingresa su {string}", async (opcionInput) => {
  const crearCuenta = new CrearCuenta();
  await crearCuenta.INPUT_AGREGAR(opcionInput);
});

When("el usuario hace clic en el botón {string}", async (opcionContinuar) => {
  const crearCuenta = new CrearCuenta();
  await crearCuenta.BTN_CONTINUAR(opcionContinuar);
});


//EL USUARIO AGREGA NUMERO DE TELEFONO
When("el usuario hace clic en el botón {string}", async (opcionBtn) => {
  const crearCuenta = new CrearCuenta();
  await crearCuenta.BTN_AGREGAR(opcionBtn);
});

When("el usuario agrega un número de teléfono {string}", async () => {
  const crearCuenta = new CrearCuenta();
  await crearCuenta.inputAgregarTelefono.setValue('123456789');
});

When("el usuario acepta los términos y condiciones {string}", async () => {
  const crearCuenta = new CrearCuenta();
  await crearCuenta.inputAceptatTerminos.click();
});

// PASOS DE VERIFICAR NUMERO POR WhatsApp 


//


//EL USUARIO AGREGA CONTRASEÑA Y CONFIRMAR CONTRASEÑA

when("el usuario hace clic en", async(opcionBtn: string) =>{
  const crearCuenta = new CrearCuenta();
  await crearCuenta.BTN_AGREGAR(opcionBtn);
});

when("el usuario ingresa su {string}", async(opcionContraseña: string) =>{
  const crearCuenta = new CrearCuenta();
  await crearCuenta.INPUT_CONTRASEÑA(opcionContraseña);
});

when("el usuario hace clic en el botón {string}", async(opcionContinuar: string) =>{
  const crearCuenta = new CrearCuenta();
  await crearCuenta.BTN_CONTINUAR(opcionContinuar);
});
  
Then("el usuario debería ver {string}", async (message) => {
  console.log(message);
});