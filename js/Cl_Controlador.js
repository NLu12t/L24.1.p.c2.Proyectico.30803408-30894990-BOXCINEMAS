import Cl_vCinesUnidos  from "./Cl_mCinesUnidos.js"
import Cl_vFamilia from "./Cl_vFamilia.js"
import Cl_mCinesUnidos from "./Cl_mCinesUnidos.js"
import Cl_mFamilia from "./Cl_mFamilia.js"
export default class Cl_Controlador {
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
    agregarFamilia({ apellido, cantPersonas, dia }) {
        let familia = new Cl_mFamilia({ apellido, cantPersonas, dia })
        this.mCinesUnidos.procesarFamilia(familia)
        this.vCinesUnidos.reportarFamilia({
            apellido: familia.apellido,
            cantPersonas: familia.cantPersonas,
            dia: familia.dia
        })
        this.mostrarVistaCinesUnidos()
    }
}