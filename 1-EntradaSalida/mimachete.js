/* 1
function MiMachete() 
{
    /*
    VARIABLES
        - Crear variables let/var 
        - Math.floor(Math.random() * max);
    ENTRADA Y SALIDA DE DATOS
        - Tomar datos con promt()
        - confirm()
        - alert()
        - document.getElementById().value
        - Parsear con parseInt() / parseFloat()
        - IsNaN()
        - .toFixed()
        - document.write()
        - "".toLocaleLowerCase()
        - "".toLocaleUpperCase()
    IF
        if(condicion){ //AND - OR  ((condicion && condicion) || condicion)

        }else{
            if(...){
                if(...){

                }
            }
        }
    SWITCH
        switch(variable){
            case 1:
                switch(){
                    case ...:
                        break;
                    ...
                }
                break;
            case ...:
                if(){
                    while(){

                    }
                }
                break;
            default:
                break;
        }
    
    WHILE
            - EVALUAR DATOS 
            - BUCLE:
                while(condicion) - true ejecuta un nuevo bucle
                {
                    while(...){
                        if(...){

                        }
                    }

                    if(...){
                        break;
                    }
                }
    CONTADOR
        var contador = 0;       //SIEMPRE SE INICIALIZA
        contador++;
        contador = contador + 1;
        contador--;
        contador = contador - 1;
    
    ACUMULADOR
        var acumulador = 100;   //SIEMPRE INICIALIZO
        acumulador += valor;
        acumulador = acumulador + valor;
        acumulador -= valor;
        acumulador = acumulador - valor;

    FLAG
        - ES UNA BANDERA QUE ME PERMITE SABER SI PASE O NO POR CIERTO LADO
        - INICIALIZAR MAXIMOS Y MINIMOS 
            var flagPrimerIngreso = true;    //SIEMPRE TIENE QUE ESTAR INICIALIZADA

            if(flagPrimerIngreso == true){
                ... Hago algo.
                flagPrimerIngreso = false;  //SIEMPRE CAMBIO EL ESTADO INICIAL PARA NO VOLVER A ENTRAR ACA
            }else{
                ...
                if(nuevoDato > maximoGuardado){
                    //Guardo nuevo maximo
                }else{
                    if(nuevoDato < minimoGuardado){
                        //Guardo nuevo minimo
                    }
                }
            }
        
    VALIDACIONES

        edad = prompt("Dame una edad");
        edad = parseInt(edad);
        while(isNaN(edad) == true || edad == "" || edad < 0 || edad > 130)
        {
            edad = prompt("Error. Dame una edad");
            edad = parseInt(edad);
        }

        altura = prompt("Dame una altura");
        while(isNaN(altura) == true || altura == "")
        {
            altura = prompt("Error. Dame una altura");
        }
        altura = parseFloat(altura);

        //Dame un sexo F - M - X
        sexo = prompt("Dame nombre");
        sexo = sexo.toLocaleUpperCase(); //Opcional
        while(sexo != "F" && sexo != "M" && sexo != "X")
        {
            sexo = prompt("Error. Dame un sexo [F - M - X]");
            sexo = sexo.toLocaleUpperCase();
        }

    DO WHILE (ANECDOTICO)

        altura = prompt("Dame una altura");
        while(isNaN(altura) == true || altura == "")
        {
            altura = prompt("Error. Dame una altura");
        }
        altura = parseFloat(altura);

        do {
            
        } while (condicion);

        do 
        {
            altura = prompt("Dame una altura");
        } while(isNaN(altura) == true || altura == "");
        altura = parseFloat(altura);

    FOR
        var contador = 0;
        while(contador < 10)
        {
            contador++;
            console.log(contador);
        }

        for(var contador = 0 ; contador < 10 ; contador++)
        {
            console.log(contador+1);
        }
    }
    */
//saltoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
/*
function mostrar()
{
	var flagPrimer;
	var respuesta;

	flagPrimer=true;


	

	//fin variables
	do 
	{
		do {
		xxxxxxxxx=prompt("xxxxxxxxxxxx");
		xxxxxxxxx=parseInt(xxxxxxxxx);
		xxxxxxxxxx=xxxxxxxxx.();
		} while (isNaN(xxxxxxxxx) || xxxxxxx!="xxxxxxxxxx"&&xxxxxxxx!="xxxxxxxxx"&&xxxxxxxxx!="xxxxxxxxxx" );


		//witch
		switch (xxxxxxxxxxx) 
		{
			case xxxxxxxxxxxxx:
				
				break;
			
			case xxxxxxxxxx:
				
				break;
			
			case xxxxxxxxxxxx:
				
				break;
			default:
			
		}

		// flagprimer
		if ((flagPrimer)||xxxxxxxxxx)
		{
			flagPrimer=false;
		}

		
	//findelbucle
	respuesta=confirm("desea seguir ingresando?");
	} while (respuesta);
	//findelbucle

	//promedio
	promedio=cantidad/total;

	//porcentaje
	porcenteje=cantidad*100/Total;

	document.write("<br> ");
	document.write("<br> ");
	document.write("<br> ");
	document.write("<br> ");
	document.write("<br> ");
	document.write("<br> ");
	document.write("<br> ");
	document.write("<br> ");
	document.write("<br> ");
	document.write("<br> ");

	
}
*/
//saltoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
/*
function mostrar()
{
	var nombreIngresado;
	
	nombreIngresado = prompt("ingrese nombre");
		
	txtIdNombre.value = nombreIngresado;
}
{
	valor=document.getElementById("Id").value;
	
	do 
	{
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);	
	} while (isNaN(numeroIngresado));


	sexo=prompt("ingrese sexo, “f” para masculino y “m” para femenino ");
	while (sexo !="m" && sexo !="f")
	{
		sexoIngresado=prompt("reingrese su sexo, “m” para masculino y “f” para femenino");
	}

	document.getElementById("txtIdSexo").value;
	
	do 
	{
		prompt("ingrese F o M");
	} while (sexo!="F"&&sexo!="M");
	
	do {
		
	} while (confirm("desea seguir ingresando datos?"));
	
	//Promedio
	promedio=sumaDeIngresos/contadorDeIngresos
	//porcentaje
	porcentaje = contador * 100/ contadorGeneral;
	//es par
	if (numeroIngresado %2 == 0)
	
	//resto
	operacion = dividendoIngresado % divisorIntegrado;
	alert("el reslo es " + operacion);//resto
}
.......................................................................................................................................................
function mostrar()
{
	let TOTAL_AVELLANEDA = 20000;
	let TOTAL_CABA = 25000;
	let TOTAL_LANUS = 15000;

	let pesoAvellaneda;
	let pesoCABA;
	let pesoLanus;
	let pesoProducto;
	let descripcionProducto;
	let deposito;
	let banderaPrimerPesoIngresado;
	let pesoMaximo;
	let productoMaximo;
	let ingresosCABA;
	let ingresosAvellaneda;
	let ingresosLanus;
	let mensajeDeSalida;

	pesoAvellaneda = 0;
	pesoCABA = 0;
	pesoLanus = 0;
	ingresosCABA = 0;
	ingresosAvellaneda = 0;
	ingresosLanus = 0;
	banderaPrimerPesoIngresado = true;

	do{

		do {
            deposito = prompt("Ingrese el deposito").toLowerCase();
        }while(deposito != "avellaneda" && deposito != "caba" && deposito != "lanus");

		do{
			descripcionProducto = prompt("Ingrese la descripcion del producto");
		}while(!isNaN(descripcionProducto));

		do{
			pesoProducto = prompt("Ingrese el peso del producto");
			pesoProducto = parseFloat(pesoProducto);
		}while(isNaN(pesoProducto));

		if(banderaPrimerPesoIngresado || pesoProducto > pesoMaximo){
			pesoMaximo = pesoProducto;
			productoMaximo = descripcionProducto;
			banderaPrimerPesoIngresado = false;
		}

		if(deposito == "caba"){
			if((pesoCABA + pesoProducto) > TOTAL_CABA){
				alert("Deposito lleno");
				continue;
			}
			else{
				pesoCABA += pesoProducto;
				ingresosCABA++;
			}
		}
		else{
			if(deposito == "avellaneda"){
				if((pesoAvellaneda + pesoProducto) > TOTAL_AVELLANEDA){
					alert("Deposito lleno");
					continue;
				}
				else{
					pesoAvellaneda += pesoProducto;
					ingresosAvellaneda++;
				}
			}
			else{
				if((pesoLanus + pesoProducto) > TOTAL_LANUS){
					alert("Deposito lleno");
					continue;
				}
				else{
					pesoLanus += pesoProducto;
					ingresosLanus++;
				}
			}
		}

	}while(confirm("Desea realizar otro deposito?"));

	//A:
	mensajeDeSalida = "a) El producto con mas peso es: " + productoMaximo + " con " + pesoMaximo + " KG.\ Su promedio es: " + pesoMaximo / (pesoAvellaneda + pesoCABA +pesoLanus);

	//B:
	if(ingresosAvellaneda > ingresosCABA && ingresosAvellaneda > ingresosLanus){
		mensajeDeSalida += "\nb) La bodega con mas ingresos es: Avellaneda";
	}
	else{
		if(ingresosCABA > ingresosLanus){
			mensajeDeSalida += "\nb) La bodega con mas ingresos es: CABA";
		}
		else{
			mensajeDeSalida += "\nb) La bodega con mas ingresos es: Lanus";
		}
	}

	//C:
	if(pesoAvellaneda > pesoCABA && pesoAvellaneda > pesoLanus){
		mensajeDeSalida += "\nc) La bodega mas llena es: Avellaneda";
	}
	else{
		if(pesoCABA > pesoLanus){
			mensajeDeSalida += "\nc) La bodega mas llena es: CABA";
		}
		else{
			mensajeDeSalida += "\nc) La bodega mas llena es: Lanus";
		}
	}

	//D:
	mensajeDeSalida += "\nd) Avellaneda: %" + pesoAvellaneda * 100 / TOTAL_AVELLANEDA + "\nCABA: % " + pesoCABA * 100 / TOTAL_CABA + "\nLanus: % " + pesoLanus * 100 / TOTAL_LANUS;

	alert(mensajeDeSalida);
}

----------------------------------------------------------------------------------------------------------------------------------------------------------
/*
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
11-De los positivos el más grande.
12-De los negativos el más chico.
    function mostrar()
    {
    var acumuladorNegativos;
    var numeroIngresado; 
    var acumuladorPositivos;
    var contadorPositivos;
    var contadorNegativos;
    var contadorCero;
    var contadorPares;
    var respuesta;
    var promedioPositivos;
    var promedioNegativos;
    var diferenciaAcumuladores;
    var menorNegativo;
    var mayorPositivo;
    var banderaDelMenorNegativo;
    var banderaDelMayorPositivo;
    var porcentajeNegativos;
    var porcentajePositivos;
    var contadorTotal;



    acumuladorNegativos = 0;
    acumuladorPositivos = 0;
    contadorPositivos = 0;
    contadorNegativos = 0;
    contadorCero = 0;
    contadorPares = 0;
    banderaDelMenorNegativo = true;
    banderaDelMayorPositivo = true;


    do {
        numeroIngresado = prompt("Ingrese un número: ");
        numeroIngresado = parseFloat(numeroIngresado);
        while (isNaN(numeroIngresado)) {
            alert("No ingreso un numero");
            numeroIngresado = prompt("Ingrese un número: ");
            numeroIngresado = parseFloat(numeroIngresado);
        }
        if (numeroIngresado < 0) {
            acumuladorNegativos = acumuladorNegativos + numeroIngresado;
            contadorNegativos ++;
            if (numeroIngresado < menorNegativo || banderaDelMenorNegativo == true) {
                menorNegativo = numeroIngresado;
                banderaDelMenorNegativo = false
            }
        }
        else
        {
            if (numeroIngresado > 0 ) {
                acumuladorPositivos = acumuladorPositivos + numeroIngresado;
                contadorPositivos ++;
                if (numeroIngresado > mayorPositivo || banderaDelMayorPositivo == true) {
                    mayorPositivo = numeroIngresado;
                    banderaDelMayorPositivo = false;
                }
            }
            else
            {
                if(numeroIngresado == 0){
                    contadorCero ++;
                }
            }
        }
        if (numeroIngresado %2 == 0) {
            contadorPares ++;
            //alert("Es par");
        }
        respuesta = confirm("Quiere seguir ingresando números?");
    } while (respuesta);

        diferenciaAcumuladores = acumuladorPositivos + acumuladorNegativos;

    if (contadorPositivos == 0) {
        promedioPositivos = 0;
    } else {
        promedioPositivos = acumuladorPositivos / contadorPositivos;
    }
    if (contadorNegativos == 0) {
        promedioNegativos = 0
    } else {
        promedioNegativos = acumuladorNegativos / contadorNegativos;
    }

    contadorTotal = acumuladorNegativos + acumuladorPositivos;

    porcentajePositivos=(acumuladorPositivos/100)*contadorTotal;
    porcentajeNegativos=(acumuladorNegativos/100)*contadorTotal; 	

    document.write("La suma de los negativos es: " + acumuladorNegativos.toFixed(2) + "<br>" +
    "La suma de los positivos es: " + acumuladorPositivos.toFixed(2) + "<br>" +
    "El contador de positivos es: " + contadorPositivos + "<br>" +
    "El contador de negativos es: " + contadorNegativos + "<br>" +
    "El contador de ceros es: " + contadorCero + "<br>" +
    "El contador de pares es: " + contadorPares + "<br>" +
    "El promdedio de los positivos es: " + promedioPositivos.toFixed(2) + "<br>" +
    "El promdedio de los negativos es: " + promedioNegativos.toFixed(2) + "<br>" +
    "La diferencia entre positivos y negativos es: " + diferenciaAcumuladores.toFixed(2) + "<br>" +
    "El menor negativo es: " + menorNegativo + "<br>" + 
    "El mayor positivo es: " + mayorPositivo + "<br>" +
    "El porcentaje de los numeros negativos es: " + porcentajeNegativos.toFixed(2) + "<br>" +
    "El porcentaje de los numeros positivos es: " + porcentajePositivos.toFixed(2) + "<br>" +
    "El mayor de los numeros positivos es: " + mayorPositivo + "<br>" +
    "El mayor de los numeros negativos es: " + menorNegativo + "<br>");

    }
------------------------------------------------------------------------------------------------------------------------------------------------------
Ejercicio 2

Dr. Gregory Cat (Diagnostico Veterinario)
Para el hospital de mascotas: Princeton-Plainsboro de Nueva Jersey.

Es necesario registrar el ingreso de las mascotas al hospital, para esto hay que considerar
los siguientes datos y encasillarlos en ciertos diagnósticos para poder derivarlos adecuadamente:

Nombre de la mascota
Edad (Validar 1 - 20)
Tipo: (Validar “gato”, “perro”, “hamster”)
Peso: (Más de 0)
Diagnostico: (Validar “problemas digestivos”, “otitis”, “alergias en la piel”, “parasitos”, 
“picazon de abeja”)
Vacuna antirrábica (validar “si”, ”no”)

Informes:

a) Nombre de la mascota más vieja con la vacuna antirrábica
b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
c) El tipo de mascota con más ingresos por problemas digestivos.
d) Nombre, edad y diagnóstico de la mascota más joven ingresada.
e) Cantidad de perros ingresados por otitis.

    function mostrar()
    {
        var nombreMascota;
        var edadMascota;
        var tipoMascota;
        var peso;
        var diagnostico;
        var vacunaAntirrabica;
        var banderaMascotaMasVieja;
        var mascotaMasViejaConVacuna;
        var nombreMascotaMasViejaConVacuna;
        var contadorMascotaSinVacunaConParasitos;
        var banderaProblemasDigestivos;
        var contadorProblemasDigestivosGato;
        var contadorProblemasDigestivosPerro;
        var contadorProblemasDigestivosHamster;
        var tipoMascotaProblemasDigestivos;
        var banderaMascotaMasJoven;
        var edadMasJoven;
        var nombreMascotaMasJoven;
        var diagnosticoMasJoven;
        var banderaPerroOtitis;
        var contadorPerroOtitis;
        
        var respuesta;

        contadorProblemasDigestivosGato = 0;
        contadorProblemasDigestivosPerro = 0;
        contadorProblemasDigestivosHamster = 0;
        contadorPerroOtitis = 0;

        banderaMascotaMasVieja = true;
        banderaPerroOtitis = true;
        banderaMascotaMasJoven = true;

        do {
            
            nombreMascota = prompt("Ingrese Nombre de su mascota: ");
            do {
                edadMascota = prompt("Ingrese la edad de su mascota: ");
                edadMascota = parseInt(edadMascota);
            } while (isNaN(edadMascota) || edadMascota < 0 && edadMascota < 21);
            do {
                tipoMascota = prompt("Ingrese Tipo de mascota: gato, perro o hamster");
            } while (tipoMascota != "gato" && tipoMascota != "perro" && tipoMascota !="hamster");

            do {
                peso= prompt("ingrese el peso de su mascota");
                peso= parseFloat(peso);
            } while (isNaN(peso) || peso < 0);

            do {
                diagnostico = prompt("Ingrese diagnostico de su mascota: problemas digestivos, otitis, alergias en la piel, parasitos, picazon de abeja");
            } while (diagnostico != "problemas digestivos" && diagnostico != "otitis" && diagnostico != "alergias en la piel" && diagnostico != "parasitos" && diagnostico != "picazon de abeja");

            do {
                vacunaAntirrabica = prompt("Se ha aplicado la vacuna antirrabica? Si o No");
            } while (vacunaAntirrabica != "Si" && vacunaAntirrabica != "No");

            
            if (vacunaAntirrabica == "Si") {
                if(mascotaMasViejaConVacuna < edadMascota || banderaMascotaMasVieja == true) {
                    mascotaMasViejaConVacuna = edadMascota;
                    nombreMascotaMasViejaConVacuna = nombreMascota;
                    banderaMascotaMasVieja = false;
                }
            }
            else{
                if (diagnostico == "parasitos") {
                    contadorMascotaSinVacunaConParasitos++
                }
            }


            respuesta = confirm("¿Desea cargar otra mascota?")
        } while (respuesta);

        switch (tipoMascota) {
            case "gato":
                if (diagnostico == "problemas digestivos" || banderaProblemasDigestivos == true) {
                    contadorProblemasDigestivosGato++;
                    banderaProblemasDigestivos = false;
                }
                break;

            case "perro":
                if (diagnostico == "problemas digestivos" || banderaProblemasDigestivos == true) {
                    contadorProblemasDigestivosPerro++;
                    banderaProblemasDigestivos = false;
                }
                if(diagnostico == "otitis" || banderaPerroOtitis == true){
                    contadorPerroOtitis++;
                    banderaPerroOtitis = false;
                }
                break;
            
            case "hamster":
                if (diagnostico == "problemas digestivos" || banderaProblemasDigestivos == true) {
                    contadorProblemasDigestivosHamster++;
                    banderaProblemasDigestivos = false;
                }
                break;
        }

        if(contadorProblemasDigestivosGato > contadorProblemasDigestivosHamster && contadorProblemasDigestivosGato > contadorProblemasDigestivosPerro){
            tipoMascotaProblemasDigestivos = "Gato";
        }else{
            if(contadorProblemasDigestivosPerro > contadorProblemasDigestivosGato){
                tipoMascotaProblemasDigestivos = "Perro";

            }else{
                tipoMascotaProblemasDigestivos = "Hamster;"
            }
        }

        if (edadMasJoven < edadMascota || banderaMascotaMasJoven == true) {
            edadMasJoven = edadMascota;
            nombreMascotaMasJoven = nombreMascota;
            diagnosticoMasJoven = diagnostico;
            banderaMascotaMasJoven = false;
        }

        document.write("Nombre de la mascota más vieja con la vacuna antirrábica: " + nombreMascotaMasViejaConVacuna + "<br>");

        if (contadorMascotaSinVacunaConParasitos > 0) {
            document.write("Cantidad de mascotas sin vacuna antirrábica y con parásitos es:" + contadorMascotaSinVacunaConParasitos + "<br>");
        }

        if (banderaProblemasDigestivos = false) {
            document.write("El tipo de mascota con más ingresos por problemas digestivos: " + tipoMascotaProblemasDigestivos + "<br>");
        }

        if (contadorPerroOtitis > 0) {
            document.write("Cantidad de perros ingresados por otitis: " + contadorPerroOtitis + "<br>");
        }
        document.write("Mascota mas joven: <br> Nombre: " + nombreMascotaMasJoven + "<br> Edad: " + edadMasJoven + ".<br> años. <br> Diagnostico: " + diagnosticoMasJoven);
        
    }
---------------------------------------------------------------------------------------------------------------------------------------
 /* Apellido: Quiroga 
 * Nombre: María Emilia 
 * Comisión: Z
 * Tutor: Thiago
 * 
Ejercicio 1
La Premier League de Inglaterra necesita un sistema capaz de reunir las estadisticas de los 
jugadores que la integran.
Para ellos se pide realizar una app.

Se debe ingresar por cada jugador

-Nombre del jugador
-Nacionalidad
-Posición (Arquero, Defensor, Mediocampista o Delantero)
-Cantidad de Tarjetas Rojas recibidas
-Goles 

Se necesita saber

a)El goleador del torneo
b)El jugador Argentino con menos rojas recibidas.
c)El porcentaje de jugadores Ingleses de la liga

NOTA: Deben poder ingresarse todos números positivos, no se deben pueden ingresar números negativos.

function mostrar()
{
	var nombreJugador;
    var acumuladorJugador;
    var nacionalidad;
    var argentinoMenorCantidadRojas;
    var acumuladorIngles;
    var porcentajeIngleses;
    var posicion;
    var tarjetasRojasRecibidas;
    var menosRojasRecibidas;
    var acumuladorTarjetas;
    var banderaPrimerTarjeta;
    var golesRealizados;
    var mayorCantidadGoles;
    var aucumuladorGoles;
    var banderaPrimerGol;
    var goleador;
    var respuesta;

    acumuladorIngles = 0;
    acumuladorJugador = 0;
    acumuladorTarjetas = 0;
    aucumuladorGoles = 0;

    banderaPrimerTarjeta= true;
    banderaPrimerGol = true;
    

    do {
        nombreJugador = prompt("Ingrese Nombre de Jugador:");
        nacionalidad = prompt("Ingrese nacionalidad del Jugador: \nArgentino \nIngles \nChino");
            if (nacionalidad != "Argentino" && nacionalidad != "Ingles" && nacionalidad != "Chino") {
                nacionalidad = prompt("Ingrese nacionalidad del Jugador: \nArgentino \nIngles \nChino");
            }
        posicion = prompt("Ingrese la posicisión del jugador: \nArquero \nDefensor \n Mediocampista \nDelantero");
            if (posicion != "Arquero" && posicion != "Defensor" && posicion != "Mediocampista" && posicion != "Delantero") {
                posicion = prompt("Ingrese la posicisión del jugador: \nArquero \nDefensor \n Mediocampista \nDelantero");
            }
        tarjetasRojasRecibidas = prompt("Ingrese la cantidad de tarjetas rojas que el jugador ha recibido: ");
        tarjetasRojasRecibidas = parseInt(tarjetasRojasRecibidas);
        if (tarjetasRojasRecibidas > 1) {
            acumuladorTarjetas = acumuladorTarjetas + tarjetasRojasRecibidas;
            acumuladorTarjetas ++;
        }
        golesRealizados = prompt("Ingrese la cantidad de goles que realizó: ");
        golesRealizados = parseInt(golesRealizados);
        if (golesRealizados > 0 ) {
            aucumuladorGoles = aucumuladorGoles + golesRealizados;
            aucumuladorGoles ++;
        }
        respuesta= confirm("¿Desea ingresar a otro jugador?");
    } while (respuesta);

    if (golesRealizados > mayorCantidadGoles || banderaPrimerGol == true ) {
        goleador = nombreJugador;
        banderaPrimerGol = false; 
    }

    switch (nacionalidad) {
        case "Argentino":
            if (tarjetasRojasRecibidas < menosRojasRecibidas || banderaPrimerTarjeta == true) {
                menosRojasRecibidas = tarjetasRojasRecibidas;
                argentinoMenorCantidadRojas = nombreJugador;
                banderaPrimerTarjeta = false;
            }
            break;
        case "Ingles":
            acumuladorIngles = acumuladorIngles + nacionalidad;
            acumuladorIngles ++;
            break;

        default:
            acumuladorJugador = acumuladorJugador + nombreJugador;
            acumuladorJugador++

    }
    porcentajeIngleses = (acumuladorIngles/100)*acumuladorJugador;

    document.write("El goleador es: " + goleador + "<br>" +
    "El Argentino con menos rojas recibidas es: " + argentinoMenorCantidadRojas + "<br>" +
    "El porcentaje de jugadores Ingleses es: " + porcentajeIngleses);
}
------------------------------------------------------------------------------------------------------------------------------------------------------
3. Se debe llevar a cabo el registro de ingresos a un parque de diversiones.  Dicho parque se caracteriza por su variedad de montañas rusas. 
Se pide el ingreso del nombre del visitante, la edad (mayores a 12 años), tipo de pasaporte (sin pasaporte, convencional, premium), 
tipo de montaña rusa (Fantasma, Acuática, Adrenalina100%). 
Tener en cuenta:
El valor de acceso a todas las montañas rusas es de $500.
Los visitantes sin pasaporte, abonan al momento de subir al juego. 
Los visitantes con pasaporte convencional, abonan el 30% del valor de la entrada.
Los visitantes con pasaporte premium, no abonan nada.
Se necesita saber: 
La recaudación en efectivo por las tres montañas rusas. -- acumulador total sin pasaporte y convencional
Porcentaje de visitantes que se subieron a cada montaña rusa. -- acumulador montaña / contador;
Cuál es el tipo de pasaporte que mas se utilizo (incluyendo los visitantes sin pasaporte)

    function mostrar() {
        var nombre;
        var edad;
        var tipoPasaporte;
        var tipoMontañaRusa;
        var valorAcceso;
        var contadorGeneral;
        var recuadacionGeneral;
        var recaudacionAcuatica;
        var recaudacionAdrenalina;
        var recaudacionFantasma;
        var importePasaporteConvencional;
        var acumuladorAdrenalina;
        var acumuladorAcuatica;
        var acumuladorFantasma;
        var porcentajeAdrenalina;
        var porcentajeFantasma;
        var porcentajeAcuatica;
        var contadorPasaporteConvencional;
        var contadorPasaportePremium;
        var contadorSinPasaporte;
        var pasaporteMasUsado;
        var respuesta;
        
        contadorGeneral =0;
        valorAcceso = 500;
        importePasaporteConvencional = valorAcceso *0.30;
        recuadacionGeneral = 0;
        recaudacionAcuatica = 0;
        recaudacionAdrenalina = 0;
        recaudacionFantasma = 0;
        acumuladorAcuatica = 0;
        acumuladorAdrenalina = 0;
        acumuladorFantasma = 0;
        contadorPasaporteConvencional = 0;
        contadorPasaportePremium = 0;
        contadorSinPasaporte = 0;
        
        nombre = prompt("Ingrese nombre:");
        do {
            nombre = prompt("Ingrese nombre:");
            do {
                edad = prompt("Ingrese edad del visitante. Edad mínima es 12 años:");
                edad = parseInt(edad);
            } while (isNaN(edad) || edad < 12);
        
            do {
                tipoPasaporte = prompt("Ingrese su tipo de pasaporte: sin pasaporte, convencional, premium");
            } while (tipoPasaporte != "sin pasaporte" && tipoPasaporte != "convencional" && tipoPasaporte != "premium");
        
            do {
                tipoMontañaRusa = prompt("Ingrese el tipo de montaña rusa: Fantasma, Acuática, Adrenalina100% ")
            } while (tipoMontañaRusa != "fantasma" && tipoMontañaRusa != "acuatica" && tipoMontañaRusa != "adrenalina100%");
        
            switch (tipoMontañaRusa) {
                case "acuatica":
                    if (tipoPasaporte == "convencional") {
                        valorAcceso = importePasaporteConvencional;
                        recaudacionAcuatica = recaudacionAcuatica + valorAcceso;
                        contadorPasaporteConvencional++;
                    }
                    else{
                        if (tipoPasaporte == "sin pasaporte") {
                            recaudacionAcuatica = recaudacionAcuatica+ valorAcceso;
                            contadorSinPasaporte++;
                        }
                        else{
                            contadorPasaportePremium++;
                        }
                    }
                    acumuladorAcuatica ++;
                    break;
        
                case "adrenalina100%":	
                if (tipoPasaporte == "convencional") {
                    valorAcceso = importePasaporteConvencional;
                    recaudacionAdrenalina = recaudacionAdrenalina + valorAcceso;
                    contadorPasaporteConvencional++;
                }
                else{
                    if (tipoPasaporte == "sin pasaporte") {
                        recaudacionAdrenalina = recaudacionAdrenalina+ valorAcceso;
                        contadorSinPasaporte++;
                    }
                    else{
                        contadorPasaportePremium++;
                    }
                }
                acumuladorAdrenalina++
                break;
                    
                default:
                    acumuladorFantasma++;
                    if (tipoPasaporte == "convencional") {
                        valorAcceso = importePasaporteConvencional;
                        recaudacionFantasma = recaudacionFantasma + valorAcceso;
                        contadorPasaporteConvencional++;
                    }
                    else{
                        if (tipoPasaporte == "sin pasaporte") {
                            recaudacionFantasma = recaudacionFantasma+ valorAcceso;
                            contadorSinPasaporte ++;
                        }
                        else{
                            contadorPasaportePremium++;
                        }
                    }
                
            }
        
            contadorGeneral ++;
            respuesta = confirm("Desea ingresar otro visitante?");
        
        } while (respuesta);
        
        if (contadorPasaporteConvencional > contadorPasaportePremium && contadorPasaporteConvencional> contadorSinPasaporte) {
            pasaporteMasUsado = "pasaporte convencional";
        }
        else {
            if (contadorPasaportePremium > contadorPasaporteConvencional && contadorPasaportePremium> contadorSinPasaporte) {
                pasaporteMasUsado = "premium";
            }
            else{
                pasaporteMasUsado = "sin pasaporte";
            }
        
        recuadacionGeneral = recaudacionAcuatica + recaudacionAdrenalina + recaudacionFantasma;
        document.write("La recaudación en efectivo por las tres montañas rusas: " + recuadacionGeneral);
        if (acumuladorAcuatica > 0) {
            porcentajeAcuatica = (acumuladorAcuatica*100) / contadorGeneral;
            document.write("Porcentaje de la montaña acuatica: " + porcentajeAcuatica + "%");
        }
        
        if (acumuladorAdrenalina > 0) {
            porcentajeAdrenalina = (acumuladorAdrenalina *100) / contadorGeneral;
            document.write("Porcentaje de la montaña adrenalina100% fue: " + porcentajeAdrenalina + "%");
        }
        
        if (acumuladorFantasma > 0) {
            porcentajeFantasma = (acumuladorFantasma*100) / contadorGeneral;
            document.write("El porcentaje de la montaña rusa fantasma fue: " + porcentajeFantasma + "%");
        }
        
        document.write("El pasaporte más usado fue: "+pasaporteMasUsado);
        }
        
        }
   ---------------------------------------------------------------------------------------------------------------------------------------------------
    /* Apellido: Quiroga 
 * Nombre: María Emilia 
 * Comisión: Z
 * Tutor: Thiago
 * 
Ejercicio 1
La Premier League de Inglaterra necesita un sistema capaz de reunir las estadisticas de los 
jugadores que la integran.
Para ellos se pide realizar una app.

Se debe ingresar por cada jugador

-Nombre del jugador
-Nacionalidad
-Posición (Arquero, Defensor, Mediocampista o Delantero)
-Cantidad de Tarjetas Rojas recibidas
-Goles 

Se necesita saber

a)El goleador del torneo
b)El jugador Argentino con menos rojas recibidas.
c)El porcentaje de jugadores Ingleses de la liga

NOTA: Deben poder ingresarse todos números positivos, no se deben pueden ingresar números negativos.

function mostrar()
{
	var nombreJugador;
    var acumuladorJugador;
    var nacionalidad;
    var argentinoMenorCantidadRojas;
    var acumuladorIngles;
    var porcentajeIngleses;
    var posicion;
    var tarjetasRojasRecibidas;
    var menosRojasRecibidas;
    var acumuladorTarjetas;
    var banderaPrimerTarjeta;
    var golesRealizados;
    var mayorCantidadGoles;
    var aucumuladorGoles;
    var banderaPrimerGol;
    var goleador;
    var respuesta;

    acumuladorIngles = 0;
    acumuladorJugador = 0;
    acumuladorTarjetas = 0;
    aucumuladorGoles = 0;

    banderaPrimerTarjeta= true;
    banderaPrimerGol = true;
    

    do {
        nombreJugador = prompt("Ingrese Nombre de Jugador:");
        nacionalidad = prompt("Ingrese nacionalidad del Jugador: \nArgentino \nIngles \nChino");
            if (nacionalidad != "Argentino" && nacionalidad != "Ingles" && nacionalidad != "Chino") {
                nacionalidad = prompt("Ingrese nacionalidad del Jugador: \nArgentino \nIngles \nChino");
            }
        posicion = prompt("Ingrese la posicisión del jugador: \nArquero \nDefensor \n Mediocampista \nDelantero");
            if (posicion != "Arquero" && posicion != "Defensor" && posicion != "Mediocampista" && posicion != "Delantero") {
                posicion = prompt("Ingrese la posicisión del jugador: \nArquero \nDefensor \n Mediocampista \nDelantero");
            }
        tarjetasRojasRecibidas = prompt("Ingrese la cantidad de tarjetas rojas que el jugador ha recibido: ");
        tarjetasRojasRecibidas = parseInt(tarjetasRojasRecibidas);
        if (tarjetasRojasRecibidas > 1) {
            acumuladorTarjetas = acumuladorTarjetas + tarjetasRojasRecibidas;
            acumuladorTarjetas ++;
        }
        golesRealizados = prompt("Ingrese la cantidad de goles que realizó: ");
        golesRealizados = parseInt(golesRealizados);
        if (golesRealizados > 0 ) {
            aucumuladorGoles = aucumuladorGoles + golesRealizados;
            aucumuladorGoles ++;
        }
        respuesta= confirm("¿Desea ingresar a otro jugador?");
    } while (respuesta);

    if (golesRealizados > mayorCantidadGoles || banderaPrimerGol == true ) {
        goleador = nombreJugador;
        banderaPrimerGol = false; 
    }

    switch (nacionalidad) {
        case "Argentino":
            if (tarjetasRojasRecibidas < menosRojasRecibidas || banderaPrimerTarjeta == true) {
                menosRojasRecibidas = tarjetasRojasRecibidas;
                argentinoMenorCantidadRojas = nombreJugador;
                banderaPrimerTarjeta = false;
            }
            break;
        case "Ingles":
            acumuladorIngles = acumuladorIngles + nacionalidad;
            acumuladorIngles ++;
            break;

        default:
            acumuladorJugador = acumuladorJugador + nombreJugador;
            acumuladorJugador++

    }
    porcentajeIngleses = (acumuladorIngles/100)*acumuladorJugador;

    document.write("El goleador es: " + goleador + "<br>" +
    "El Argentino con menos rojas recibidas es: " + argentinoMenorCantidadRojas + "<br>" +
    "El porcentaje de jugadores Ingleses es: " + porcentajeIngleses);
}
 ----------------------------------------------------------------------------------------------------------------------------------------------------
 /*
2. Una librería que se especializa en venta de libros importados desea calcular ciertas métricas en base a las ventas de sus productos (No se sabe cuántos).
Se ingresa de cada venta:
Título del libro
Género: (ciencia ficción – Drama – Terror)
Material del libro (rústica – tapa dura)
Importe (No pueden ser números negativos ni mayor a los 30000)
Se pide:                          	
El más barato de los libros de drama con su importe.
Qué porcentaje de cada género se vendió.
Informar el título del primer libro de drama que se vendió.

    function mostrar() {
        var tituloLibro;
        var genero;
        var material;
        var importeIngresado;
        var banderaPrimerLibro;
        var primerLibro;
        var banderaPrimerDrama;
        var dramaMasBarato;
        var precioDramaBarato;
        var contadorDrama;
        var contadorCienciaFiccion;
        var contadorTerror;
        var contadorGeneral;
        var porcentajeDrama;
        var porcentajeTerror;
        var porcentajeCienciaFiccion;
        var respuesta;

        contadorCienciaFiccion = 0;
        contadorDrama = 0;
        contadorTerror = 0;
        contadorGeneral = 0;

        banderaPrimerLibro = true;
        banderaPrimerDrama = true;
        
        do {
            do {
                tituloLibro = prompt("Ingrese título:");
            } while (!isNaN);
            
            do {
                genero = prompt("Ingrese genero: ciencia ficcion, drama o terror");
            } while (genero !="ciendcia ficcion" && genero !="drama" && genero !="terror");

            do {
                material = prompt("Ingrese material del libro: rustic0 o tapa dura");
            } while (material != "rustico" && material != "tapa dura");

            do {
                importeIngresado = prompt("Ingrese importe: ");
            } while (isNaN(importeIngresado) || importeIngresado < 0 || importeIngresado > 30000);

            if (banderaPrimerLibro == true) {
                primerLibro = tituloLibro;
                banderaPrimerLibro = false;
            }

            switch (genero) {
                case "drama":
                    if (precioDramaBarato > importeIngresado || banderaPrimerDrama == true) {
                        precioDramaBarato= importeIngresado;
                        dramaMasBarato = tituloLibro;
                        banderaPrimerDrama = false;
                    }
                    contadorDrama++;
                    break;
                case "ciendcia ficcion":
                    contadorCienciaFiccion++;
                    break;
            
                default:
                    contadorTerror++;
            }
            contadorGeneral++;
            respuesta = confirm("Desea ingresar otra compra?");
        } while (respuesta);

        porcentajeCienciaFiccion = contadorCienciaFiccion / contadorGeneral;
        porcentajeDrama = contadorDrama / contadorGeneral;
        porcentajeTerror = contadorTerror / contadorGeneral;
        
        if (banderaPrimerDrama = false) {
            document.write("El nombre del drama mas barato: " + dramaMasBarato + "su precio: $"+precioDramaBarato);
            document.write("Porcentaje de DRAMA que se vendio: " + porcentajeDrama + "%");
        }

        if (contadorCienciaFiccion > 0) {
            document.write("Porcentaje de CF vendido: " + porcentajeCienciaFiccion + "%");
        }
        else{
                if (contadorTerror > 0) {
                    document.write("Porcentaje terror que se vendio: " + porcentajeTerror + "%");
                }
            }
        
        document.write("Primer libro vendido: " + primerLibro);
    } 
-------------------------------------------------------------------------------------------------------------------------------------------------------
/*

alumno: Matías Towers

El dueño de una tienda dedicada a la compra/venta de cartas de Yu-Gi-Oh!
desea ingresar en el sistema las ventas realizadas en el dia de la fecha y conocer ciertos datos en base a las cartas
que se vendieron.
Se ingresara hasta que el usuario decida:
* Nombre de la carta.
* Tipo de carta: Validar "monstruo", "magica", "trampa".
* Rareza: Validar "rara", "super rara", "ultra rara".
* Precio: Validar que no sea 0 o negativo.

Se pide informar por document.write:

A) El nombre y rareza de la carta tipo "trampa" con mayor precio.
B) Cuantas cartas de rareza "ultra rara" y de tipo "magica" o "monstruo" fueron vendidas.
C) El promedio de precio de las cartas de por tipo.


function mostrar ()
{
    //declaracion de variables
	var nombreIngresado;
	var tipoIngresado;
	var rarezaIngresado;
	var precioIngresado;
	var respuesta;
	var flagTrampa;
	var precioMayorCarta;
	var nombreMayorPrecio;
	var rarezaMayorPrecio;
	var contadorUltraRara;
	var contadorMagica;
	var contadorMonstruo;

	//inicializacion de variables
	respuesta = true;
	flagTrampa = true;
	contadorUltraRara = 0;
	contadorMagica = 0;
	contadorMonstruo = 0;

	//inicio validación
	do
	{
		nombreIngresado = prompt("Ingrese el nombre de la carta");

		do
		{
			tipoIngresado = prompt("Tipo de carta");
		}while(tipoIngresado != "monstruo" && tipoIngresado != "magica" && tipoIngresado != "trampa");

		do
		{
			rarezaIngresado = prompt("Tipo de rareza");
		}while(rarezaIngresado != "rara" && rarezaIngresado != "super rara" && rarezaIngresado != "ultra rara");

		do {
			precioIngresado = prompt("Ingrese Precio");
			precioIngresado = parseFloat(precioIngresado);
		}while(isNaN(precioIngresado) || precioIngresado < 1);


		
		A) El nombre y rareza de la carta tipo "trampa" con mayor precio.
		
		if (tipoIngresado == "trampa" && (flagTrampa || precioMayorCarta < precioIngresado))
		{
			precioMayorCarta = precioIngresado;
			nombreMayorPrecio = nombreIngresado;
			rarezaMayorPrecio = rarezaIngresado;
			flagTrampa = false;
		}
		/*
		B) Cuantas cartas de rareza "ultra rara" y de tipo "magica" o "monstruo" fueron vendidas.
		C) El promedio de precio de las cartas de por tipo.
		
		if (tipoIngresado = "ultra rara") 
		{
			switch (key) {
				case value:
					
					break;
			
				default:
					break;
			}
		}




		respuesta = confirm("Quiere seguir ingresando cartas");
	while(respuesta);
	

	//salida de datos por document.write
	document.write();
-------------------------------------------------------------------------------------------------------------------------------------------------
/*A)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados:

nombre del titular ,
lugar ( “Puerto Madryn”, “Villa Gessel” o “Córdoba”),
temporada(“alta”, “baja”),
cantidad de días que durará el viaje.
importe del viaje
altura del pasajero
peso del pasajero
sexo pasajero (F o M o NB)
Viaja con equipaje de mano?
paga con mercado , tarjeta o efectivo
1 
a- cantidad de personas que viajan en cada temporada
b- el peso acumulado de todos los que viajan a villa gessel
c- el lugar con la mayor cantidad de días acumulados
d- la suma de todos los importes
2
e-el nombre del más pesado de los pasajeros y el del más liviano
f-el lugar donde se pagó el mayor importe
g-el nombre de la mujer más alta
3
h- Cuál fue la forma de pago más utilizada
i- en qué temporada se viajó más
j- qué lugar tuvo más pasajeros

4
k- qué porcentaje usa equipaje de mano
l- que porcentaje hay de cada sexo

function mostrar()
{
	var nombreTitular;
	var lugar;
	var cantidadDiasViaje;
	var temporada;
	var importeViaje;
	var alturaPasajero;
	var sexoPasajero;
	var pesoPasajero;
	var equipajeDeMano;
	var pago;
	var contadorPersonasAlta;
	var contadorPersonasBaja;
	var acumuladorPesoVillaGessel;
	var acumuladorDiasVillaGessel;
	var acumuladorDiasCordoba;
	var acumuladorDiasPuertoMadryn;
	var acumuladorImportes;
	var respuesta;
	var mayorCantidadDeDias;
	var MasPesadoPasajeros;
	var nombrePasajeroMasPesado;
	var flagMasPesado;
	var pasajeroMenosPesado;
	var nombrePasajeroMasLiviano;
	var flagMasLiviano;
	var acumuladorImporteVillaGessel;
	var acumuladorImporteCordoba;
	var acumuladorImportePuertoMadryn;
	var importeMasCaro;
	var nombreMujerMasAlta;
	var mujerMasAlta;
	var flagMujerMasAlta;
	var temporadaMasViaje;
	var contadorMercadoPago;
	var contadorTarjeta;
	var contadorEfectivo;
	var metodoDePagoMasUsado;
	var contadorPasajerosCordoba;
	var contadorPasajerosPuertoMadryn;
	var contadorPasajerosVillaGessel;
	var lugarMasConcurrido;
	var contadorMujeres;
	var contadorHombres;
	var contadorNoBinario;
	var contadorEquipajeDeMano;
	var porcentajeEquipajeDeMano;
	var porcentajeHombres;
	var porcentajesNoBinario;
	var porcentajeMujeres;
	var contadorPasajeros;

	contadorPersonasAlta=0;
	contadorPersonasBaja=0;
	acumuladorPesoVillaGessel=0;
	acumuladorDiasVillaGessel=0;
	acumuladorDiasCordoba=0;
	acumuladorDiasPuertoMadryn=0;
	acumuladorImportes=0;
	flagMasPesado=true;
	flagMasLiviano=true;
	acumuladorImportePuertoMadryn=0;
	acumuladorImporteCordoba=0;
	acumuladorImporteVillaGessel=0;
	flagMujerMasAlta=true;
	contadorEfectivo=0;
	contadorMercadoPago=0;
	contadorTarjeta=0;
	contadorPasajerosPuertoMadryn=0;
	contadorPasajerosCordoba=0;
	contadorPasajerosVillaGessel=0;
	contadorEquipajeDeMano=0;
	contadorMujeres=0;
	contadorHombres=0;
	contadorNoBinario=0;
	contadorPasajeros=0;
	
	

	do
	{
		do
		{
			nombreTitular= prompt("ingrese el nombre del titular del viaje");
		}while(!isNaN(nombreTitular));

		do
		{
			lugar= prompt("ingrese destino del viaje(puerto madryn,villa gessel o cordoba)");
			lugar= lugar.toLowerCase();
		}while(lugar!="puerto madryn" && lugar!="villa gessel" && lugar!="cordoba");

		do
		{
			temporada= prompt("en que temporada viaja(alta o baja)");
			temporada= temporada.toLowerCase();
		}while(temporada !="alta" && temporada!="baja");

		do
		{
			cantidadDiasViaje= prompt("cuantos dias va a viajar");
			cantidadDiasViaje= parseInt(cantidadDiasViaje);
		}while(isNaN(cantidadDiasViaje) || cantidadDiasViaje < 1);

		do
		{
			importeViaje= prompt("cuanto cuesta el viaje que vio");
			importeViaje= parseFloat(importeViaje);
		}while(isNaN(importeViaje) || importeViaje < 1);

		do
		{
			alturaPasajero= prompt("cual es su altura");
			alturaPasajero= parseFloat(alturaPasajero);
		}while(isNaN(alturaPasajero) || alturaPasajero < 1 );

		do
		{
			sexoPasajero= prompt("ingrese la sexualidad del pasajero (femenino, masculino o no binario)");
			sexoPasajero= sexoPasajero.toLowerCase();
		}while(sexoPasajero != "femenino" && sexoPasajero!= "masculino" && sexoPasajero!= "no binario");

		do
		{
			pesoPasajero= prompt("cual es su peso");
			pesoPasajero= parseFloat(pesoPasajero);
		}while(isNaN(pesoPasajero) || pesoPasajero < 0);

		do
		{
			equipajeDeMano= prompt("lleva equipaje de mano");
		}while(equipajeDeMano!= "si" && equipajeDeMano !="no");

		do
		{
			pago= prompt("que forma de pago va a usar (mercadopago,tarjeta o efectivo)");
			pago= pago.toLowerCase();
		}while(pago!="mercadopago" && pago!="efectivo" && pago!="tarjeta");

		switch(temporada)
		{
			case "alta":
				contadorPersonasAlta++;
			break;
			case "baja":
				contadorPersonasBaja++;
		}

		switch(lugar)
		{
			case "villa gessel":
				acumuladorPesoVillaGessel+=pesoPasajero;
				acumuladorDiasVillaGessel+= cantidadDiasViaje;
				acumuladorImporteVillaGessel+= importeViaje;
				contadorPasajerosVillaGessel++;
			break;
			case "cordoba":
				acumuladorDiasCordoba+= cantidadDiasViaje;
				acumuladorImporteCordoba+= importeViaje;
				contadorPasajerosCordoba++;
			break;
			case "puerto madryn":
				acumuladorDiasPuertoMadryn+= cantidadDiasViaje;
				acumuladorDiasPuertoMadryn+= importeViaje;
				contadorPasajerosPuertoMadryn++;
		}	

		switch(pago)
		{
			case "efectivo":
				contadorEfectivo++;
			break;
			case "mercadopago":
				contadorMercadoPago++;
			break;
			case "tarjeta":
				contadorTarjeta++;
		}

		if(MasPesadoPasajeros < pesoPasajero || flagMasPesado == true)
		{
			MasPesadoPasajeros= pesoPasajero;
			nombrePasajeroMasPesado= nombreTitular;
			flagMasPesado=false;
		}
	
		if(pasajeroMenosPesado > pesoPasajero || flagMasLiviano == true)
		{
			pasajeroMenosPesado = pesoPasajero;
			nombrePasajeroMasLiviano= nombreTitular;
			flagMasLiviano= false;
		}

		switch(sexoPasajero)
		{
			case "femenino":
				contadorMujeres++;
				if(mujerMasAlta < alturaPasajero || flagMujerMasAlta == true)
				{
					mujerMasAlta = alturaPasajero;
					nombreMujerMasAlta= nombreTitular;
					flagMujerMasAlta=false;
				}
			break;
			case "masculino":
				contadorHombres++;
			break;
			case "no binario":
				contadorNoBinario++;
		}

		if(equipajeDeMano== "si")
		{
			contadorEquipajeDeMano++;
		}

		acumuladorImportes += importeViaje;
		contadorPasajeros++;
		respuesta= confirm("¿desea seguir ingresando?");	
	}while(respuesta);

	porcentajeHombres = (contadorHombres * 100) / contadorPasajeros;
	porcentajeMujeres= (contadorMujeres * 100) / contadorPasajeros;
	porcentajesNoBinario=(contadorNoBinario * 100) / contadorPasajeros;
	if(acumuladorDiasCordoba > acumuladorDiasPuertoMadryn && acumuladorDiasCordoba > acumuladorDiasVillaGessel)
	{
		mayorCantidadDeDias= "Cordoba";
	}
	else
	{
		if(acumuladorDiasPuertoMadryn > acumuladorDiasVillaGessel)
		{
			mayorCantidadDeDias= "Puerto Madryn";
		}
		else
		{
			mayorCantidadDeDias= "Villa Gessel";
		}
	}

	if(acumuladorImporteCordoba > acumuladorImportePuertoMadryn && acumuladorImporteCordoba > acumuladorImporteVillaGessel)
	{
		importeMasCaro= "Cordoba";
	}
	else
	{
		if(acumuladorImportePuertoMadryn > acumuladorImporteVillaGessel)
		{
			importeMasCaro= "Puerto Madryn";
		}
		else
		{
			importeMasCaro= "Villa Gessel";
		}
	}

	if(contadorPersonasAlta> contadorPersonasBaja)
	{
		temporadaMasViaje= "Temporada Alta";
	}
	else
	{
		temporadaMasViaje= "Temporada Baja";
	}

	if(contadorEfectivo > contadorMercadoPago && contadorEfectivo > contadorTarjeta)
	{
		metodoDePagoMasUsado= "Efectivo";
	}
	else
	{
		if(contadorMercadoPago > contadorTarjeta)
		{
			metodoDePagoMasUsado= "MercadoPago";
		}
		else
		{
			metodoDePagoMasUsado= "Tarjeta";
		}
	}

	if(contadorPasajerosCordoba > contadorPasajerosPuertoMadryn && contadorPasajerosCordoba > contadorPasajerosVillaGessel)
	{
		lugarMasConcurrido= "Cordoba";
	}
	else
	{
		if(contadorPasajerosPuertoMadryn > contadorPasajerosCordoba)
		{
			lugarMasConcurrido= "Puerto Madryn";
		}
		else
		{
			lugarMasConcurrido= "Villa Gessel";
		}
	}

	if(contadorPersonasAlta>0)
	{
		document.write("la cantidad de personas que viajaron en temporada alta fue de : " + contadorPersonasAlta);
	}
	else
	{
		document.write("no viajaron personas en temporada alta");
	}
	if(contadorPersonasBaja>0)
	{
		document.write("<br>la cantidad de personas que viajaron en temporada baja : " + contadorPersonasBaja);
	}
	else
	{
		document.write("<br>no viajaron personas en temporada baja");
	}
	document.write("<br>el peso acumulado fue de todos los que viajan a villa gessel fue de : " + acumuladorPesoVillaGessel +
	"<br>el destino con mas cantidad de dias de viaje fue " + mayorCantidadDeDias +
	"<br>la suma de todos los importes fue de " + acumuladorImportes +
	"<br>el nombre del mas pesado de los pasajeros es " + nombrePasajeroMasPesado + " y el nombre del pasajero mas liviano es " + nombrePasajeroMasLiviano +
	"<br>el lugar donde se pago el mayor importe fue " + importeMasCaro );
	if(flagMujerMasAlta==false)
	{
		document.write("<br>el nombre de la mujer mas alta es " + nombreMujerMasAlta);
	}
	else
	{
		document.write("<br>no han viajado mujeres");
	}
	document.write("<br>la forma de pago mas utilizada fue " + metodoDePagoMasUsado +
	"<br>la temporada en la que mas se viajo fue " + temporadaMasViaje +
	"<br>el lugar que mas pasajeros tuvo fue " + lugarMasConcurrido);
	if(contadorEquipajeDeMano > 0)
	{
		porcentajeEquipajeDeMano= (contadorEquipajeDeMano * 100) / contadorPasajeros;
		document.write("<br>el porcentaje de pasajeros que utilizaron equipaje de manos fue de " + porcentajeEquipajeDeMano + "%");
	}
	else
	{
		document.write("<br>no se uso equipaje de mano");
	}
	document.write("el porcentaje de mujeres fue de " + porcentajeMujeres + "%" + " el porcentaje de hombres fue de " + porcentajeHombres + "%" + " y el porcentaje de no binario fue de " + porcentajesNoBinario + "%");
}



*/
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

