$("#btnListarMedico").click(listaMedico);

// Ahora cargo el combo de medicos
$.get('combos/cargarComboMedicos.php', null, tratarGetMedicos, 'json');

function tratarGetMedicos(oArrayMedicos, sStatus, oXHR) {

    rellenaCombo2(oArrayMedicos);

    // Guardar en localStorage
    localStorage["medicos"] = JSON.stringify(oArrayMedicos);
}

function rellenaCombo2(oArrayMedicos) {
    $("#ComboMedicos").empty();

    jQuery.each(oArrayMedicos, function(i, elemento) {
        $('<option value="' + elemento.num_colegiado + '" >' + elemento.num_colegiado + '</option>').appendTo("#ComboMedicos");
    });

}

function listaMedico() {

    // if(validarAltaPropietario())

    var sDatos = $("#frmListadoMedico").serialize();

    $.post("listados/listadoCitasMedico.php", sDatos, respuestaListadoCitasMedico, 'json');

}

function respuestaListadoCitasMedico(oDatosDevueltos, sStatus, oAjax) {
    if(oDatosDevueltos!="")
    {
        var tabla = '<br><h1 align="center">Citas de ese médico</h1>';
        tabla += '<table border=2 style="margin-top: 5%; margin-left: 31%; text-align: center;"><tr style="background-color: #81BEF7;"><th>ID</th><th>FECHA</th><th>NUM.COLEGIADO</th><th>DNI PACIENTE</th><th>HORA</th><th>DESCRIPCIÓN</th></tr>';
        jQuery.each(oDatosDevueltos, function(i, elemento) {
            
            tabla +='<tr><td>'+elemento.id+'</td><td>'+elemento.fecha+'</td><td>'+elemento.num_colegiado+'</td><td>'+elemento.dni_paciente+'</td><td>'+elemento.hora
            +'</td><td>'+elemento.descripcion+'</td></tr>';
            
        });
        tabla += '</table>';
        listados.innerHTML = tabla;
    }
    else
    {
        var tabla = '<br><br><h1 align="center" style="color: red;">No hay citas de ese médico</h1>';
        tabla += '<br><br><h2 align="center">Volver al <a href="./index.html">inicio</a></h2>'
        listados.innerHTML = tabla;
    }
}



