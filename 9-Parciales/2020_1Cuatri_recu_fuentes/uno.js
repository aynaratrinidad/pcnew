/*
Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total

*/
function mostrar()
{
	var productos;
	var precio;
	var cantidadUnidades;
	var marca;
	var fabricante;
	var precioJabonCaro;
	var contadorProductosCompra;
	var unidadesJabonCaro;
	var fabricanteJabonCaro;
	var acumuladorBarbijo;
	var acumuladorJabon;
	var acumuladorAlcohol;
	var contadorJabon;
	var contadorAlcohol;
	var contadorBarbijos;
	var promedioMasUnidades;


	acumuladorJabon = 0;
	acumuladorBarbijo = 0;
	acumuladorAlcohol = 0;
	contadorBarbijos = 0;
	contadorAlcohol = 0;
	contadorJabon = 0;
	contadorProductosCompra = 0;

	while(contadorProductosCompra < 2)
	{
		productos = prompt("Ingrese un producto (barbijo / jabón / alcohol)");

		while(productos != "barbijo" && productos !=  "jabón" && productos !=  "alcohol")
		{
			productos = prompt("Porfavor ingrese un producto (barbijo / jabón / alcohol)");
		}

		precio = prompt("Ingrese un precio entre 100 y 300");
		precio = parseFloat(precio);

		while (isNaN(precio) || precio < 100 || precio > 300)
		{
			precio = prompt("Porfavor ingrese un precio entre 100 y 300");
			precio = parseFloat(precio);
		}

		cantidadUnidades = prompt("Ingrese una cantidad entre 1 y 1000");
		cantidadUnidades = parseInt(cantidadUnidades);

		while (isNaN(cantidadUnidades) || cantidadUnidades < 1 || cantidadUnidades > 1000)
		{
			cantidadUnidades = prompt("Porfavor ingrese una cantidad entre 1 y 1000");
			cantidadUnidades = parseInt(cantidadUnidades);
		}

		marca = prompt("Ingrese marca");
		fabricante = prompt("Ingrese fabricante");

		
		switch (productos) 
		{
			case "jabón":
				if (contadorJabon == 0 || precio > precioJabonCaro)
				{
					precioJabonCaro = precio;
					unidadesJabonCaro = cantidadUnidades;
					fabricanteJabonCaro = fabricante; 
				}
				acumuladorJabon += cantidadUnidades;
				contadorJabon++;
				break;
			case "barbijo":
				acumuladorBarbijo += cantidadUnidades;
				contadorBarbijos++;
				break;
			default:
				acumuladorAlcohol += cantidadUnidades;
				contadorAlcohol++;
				break;
		}

		contadorProductosCompra++;
	}

	if (acumuladorJabon > acumuladorBarbijo && acumuladorJabon > acumuladorAlcohol) 
	{
		//acumuladorJabon
		promedioMasUnidades = acumuladorJabon / contadorJabon;

	}
	else
	{
		if (acumuladorBarbijo > acumuladorAlcohol)
		{
			//acumuladorBarbijo
			promedioMasUnidades = acumuladorBarbijo / contadorBarbijos;

		}
		else
		{
			//acumuladorAlcohol
			promedioMasUnidades = acumuladorAlcohol / contadorAlcohol;

		}
	}

	if(contadorJabon > 0)
	{
		console.log("La cantidad de unidades es " + unidadesJabonCaro + " y el fabricante es " + fabricanteJabonCaro);
	}
	else
	{
		console.log("No se ha ingresado ningun jabón :(");
	}
	console.log("El promedio del producto con mas unidades es " + promedioMasUnidades);
	console.log("Se compraron " + acumuladorBarbijo + " unidades de barbijos");
	

}

/*
// DECLARACION DE VARIABLES
	producto
	precio
	cantidad de unidades
	marca
	fabricante
	el jabon mas caro
	tipo de producto con mas unidades
	unidades de barbijo
	contador de productos por compra

	// INICIALIZAR VARIABLES
	contador de productos por compra - se inicializa en 5 (iteraciones) - (bucle)

	// ENTRADA DE DATOS
	ingresa producto
	ingresa precio
	ingresa cantidad de unidades
	ingresa marca
	ingresa fabricante

	// VALIDACION DE DATOS
	producto = "barbijo" , "jabón" o "alcohol" (validar)
	precio = entre 100 y 300 (rango)
	cantidad de unidades = no puede ser 0 o negativo y no debe superar las 1000 unidades (rango -->  1 A 1000)


	// CATEGORIZAR LOS DATOS
	dividir mis productos por tipo (JABON - BARBIJO - ALCOHOL)

	// OPERACIONES Y CALCULOS
	JABONES
		(saber cual es el jabon mas caro)
			guardarnos el maximo precio de un jabon comprado - en el bucle 
			guardarnos el fabricante

	BARBIJOS
		(saber cuantas unidades de barbijo se compraron en total)
			en bucle (5) - acumulando los barbijos comprados

	ALCOHOL
	 	-
	TODOS	
	(saber cual es el producto mas comprado en total)
		ACUMULAR cada producto comprado por tipo
			una vez terminadas las 5 compras -> definir cual es el de mayor unidades
				le saco el promedio de compra PROMEDIO ES (5)

	// SALIDA DE INFORMACION
	a) Del más caro de los jabones, la cantidad de unidades y el fabricante
	b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
	c) Cuántas unidades de Barbijos se compraron en total
*/


/* ale
<button type = "button" onclick = document.getElementById("txtIdCampo").innerHTML = "44 años"></button>
 
 */