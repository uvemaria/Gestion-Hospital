$("#btnAceptarmodificaPaciente2").click(modificarElPaciente);

function modificarElPaciente()
{
    var nif = frmModificaPaciente2.txtDNI2.value;
    var sSS = frmModificaPaciente2.txtSSPaciente2.value;
    var sNombre = frmModificaPaciente2.txtNombrePaciente2.value;
    var sApe = frmModificaPaciente2.txtApellidosPaciente2.value;
    var sDir = frmModificaPaciente2.txtDireccionPaciente2.value;
    var sEmail = frmModificaPaciente2.txtEmailPaciente2.value;
    var sTlf = frmModificaPaciente2.txtTelefonoPaciente2.value;

    var oPaciente = new Paciente(nif,sNombre,sApe,sDir,sEmail,sTlf,sSS);
        //var sDatos = $("#frmAltaPaciente").serialize();
        var sDatos = 'datos='+JSON.stringify(oPaciente);

       $.ajax({
            url: "paciente/modificarpaciente.php",
            async: true,
            cache: false,
            method: "POST",
            data: sDatos,
            dataType: 'json',
            success: respuestaModificaPaciente
        });
}

function respuestaModificaPaciente(oDatosDevueltos)
{
    // oDatosDevueltos[0]  --- si hay o no error
    if (oDatosDevueltos[0] == false) 
    {
        // Mensaje
        alert(oDatosDevueltos[1]);

        // Como ha ido bien cierro el formulario
        $("#frmModificaPaciente2").hide("normal").get(0).reset();

    } 
    else
    {
        alert(oDatosDevueltos[1]);
    }
}