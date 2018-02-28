
// if(validarAltaPropietario())

var sDatos = "";

$.post("listados/listadoAmbulancias.php", sDatos, respuestaListadoAmbulancias, 'json');

function respuestaListadoAmbulancias(oDatosDevueltos, sStatus, oAjax) {
    var tabla = '<br><h1 align="center">Listado de ambulancias</h1>';
    tabla += '<table border=2 style="margin-top: 5%; margin-left: 40%; text-align: center;"><tr style="background-color: #81BEF7;"><th>MATRÍCULA</th><th>CAPACIDAD</th><th>MARCA</th></tr>';
    jQuery.each(oDatosDevueltos, function(i, elemento) {
        
        tabla +='<tr><td>'+elemento.matricula+'</td><td>'+elemento.capacidad+'</td><td>'+elemento.marca+'</td></tr>';
        
    });
    tabla += '</table>';
    listados.innerHTML = tabla;
}