function generarNumeroAleatorio() {
    let numero;

    numero = parseInt(Math.random() * 100) + 1;

    return numero;
}

function generarAleatorios() {
    let aleatorios = [];
    let cantidad;
    let indice;
    let textoIngresado;

    textoIngresado = document.getElementById("txtCantidad").value;
    cantidad = recuperarInt("txtCantidad");

    if (textoIngresado == "" || cantidad < 5 || cantidad > 20) {
        mostrarTexto("mensaje", "Ingrese un número entre 5 y 20.");
        return;
    }

    mostrarTexto("mensaje", "");

    for (indice = 0; indice < cantidad; indice++) {
        console.log(indice);
    }
}