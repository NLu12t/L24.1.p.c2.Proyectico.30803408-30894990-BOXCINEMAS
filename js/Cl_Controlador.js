import Cl_vCinesUnidos  from "./Cl_mCinesUnidos.js"
import Cl_vFamilia from "./Cl_vFamilia.js"
import Cl_mCinesUnidos from "./Cl_mCinesUnidos.js"
import Cl_mFamilia from "./Cl_mFamilia.js"
export class Cl_Controlador {
    constructor(){
        this.mCinesUnidos = new Cl_mCinesUnidos()
        this.vFamilia = new Cl_vFamilia(this)
        this.vCinesUnidos = new Cl_vCinesUnidos(this)
    }
    mostrarVistaFamilia(){
        this.vCinesUnidos.ocultar()
        this.vFamilia.mostrar()
    }
    mostrarVistaCinesUnidos(){
        this.vFamilia.ocultar()
        this.vCinesUnidos.mostrar()
    }
    agregarFamilia({ familia, personas, dia }) {
        let f = new Cl_mFamilia({ familia, personas, dia })
        this.mCinesUnidos.procesarFamilia( f ) 
        this.vCinesUnidos.reportarFamilia({
            familia: f.familia,
            personas: f.personas,
            dia: f.dia,
            calcularPrecioAPagarPorFamilia: f.calcularPrecioAPagarPorFamilia(),
            calcFamiliaMasPaga: this.mCinesUnidos.FamiliaQueMasPaga(),
            PromedioPagadoLosLunes: this.mCinesUnidos.promedioPagadoLosLunes(),
            ingresoTotal: this.mCinesUnidos.IngresoTotal(),
        })
        this.mostrarVistaCinesUnidos()
    }
}