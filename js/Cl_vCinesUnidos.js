export default class Cl_vCinesUnidos {
    constructor(controlador) {
      this.vista = document.getElementById("mainForm")
      this.tabla = document.getElementById("mainForm_tabla")
      this.btAgregar = document.getElementById("mainForm_btAgregar")
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
        apellidoFamilia,
        personas,
        dia,
        ingresoTotal
    }) {
        this.tabla.innerHTML += `
        <tr>
          <td>${apellidoFamilia}</td>
          <td>${personas}</td>
          <td>${dia}</td>
          <td>${ingresoTotal}</td>
        </tr>`;
        this.lblCalcFamiliaMasPaga.innerHTML = calcFamiliaMasPaga
        this.lblPromedioPagadoLosLunes.innerHTML = PromedioPagadoLosLunes
        this.lblIngresoTotal.innerHTML = ingresoTotal
    }
}