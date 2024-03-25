import Page from "./page";

class CrearCuenta extends Page{

    public get botonCrearCuenta () {
        return $('.//a[@data-link-id="registration"]');
    }

    public get botonCrearCuentaPersonal () {
        return $('.//button[@id="first-button"]');
    }
    
    public get botonAgregarEmail () {
        return $('.//button[@id="hub-item-button"]');
    }

    public get inputAgregarEmail () {
        return $('.//input[@id="email-without-android"]');
    }

    public get botonContinuarEmail () {
        return $('.//button[@id=":R1ld9:"]');
    }

    public get botonElegirNombre () {
        return $('.//button[@id="hub-item-button"]');
    }

    public get inputEscribirNombre () {
        return $('.//input[@id=":r0:"]');
    }

    public get inputEscribirApellido () {
        return $('.//input[@id=":r1:"]');
    }

    public get botonCapturarNombreApellido () {
        return $('.//button[@id=":r2:"]');
    }

    public get inputAgregarTelefono () {
        return $('.//input[@id=":R1ot1:"]');
    }

    public get inputCapturarTelefono () {
        return $('.//button[@id=":R2ot1:"]');
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