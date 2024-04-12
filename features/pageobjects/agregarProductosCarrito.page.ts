import Page from "./page";

class AgregarProductosCarrito extends Page {


    // name="quantity"

    public get nombreProductoAgregar () {
        return $('.//div[@class="ui-pdp-header__title-container"]//h1[@class="ui-pdp-title"]');
    }

    public get precioDelProductoAgregar() {
        return $('.//span[@class="andes-money-amount__fraction"]');
                                    // contenido con valor como precio :: .//div[@id="price"]//meta[@content="1990000"]
    }


    public get cantidadDeProductoAgregar () {
        return $('.//span[@class="ui-pdp-buybox__quantity__selected"]');
    }

    public get  botonAgregarProductoAlCarrrito () {
        return $('.//button[@class="andes-button andes-spinner__icon-base ui-pdp-action--secondary andes-button--quiet"]');
    }

}