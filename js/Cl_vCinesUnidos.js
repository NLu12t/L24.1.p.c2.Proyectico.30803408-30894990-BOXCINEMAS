export default class Cl_vCinesUnidos {
    constructor(controlador) {
      this.vista = document.getElementById("mainForm")
      this.tabla = document.getElementById("mainForm_tabla")
      this.btAgregar = document.getElementById("mainForm_btAgregar")
   //   this.inCajaInicial = document.getElementById("mainForm_inCajaInial")
      this.lblCalcFamiliaMasPaga = document.getElementById("mainForm_lblCalcFamiliaMasPaga")
      this.lblPromedioPagadoLosLunes = document.getElementById("mainForm_lblPromedioPagadoLosLunes")
      this.lblIngresoTotal = document.getElementById("mainForm_lblIngresoTotal")
      this.btAgregar.onclick = () => controlador.mostrarVistaFamilia()
    }
    mostrar() {
        this.vista.hidden = false;
      }
    ocultar() {
        this.vista.hidden = true;
    } 
    reportarFamilia({
        apellido,
        cantidadPersonas,
        dia,
        ingresoTotal,
        PromedioPagadoLosLunes,
        calcFamiliaMasPaga,
    //    inCajaicial
    }) {
        this.tabla.innerHTML += `
        <tr>
          <td>${apellido}</td>
          <td>${cantidadPersonas}</td>
          <td>${dia}</td>
        </tr>`; //inCajaicial como reportar
    //    this.inCajaInicial.value  ???
        this.lblCalcFamiliaMasPaga.innerHTML = calcFamiliaMasPaga
        this.lblPromedioPagadoLosLunes.innerHTML = PromedioPagadoLosLunes
        this.lblIngresoTotal.innerHTML = ingresoTotal
    }
}