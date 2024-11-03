# Proyecto de Ionic: Validación de Formulario de Email

Este proyecto es un ejemplo de cómo implementar y probar la validación de un formulario de email en Ionic usando Angular. Está diseñado para ayudar a los estudiantes a entender las pruebas unitarias y la validación de formularios.

## Tabla de Contenidos

- [Proyecto de Ionic: Validación de Formulario de Email](#proyecto-de-ionic-validación-de-formulario-de-email)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Descripción](#descripción)
    - [Componente Principal](#componente-principal)
  - [Tecnologías](#tecnologías)
  - [Instalación](#instalación)
  - [Estructura del Proyecto](#estructura-del-proyecto)
  - [Contribuciones](#contribuciones)
  - [Licencia](#licencia)

## Descripción

Este proyecto incluye un componente de formulario que valida la entrada de un email. Se incluyen pruebas unitarias para asegurar que el formulario se comporta de manera esperada bajo diferentes condiciones.

### Componente Principal

El componente principal del proyecto es `HomePage`, que incluye un formulario con validación para la entrada de un email. Los tests se aseguran de que el formulario valida correctamente los siguientes casos:

- El campo de email debe ser inválido si está vacío.
- Debe ser inválido para formatos de email incorrectos.
- Debe ser válido para un formato de email correcto.

## Tecnologías

- [Ionic](https://ionicframework.com/)
- [Angular](https://angular.io/)
- [Jasmine](https://jasmine.github.io/)
- [Karma](https://karma-runner.github.io/)

## Instalación

Para instalar el proyecto, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/el-bossman/EjUnitTest.git
   cd EjUnitTest 

2. Instala las dependencias:
    npm install

3. Ejecución de Pruebas:
    ng test

## Estructura del Proyecto

.
├── src
│   ├── app
│   │   ├── home
│   │   │   ├── home.page.ts           # Componente de la página principal
│   │   │   ├── home.page.html         # Plantilla HTML del componente
│   │   │   ├── home.page.scss          # Estilos del componente
│   │   │   └── home.page.spec.ts      # Pruebas unitarias del componente
│   │   └── app.module.ts               # Módulo principal de la aplicación
│   └── ...
└── ...

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor crea un fork del repositorio y envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
