let gato;
let fechaNacimiento;
/**
 * En este script cre el Gato con sus propiedades y su comportamiento
 */
let raza;
let peso;

/**
 * Constructor del Lindo gatito
 * @param {} nombre 
 * @param {*} fechaNacimiento 
 * @param {*} raza 
 * @param {*} peso 
 */
function LindoGatito(nombre , fechaNacimiento, raza , peso ) {
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
    this.raza = raza;
    this.setPeso(peso);
    this.estaMuerto = false;
}

/**
 * Setter del peso, controlo si está muerto o no
 */
LindoGatito.prototype.setPeso = function (peso) {
    this.peso = parseInt(peso);
    if(this.peso < 1 | this.peso > 15){
        this.estaMuerto = true;
    }
};

/**
 * Baja en uno el peso del gato 
 */
LindoGatito.prototype.jugar = function () {
    this.setPeso(this.peso - 1);
}

/**
 * Aumenta en 1 el peso del gato
 */
LindoGatito.prototype.comer = function () {
    this.setPeso(this.peso +1);
}

/**
 * Calcula los años de vida que tiene el gato
 */
LindoGatito.prototype.calcularEdad = function () {
    fechaActual = new Date();
    fechaNacimiento = new Date(this.fechaNacimiento);

    let diferencia = Math.floor(fechaActual.getTime() - fechaNacimiento.getTime());
    let dia = 1000 * 60 * 60 * 24;

    let dias = Math.floor(diferencia / dia);
    let meses = Math.floor(dias / 31);
    let anios = Math.floor(meses / 12);

    return anios;
}