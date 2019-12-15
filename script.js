/**
 * En este scrpit creo la ventana del gato
 */

{
    let botonCrearGato;
    let configuracionVentana = "width=500,heigth=500,top=0,left=0";
    let nombre;
    let fechaDeNacimiento;
    let raza;
    let peso;

    let crearGato = () => {
        nombre = document.getElementById("nombre");
        fechaDeNacimiento = document.getElementById("fechaDeNacimento");
        raza = document.getElementById("raza");
        peso = document.getElementById("peso");

        let ventanaGato = window.open('', '', configuracionVentana);
        ventanaGato.document.write(`<!DOCTYPE html>
            <html lang="es">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="estilo.css">
            <script src="ventana.js"></script>
            <title id=\"title\">Gato </title>
            <body>
            Has creado un nuevo gato:
            <br>
            <img src="" alt="Gato" id="img">
            <ul>
                <li> Nombre = </li> 
                <li> Fecha de nacimiento = </li>
                <li> Raza = </li>
                <li> Peso = </li>
            </ul>
            <button id=\"botonEdad\">Edad del gato</button>
            <button id=\"botonJugar\">Jugar</button>
            <button id=\"botonComer\">Comer</button>
            <span id=\"edad\"></span>
            </body>
            </html>`);
        ventanaGato.document.close();
        ventanaGato.gato = new LindoGatito(nombre.value, fechaDeNacimiento.value, raza.value, peso.value);

    }

    let init = () => {
        botonCrearGato = document.getElementById("enviar");
        botonCrearGato.addEventListener("click", crearGato);
    }
    document.addEventListener("DOMContentLoaded", init);
}
