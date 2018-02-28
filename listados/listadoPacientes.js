
// if(validarAltaPropietario())

var sDatos = "";

$.post("listados/listadoPacientes.php", sDatos, respuestaListadoPacientes, 'json');

function respuestaListadoPacientes(oDatosDevueltos, sStatus, oAjax) {
    var tabla = '<br><h1 align="center">Listado de pacientes</h1>';
    tabla += '<table border=2 style="margin-top: 5%; margin-left: 25%; text-align: center;"><tr style="background-color: #81BEF7;"><th>DNI</th><th>NOMBRE</th><th>APELLIDOS</th><th>DIRECCION</th><th>EMAIL</th><th>TELEFONO</th><th>NUM.SEG SOCIAL</th></tr>';
    jQuery.each(oDatosDevueltos, function(i, elemento) {
        
        tabla +='<tr><td>'+elemento.dni+'</td><td>'+elemento.nombre+'</td><td>'+elemento.apellidos+'</td><td>'+elemento.direccion+'</td><td>'+elemento.correo
        +'</td><td>'+elemento.telefono+'</td><td>'+elemento.num_ss+'</td></tr>';
        
    });
    tabla += '</table>';
    listados.innerHTML = tabla;
}