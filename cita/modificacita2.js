$("#btnModificarCita2").click(anularCita);

function anularCita()
{
	var sId = frmModificaCita2.txtIDCita2.value;

	var sParametroPOST = "dato=" + JSON.stringify(sId);
    $.post("cita/anularCita.php", sParametroPOST, respuestaAnularCita, 'json');
}

function respuestaAnularCita(oDatosDevueltos)
{
	if (oDatosDevueltos[0] == false) 
    {
        // Mensaje
        alert(oDatosDevueltos[1]);

        // Como ha ido bien cierro el formulario
        $("#frmModificaCita2").hide("normal").get(0).reset();

    } 
    else
    {
        alert(oDatosDevueltos[1]);
    }
}