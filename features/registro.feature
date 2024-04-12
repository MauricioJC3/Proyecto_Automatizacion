Feature: Registro Personal en Mercado Libre

Scenario Outline: Registro con Datos Válidos y Datos Inválidos
    Given que el usuario está en la página de registro de Mercado Libre
    When el usuario ingresa sus datos personales:
      | nombre    | apellido  | correo                | contraseña    | 
      | <nombre>  | <apellido>| <correo>              | <contraseña>  |
    And el usuario selecciona la opción de registrarse
    Then el usuario debería ver un mensaje que dice "<mensaje>"
    
Examples:
  | nombre    | apellido  | correo             | contraseña     | mensaje                                         |
  | Juan      | Pérez     | juan@example.com   | contraseña123  | ¡Bienvenido, cliente!                           |
  |           |           | correo_inválido    | contraseña123  | Por favor ingresa un correo válido.             |
  | Juan      | Pérez     | correo@example.com | contraseña123  | El correo electrónico ya está registrado.       |
  | Juan      |           | juan@example.com   | contraseña123  | Por favor ingresa tu apellido.                  |
  | Juan      | Pérez     | juan@example.com   | contraseña     | La contraseña debe tener al menos 8 caracteres. |
  | Juan      | Pérez     | juan@example.com   | contraseña*123 | Caracteres no permitidos en la contraseña.      |
  | Juan      | Pérez     | juan@example.com   | contraseña/123 | Caracteres no permitidos en la contraseña.      |
