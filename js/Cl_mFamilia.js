//Cl_familia.js
/***
 * La entrada para el cine es de $3. Se conoce la información de varias familias que fueron a
 * ver películas, y se desea calcular el precio a pagar por cada una. También se sabe que los días
 * lunes el precio de cada entrada se reduce a la mitad. Cines Unidos reporta la cantidad de dinero
 * inicial que tiene en caja, y requiere el procesamiento de la siguiente información: precio a pagar
 * por cada familia, familia que pagó más, promedio pagado los días lunes y total de dinero que le
 * queda al final de la jornada. Para leer el día: 1=lunes, 2=martes, etc.
 * DATOS DE PRUEBA:
 * Cantidad de dinero en caja: $100
 * familia, cant. personas, dia, monto a pagar (lopez, 4, 2, $12.00
 * gil, 3, 1, $4.50
 * gomez, 5, 5, $15.00
 * mata, 2, 1, $3.50)
 * Familia que pagó más: Gómez
 * Promedio pagado los días lunes: $3.75
 * Total de dinero al final de la jornada: $134.50
 */
export class Cl_mFamilia {
    constructor({ familia, personas, dia }) {
        this.familia = familia
        this.personas = personas
        this.dia = dia
    }
    set familia(familia) {
        this._familia = familia
    }
    get familia() {
        return this._familia
    }
    set personas(personas) {
        this._personas = +personas
    }
    get personas() {
        return this._personas
    }
    set dia(dia) {
        this._dia = +dia
    }
    get dia() {
        return this._dia
    }
    calcularPrecioAPagarPorFamilia() {
       if ( this.dia === 1 ) {
           return this.personas * 1.5
       }
        else {
           return this.personas * 3   //3 es el precio de la entrada general
        }
    }
}
