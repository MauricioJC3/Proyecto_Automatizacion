import Page from "./page";

class LoginM extends Page{

    public get botonIngresar () {
        return $('.//a[@data-link-id="login"]');
    }

    public get inputEmail () {
        return $('.//input[@id="user_id"]');
    }

    public get botoniniciarSesion () {
        return $('.//button[@id=":Rajhh:"]');
    }

}