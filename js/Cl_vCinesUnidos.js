export default class Cl_vCinesUnidos {
    constructor( controlador ) {
      this.vista = document.getElementById("mainForm")
      this.tabla = document.getElementById("mainForm_tabla")
      this.btAgregar = document.getElementById("mainForm_btAgregar")
      //this.lblSaldoEnCaja = document.getElementById("mainForm_lblSaldoEnCaja")         ///ojo con esto
      //this.lblCalcularPrecioAPagarPorFamilia = document.getElementById("familiaForm_lblCalcularPrecioAPagarPorFamilia")
      this.lblCalcFamiliaMasPaga = document.getElementById("mainForm_lblCalcFamiliaMasPaga")
      this.lblPromedioPagadoLosLunes = document.getElementById("mainForm_lblPromedioPagadoLosLunes")
      this.lblIngresoTotal = document.getElementById("mainForm_lblIngresoTotal")
      this.btAgregar.onclick = () => controlador.mostrarVistaFamilia()
    }
    mostrar() {
        this.vista.hidden = false
      }
    ocultar() {
        this.vista.hidden = true
    } 
    reportarFamilia({
        familia,
        personas,
        dia,
        calcularPrecioAPagarPorFamilia,
        //saldoEnCaja,
        calcFamiliaMasPaga,
        PromedioPagadoLosLunes,
        ingresoTotal,
    }) {
        this.tabla.innerHTML += `
        <tr>
          <td>${familia}</td>
          <td>${personas}</td>
          <td>${dia}</td>
          <td>${calcularPrecioAPagarPorFamilia}</td>
        </tr>`
        //this.lblSaldoEnCaja.innerHTML = saldoEnCaja
        this.lblCalcularPrecioAPagarPorFamilia.innerHTML = calcularPrecioAPagarPorFamilia
        this.lblCalcFamiliaMasPaga.innerHTML = calcFamiliaMasPaga
        this.lblPromedioPagadoLosLunes.innerHTML = PromedioPagadoLosLunes
        this.lblIngresoTotal.innerHTML = ingresoTotal
    }
}