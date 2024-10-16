export default class Cl_vFamilia {
    constructor( controlador ) {
        this.vista       = document.getElementById("familiaForm");
        this.inCajaInicial = document.getElementById("familiaForm_inCajaInicial");
        this.inFamilia   = document.getElementById("familiaForm_inFamilia");
        //this.inPersonas  = document.getElementById("familiaForm_inPersonas");
        this.inDia       = document.getElementById("familiaForm_inDia");
        this.btAceptar   = document.getElementById("familiaForm_btAceptar");
            this.btAceptar.onclick = () =>
              controlador.agregarFamilia({
                //cajaInicial: this.inCajaInicial.value,
                familia:    this.inFamilia.value,
                personas:  this.inPersonas.value,
                dia:      this.inDia.value,
              });
            this.ocultar();
    }
    mostrar() {
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
}