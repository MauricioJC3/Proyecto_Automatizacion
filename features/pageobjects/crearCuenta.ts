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


    INPUT_CONTRASEÑA = (opcionContraseña: string) => '// input[contains (text (),"${opcionContraseña}")]';

    public get botonContinuar () {
        return $('.//button[@type="button"]'); // .//button[@id=":R3d9:"]
    }

    BTN_CONTINUAR = (opcionContinuar: string) => './/span[contains(text(),"${opcionContinuar}")]';
    



    /*

    // Localizadores Campos de Contraseña Y Validar Contraseña

        public get inputCapturarContraseña () {s
        return $('.//input[@id="enter-password"]');
    }

    public get inputConfirmarContraseña () {
        return $('.//input[@id="confirm-password"]');
    }
    
*/



}