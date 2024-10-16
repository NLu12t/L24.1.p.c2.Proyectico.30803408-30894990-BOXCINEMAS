export default class Cl_vCinesUnidos {
    constructor( controlador ) {
      this.vista = document.getElementById("mainForm");
      this.tabla = document.getElementById("mainForm_tabla");
      this.btAgregar = document.getElementById("mainForm_btAgregar");
      this.lblCajaInicial = document.getElementById("mainForm_lblCajaInicial");
      this.lblCalcFamiliaMasPaga = document.getElementById("mainForm_lblCalcFamiliaMasPaga");
      this.lblPromedioPagadoLosLunes = document.getElementById("mainForm_lblPromedioPagadoLosLunes");
      //this.lblCalcularPrecioAPagarPorFamilia = document.getElementById("mainForm_lblCalcularPrecioAPagarPorFamilia");
      this.lblIngresoTotal = document.getElementById("mainForm_lblIngresoTotal");
      this.btAgregar.onclick = () => controlador.mostrarVistaFamilia();
    }
    mostrar() {
        this.vista.hidden = false;
      }
    ocultar() {
        this.vista.hidden = true;
    } 

    reportarFamilia({
        cajaInicial,
        familia,
        personas,
        dia,
        calcularPrecioAPagarPorFamilia,
        mayApellido,
        PromedioPagadoLosLunes,
        ingresoTotal,
    }) {
      this.lblCajaInicial.innerHTML = cajaInicial;
        this.tabla.innerHTML += `
        <tr>
          <td>${familia}</td>
          <td>${personas}</td>
          <td>${dia}</td> 
          <td>${calcularPrecioAPagarPorFamilia}</td>
        </tr>`;
        this.lblMayApellido.innerHTML = mayApellido;
        this.lblPromedioPagadoLosLunes.innerHTML = PromedioPagadoLosLunes;
        this.lblIngresoTotal.innerHTML = ingresoTotal;
    }
}