# Plantilla Aplicación Backend

## Ejecutar servidor

Si se desea ejecutar el servidor, se debe realizar los siguientes pasos:

1.  Primero tener instalado [Node.js](https://nodejs.org/es) >=16.10 y el gestor de paquetes [Yarn](https://yarnpkg.com/getting-started/install) >=3.0.

2.  Crear el archivo `.env` en la raíz del proyecto en base al contenido del archivo `.env.example`. Este archivo inicializa las variables de entorno que contienen las configuraciones necesarias para iniciar la aplicación. Estas variables son las siguientes:

    - `DB_USERNAME`: Nombre de usuario de la base de datos
    - `DB_PASSWORD`: Contraseña de la base de datos
    - `DB_DATABASE`: Nombre de la base de datos
    - `DB_HOST`: Dominio en donde se encuentra la base de datos
    - `DB_PORT`: Puerto en donde se encuentra la base de datos
    - `DB_DIALECT`: Nombre del gestor de base de datos
    - `DB_LOGGING`: Opcion si se desea mostrar por consola los logs de la base de datos
    - `PORT`: Puerto en el que se ejecutará el servidor
    - `NODE_ENV`: Modo en el que se ejecuta el servidor

3.  Seguido, se deberá instalar las dependecias del proyecto ejecutando `yarn install` en la terminal.

4.  Finalmente, realizar la ejecución del proyecto usando `yarn start`.

## Comandos `sequelize-cli`

#### `yarn exec sequelize-cli init`

Inicializar carpetas `config`, `models`, `migrations`, `seeds` en la raiz del repositorio.

#### `yarn exec sequelize-cli db:create`

Crear la base de datos de acuerdo a los establecido en `/config/config.json`

#### `yarn exec sequelize-cli model:generate --name <nombre_modelo> --attributes <lista_atributos>`

Crear modelo y migración con su respectivo nombre y atributos.

#### `yarn exec sequelize-cli --help`

Mostrar el resto de comandos
