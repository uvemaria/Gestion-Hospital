$("#btnModificarMedico2").click(modificarElMedico);

function modificarElMedico()
{
    var nif = frmModificaMedico2.txtDNIMedico2.value;
    var iNum = frmModificaMedico2.txtSS2.value;
    var sNombre = frmModificaMedico2.txtNombreMedico2.value;
    var sApe = frmModificaMedico2.txtApellidosMedico2.value;
    var sDir = frmModificaMedico2.txtDireccionMedico2.value;
    var sEmail = frmModificaMedico2.txtEmailMedico2.value;
    var sTlf = frmModificaMedico2.txtTelefonoMedico2.value;

    var oMedico = new Medico(nif,sNombre,sApe,sDir,sEmail,sTlf,iNum);
        //var sDatos = $("#frmAltaPaciente").serialize();
        var sDatos = 'datos='+JSON.stringify(oMedico);

       $.ajax({
            url: "medico/modificarMedico.php",
            async: true,
            cache: false,
            method: "POST",
            data: sDatos,
            dataType: 'json',
            success: respuestaModificaMedico
        });
}

function respuestaModificaMedico(oDatosDevueltos)
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