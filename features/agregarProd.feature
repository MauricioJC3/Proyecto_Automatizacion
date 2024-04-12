Feature: Agregar Productos al Carrito en Mercado Libre

Scenario Outline: Agregar Producto al Carrito
    Given que el usuario está navegando en el sitio de Mercado Libre
    When el usuario busca el producto "<producto>"
    And el usuario selecciona el producto "<producto>" de la lista de resultados
    And el usuario ingresa la cantidad "<cantidad>" para el producto, si es necesario
    And el usuario hace clic en el botón "Agregar al carrito"
    Then el usuario debería ver "<cantidad>" unidades del producto "<producto>" en su carrito de compras, si se especifica la cantidad
    
    Examples:
      | producto           | cantidad |
      | iPhone 12          |          |
      | Auriculares        | 2        |
      | Mouse inalámbrico  | 1        |