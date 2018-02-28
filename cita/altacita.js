$("#btnAceptarAltaCita").click(altaCita);

// Ahora cargo el combo de pacientes
$.get('combos/cargarComboPacientes.php', null, tratarGetPacientes, 'json');
// Ahora cargo el combo de medicos
$.get('combos/cargarComboMedicos.php', null, tratarGetMedicos, 'json');


function tratarGetMedicos(oArrayMedicos, sStatus, oXHR) {

    rellenaCombo2(oArrayMedicos);

    // Guardar en localStorage
    localStorage["medicos"] = JSON.stringify(oArrayMedicos);
}

function rellenaCombo2(oArrayMedicos) {
    $("#comboNUMMedico").empty();

    jQuery.each(oArrayMedicos, function(i, elemento) {
        $('<option value="' + elemento.num_colegiado + '" >' + elemento.num_colegiado + '</option>').appendTo("#comboNUMMedico");
    });

}

function tratarGetPacientes(oArrayPacientes, sStatus, oXHR) {

    rellenaCombo(oArrayPacientes);

    // Guardar en localStorage
    localStorage["pacientes"] = JSON.stringify(oArrayPacientes);
}

function rellenaCombo(oArrayPacientes) {
    $("#comboDNIPaciente").empty();

    jQuery.each(oArrayPacientes, function(i, elemento) {
        $('<option value="' + elemento.dni + '" >' + elemento.dni + '</option>').appendTo("#comboDNIPaciente");
    });

}


function altaCita() {

    // if(validarAltaPropietario())

    var sDatos = {
		id: frmAltaCita.txtIDCita.value.trim(),
		dniP: frmAltaCita.comboDNIPaciente.value,
		numCole: frmAltaCita.comboNUMMedico.value,
		fecha: frmAltaCita.txtFecha.value.trim(),
		hora: frmAltaCita.txtHora.value.trim(),
		descripcion: frmAltaCita.txtDescripcion.value.trim()
	}

	 var datos = 'datos='+JSON.stringify(sDatos);
    $.post("cita/altaCita.php", datos, respuestaAltaCita, 'json');

}

function respuestaAltaCita(oDatosDevueltos, sStatus, oAjax) {

    // oDatosDevueltos[0]  --- si hay o no error
    if (oDatosDevueltos[0] == false) {
        // Mensaje
        alert(oDatosDevueltos[1]);

        // Como ha ido bien cierro el formulario
        $("#frmAltaCita").hide("normal").get(0).reset();

    } else {
        alert(oDatosDevueltos[1]);
    }
}