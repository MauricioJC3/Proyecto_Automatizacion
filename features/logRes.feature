Feature: Iniciar Sesión en el Sitio Web

Scenario Outline: Iniciar Sesión con Diferentes Escenarios
Given que el usuario está en la página de inicio de sesión
When el usuario ingresa su correo electrónico "<email>" y su contraseña "<password>"
Then el usuario debería ver el mensaje "<message>"

Examples:
| email                | password         | message                            |
|usuario@example.com   | contraseña123    | ¡Bienvenido, cliente!              |
|usuario@example.com   | incorrecta123    | Correo o contraseña incorrectos.   |
|incorrecto@example.com| contraseña123    | Correo o contraseña incorrectos.   |
|usuario@example.com   | contraseña*123   | Caracteres no permitidos.          |
|usuario@example.com   | contraseña/123   | Caracteres no permitidos.          |