# Proyecto Data Warehouse

_Es una herramienta que permite a una compañia de Marketing administrar todos los contactos de sus clientes para sus campañas._

## Comenzando 🚀

_Clonar proyecto desde consola o descargar desde el repositorio:_

⌨️  git clone https://github.com/gastond23/data_warehouse.git

Mira **Deployment** para conocer como desplegar el proyecto.

### Dependencias 📋

_En este proyecto se utilizaron las siguientes dependencias:_

- [express]
- [sequelize]
- [body-parser]
- [cors]
- [dotenv]
- [mysql2]
- [cookie-parser]
- [ejs]
- [ejs-lint]
- [jsonwebtoken]
- [multer]
- [bcrypt]

_Dependencias para desarrollo_

- [nodemon]

### Instalación 🔧

_Una vez descargado el repositorio procedemos a instalar las dependencias mencionadas:_

```
⌨️ npm install

⌨️ npm install nodemon --save-dev nodemon
```

## Iniciando DB inicial ⚙️

_Configuración previa:_

En el archivo _.env_ se encuentran los datos de configuración e inicialies de la base de datos, en caso de ser necesario una personalización modificar los parametros del archivo:

```
APP_PORT=3000

DB_PORT=3306

DB_HOST='localhost'

DB_USER='root'

DB_PASS='betsabeXl23'

DB_NAME='data_warehouse'

DB_DIALECT='mysql'

JWT_KEY='secreto_SECRETO'
```


_Una vez personalizado la configuración de conexión de la DB ejecutar el siguiente comando para inicializar la base de datos con los datos previos para poder loguear y ejecutar pruebas:_

```
⌨️ npm restart
```

Este comando creará la base de datos en caso de que no exista y añadirá los datos previos para poder trabajar en la aplicación.

## Iniciando Servidor ⚙️

_Ejecutar desde la terminal en la ubicacion de los archivos descargados:_

```
⌨️ npm start
```

### Ingreso al sitio 🔩

_La dirección del sitio_ http://localhost:3000

_Nos encontramos una login page_

Usuario con permiso Administrador:

```
Usuario: admin@mail.com

Contraseña: admin1234
```

Usuario con permisos básicos:

```
Usuario: user@mail.com

Contraseña: admin1234
```
