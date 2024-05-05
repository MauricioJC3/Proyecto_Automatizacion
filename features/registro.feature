Feature: Registro en Mercado Libre

Scenario: Crear una cuenta en Mercado Libre
    Given que el usuario está en la página de registro de Mercado Libre
    When el usuario hace clic en el botón "Agregar"
    And el usuario ingresa su dirección de correo electrónico en el campo correspondiente
    And el usuario acepte los términos y condiciones
    And el usuario hace clic en "Continuar"
    And el usuario hace clic en el botón "Elegir"
    And el usuario ingresa su "Nombre" y "Apellido" en los campos correspondientes
    And el usuario hace clic en "Continuar"
    And el usuario hace clic en el botón "Validar"
    And el usuario ingresa su numero de telefono
    And el usuario acepta los términos y condiciones
    And el usuario hace clic en "Enviar código por WhatsApp"
    And el usuario hace clic en el botón "Ingresar contraseña"
    And el usuario ingresa su "ingresa contraseña" y "confirmar contraseña" 
    And el usuario hace clic en "Continuar"
    Then el usuario debería ver "<Mensaje>"

Examples:
  | correo               | nombre   | apellido  | telefono      | contraseña  | Mensaje                       |
  | usuario1@example.com | Juan     | Pérez     | 123456789     | password123 | se ha registrado exitosamente |
