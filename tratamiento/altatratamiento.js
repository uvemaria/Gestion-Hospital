$("#btnAceptarCrearTratamiento").click(altaTratamiento);

// Ahora cargo el combo de pacientes
$.get('combos/cargarComboPacientes.php', null, tratarGetPacientes, 'json');
// Ahora cargo el combo de medicos
$.get('combos/cargarComboMedicos.php', null, tratarGetMedicos, 'json');
// Ahora cargo el combo de medicamentos
$.get('combos/cargarComboMedicamentos.php', null, tratarGetMedicamentos, 'json');


function tratarGetMedicos(oArrayMedicos, sStatus, oXHR) {

    rellenaCombo2(oArrayMedicos);

    // Guardar en localStorage
    localStorage["medicos"] = JSON.stringify(oArrayMedicos);
}

function rellenaCombo2(oArrayMedicos) {
    $("#comboMedico").empty();

    jQuery.each(oArrayMedicos, function(i, elemento) {
        $('<option value="' + elemento.num_colegiado + '" >' + elemento.num_colegiado + '</option>').appendTo("#comboMedico");
    });

}

function tratarGetMedicamentos(oArrayMedicamentos, sStatus, oXHR) {

    rellenaCombo3(oArrayMedicamentos);

    // Guardar en localStorage
    localStorage["medicamentos"] = JSON.stringify(oArrayMedicamentos);
}

function rellenaCombo3(oArrayMedicamentos) {
    $("#comboMedicamento").empty();

    jQuery.each(oArrayMedicamentos, function(i, elemento) {
        $('<option value="' + elemento.id + '" >' + elemento.nombre + '</option>').appendTo("#comboMedicamento");
    });

}

function tratarGetPacientes(oArrayPacientes, sStatus, oXHR) {

    rellenaCombo(oArrayPacientes);

    // Guardar en localStorage
    localStorage["pacientes"] = JSON.stringify(oArrayPacientes);
}

function rellenaCombo(oArrayPacientes) {
    $("#ComboPaciente").empty();

    jQuery.each(oArrayPacientes, function(i, elemento) {
        $('<option value="' + elemento.dni + '" >' + elemento.dni + '</option>').appendTo("#ComboPaciente");
    });

}


function altaTratamiento() {     

    // if(validar())

    var sDatos = {
		id: frmCreaTratamiento.txtIDTratamiento.value.trim(),
		dniP: frmCreaTratamiento.ComboPaciente.value,
		numCole: frmCreaTratamiento.comboMedico.value,
		fechaInicio: frmCreaTratamiento.txtInicio.value.trim(),
		fechaFin: frmCreaTratamiento.txtFin.value.trim(),
        posologia: frmCreaTratamiento.txtPosologia.value.trim(),
        medicamento: frmCreaTratamiento.comboMedicamento.value,
        instrucciones: frmCreaTratamiento.txtInstrucciones.value.trim()
	}

	 var datos = 'datos='+JSON.stringify(sDatos);
    $.post("tratamiento/altatratamiento.php", datos, respuestaAltaTratamiento, 'json');

}

function respuestaAltaTratamiento(oDatosDevueltos, sStatus, oAjax) {

    // oDatosDevueltos[0]  --- si hay o no error
    if (oDatosDevueltos[0] == false) {
        // Mensaje
        alert(oDatosDevueltos[1]);

        // Como ha ido bien cierro el formulario
        $("#frmCreaTratamiento").hide("normal").get(0).reset();

    } else {
        alert(oDatosDevueltos[1]);
    }
}