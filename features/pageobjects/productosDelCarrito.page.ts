import Page from "./page"

class ProductosDelCarrito  extends Page {

        /* 
    public get precioDelProductoEnCarrito () {
        return $('.//span[@class="price-small"]');
    }
    */

    public get validarNombreDelProductoApartadoCarrito (){
        return $('.//section[@class="item-row"]');
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