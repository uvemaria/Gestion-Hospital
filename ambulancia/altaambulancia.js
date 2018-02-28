$("#btnAceptarAltaAmbulancia").click(altaAmbulancia);

function altaAmbulancia()
{

    //if(validarPaciente())
    //{
        var matricula = frmAltaAmbulancia.txtMatricula.value.trim();
        var capacidad = frmAltaAmbulancia.txtCapacidad.value.trim();
        var marca = frmAltaAmbulancia.txtMarca.value.trim();
        var oAmbulancia = new Ambulancia(matricula,capacidad,marca);

        var sDatos = 'datos='+JSON.stringify(oAmbulancia);

       $.ajax({
            url: "ambulancia/altaambulancia.php",
            async: true,
            cache: false,
            method: "POST",
            data: sDatos,
            dataType: 'json',
            success: respuestaAltaAmbulancia
        });
		
    //}
}

function respuestaAltaAmbulancia(oDatosDevueltos)
{
    // oDatosDevueltos[0]  --- si hay o no error
    if (oDatosDevueltos[0] == false) 
    {
        // Mensaje
        alert(oDatosDevueltos[1]);

        // Como ha ido bien cierro el formulario
        $("#frmAltaAmbulancia").hide("normal").get(0).reset();

    } 
    else
    {
        alert(oDatosDevueltos[1]);
    }
}
