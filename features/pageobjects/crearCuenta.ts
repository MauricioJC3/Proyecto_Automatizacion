import Page from "./page";

export class CrearCuenta extends Page{

    public get botonCrearCuenta () {
        return $('.//a[@data-link-id="registration"]');
    }

    public get botonCrearCuentaPersonal () {
        return $('.//button[@id="first-button"]');
    }
    

    BTN_AGREGAR = (opcionBtn: string) => './/span[contains(text(),"${opcionBtn}")]';

    public get inputAgregarEmail () {
        return $('.//input[@id=""]');
    }


    public get inputAceptatTerminos () {
        return $('.//input[@id="policies"]');
    }

    public get botonContinuarEmail () {
        return $('.//button[@id=":R1td9:"]'); // alternativa .//button[@type="submit"]
    }

    INPUT_AGREGAR = (opcionInput: string) => '// input[contains (text (),"${opcionInput}")]';


    public get botonCapturarNombreApellido () {
        return $('.//button[@id=":r2:"]');
    }

    public get inputAgregarTelefono () {
        return $('.//input[@id=":R1ot1:"]');
    }

    public get inputCapturarTelefono () {
        return $('.//button[@id=":R2ot1:"]');
    }

    public get botonIngresarContraseña () {
        return $('.//button[@id="hub-item-button"]');
    }

    public get inputCapturarContraseña () {
        return $('.//input[@id="enter-password"]');
    }

    public get inputConfirmarContraseña () {
        return $('.//input[@id="confirm-password"]');
    }

    public get botonContinuar () {
        return $('.//button[@type="button"]'); // .//button[@id=":R3d9:"]
    }
    


    /*

    public get botonCrearCuentaEmpresarial () {
        return $('.//button[@id="second-button"]');
    }


    public get inputAgregarEmailEmpresarial(){
        return $('.//button[@id="email-without-android"]');
    }


    public get  botonCpturarEmailEmpresarial(){
        return $('.//button[@id=":R1ld9:"]');
    }

    public get inputAgregarNitEmpresa(){
        return $('.//input[@id=":r0:"]');
    }

    public get botonCapturarNitEmpresa(){
        return $('.//button[@id=":r1:"]');
    }

    
*/



}