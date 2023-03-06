/******************************************************************************
 * Apellido:
 * Nombre:
 * Comisión:
 * Tutor:
 
Ejercicio 3

Una fabrica de muebles nos pide realizar una app para gestionar sus productos. 
El programa pide dar de alta cada venta realizada (Cada venta representa un mueble 
en particular, con los atributos definidos mas abajo).

Se debe ingresar en cada venta.
-Nombre del mueble
-Material del mueble (Madera, Metal y Vidrio)
-Peso
-Altura
-Anchura 
-Precio

Debido a la tala excesiva de árboles el gobierno pone un impuesto del 15% ante la compra de 
muebles de madera.
Los muebles de vidrio o metal tienen un 10% de descuento.

Se pide

a)Precio promedio por mueble vendido
b)Cantidad total de muebles de madera
c)El mueble de metal más alto 
d)El mueble más liviano
e)Porcentaje de muebles de cada tipo de material
f)Monto total recaudado bruto de todos los muebles (sin descuentos ni impuestos)
g)Monto total recaudado, pero solo de los muebles de madera(incluido descuentos e impuestos)

NOTA: Los precios no podran ser cero ni negativo.
*/
function mostrar()
{
let nombreMueble;
let materialMueble; // madera metal y vidrio
let pesoMueble;
let alturaMueble;
let anchuraMueble;
let precioMueble;
let respuesta;
let promedioMuebleVendido;
let contadorVentas;
let acumuladorVentas;
let contadorMadera;
let banderaMetalMasAlto;
let muebleMasAlto;
let nombreMuebleMasAlto;
let muebleMasLiviano;
let nombreMuebleMasLiviano;
let banderaMuebleMasLiviano;
let contadorMaderaTipo;
let contadorMetalTipo;
let contadorVidrioTipo;
let porcentajeMadera;
let porcentajeVidrio;
let porcentajeMetal;
let impuestoMadera;
let descuentoVidrioMetal;
let acumuladorBruto;
let acumuladorMaderaTotal;

banderaMuebleMasLiviano = true;
acumuladorMaderaTotal = 0;
acumuladorBruto = 0;
contadorMaderaTipo = 0;
contadorMetalTipo = 0;
contadorVidrioTipo = 0;
banderaMetalMasAlto = true;
contadorMadera = 0;
contadorVentas = 0;
acumuladorVentas = 0;

do
{
nombreMueble = prompt("Ingrese nombre del mueble");
while(!isNaN(nombreMueble))
{
	nombreMueble = prompt("Por favor, ingrese nombre del mueble correctamente");
}
materialMueble = prompt("Ingrese el material del mueble (madera, metal o vidrio");
while(!isNaN(materialMueble) || (materialMueble != "madera" && materialMueble != "metal" && materialMueble != "vidrio"))
{
	materialMueble = prompt("Por favor, ingrese un material que sea madera, metal o vidrio");
}
pesoMueble = prompt("Ingrese el peso del mueble");
pesoMueble = parseFloat(pesoMueble);
while(isNaN(pesoMueble) || pesoMueble < 1)
{
	pesoMueble = prompt("Por favor, ingrese un peso mayor a 0");
	pesoMueble = parseFloat(pesoMueble);
}
alturaMueble = prompt("Ingrese la altura del mueble");
alturaMueble = parseFloat(alturaMueble);
while(isNaN(alturaMueble) || alturaMueble < 1)
{
	alturaMueble = prompt("Por favor, ingrese una altura numerica que sea 0 o mayor.");
	alturaMueble = parseFloat(alturaMueble);
}
anchuraMueble = prompt("Ingrese una anchura que sea mayor a 0");
anchuraMueble = parseFloat(alturaMueble);
while(isNaN(anchuraMueble) || anchuraMueble < 1)
{
	anchuraMueble = prompt("Por favor, ingrese un anchura mayor a 0");
	anchuraMueble = parseFloat(anchuraMueble);
}
precioMueble = prompt("Ingrese el precio del mueble")
precioMueble = parseFloat(precioMueble);
while(isNaN(precioMueble) || precioMueble < 1)
{
	precioMueble = prompt("Por favor, ingrese un precio mayor a 0")
	precioMueble = parseFloat(precioMueble);
}
contadorVentas++;
acumuladorBruto += precioMueble;
switch (materialMueble) {
	case "madera":
		impuestoMadera = 0.15;
		break;
	default:
		descuentoVidrioMetal = 0.1;
		break;
}
if(materialMueble == "madera")
{
	impuestoMadera = precioMueble * 0.15;
	precioMueble = precioMueble + impuestoMadera;
	acumuladorMaderaTotal += precioMueble;
}
else
{
	descuentoVidrioMetal = precioMueble * 0.1;
	precioMueble = precioMueble - descuentoVidrioMetal;
}
acumuladorVentas += precioMueble;

if(materialMueble == "madera")
{
	contadorMadera++;
}
if(materialMueble == "metal" && (banderaMetalMasAlto || alturaMueble > muebleMasAlto))
{
	muebleMasAlto = alturaMueble;
	nombreMuebleMasAlto = nombreMueble;
}
if(banderaMuebleMasLiviano || pesoMueble < muebleMasLiviano)
{
	muebleMasLiviano = pesoMueble;
	nombreMuebleMasLiviano = nombreMueble;
}

if(materialMueble == "metal")
{
	contadorMetalTipo++;
}
else
{
	if(materialMueble == "madera")
	{
		contadorMaderaTipo++;
	}
	else
	{
		contadorVidrioTipo++;
	}
}

respuesta = confirm("¿Desea ingresar mas muebles?");
} while (respuesta);

porcentajeMadera = (contadorMaderaTipo / contadorVentas) * 100;
porcentajeMetal = (contadorMetalTipo / contadorVentas) * 100;
porcentajeVidrio = (contadorVidrioTipo / contadorVentas) * 100;
// A
promedioMuebleVendido = acumuladorVentas / contadorVentas;

document.write("A-El promedio de muebles vendidos es " + promedioMuebleVendido + "<br>");
if(contadorMadera > 0)
{
	document.write("B-Se ingresaron " + contadorMadera + " muebles de madera <br>");
}
else
{
	document.write("B-No se ingresaron muebles de madera");
}
if(muebleMasAlto > 0)
{
document.write("C-El mueble de metal mas alto es " + nombreMuebleMasAlto + " y mide " + muebleMasAlto + "<br>");
}
else
{
	document.write("C-No se ingreso ningue mueble de metal <br>");
}
document.write("D-El mueble mas liviano es " + nombreMuebleMasLiviano + " y pesa " + muebleMasLiviano + "<br>");
document.write("E-El porcentaje de metal es " + porcentajeMetal + "<br>");
document.write("E-El porcentaje de madera es " + porcentajeMadera + "<br>");
document.write("E-El porcentaje de vidrio es " + porcentajeVidrio + "<br>");
document.write("F-El monto bruto total de los muebles es " + acumuladorBruto + "<br>");
document.write("G-El monto total con impuesto y descuentos de los muebles de madera es " + acumuladorMaderaTotal);
}
	