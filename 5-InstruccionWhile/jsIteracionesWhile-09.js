/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	numeroMaximo = 1000;
	numeroMinimo = -1000;
	//iniciar variables
	
	banderaDelPrimero="es el primero";
	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese numero");
		numeroIngresado = parseFloat(numeroIngresado);

		respuesta=prompt("desea continuar?");
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN
