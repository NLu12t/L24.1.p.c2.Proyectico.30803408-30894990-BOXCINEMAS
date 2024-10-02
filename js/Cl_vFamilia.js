export default class Cl_vFamilia {
    constructor(controlador) {
        this.vista             = document.getElementById("familiaForm")
        this.inApellido        = document.getElementById("familiaForm_inApellido")
        this.inCantidadPersonas= document.getElementById("familiaForm_inCantidadPersonas")
        this.inDia             = document.getElementById("familiaForm_inDia")
        this.btAceptar         = document.getElementById("familiaForm_btAceptar")
        this.btAceptar.conclick = () =>
            controlador.agregarFamilia({
                apellido:        this.inApellido.value,
                cantidadPersonas:this.inCantidadPersonas.value,
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