$("#btnAceptarAltaMedico").click(altaMedico);

function altaMedico() {

    // if(validarAltaPropietario())

    var sDatos = $("#frmAltaMedico").serialize();

    $.post("medico/altaMedico.php", sDatos, respuestaAltaMedico, 'json');

}

function respuestaAltaMedico(oDatosDevueltos, sStatus, oAjax) {

    // oDatosDevueltos[0]  --- si hay o no error
    if (oDatosDevueltos[0] == false) {
        // Mensaje
        alert(oDatosDevueltos[1]);

        // Como ha ido bien cierro el formulario
        $("#frmAltaMedico").hide("normal").get(0).reset();

    } else {
        alert(oDatosDevueltos[1]);
    }


}