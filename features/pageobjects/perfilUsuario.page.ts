import Page from "./page";

class DatosPerfilUsuario extends Page{

    public get enlaceIngresarPerfilUsuario (){
        return $('.//a[@class="user-menu-evolution "]');
    }

    public get mostrarNombreUsuario () {
        return $('.//div[@class="information"]//h2[@data-testid="username-test"]');
    }



}