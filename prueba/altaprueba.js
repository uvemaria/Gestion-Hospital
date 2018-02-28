$("#btnAceptarAltaPrueba").click(altaPrueba);

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
    $("#comboMedicoPrueba").empty();

    jQuery.each(oArrayMedicos, function(i, elemento) {
        $('<option value="' + elemento.num_colegiado + '" >' + elemento.num_colegiado + '</option>').appendTo("#comboMedicoPrueba");
    });

}

function tratarGetPacientes(oArrayPacientes, sStatus, oXHR) {

    rellenaCombo(oArrayPacientes);

    // Guardar en localStorage
    localStorage["pacientes"] = JSON.stringify(oArrayPacientes);
}

function rellenaCombo(oArrayPacientes) {
    $("#comboPacientePrueba").empty();

    jQuery.each(oArrayPacientes, function(i, elemento) {
        $('<option value="' + elemento.dni + '" >' + elemento.dni + '</option>').appendTo("#comboPacientePrueba");
    });

}


function altaPrueba() {

    // if(validar())

    var sDatos = {
		id: frmCreaPrueba.txtIDPrueba.value.trim(),
		dniP: frmCreaPrueba.comboPacientePrueba.value,
		numCole: frmCreaPrueba.comboMedicoPrueba.value,
		fecha: frmCreaPrueba.txtFechaPrueba.value.trim(),
		hora: frmCreaPrueba.txtHoraPrueba.value.trim(),
        descripcion: frmCreaPrueba.txtDescripcionPrueba.value.trim(),
        tipo: frmCreaPrueba.txtTipoPrueba.value.trim()
	}

	 var datos = 'datos='+JSON.stringify(sDatos);
    $.post("prueba/altaPrueba.php", datos, respuestaAltaPrueba, 'json');

}

function respuestaAltaPrueba(oDatosDevueltos, sStatus, oAjax) {

    // oDatosDevueltos[0]  --- si hay o no error
    if (oDatosDevueltos[0] == false) {
        // Mensaje
        alert(oDatosDevueltos[1]);

        // Como ha ido bien cierro el formulario
        $("#frmCreaPrueba").hide("normal").get(0).reset();

    } else {
        alert(oDatosDevueltos[1]);
    }
}