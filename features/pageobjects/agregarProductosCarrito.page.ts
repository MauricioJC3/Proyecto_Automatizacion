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




    //Producto agregado en el carrito

        /* 
    public get precioDelProductoEnCarrito () {
        return $('.//span[@class="price-small"]');
    }
    */

    public get validarNombreDelProductoApartadoCarrito (){
        return $('.//div[@class="item-title"]');
    }

    public get validarPrecioTotalProductoApartadoCarrito () {
        return $('.//div[@id="ticket_row_total"]//meta[@itemprop="price"]');
           // segunda opcion :: .//div[@id="ticket_row_total"]//span[@class="price-small"]
    }



    // Cantidad del producto en el carrito con botón de Incremento y Decremento y Eliminar

    public get inputCantidadProductoCarrito () {
        return $('.//input[@id="other_sellers_1_item_row_1_quantity_selector-textfield"]');
    }


    public get botonIncrementarCantadiadProductoCarrito () {
        return $('.//button[@id="other_sellers_1_item_row_1_quantity_selector-button-increase"]');
    }

    public get botonDecrementarCantidadProductoCarrito () {
        return $('.//button[@id="other_sellers_1_item_row_1_quantity_selector-button-decrease"]');
    }

    public get eliminarProductoApartadoCarrito () {
        return $('.//span[@data-id="link_delete_item"]');
    }
}