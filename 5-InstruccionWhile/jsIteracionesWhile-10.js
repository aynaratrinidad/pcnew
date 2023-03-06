/*
Aynara Trinidad
Division Z 
Grupo 3: Fausto

Clase 09

Ejercicio 10 (bis) (While)

Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos).
10-Porcentaje de números positivos y negativos.
De los positivos el más grande.
De los negativos el más chico.*/

function mostrar()
{
	var respuesta;
	var contadorPositivo;
	var contadorNegativo;
	var acumuladorPositivo;
	var acumuladorNegativo;
	var numeroIngresado;
	var promedioPositivo;
	var promedioNegativo;
	var diferenciaPyN;
	var contadorDeCero;
	var contadorDePares;
	var porcentajePositivos;
	var porcentajeNegativos;
	var totalContadores;

	contadorPositivo = 0;
	contadorNegativo = 0;
	contadorDeCero = 0;
	contadorDePares = 0;
	acumuladorNegativo = 0;
	acumuladorPositivo = 0;
	
	do
	{
		/*numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseFloat(numeroIngresado);
		
		while (isNaN (numeroIngresado))
		{
			numeroIngresado = prompt("ERROR Reingrese un numero");
			numeroIngresado = parseFloat(numeroIngresado);
		}*/
		do
		{
			numeroIngresado = prompt("Ingrese un numero");
			numeroIngresado = parseFloat(numeroIngresado);
		}while(isNaN(numeroIngresado));

		if (numeroIngresado > 0)
		{
			acumuladorPositivo += numeroIngresado;
			contadorPositivo += 1;
		} 
		else
		{
			if (numeroIngresado < 0)
			{
				acumuladorNegativo += numeroIngresado;
				contadorNegativo += 1;
			}
			else
			{
				contadorDeCero += 1;
			}
		}
		if(numeroIngresado % 2 == 0 )
		{
			contadorDePares++;
		}
		respuesta=confirm("Desea ingresar otro numero?");
	}while (respuesta);
	
	if (contadorPositivo > 0)
	{
		promedioPositivo = acumuladorPositivo / contadorPositivo;
	}
	else
	{
		promedioPositivo = 0;
	}
	if (contadorNegativo > 0)
	{
		promedioNegativo = acumuladorNegativo / contadorNegativo;
	}
	else
	{
		promedioNegativo = 0;
	}


	diferenciaPyN = acumuladorPositivo - acumuladorNegativo;

	totalContadores = contadorPositivo + contadorNegativo + contadorDeCero;
	porcentajePositivos = contadorPositivo / totalContadores * 100;

	document.write("1-Suma de los negativos: " + acumuladorNegativo + "<br>");
	document.write("2-Suma de los positivos: " + acumuladorPositivo + "<br>");
	document.write("3-Cantidad de positivos: " + contadorPositivo + "<br>");
	document.write("4-Cantidad de negativos: " + contadorNegativo + "<br>");
	document.write("5-Cantidad de ceros: " + contadorDeCero + "<br>");
	document.write("6-Cantidad de números pares: " + contadorDePares + "<br>");
	document.write("7-Promedio de positivos: " + promedioPositivo + "<br>");
	document.write("8-Promedios de negativos: " + promedioNegativo + "<br>");
	document.write("9-Diferencia entre positivos y negativos: " + diferenciaPyN);
	document.write("Porcentajes Positivos: " + porcentajePositivos);

}//fin del while

//FIN DE LA FUNCIÓN


