### Escuela Colombiana de Ingeniería
### Arquitecturas de Software - ARSW	

## Escalamiento en Azure con Maquinas Virtuales, Sacale Sets y Service Plans

### Dependencias
* Cree una cuenta gratuita dentro de Azure. Para hacerlo puede guiarse de esta [documentación](https://azure.microsoft.com/es-es/free/students/). Al hacerlo usted contará con $100 USD para gastar durante 12 meses.
Antes de iniciar con el laboratorio, revise la siguiente documentación sobre las [Azure Functions](https://www.c-sharpcorner.com/article/an-overview-of-azure-functions/)

### Parte 0 - Entendiendo el escenario de calidad

Adjunto a este laboratorio usted podrá encontrar una aplicación totalmente desarrollada que tiene como objetivo calcular el enésimo valor de la secuencia de Fibonnaci.

**Escalabilidad**
Cuando un conjunto de usuarios consulta un enésimo número (superior a 1000000) de la secuencia de Fibonacci de forma concurrente y el sistema se encuentra bajo condiciones normales de operación, todas las peticiones deben ser respondidas y el consumo de CPU del sistema no puede superar el 70%.

### Escalabilidad Serverless (Functions)

1. Cree una Function App tal cual como se muestra en las  imagenes.

![](images/part3/part3-function-config.png)

![](images/part3/part3-function-configii.png)
![Imgur](https://i.imgur.com/4T2Et1G.png)

2. Instale la extensión de **Azure Functions** para Visual Studio Code.

![](images/part3/part3-install-extension.png)
![Imgur](https://i.imgur.com/eKbqpH2.png)

3. Despliegue la Function de Fibonacci a Azure usando Visual Studio Code. La primera vez que lo haga se le va a pedir autenticarse, siga las instrucciones.

![](images/part3/part3-deploy-function-1.png)

![](images/part3/part3-deploy-function-2.png)
![Imgur](https://i.imgur.com/2DnwOty.png)

4. Dirijase al portal de Azure y pruebe la function.

![](images/part3/part3-test-function.png)
![Imgur](https://i.imgur.com/pc0OSoq.png)

5. Modifique la coleción de POSTMAN con NEWMAN de tal forma que pueda enviar 10 peticiones concurrentes. Verifique los resultados y presente un informe.
![Imgur](https://i.imgur.com/hlN57rM.png)
![Imgur](https://i.imgur.com/Vl9hVZA.png)

6. Cree una nueva Function que resuleva el problema de Fibonacci pero esta vez utilice un enfoque recursivo con memoization. Pruebe la función varias veces, después no haga nada por al menos 5 minutos. Pruebe la función de nuevo con los valores anteriores. ¿Cuál es el comportamiento?.
![Imgur](https://i.imgur.com/Hz0DHt7.png)
![Imgur](https://i.imgur.com/1TkIpZA.png)
![Imgur](https://i.imgur.com/SpIDzNx.png)
![Imgur](https://i.imgur.com/BVehgUh.png)

**Preguntas**
* ¿Qué es un Azure Function?
	* servicio en la nube de Microsoft Azure que permite ejecutar código en respuesta a eventos específicos sin la necesidad de crear y administrar una infraestructura de servidores.
	
* ¿Qué es serverless?
	* modelo de computación en la nube que permite a los desarrolladores escribir y ejecutar código sin tener que preocuparse por la infraestructura subyacente en la que se ejecuta.
* ¿Qué es el runtime y que implica seleccionarlo al momento de crear el Function App?
* ¿Por qué es necesario crear un Storage Account de la mano de un Function App?
	* porque los Azure Functions dependen de los servicios de almacenamiento de Azure para funcionar correctamente.
* ¿Cuáles son los tipos de planes para un Function App?, ¿En qué se diferencias?, mencione ventajas y desventajas de cada uno de ellos.
	* Consumption Plan: este plan se enfoca en el pago por uso y está diseñado para ejecutar funciones de forma esporádica y con cargas de trabajo variables.Las ventajas de este plan incluyen la escalabilidad automática, el bajo costo y la facilidad de implementación. La desventaja es que no es adecuado para aplicaciones con altas cargas de trabajo continuas o para aquellas que requieren una capacidad de procesamiento dedicada.
	
	* App Service Plan: este plan se enfoca en la capacidad de procesamiento dedicada y está diseñado para ejecutar aplicaciones web y funciones con cargas de trabajo continuas o altas.Las ventajas de este plan incluyen la capacidad de escalar horizontal y verticalmente, el rendimiento mejorado, la disponibilidad y la capacidad de personalizar la infraestructura. La desventaja es que los costos son más altos y se requiere una mayor inversión en la configuración y la gestión de la infraestructura.
	
	* Premium Plan: este plan es una variante del App Service Plan que ofrece funciones adicionales para aplicaciones empresariales de alta disponibilidad y rendimiento.Las ventajas de este plan incluyen una mayor capacidad de procesamiento, la escalabilidad automática, el soporte de aplicaciones empresariales, la integración de redes virtuales y el acceso a los planes de respaldo. La desventaja es que los costos son más altos que en los otros planes.
* ¿Por qué la memoization falla o no funciona de forma correcta?
	* La función es costosa en términos de memoria
* ¿Cómo funciona el sistema de facturación de las Function App?
	* "Pago Por Uso" : Esto significa que solo se paga por la cantidad de tiempo que se ejecutan las funciones, más cualquier recurso adicional utilizado, como almacenamiento o transferencia de datos. El sistema de facturación calcula el costo total basándose en el número de ejecuciones de la función, el tiempo de ejecución y el consumo de recursos asociados.
