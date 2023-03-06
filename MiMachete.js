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
    */
}
/*
Bandera:
La uso para saber un MINIMO o MAXIMO. 
La bandera va a marcar la primera vez que se ingrese un dato que quiero comparar. 
Es decir, si busco el más chico de los números voy a necesitar partir de
un primer número para poder compararlo. 

Entonces, la bandera va a garantizar que el primer número ingresado se guarde. 
Después, voy a bajar la bandera, ¿por que?
porque ya voy a tener mi numero base con el cuál voy a compararlo. 
Entonces la segunda vez que se ingrese un numero, se va a comparar con el guardado
para definir si es el mayor o menor (segun lo que busque). 

if (numeroIngresado > numeroMaximo || banderaPrimerNumero == true) {
            numeroMaximo = numeroIngresado;
            banderaPrimerNumero = false;
        }
        respuesta = confirm("¿Desea seguir ingresando numeros?");

*/