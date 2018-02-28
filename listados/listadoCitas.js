
// if(validarAltaPropietario())

var sDatos = "";

$.post("listados/listadoCitas.php", sDatos, respuestaListadoCitas, 'json');

function respuestaListadoCitas(oDatosDevueltos, sStatus, oAjax) {
    var tabla = '<h1 align="center">Citas no anuladas</h1>';
    tabla += '<table border=2 style="margin-top: 5%; margin-left: 31%; text-align: center;"><tr style="background-color: #81BEF7;"><th>ID</th><th>FECHA</th><th>NUM.COLEGIADO</th><th>DNI PACIENTE</th><th>HORA</th><th>DESCRIPCIÓN</th></tr>';
    jQuery.each(oDatosDevueltos, function(i, elemento) {
        
        tabla +='<tr><td>'+elemento.id+'</td><td>'+elemento.fecha+'</td><td>'+elemento.num_colegiado+'</td><td>'+elemento.dni_paciente+'</td><td>'+elemento.hora
        +'</td><td>'+elemento.descripcion+'</td></tr>';
        
    });
    tabla += '</table>';
    listados.innerHTML = tabla;
}