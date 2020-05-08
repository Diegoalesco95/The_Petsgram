# Petsgram, una app de fotos de animales

¡Bienvenido y gracias por visitarme! Este es un proyecto elaborado como proyecto de aprendizaje de React.JS en [Platzi](https://platzi.com/cursos/react-avanzado/) en donde aplico varios de los conocimientos y habilidades adquiridas, entre ellas:

- Preparar un bundle para enviar a producción con Webpack
- Utilizar React Hooks
- Crear Styled-components para estructurar tu app
- Generar consultas con GraphQL
- Gestionar Usuarios
- Crear Aplicaciones Web Progresivas (PWAs)

## Tecnologías usadas

En este curso realizaremos una aplicación muy parecida a Instagram, llamada _petgram_. Tendremos nuestras rutas, gestión de usuarios y likes.

Utilizaremos como empaquetador y transpilador:

- [Webpack](https://webpack.js.org/concepts/)
- [Babel](https://babeljs.io/)

Estilado con CSS en JS con:

- [styled-components](https://www.styled-components.com/)

Como linter utilizaremos:

- [Standard JS](https://standardjs.com/)

Para fetching (obtención) de datos:

- [GraphQL](https://graphql.org/learn/)
- [React Apollo](https://www.apollographql.com/docs/react/)

Para el enrutado de la SPA utilizaremos:

- [Reach Router](https://reach.tech/router)

Para las buenas prácticas utilizaremos:

- [Lighthouse](https://developers.google.com/web/tools/lighthouse/?hl=es)
- [Cypress](https://www.cypress.io/)

Por último haremos SEO, PWA y Deploy con:

- [React Helmet](https://github.com/nfl/react-helmet)
- [Workbox](https://developers.google.com/web/tools/workbox/)
- [Progressive Web App](https://platzi.com/cursos/pwa-react-js/)
- [Deply con Now](https://vercel.com/home)

## Vista de Home



![Home Preview](/.readme-static/home_preview.png)

## Vista del Login

![Login Preview](/.readme-static/login_preview.png)

## [Ver la aplicación](https://the-petsgram.now.sh/)

## ¿Cómo funciona?

Si desea, clonar el proyecto es necesario contar con Node.JS 12.6.x y seguir las siguientes instrucciones.

- `npm install` para instalar las dependencias.
- `npm run dev` para el entorno de desarrollo.
- `npm run build && serve:pro` para el entorno de producción.

## Interacción con la App

Para usar todas las funciones de la app se requiere realizar un registro y luego iniciar sesión, luego se podrá interactuar completamente guardando las fotos en favoritos. Se debe aclarar que la cuenta registrada se eliminará automáticamente después de un tiempo por parte del API que almacena la información. También se puede filtrar las imágenes haciendo clic en cada una de las categorías mostradas en la parte superior y al hacer clic en las imágenes, será dirigido a la pagina de detalles de la foto.

## Licencia

[MIT License](LICENSE)
