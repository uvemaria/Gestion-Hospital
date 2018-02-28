

var sDatos = "";

$.post("listados/listadoPruebas.php", sDatos, respuestaListadoPruebas, 'json');

function respuestaListadoPruebas(oDatosDevueltos, sStatus, oAjax) {
    var tabla = '<table border=2 style="margin-top: 5%; margin-left: 25%;"><tr style="background-color: #81BEF7;"><th>ID</th><th>FECHA</th><th>HORA</th><th>TIPO</th><th>DESCRIPCIÓN</th><th>MÉDICO</th><th>PACIENTE</th></tr>';
    jQuery.each(oDatosDevueltos, function(i, elemento) {
        
        tabla +='<tr style="text-align: center;"><td>'+elemento.id+'</td><td>'+elemento.fecha+'</td><td>'+elemento.hora+'</td><td>'+elemento.tipo+'</td><td>'+elemento.descripcion
        +'</td><td>'+elemento.medico+'</td><td>'+elemento.paciente+'</td></tr>';
        
    });
    tabla += '</table>';
    listados.innerHTML = tabla;
}