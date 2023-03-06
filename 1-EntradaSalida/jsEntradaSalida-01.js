/*
Ejercicio 1:

Apellido:
Nombre:
Comisión:
Tutor:
“>” (mayor) y “<” (menor)
El gerente de "El super de Anto"" nos pide desarrollar un programa que  permita cargar y analizar las compras realizadas por sus clientes en una jornada de trabajo.
Para ello, se debe ingresar en cada una de las compras:

Nombre del comprador.
Edad del comprador (Debe ser mayor de edad).
Cantidad de productos comprados (No debe ser negativo ni cero).
Total gastado (No debe ser negativo ni cero).
Método de pago (Efectivo - Débito - Crédito)

En base a todas las compras registradas, informar:

A) El promedio de edad entre todos los compradores.
B) El promedio de dinero gastado por los compradores menores a 25 años.
C) El porcentaje de dinero que representa el total de las compras realizadas con tarjeta de debito.
D) Nombre y cantidad de productos del comprador que menos gasto.
*/
/*
Ejercicio 1:

Apellido:
Nombre:
Comisión:
Tutor:
“>” (mayor) y “<” (menor)
El gerente de "El super de Anto"" nos pide desarrollar un programa que  permita cargar y analizar las compras realizadas por sus clientes en una jornada de trabajo.
Para ello, se debe ingresar en cada una de las compras:

Nombre del comprador.
Edad del comprador (Debe ser mayor de edad).
Cantidad de productos comprados (No debe ser negativo ni cero).
Total gastado (No debe ser negativo ni cero).
Método de pago (Efectivo - Débito - Crédito)

En base a todas las compras registradas, informar:

A) El promedio de edad entre todos los compradores.
B) El promedio de dinero gastado por los compradores menores a 25 años.
C) El porcentaje de dinero que representa el total de las compras realizadas con tarjeta de debito.
D) Nombre y cantidad de productos del comprador que menos gasto.
*/
function mostrar() {

  // declaracion de variables 
  var nombreComprador;
  var edadComprador;
  var cantidadProductosComprador;
  var promedioTotalGastado;
  var metodoDePago; //(Efectivo - Débito - Crédito)
  var edadPromedio;
  var respuesta;
  var porcentajeDebito;
  var nombreMenorGasto;
  var cantidadProductosMenorGasto;
  var flagsMenorGasto;
  var cantidadMenosGasto;


  // declaracion de acumuladores y contadores
  var acumuladorEdad;
  var contadorEdad;
  var acumuladorDineroGastado;
  var contadorDineroGastado;
  var acumuladorComprasTarjetaDebito;
  var contadorComprasTarjetaDebito;
  
  
  // iniciar contadores y acumuladores
  acumuladorComprasTarjetaDebito = 0;
  contadorComprasTarjetaDebito = 0;
  acumuladorDineroGastado = 0;
  contadorDineroGastado = 0,
  acumuladorEdad = 0;
  contadorEdad = 0;
  flagsMenorGasto = true; 
  do {
    do {
      nombreComprador = prompt("Ingrese su nombre");
    } while (!isNaN(nombreComprador));
    do{
      edadComprador = prompt("Edad del votante");
      edadComprador = parseInt(edadComprador);
  }while(isNaN(edadComprador) && edadComprador < 19); 
      acumuladorEdad += edadComprador;
      contadorEdad ++;
  
    do {
        cantidadProductosComprador = prompt("Ingrese la cantidad de productos comprados");
        cantidadProductosComprador = parseInt(cantidadProductosComprador);
    } while(isNaN(cantidadProductosComprador) || cantidadProductosComprador < 1 );
    do {
      totalGastado = prompt("Ingrese el total gastado de su compra");
      totalGastado = parseFloat(totalGastado);
    } while(isNaN(totalGastado));
  do {
      metodoDePago = prompt("Ingrese metodo de pago (Efectivo - Débito - Crédito)")
  } while(!isNaN(metodoDePago) || (metodoDePago != "efectivo" && metodoDePago != "debito" && metodoDePago != "credito"));

    if (edadComprador < 25) {
      acumuladorDineroGastado += totalGastado;
      contadorDineroGastado ++;
    }  
    // C) El porcentaje de dinero que representa el total de las compras realizadas con tarjeta de debito.
  
    if (metodoDePago == "debito") {
      acumuladorComprasTarjetaDebito += totalGastado;
      contadorComprasTarjetaDebito ++;
  }

  // D) Nombre y cantidad de productos del comprador que menos gasto.
      if (cantidadMenosGasto > totalGastado || flagsMenorGasto == true ) {
          cantidadMenosGasto = totalGastado;
          nombreMenorGasto = nombreComprador;
          cantidadProductosMenorGasto = cantidadProductosComprador;
          flagsMenorGasto = false;
      }

    respuesta = confirm("Quiere seguir ingresando datos ?");
  } while (respuesta);
  
      //A) El promedio de edad entre todos los compradores.
      edadPromedio = acumuladorEdad / contadorEdad;
  
    document.write("A) El promedio de edad entre todos los compradores: " + edadPromedio + "<br>");

    // B) El promedio de dinero gastado por los compradores menores a 25 años.
    if (contadorDineroGastado > 0) {
    promedioTotalGastado = acumuladorDineroGastado / contadorDineroGastado;
    document.write("B) El promedio de dinero gastado por los compradores menores a 25 años es de: " + promedioTotalGastado + "% <br>");
    } 
    // C) El porcentaje de dinero que representa el total de las compras realizadas con tarjeta de debito.
    if (contadorComprasTarjetaDebito > 0) {
        porcentajeDebito = (acumuladorComprasTarjetaDebito * 100) / contadorComprasTarjetaDebito;
        document.write("C) El porcentaje de dinero que representa el total de las compras realizadas con tarjeta de debito: " + porcentajeDebito + "% <br>");
    }
     // D) Nombre y cantidad de productos del comprador que menos gasto.
     document.write("D) Nombre y cantidad de productos del comprador que menos gasto: <br>" +
     "nombre: " + nombreMenorGasto + " cantidad de productos: " + cantidadProductosMenorGasto);

    }
  
  
  


