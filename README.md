# BPS Prueba de ingreso: Documento de instalación para ejecución y desarrollo.

El presente documento tiene como finalidad documentar el paso a paso a seguir para la configuración del ambiente de desarrollo.

## Tecnologías Utilizadas:

- Angular CLI 13.2.3
- Node 16.13.1
- .Net 5.0
- SQL Server 2019
- .Net Framework 4.7.2
- Entity Framework
- Git 2.29.2.windows.2

## Herramientas Utilizadas:

- Visual Studio Code
- Visual Studio 2019
- MSSQL Server 2019
- Postman 9.22.3
- GitHub
- Fork Git Client

## Clonacion del repositorio

Entrar al repositorio en [Github](https://github.com/devgalop/bpsTestProject) allí seleccionar el botón clonar y con la ayuda de un git client [ver ¿Cómo clonar un repositorio?](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop)

## Instructivo paso a paso para la configuración de la base de datos.

1. **Creacion de la base de datos:** Para crear la base de datos debe ejecutar el archivo _initialDB.sql_ que se encuentra en la raiz del repositorio.
2. **Copiar servidor local:** Copiar la dirección del servidor SQL local y guardarla para configurar la propiedad _ConnectionStrings_ del _Web.config_ en el servicio WCF.

## Instructivo paso a paso para la configuración del Servicio WCF.

Abrir el proyecto tipo solución _BpsProject.sln_ que se encuentra en la carpeta _BpsProject_ del repositorio. Desplegar el proyecto _BpsProject.AppServices_ y proceder con los siguientes pasos:

1. **Configuración de la conexión a la base de datos:** Abrir el archivo _Web.config_ y buscar la siguiente porción de código:

![WebConfigFile](/recursos/webconfig.png "WebConfigFile")

```
 <connectionStrings>
    <add name="DataContext" connectionString="data source=MODIFICAR__AQUI;initial catalog=BPS_PROJECT_DB;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework" providerName="System.Data.SqlClient" />
  </connectionStrings>
```

![ConnectionStrings](/recursos/change-connectionstring.png "CambiarConexionBD")

Allí debera modificar el _data source_ con su ruta de servidor SQL copiado en el paso **Instructivo paso a paso para la configuración de la base de datos**

2. **Establecer como proyecto de inicio:** Se debe dar click derecho en el proyecto _BpsProject.AppServices_ y buscar la opción _Establecer este proyecto como inicial_

![StartUpProject](/recursos/setup-startup-project.png "StartUpProject")

3. **Ejecutar proyecto** Ejecutar el proyecto con el comando

```
dotnet run BpsProject.AppServices.csproj
```

## Instructivo paso a paso para la configuración del API Rest.

![API](/recursos/api.png "API")

1. **Ejecutar proyecto** Ejecutar el proyecto con el comando

```
dotnet run BpsProject.API.csproj
```

## Instructivo paso a paso para la configuración del proyecto front en Angular.

2. **Configurar proxy.conf.json:** Una vez clonado el repositorio, se procede a abrir el proyecto _BpsProject.WebApp_ el cual es el encargado del front-end de la aplicación.
   Allí encontrará un archivo llamado _proxy.conf.json_. Deberá modificar el campo _target_ con la URL dónde esté ubicada el API configurada en el **Instructivo paso a paso para la configuración del API.**

   ![proxyfile](/recursos/proxyfile.png "proxyfile")

3. **Ejecución de la aplicación:** Para ejecutar la aplicación es necesario tener previamente corriendo el proyecto API y el servicio WCF.
   Para correr la aplicación angular, se escribe en la terminal el comando

```
npm start
```

## Aplicativo

El index de la aplicación se encuentran los modulos de estudiantes, profesores y calificaciones. Sin embargo, solo se encuentra implementado el de calificaciones en este ejercicio.

![ModuloInicial](/recursos/app-main.png "Index")

Cuando se ingresa al modulo de calificaciones, se puede observar una tabla con todas las calificaciones almacenadas en la base de datos

![ModuloCalificaciones](/recursos/app-grades-mod.png "ModuloCalificaciones")

Al presionar el boton de agregar nota se accede a un formulario como el que se muestra a continuación:

![ModuloAgregarCalificacion](/recursos/app-addgrade-mod.png "ModuloAgregarCalificaciones")

Al presionar el botón amarillo ubicado en cada elemento de la tabla, se ingresará al modulo de actualización

![ModuloActualizarCalificacion](/recursos/app-updategrade-mod.png "ModuloActualizacionCalificaciones")

Finalmente, si se desea eliminar algun registro, se desplegará un pop up para confirmar si desea o no eliminarlo.

![ModuloEliminarCalificacion](/recursos/app-deletegrade-mod.png "ModuloEliminarCalificaciones")

### Elaborado por Yesid Alexander García López
