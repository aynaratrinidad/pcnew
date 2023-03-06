/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var numeroIngresado;
	var sumaPositivos;
	var multiplicacionNegativos;

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while (respuesta == "si") {
		numeroIngresado = prompt("Ingrese Numero");
		numeroIngresado = parseFloat(numeroIngresado);
		respuesta = prompt("Quire seguir ingresando numeros ? ");
		if (numeroIngresado >= -1)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else
		{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
	}
	document.getElementById("txtIdSumaPositivos").velue = sumaPositivos;
	document.getElementById("txtIdProducto").velue = multiplicacionNegativos;
	

}//FIN DE LA FUNCIÓN