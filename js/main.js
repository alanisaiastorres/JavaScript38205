let producto = prompt("ingrese un producto'teclado,mouse,monitor,gabinete'")
let total=0

while (producto!="SALIR"){
    let precio= producto(producto);
    total= total + precio;
    alert("precio encarrito"+ total)
    prodcuto=prompt("ingrese un producto'teclado,mouse,monitor,gabinete'")
}