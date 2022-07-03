   /*  let ingreso = prompt("Ingrese un producto");
    
    while (ingreso !="Salir"){
    console.log("Ingresaste el producto:" + ingreso);
    ingreso=prompt("Ingresa un producto");

    }
 */
    
    function sumar(numeroA,numeroB){
        let suma= numeroA+numeroB;
        return suma;
    }

    function restar(numeroA,numeroB){
        let resta= numeroA+numeroB;
        return resta;
    }

    function multiplicar(numeroA,numeroB){
        let multiplicacion= numeroA * numeroB;
        return multiplicacion;
    }

    function dividir(numeroA,numeroB){
        let division= numeroA/numeroB;
        return division;
    }


    function mostrar(mensaje){
        console.log(mensaje);
    }


    function calcular(numeroA,numeroB,signo) {

        let resultado = 0;

        switch(signo){
            case"+":
            resultado = sumar(numeroA,numeroB);
            break;
            case"-":
            resultado = restar(numeroA,numeroB);
            break;
            case"*":
            resultado = multiplicar (numeroA,numeroB);
            break;
            case"/":
            resultado = dividir (numeroA,numeroB);
            break;
            default:
                console.log('Dato Erroneo')
        }
        return resultado;
    }
    

    let numero1 = parseInt(prompt('Ingresa el operando'));
    let numero2 = parseInt(prompt('Ingresa el primer operando'));
    let operacion = prompt('Ingresa el signo de la operacion: + - * /')

    mostrar(calcular(numero1,numero2,operacion)); 



    /* mostrar(sumar(numero1,numero2)); */
