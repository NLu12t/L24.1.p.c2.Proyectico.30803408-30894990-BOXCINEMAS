export default class Cl_mCinesUnidos {
    constuctor (){
        this.caja         = 100         //caja inicial de $100
        this.acMontoTotal = 0
        this.acMontoPagadoLosLunes = 0
        this.cntDiaLunes = 0
        this.mayor       = 0
        this.mayApellido = ''
    }
    procesarFamilia( f ) {
        //ac monto total
        this.acMontoTotal  +=  f.calcularPrecioAPagarPorFamilia()
        //contamos y acumulamos familias y montos pagados el dia lunes
        if( f.dia === 1 ){
            this.acMontoPagadoLosLunes  +=  f.calcularPrecioAPagarPorFamilia()
            this.cntDiaLunes ++ 
        }
        //calc familia que mas pago
        if ( f.calcularPrecioAPagarPorFamilia() > this.mayor ){
            this.mayor = f.calcularPrecioAPagarPorFamilia()
            f.familia  = this.mayApellido
        }
    }
    FamiliaQueMasPaga() {
        return this.mayApellido
    }
    //calculamos el promedio vendido el dia lunes
    promedioPagadoLosLunes() {
        return this.acMontoPagadoLosLunes / this.cntDiaLunes
    }
    IngresoTotal() {
        return this.acMontoTotal + this.caja
    }
}