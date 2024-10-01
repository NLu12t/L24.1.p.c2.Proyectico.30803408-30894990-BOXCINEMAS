export default class Cl_mCinesUnidos {
    constuctor (){
        this.cntDiaLunes = 0
        this.acMontoTotal = 100
        this.acMontoPagadoLosLunes = 0
        this.mayor = 0
        this.auxApellido = ''
    }
    procesarFamilia(familia){
        //ac monto total
        this.acMontoTotal += familia.calcularPrecioAPagarPorFamilia()
        //contamos y acumulamos familias y montos pagados el dia lunes
        if(familia.dia === 1)
            this.acMontoPagadoLosLunes += familia.calcularPrecioAPagarPorFamilia()
            this.cntDiaLunes ++ 
        //calc familia que mas pago
        if (familia.calcularPrecioAPagarPorFamilia() > mayor) {
            this.mayor = calcularPrecioAPagarPorFamilia()
            familia.apellido = this.auxApellido
        }
    }
    FamiliaQueMasPaga() {
        return this.auxApellido
    }
    //calculamos el promedio vendido el dia lunes
    promedioPagadoLosLunes() {
        return this.acMontoPagadoLosLunes / this.cntDiaLunes
    }
    IngresoTotal() {
        return this.acMontoTotal
    }
}