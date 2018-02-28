$("#btnListarPaciente").click(listaTratamiento);

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

function listaTratamiento() {

    var sDatos = $("#frmListadoPaciente").serialize();

    $.post("listados/listadoTratamientosPaciente.php", sDatos, respuestaListadoTratamientosPaciente, 'json');

}

function respuestaListadoTratamientosPaciente(oDatosDevueltos, sStatus, oAjax) {
    if(oDatosDevueltos!="")
    {
        var tabla = '<br><h1 align="center">Tratamientos de ese paciente</h1>';
        tabla += '<table border=2 style="margin-top: 5%; margin-left: 20%; text-align: center;"><tr style="background-color: #81BEF7;"><th>ID</th><th>POSOLOGÍA</th><th>FECHA INICIO</th><th>FECHA FIN</th><th>PACIENTE</th><th>MEDICO</th><th>MEDICAMENTO</th><th>INSTRUCCIONES</th></tr>';
        jQuery.each(oDatosDevueltos, function(i, elemento) {
            
            tabla +='<tr><td>'+elemento.id+'</td><td>'+elemento.posologia+'</td><td>'+elemento.fecha_inicio+'</td><td>'+elemento.fecha_fin+'</td><td>'+elemento.paciente
            +'</td><td>'+elemento.medico+'</td><td>'+elemento.nombre+'</td><td>'+elemento.instrucciones+'</td></tr>';
            
        });
        tabla += '</table>';
        listados.innerHTML = tabla;
    }
    else
    {
        var tabla = '<br><br><h1 align="center" style="color: red;">No hay tratamientos registrados de ese paciente</h1>';
        tabla += '<br><br><h2 align="center">Volver al <a href="./index.html">inicio</a></h2>'
        listados.innerHTML = tabla;
    }
}



