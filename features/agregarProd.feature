Feature: Agregar Productos al Carrito en Mercado Libre

Scenario Outline: Agregar Producto al Carrito
    Given que el usuario está navegando en el sitio de Mercado Libre
    When el usuario busca el producto "<producto>"
    And el usuario selecciona el producto "<producto>" de la lista de resultados
    And el usuario ingresa la cantidad "<cantidad>" para el producto, si es necesario
    And el usuario hace clic en el botón "Agregar al carrito"
    Then el usuario debería ver "<cantidad>" unidades del producto "<producto>" en su carrito de compras, si se especifica la cantidad
    And el usuario debería ver un mensaje de confirmación de agregado al carrito "<mensaje>"

Examples:
  | producto           | cantidad | mensaje                                                                                         |
  | iPhone 12          |          | Por favor ingresa la cantidad deseada para el producto.                                         |
  | Auriculares        | 2        |                                                                                                 |
  | Mouse inalámbrico  | 1        |                                                                                                 |
  | Auriculares        | 3        | Ha excedido la cantidad máxima de productos para este producto en su carrito.                   |
  | Teclado            |          | El producto "Teclado" no se encontró en la lista de resultados. Por favor, intente nuevamente.  |
