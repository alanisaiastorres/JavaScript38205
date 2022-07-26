   /*  let ingreso = prompt("Ingrese un producto");
    
    while (ingreso !="Salir"){
    console.log("Ingresaste el producto:" + ingreso);
    ingreso=prompt("Ingresa un producto");

    }
 */
    /* simualador interactivo

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
 */


    /* mostrar(sumar(numero1,numero2)); */

    //  Arrays
   /*  let b=34;
    const nombres = ["Ricardo" ,"Marcelo" ,"Agustin" ];
    const numeros = [1,2,3,4,5,3,4,2,4,6,8,5,3];
    const mixto = [true, 1, "hola amigola" ,{} , [12,34,54],b ];

    let result= numeros [0] + numeros [10]

    for (let i = 0 ;i < nombres.length; i++) {
        console.log(nombres[i]);
    }

    console.log(numeros);

    numeros.push(495,23,56,98);
    console.log(numeros);
    numeros.unshift(0);
    console.log(numeros); */

    /* //DOM
    const h1 = document.getElementById("titulo"),
    fecha = document.getElementById("fecha");
    console.log (h1);
    console.log (fecha); // */

    //Eventos
    document.title="Clase 9 Comision 38205";
    const tituloPrincipal = document.querySelector(".titulo-principal span"),
    tituloSecundario = document.querySelector("h2"),
    items =document.querySelectorAll(".numeros"),
    botonEnviar= document.querySelector(".btn"), 
    p=document.querySelector("#mensaje");
    inputIngreso=document.getElementById("#ingreso");

    tituloPrincipal.innerText = "Clase 9";
    tituloSecundario.innerText = "Eventos en JS";

    console.log(items);
    items.forEach((item) =>{
        console.log(item);
    });
    //addEventListener;
    botonEnviar.addEventListener("click",() =>{
    p.innerText="Hiciste clic en el boton enviar";
    
    })