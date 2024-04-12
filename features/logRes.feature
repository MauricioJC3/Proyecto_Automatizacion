Feature: Iniciar Sesión en el Sitio Web

Scenario Outline: Iniciar Sesión con Diferentes Escenarios
Given que el usuario está en la página de inicio de sesión
When el usuario ingresa su correo electrónico "<email>" y su contraseña "<password>"
Then el usuario debería ver el mensaje "<message>"

Examples:
| email                | password         | message                                          |
|esteban@example.com   | contraseña123    | ¡Bienvenido, cliente!                            |
|incorrecto@example.com| contraseña123    | Correo o contraseña incorrectos.                 |
|usuario_example.com   | contraseña123    | Ingrese un correo valido                         |
|usuario@example.com   | con              | Ingrese una contraseña con mínimo 8 caracteres.  |