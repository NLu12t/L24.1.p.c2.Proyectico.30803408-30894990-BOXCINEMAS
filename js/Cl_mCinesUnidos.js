export default class Cl_mCinesUnidos {
    constructor (){
        //this.acMontoTotal = 0;
        this.acMontoPagadoLosLunes = 0;
        this.acMonto = 0;
        this.cntDiaLunes = 0;
        this.mayor       = 0;
        this.mayApellido = "";
    }
    procesarFamilia(f) {
        //acumulamos el monto total de pagos realizados por las familias
        this.acMontoTotal  +=  f.calcularPrecioAPagarPorFamilia();
        
        //contamos y acumulamos familias y montos pagados el dia lunes
        if( f.dia == 1 ){
            this.acMontoPagadoLosLunes  +=  f.calcularPrecioAPagarPorFamilia();
            this.cntDiaLunes ++ ;
        }
        
        //calc familia que mas pago
        if( f.calcularPrecioAPagarPorFamilia() > this.mayor ){
            this.mayor = f.calcularPrecioAPagarPorFamilia();
            this.mayApellido  = f.familia;
        }
    }
    //calculamos la familia que mas paga
    FamiliaQueMasPaga() {
        return this.mayApellido;
    }
    //calculamos el promedio vendido el dia lunes
    promedioPagadoLosLunes() {
        return ( this.acMontoPagadoLosLunes / this.cntDiaLunes );
    }
    //calculamos el ingreso total por jornada
    IngresoTotal() {
        return ( this.acMontoTotal + f.cajaInicial);
    }
}