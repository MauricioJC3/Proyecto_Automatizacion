import Page from "./page";

class AgregarProductosCarrito extends Page {


    // name="quantity"

    public get nombreProductoAgregar () {
        return $('.//div[@class="ui-pdp-header__title-container"]//h1[@class="ui-pdp-title"]');
    }

    public get precioDelProductoAgregar() {
        return $('.//div[@id="price"]//span[@class="andes-money-amount__fraction"]');
                                    // contenido con valor como precio :: .//div[@id="price"]//meta[@content="1990000"]
    }


    public get cantidadDeProductoAgregar () {
        return $('.//div[@id="available_quantity"]//button[@id="quantity-selector"]');
    }

    public get  botonAgregarProductoAlCarrrito () {
        return $('.//button[@id=":Rj6l1d9hm:"]');
    }

}