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
*/ 

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