## �ndice
1. [Informaci�n general](#informaci�n-general)
2. [Datos personales](#datos-personales)
3. [Aplicaciones](#aplicaciones)
4. [Instalaci�n de los softwares MongoDB y MongoDB Compass](#instalaci�n-de-los-softwares-mongodb-y-mongodb-compass)
5. [Collaboration](#collaboration)
6. [Visual Studio Code](#visual-studio-code)
7. [Terminal PowerShell](#terminal-powershell)
### Informaci�n general
***
En este proyecto2, en mi caso llamado proyectoParticular, vamos a trabajar con el entorno de trabajo MongoDB, Visual Studio Code y PowerShell, insertando una serie de comandos para la insercci�n de docmentos dentro  de una colecci�n.
Lo haremos tanto gr�ficamente con el Visual Studio como a modo de comandos mediante el PowerShell.
### Datos personales
***
* Nombre: Pablo Jes�s
* Apellidos: Ramos Fern�ndez
* Asignatura: Gesti�n de Base de Datos
* Curso: 1� ASIR 2021/2022
## Aplicaciones
***
En este proyecto hemos hecho uso de:
* MongoDB versi�n 5.0.3 y MongoDB Compass 
* Visual Studio Code
* PowerShell
* Herramienta GitHub
## Instalaci�n de los softwares MongoDB y MongoDB Compass:
***
He descargado de la p�gina oficial de MongoDB la �ltima versi�n 5.0.3 y he procedido a su instalaci�n junto con la shell de MongoDB Compass.
* Instalaremos MongoDB junto con MongoDB Compass en la misma instalaci�n.
* Para verificar la instalaci�n  de MongoDB, nos vamos a adentrar en la ruta en que se encuentra su carpeta.
* Una vez, vista su ruta vamos a editar las variables de entorno, concretamente editaremos el PATH, borrando en el caso de que huebiera una versi�n antigua de Mongo y a�adiendo la nueva ruta en que se encuentra ahora la nueva versi�n de MongoDB.
* Para que no nos pille desprevenidos, vamos a entrar en los Servicios de Windows para verificar que MongoDB est� ejecut�ndose. En el caso de que no fuera as� habilitaremos el servicio para que podamos trabajar con el entorno.

## Visual Studio Code
***
> Este nuevo programa nos va a servir tanto para visualizar las diferentes pruebas que hagamos con los comando que insertemos, como ver los resultados con el terminal que nos proporciona.
> Para ello he creado un nuevo proyecto llamado PROYECTO_PARTICULAR en el que vamos a a�adir tres ficheros:
* insertar.js : En este fichero a�adiremos una serie de documentos (con sus campos y valores) mediante los comandos insertOne y insertMany. Y esos documentos ser�n borrados mediante el comando deleteMany.
* probamos.js: En este otro fichero haremos las diferentes pruebas que se requieran insertando y eliminando documentos si se precisa.
* consultamos.js: En este �ltimo fichero vamos a definir la diversidad de comando que vamos a usar en este proyecto, como por ejemplo, yo he usado .find(filtra por un cierto campo) y el operador equals (compara todos los documentos y devuelve aquellos que se le hayan pasado como condici�n).
## Terminal PowerShell
***
Ahora voy a listar una serie de comando que he usado:
* mongo --version: Nos devuelve la versi�n de MongoDB que estamos usando.
* mongo: Este comando sirve para que entremos en Mongo.
* cls: Limpia el terminal de comando para ver con mayor claridad los nuevos comandos que voy a aplicar.
* db: Nos muestra la base de datos en la que estamos trabajando.
* help: Con este comando PowerShell nos muestra una ayuda con una serie de comandos que podemos aplicar.
* show dbs: Muestra las bases de datos creadas.
* db.[nombre_Base_De_Datos].insertOne: Inserta un documento dentro de una colecci�n, en mi caso, db.coleccionParticular.insertOne()
* show collections: Muestra las colecciones que tenemos creados.
* db.[nombre_Base_De_Datos].find(): Muestra los archivos dentro de una colecci�n.
* use [nombre_Base_Datos]: Crea una base de datos en el servidor de Mongo.
* db.[nombre_Base_De_Datos].deleteMany: Borra muchos documentos a la vez de una colecci�n.
* load ("nombre_fichero"): Carga el archivo y lo ejecuta.
* db.[nombre_Base_De_Datos].inserMany: Inserta varios documentos en una colecci�n.
* db.[nombre_Base_De_Datos].find().count(): Cuenta los documentos que se encuentran en una colecci�n.
* db.[nombre_Base_De_Datos].find({campo:"valor"}): Visualiza los documentos con el campo y valor especificados.
* db.[nombre_Base_De_Datos].find({campo:{$eq: valor}}).pretty(): Visualiza los documentos con el campo y valor especificados mediante el operador equals y le a�adimos un formato m�s elegante con el comando .pretty().