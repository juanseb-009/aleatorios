function generarNumeroAleatorio() {
    let numero;

    numero = parseInt(Math.random() * 100) + 1;

    return numero;
}

function generarAleatorios() {
    let aleatorios = [];
    let cantidad;
    let indice;
    let numero;
    let textoIngresado;

    textoIngresado = document.getElementById("txtCantidad").value;
    cantidad = recuperarInt("txtCantidad");

    if (textoIngresado == "" || cantidad < 5 || cantidad > 20) {
        mostrarTexto("mensaje", "Ingrese un número entre 5 y 20.");
        mostrarTexto("contenedorResultados", "");
        return;
    }

    mostrarTexto("mensaje", "");

    for (indice = 0; indice < cantidad; indice++) {
        console.log(indice);

        numero = generarNumeroAleatorio();
        aleatorios.push(numero);
    }

    mostrarResultados(aleatorios);
}

function mostrarResultados(arregloNumeros) {
    let contenido;
    let indice;

    contenido = "<table>";
    contenido += "<tr><th>Índice</th><th>Número aleatorio</th></tr>";

    for (indice = 0; indice < arregloNumeros.length; indice++) {
        contenido += "<tr>";
        contenido += "<td>" + indice + "</td>";
        contenido += "<td>" + arregloNumeros[indice] + "</td>";
        contenido += "</tr>";
    }

    contenido += "</table>";

    document.getElementById("contenedorResultados").innerHTML = contenido;
}