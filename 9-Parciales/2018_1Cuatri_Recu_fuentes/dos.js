/*
Ejercicio 2

El dueño de una tienda de revistas desea un sistema para el control de stock de su negocio.

Para ello se debe ingresar hasta que el usuario desee:

1.	Tipo de revista (Ocio, Científica, Informativas), validar.
2.	Genero (Deporte, Tecnología, Moda, Hogar), validar.
3.	Nombre de la revista.
4.	Año de lanzamiento (entre 2010 y 2021).

Se pide informar por document.write:

A.	El nombre y tipo de revista con género “Tecnología” mas antiguo en el sistema.
B.	Cuantas revistas de género “Moda” y que son de “Ocio” poseen fecha de lanzamiento previo al 2015.
C.	El promedio de año de lanzamiento para las revistas de tipo Cientifica.


*/
/*

function mostrar()
{

	//Declaracion de variables
	var tipoRevista;
	var generoRevista;
	var añoLanzamiento;
	var nombreRevista;
	var respuesta;

	//Declaracion de variables de control
	var flagTecnologia;
	var nombreTecnologia;
	var tipoTecnologia;
	var añoTecnologia;
	var contadorModaOcio;
	var contadorCientifica;
	var acumuladorCientifica;

	//Inicializacion de variables de control
	flagTecnologia = true;
	contadorModaOcio = 0;
	acumuladorModaOcio = 0;
	contadorCientifica = 0;
	acumuladorCientifica = 0;

	//Ingreso de datos
	do
	{
		//Ingreso de datos
		tipoRevista = prompt("Ingrese el tipo de revista (Ocio, Científica, Informativas):");
		while(isNaN(tipoRevista) == false || tipoRevista != "Ocio" && tipoRevista != "Científica" && tipoRevista != "Informativas")
		{
			tipoRevista = prompt("Error. Ingrese el tipo de revista (Ocio, Científica, Informativas):");
		}

		generoRevista = prompt("Ingrese el genero de la revista (Deporte, Tecnología, Moda, Hogar):");
		while(isNaN(generoRevista) == false || generoRevista != "Deporte" && generoRevista != "Tecnología" && generoRevista != "Moda" && generoRevista != "Hogar")
		{
			generoRevista = prompt("Error. Ingrese el genero de la revista (Deporte, Tecnología, Moda, Hogar):");
		}

		nombreRevista = prompt("Ingrese el nombre de la revista:");

		añoLanzamiento = prompt("Ingrese el año de lanzamiento de la revista (entre 2010 y 2021):");
		añoLanzamiento = parseInt(añoLanzamiento);
		while(isNaN(añoLanzamiento) == true || añoLanzamiento < 2010 || añoLanzamiento > 2021)
		{
			añoLanzamiento = prompt("Error. Ingrese el año de lanzamiento de la revista (entre 2010 y 2021):");
			añoLanzamiento = parseInt(añoLanzamiento);
		}

		//Procesamiento de datos
		//A.	El nombre y tipo de revista con género “Tecnología” mas antiguo en el sistema.
		if(flagTecnologia == true && generoRevista == "Tecnología")
		{
			nombreTecnologia = nombreRevista;
			tipoTecnologia = tipoRevista;
			añoTecnologia = añoLanzamiento;
			flagTecnologia = false;
		}
		else
		{
			if(generoRevista == "Tecnología" && añoLanzamiento < añoTecnologia)
			{
				nombreTecnologia = nombreRevista;
				tipoTecnologia = tipoRevista;
				añoTecnologia = añoLanzamiento;
			}
		}

		//B.	Cuantas revistas de género “Moda” y que son de “Ocio” poseen fecha de lanzamiento previo al 2015.
		if(generoRevista == "Moda" && tipoRevista == "Ocio" && añoLanzamiento < 2015)
		{
			contadorModaOcio++;
		}

		//C.	El promedio de año de lanzamiento para las revistas de tipo Cientifica.
		if(tipoRevista == "Científica")
		{
			contadorCientifica++;
			acumuladorCientifica = acumuladorCientifica + añoLanzamiento;
		}

		respuesta = confirm("¿Desea ingresar otra revista?");
	}while(respuesta);

	// Salida de datos por document.write
	document.write("El nombre y tipo de revista con género “Tecnología” mas antiguo en el sistema es: " + nombreTecnologia + " " + tipoTecnologia + "<br>");
	document.write("La cantidad de revistas de género “Moda” y que son de “Ocio” poseen fecha de lanzamiento previo al 2015 es: " + contadorModaOcio + "<br>");
	document.write("El promedio de año de lanzamiento para las revistas de tipo Cientifica es: " + acumuladorCientifica / contadorCientifica + "<br>");
}
*/
/*
Ejercicio 3:

Apellido:
Nombre:
Comisión:
Tutor:

"Un cliente de ""Gonzi-Expres"" desea agregar a su carrito de compras (no sabemos cuantos productos son).
Para ello se ingresa:
- Nombre del producto
- Precio (EN USD)
- Origen (EEUU, China, España)
Por cada producto proveniente de CHINA se agregará al precio del mismo un 5%, debido al impuesto de productos Electronicos provenientes de ese pais.
Si el importe final de todos los productos comprados supera los 50 usd tendrá que pagar un 50% de impuestos por la importación de los mismos.
Por ejemplo ""Si gaste 45 usd en total sólo pago 45, pero si gaste 100 usd tengo que pagar 150""
Como la compra es en dolares, al total de la misma se le deberá agregar el impuesto pais del 35%.
A) Mostrar el total a pagar en pesos (1DOLAR oficial = $205)
B) Cual es el total a pagar, pero solo de productos provenientes de EEUU.
C) El nombre del producto mas caro, de origen Español.
D) Cantidad de productos cuyo precio este entre USD 5 y USD 15 (incluyendo impuestos), provenientes de China o EEUU"
*/
/*
Ejercicio 3:

Apellido:
Nombre:
Comisión:
Tutor:

"Un cliente de ""Gonzi-Expres"" desea agregar a su carrito de compras (no sabemos cuantos productos son).
Para ello se ingresa:
- Nombre del producto
- Precio (EN USD)
- Origen (EEUU, China, España)
Por cada producto proveniente de CHINA se agregará al precio del mismo un 5%, debido al impuesto de productos Electronicos provenientes de ese pais.
Si el importe final de todos los productos comprados supera los 50 usd tendrá que pagar un 50% de impuestos por la importación de los mismos.
Por ejemplo ""Si gaste 45 usd en total sólo pago 45, pero si gaste 100 usd tengo que pagar 150""
Como la compra es en dolares, al total de la misma se le deberá agregar el impuesto pais del 35%.
A) Mostrar el total a pagar en pesos (1DOLAR oficial = $205)
B) Cual es el total a pagar, pero solo de productos provenientes de EEUU.
C) El nombre del producto mas caro, de origen Español.
D) Cantidad de productos cuyo precio este entre USD 5 y USD 15 (incluyendo impuestos), provenientes de China o EEUU"
*/
function mostrar()
{
	var ingreseNombreDelProducto;
	var ingresePrecioDolares;
	var ingreseOrigen;acumuladorFinal
	var acumuladorImporteFinal;
	var respuesta;
	var importeFinalPesos;
	var totalAPagarEEUU;
	var productoMasCaroESP;
	var nombreProductoMasCaroESP;
	var flagProductoCaro;
	var productos5y6;

	totalAPagarEEUU = 0;
	productos5y6 = 0;
	flagProductoCaro = true;
	acumuladorImporteFinal = 0;

	do
	{
		ingreseNombreDelProducto = prompt("Ingrese nombre del producto");
		while(!isNaN(ingreseNombreDelProducto))
		{
			ingreseNombreDelProducto = prompt("ERROR, reingrese nombre del producto");
		}
		ingresePrecioDolares = prompt("Ingrese el precio en dolares");
		ingresePrecioDolares = parseFloat(ingresePrecioDolares);
		while(isNaN(ingresePrecioDolares) || ingresePrecioDolares < 0)
		{
			ingresePrecioDolares = prompt("ERROR, reingrese el precio en dolares");
			ingresePrecioDolares = parseFloat(ingresePrecioDolares);
		}
		ingreseOrigen = prompt("Ingrese el origen del producto (EEUU, China, España)");
		while(ingreseOrigen != "EEUU" && ingreseOrigen != "China" && ingreseOrigen != "España")
		{
			ingreseOrigen = prompt("ERROR, reingrese el origen del producto (EEUU, China, España)");
		}
		acumuladorImporteFinal += ingresePrecioDolares;
		switch (ingreseOrigen) {
			case "China":
				ingresePrecioDolares *= 1.05;
				break;
			case "EEUU":
				totalAPagarEEUU += ingresePrecioDolares;
				break;
			default:
				if(ingresePrecioDolares > productoMasCaroESP || flagProductoCaro)
				{
					productoMasCaroESP = ingresePrecioDolares;
					nombreProductoMasCaroESP = ingreseNombreDelProducto;
					flagProductoCaro = false;
				}
				break;
		}
		if((ingreseOrigen == "EEUU" || ingreseOrigen == "China") && (ingresePrecioDolares > 5 && ingresePrecioDolares < 15))
		{
			productos5y6++;
		}
		respuesta = confirm("Desea continuar ingresando productos?")
	} while(respuesta)
	if(ingreseOrigen == "China")
	{
		acumuladorImporteFinal *= 1.05;
	}
	importeFinalPesos = acumuladorImporteFinal * 205;
	if(acumuladorImporteFinal > 50)
	{
		acumuladorImporteFinal *= 1.5;
	}
	document.write("A-El total a pagar en pesos es $" + importeFinalPesos + "<br>"
					+ "B-El total a pagar de productos provenientes de EEUU es $" + totalAPagarEEUU + "<br>"
					+ "C-El nombre del producto mas caro de origen español es " + nombreProductoMasCaroESP + "<br>"
					+ "D-Cantidad de productos entre 5 y 15 USD de China y EEUU son " + productos5y6);
}

