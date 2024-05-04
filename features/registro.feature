Feature: Registro en Mercado Libre

Scenario: Crear una cuenta en Mercado Libre
    Given que el usuario está en la página de registro de Mercado Libre
    When el usuario hace clic en el botón "Agregar"
    And el usuario ingresa su dirección de correo electrónico en el campo correspondiente
    And el usuario acepte los términos y condiciones
    And el usuario hace clic en "Continuar"
    And el usuario hace clic en el botón "Elegir"
    And el usuario elige un nombre de usuario
    And el usuario ingresa su "Nombre" y "Apellido" en los campos correspondientes
    And el usuario hace clic en el botón "Validar"
    And el usuario acepta los términos y condiciones
    And el usuario hace clic en "Continuar"
    And el usuario ingresa su nombre y apellido en los campos correspondientes
    And el usuario captura su nombre y apellido
    And el usuario agrega un número de teléfono en el campo correspondiente
    And el usuario captura su número de teléfono
    And el usuario hace clic en "Ingresar contraseña"
    And el usuario ingresa y confirma su contraseña en los campos correspondientes
    And el usuario hace clic en "Continuar"
    Then el usuario debería ver "<Mensaje>"

Examples:
  | correo               | nombre   | apellido  | telefono      | contraseña  | Mensaje                       |
  | usuario1@example.com | Juan     | Pérez     | 123456789     | password123 | se ha registrado exitosamente |
