export default class Cl_mCinesUnidos {
    constuctor (){
        this.cntDiaLunes = 0
        this.acMontoTotal = 0
        this.acMontoPagadoLosLunes = 0
        this.mayor = 0
        this.aux = ''
        this.dineroEnCaja = 100
    }
    procesarFamilia(familia){

        //ac monto total
        this.acMontoTotal += familia.calcularPrecioAPagarPorFamilia()

        //calc familia que mas pago
        if (familia.calcularPrecioAPagarPorFamilia() > mayor) this.mayor = calcularPrecioAPagarPorFamilia()
        familia.apellidoFamilia = this.aux
        
        //contamos y acumulamos familias y montos pagados el dia lunes
        if (familia.dia === 1) this.cntDiaLunes ++, this.acMontoPagadoLosLunes ++
    }
    calcFamiliaMasPaga(){
        return this.aux
    }
    //calculamos el promedio vendido el dia lunes
    promedioPagadoLosLunes(){
    return this.acMontoPagadoLosLunes() / this.cntDiaLunes
    }
    IngresoTotal(){
        return this.acMontoTotal + this.dineroEnCaja 
    }
}