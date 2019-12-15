/**
 * En este script hago el comportamiento de la ventana que contendrá al gato
 */
let arrayLi;
let img;
let spanEdad;
let botonJugar;
let botonComer;

/**
 * Método que comprueba el peso del gato
 */
let comprobarPeso = () =>{
    if(gato.estaMuerto){
        if(gato.peso < 1){
            img.src = "img/f.png";
        }else{
            if(gato.raza == "paco") img.src = "img/pacogoldo.png";
            else img.src = "img/gatoGordo.png";
        } 

        botonComer.disabled = true;
        botonJugar.disabled = true;
    }
}

/**
 * Método que actuliza el peso del gato
 */
let actulizaPeso = () =>{
    arrayLi[3].innerHTML = "Peso "+ gato.peso;
    comprobarPeso();
}

/**
 * Llama al jugar del gato 
 */
let jugar = () =>{
    gato.jugar();
    if(gato.raza == "paco") img.src = "img/pacoJugando.png";
    else img.src = "img/gatoJugando.png";
    actulizaPeso();
};

/**
 * Llama al comer del gato
 */
let comer = () => {
    gato.comer();
    if(gato.raza == "paco") img.src = "img/pacocomiendomod.png";
    else img.src = "img/gatoComiendo.png";
    actulizaPeso();
}

/**
 * Llama al calcular edad del gato
 */
let calcularEdad = () =>{
    
    return spanEdad.innerHTML = `El gato tiene ${gato.calcularEdad()} años.`;
}


let generarImagen = () =>{

    switch (gato.raza) {
        case "persa":
            img.src = "img/persa.jpg";
            break;
        case "romano":
            img.src = "img/romano.jpg";
            break;
        case "bombay":
            img.src = "img/bombay.jpg";
        break;
        case "siames":
            img.src = "img/siames.png";
        break;
        case "paco":
            img.src = "img/pacat.png";
        break;
        default:
            break;
    }

    return img;
}
 let init = () => {
    document.getElementById("title").innerHTML = "Gato " + gato.nombre;
    arrayLi = document.getElementsByTagName("li");

    img = document.getElementById("img");

    generarImagen();

    arrayLi[0].innerHTML = "Nombre "+ gato.nombre;
    arrayLi[1].innerHTML = "Fecha nacimiento "+ gato.fechaNacimiento;
    arrayLi[2].innerHTML = "Raza "+ gato.raza;
    arrayLi[3].innerHTML = "Peso "+ gato.peso;

    spanEdad = document.getElementById("edad");


    botonJugar = document.getElementById("botonJugar");
    botonJugar.addEventListener("click", jugar)
    botonComer = document.getElementById("botonComer");
    botonComer.addEventListener("click", comer);
    document.getElementById("botonEdad").addEventListener("click", calcularEdad);
 };

document.addEventListener("DOMContentLoaded", init);