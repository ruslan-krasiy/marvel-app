# Marvel App
[https://ruslan-krasiy-marvel-app.vercel.app/heroes](https://ruslan-krasiy-marvel-app.vercel.app/heroes)

La aplicación está diseñada para Zara Web Challenge que consiste en la creación de una pequeña aplicación para obtener información sobre
diferentes personajes de Marvel utilizando React como biblioteca de interfaz de usuario.


## Funcionalidades Principales

1. Mostrará un listado de 50 personajes o el resultado de los personajes introducidos
en el buscador.
2. Mostrará información relativa al personaje y los cómics en los que aparece.

## Tecnologías Utilizadas

1. ViteJS
1. React
2. Typesript

## Estructura del Proyecto

El proyecto se organiza de la siguiente manera:

```
marvel-app/
│
├── public/
│   ├── font
│   └── index.html
│
├── src/
│   ├── ___test__/
│   ├── api/
│   ├── assets/
│   ├── interfaces/
│   ├── utils/
│   ├── components/
│   ├── hooks/
│   ├── views/
│   ├── index.css
│   ├── context.tsx
│   └── main.tsx
│
├── .gitignore
├── package.json
├── README.md
└── ...
```

- public/: Contiene archivos estáticos como HTML, typografia.
- src/: Contiene todo el código fuente de la aplicación.
- assets/: Contiene imagenes
- components/: Componentes reutilizables de React.
- views/: Vistas principales de la aplicación.
- hooks/: Contienne los hooks de app.
- utils/: Las funciones reutilizables.
- interfaces/: Contiene tipos de datos recibidos por API.
- api/: Contiene funciones para hacer llamadas a API.
- test/: Archivos con test unitarios.
- main.tsx: Punto de entrada principal de la aplicación ( router ).
- index.css: Achivo generico con estilos globales.
- context.tsx: Contiene ContextAPI.
.gitignore: Archivo para especificar qué archivos y directorios deben ignorarse en el control de versiones.
- package.json: Archivo de configuración de npm que incluye las dependencias del proyecto.

README.md: Este archivo, que proporciona información sobre el proyecto.

## Arquitectura

La arquitectura de la aplicación sigue un enfoque basado en componentes, donde cada componente de React encapsula una parte específica de la interfaz de usuario. Se sigue un enfoque de desarrollo basado en componentes reutilizables para mantener un código limpio y modular.

# Configuración y Ejecución

1. Clona el repositorio desde GitHub: git clone https://github.com/ruslan-krasiy/marvel-app.git
2. Accede al directorio del proyecto: cd marvel-app
3. Instala las dependencias: 
```
yarn install
```
4. Ejecuta la aplicación en modo de desarrollo: 
```
npm run dev
```
5. Abre un navegador web y accede a la dirección [http://localhost:5173/](http://localhost:5173/) para utilizar la aplicación.

##
### Run in production mode

```
npm run build
```
##
### Test

```
npm run test
```
##
### App Router

#### Heroes page
[https://ruslan-krasiy-marvel-app.vercel.app/heroes/](https://ruslan-krasiy-marvel-app.vercel.app/heroes)


#### Favorites page
[https://ruslan-krasiy-marvel-app.vercel.app/heroes/fevorits](https://ruslan-krasiy-marvel-app.vercel.app/heroes/favorits)

#### Hero page
[https://ruslan-krasiy-marvel-app.vercel.app/heroes/1010354](https://ruslan-krasiy-marvel-app.vercel.app/heroes/1010354)

##

### Api Key

```
//src/api/index.ts
const API = "https://gateway.marvel.com:443/v1/public";
const API_KEY = "ts=1&apikey=a2fa95e3e927058d80203ddbbe8269f3&hash=0e74afce0916eb27e1560c6ad8b3a870";
```

##
Este README proporciona una guía básica para comprender y ejecutar el proyecto. Si necesitas más detalles o tienes alguna pregunta, no dudes en ponerte en contacto con nosotros.

¡Gracias por tu interés en nuestro proyecto!

Última actualización: 4-03-2024