//----------------------------------------------------------------------------------------------------------------------------
/*
"Es la gala de eliminación en Gran Hermano y la producción nos pide un programa para contar los votos de los 
televidentes y saber cuál será el participante que deberá abandonar la casa más famosa del mundo.
Los participantes en la placa son: La Tora, Romina, Julieta y Camila. Nacho no fue nominado y Marcos no está en la 
placa esta semana por haber ganado la inmunidad.

El televidente debe ingresar:
Nombre del votante
Edad del votante (debe ser mayor a 13)
Género del votante (masculino, femenino, otro)
El nombre del participante a quien le dará el voto negativo (Debe estar en placa)
No se sabe cuántos votos entrarán durante la gala.
Se debe informar al usuario:
A) El promedio de edad de las votantes de género femenino
B) Cantidad de personas de género masculino entre 25 y 40 años que votaron a La Tora o Julieta.
C) Nombre del votante más joven qué voto a La Tora.
D) Nombre de cada participante y porcentaje de los votos qué recibió.
E) El nombre del participante que debe dejar la casa (El que tiene más votos)
*/

function mostrar()
{
    let nombreVotante;
    let edadVotante;
    let generoVotante;
    let votoAlParticipante;
    let acumuladorEdadesFemenino;
    let contadorMujeresVotantes;
    let contadorMasculinoVotoToraJulieta;

    let nombreVotanteJovenTora;
	let edadVotanteMasJoven;
	let flagVotanteMasJoven;

	let contadorVotosTotales;

    let contadorVotosTora;
    let contadorVotosRomina;
    let contadorVotosJulieta;
    let contadorVotosCamila;

	let porcentajeVotosTora;
	let porcentajeVotosRomina;
    let porcentajeVotosJulieta;
    let porcentajeVotosCamila;

    let promedioMujeresEdad;

	let participanteEliminado;
	let mensajeSalida;

    acumuladorEdadesFemenino = 0;
    contadorMujeresVotantes = 0;
    contadorMasculinoVotoToraJulieta = 0;
	contadorVotosTotales = 0;
    contadorVotosTora = 0;
    contadorVotosRomina = 0;
    contadorVotosJulieta = 0;
    contadorVotosCamila = 0;
	flagVotanteMasJoven = true;

    do{
        do{
            nombreVotante = prompt("Nombre del votante");
        }while(!isNaN(nombreVotante));

        do{
            edadVotante = prompt("Edad del votante");
            edadVotante = parseInt(edadVotante);
        }while(isNaN(edadVotante) || edadVotante < 14);

        do{
            generoVotante = prompt("Genero del votante").toLowerCase();
        }while(generoVotante != "masculino" && generoVotante != "femenino" && generoVotante != "otro");

        do{
            votoAlParticipante = prompt("Ingrese voto").toLowerCase();
        }while( votoAlParticipante != "la tora" && 
                votoAlParticipante != "romina" && 
                votoAlParticipante != "julieta" &&
                votoAlParticipante != "camila");

		// ----------------------------------------------

		contadorVotosTotales = contadorVotosTotales + 1;

		// A) El promedio de edad de las votantes de género femenino
		// B) Cantidad de personas de género masculino entre 25 y 40 años que votaron a La Tora o Julieta.
        if(generoVotante == "femenino"){
            acumuladorEdadesFemenino += edadVotante;
            contadorMujeresVotantes++;
        }
        else{
            if( generoVotante == "masculino" && 
                (edadVotante >= 25 && edadVotante <= 40) && 
                (votoAlParticipante == "la tora" || votoAlParticipante == "julieta")){
                            
                contadorMasculinoVotoToraJulieta++;
            }
        }

		// C) Nombre del votante más joven qué voto a La Tora.
		if((flagVotanteMasJoven == true || edadVotante < edadVotanteMasJoven) && votoAlParticipante == "la tora") {
			edadVotanteMasJoven = edadVotante;
			nombreVotanteJovenTora = nombreVotante;
			flagVotanteMasJoven = false;
		}

		// D) Nombre de cada participante y porcentaje de los votos qué recibió.
		switch(votoAlParticipante) {
			case "la tora":
				contadorVotosTora = contadorVotosTora + 1;
				break;
			case "camila":
				contadorVotosCamila = contadorVotosCamila + 1;
				break;
			case "julieta":
				contadorVotosJulieta = contadorVotosJulieta + 1;
				break;
			case "romina":
				contadorVotosRomina = contadorVotosRomina + 1;
				break;
		}

		// ----------------------------------------------
    }while(confirm("Quiere ingresar otro voto?"));
// fuera del bucle 
    if(contadorMujeresVotantes != 0){
        promedioMujeresEdad = acumuladorEdadesFemenino / contadorMujeresVotantes;
        //= "El promedio de edad de las votantes de género femenino es: " + promedioMujeresEdad;
    }
    else{
        promedioMujeresEdad = 0;
    }

	// D) Nombre de cada participante y porcentaje de los votos qué recibió.
	porcentajeVotosTora = contadorVotosTora * 100 / contadorVotosTotales;
	porcentajeVotosJulieta = contadorVotosJulieta * 100 / contadorVotosTotales;
	porcentajeVotosCamila = contadorVotosCamila * 100 / contadorVotosTotales;
	porcentajeVotosRomina = contadorVotosRomina * 100 / contadorVotosTotales;

	// E) El nombre del participante que debe dejar la casa (El que tiene más votos)
	if(contadorVotosCamila > contadorVotosTora && contadorVotosCamila > contadorVotosJulieta && contadorVotosCamila > contadorVotosRomina) {
		participanteEliminado = "Camila";
	}
	else {
		if(contadorVotosTora > contadorVotosJulieta && contadorVotosTora > contadorVotosRomina) {
			participanteEliminado = "La Tora";
		}
		else {
			if(contadorVotosRomina > contadorVotosJulieta) {
				participanteEliminado = "Romina";
			}
			else {
				participanteEliminado = "Julieta";
			}
		}
	}

	mensajeSalida = "A) El promedio de edad de las votantes de género femenino es" + promedioMujeresEdad +
					"<br>B) Cantidad de personas de género masculino entre 25 y 40 años que votaron a La Tora o Julieta es" + contadorMasculinoVotoToraJulieta +
					"<br>C) Nombre del votante más joven qué voto a La Tora es " + nombreVotanteJovenTora + 
					"<br>D) Nombre de cada participante y porcentaje de los votos qué recibió." +
					"<br>- Julieta: " + porcentajeVotosJulieta +
					"<br>- Camila: " + porcentajeVotosCamila +
					"<br>- Romina: " + porcentajeVotosRomina +
					"<br>- La Tora: " + porcentajeVotosTora +
					"<br>E) El nombre del participante que debe dejar la casa (El que tiene más votos) " + participanteEliminado;
	
	// Salida
    document.write(mensajeSalida);
}


