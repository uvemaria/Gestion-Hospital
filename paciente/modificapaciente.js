// Registrar evento del boton aceptar de modificar paciente
$("#btnModificarPaciente").click(modificaPaciente);

// Ahora cargo el combo de pacientes
$.get('combos/cargarComboPacientes.php', null, tratarGetPacientes, 'json');


function tratarGetPacientes(oArrayPacientes, sStatus, oXHR) {

    rellenaCombo(oArrayPacientes);

    // Guardar en localStorage
    localStorage["pacientes"] = JSON.stringify(oArrayPacientes);
}

function rellenaCombo(oArrayPacientes) {
    $("#ComboPacientes").empty();

    jQuery.each(oArrayPacientes, function(i, elemento) {
        $('<option value="' + elemento.dni + '" >' + elemento.dni + '</option>').appendTo("#ComboPacientes");
    });

}


function modificaPaciente() {

   /* // if(validarModificaPaciente())

    var oCasa = new Casa(0, $('#cmbPropietario').val(), $('#cmbUbicaciones').val(), frmAltaCasa.txtDescripcion.value, $('#txtHabitaciones').val(), sPiscina, frmAltaCasa.txtPrecio.value);

    // Formateo de parametro POST
    var sParametroPOST = "datos=" + JSON.stringify(oCasa);

    // Llamada POST con Jquery	
    $.post("altaCasa.php", sParametroPOST, respuestaAltaCasa, 'json');*/

}

