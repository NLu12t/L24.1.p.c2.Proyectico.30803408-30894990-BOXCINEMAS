export default class Cl_vFamilia {
    constructor(controlador){
        this.vista             = document.getElementById("familiaForm")
        this.inApellidoFamilia = document.getElementById("familiaForm_inApellidoFamilia")
        this.inCantPersonas    = document.getElementById("familiaForm_inCantPersonas")
        this.inDia             = document.getElementById("familiaForm_inDia")
        this.btAceptar         = document.getElementById("familiaForm_btAceptar")
        this.btAceptar.conclick = () =>
            controlador.agregarFamilia({
                apellidoFamilia: this.inApellidoFamilia.value,
                cantPersonas:    this.inCantPersonas.value,
                dia:             this.inDia.value,
            })
            this.ocultar()
    }
    mostrar() {
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
}