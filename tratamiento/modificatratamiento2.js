$("#btnModificarTratamiento2").click(modificarElTratamiento);

function modificarElTratamiento()
{
    var sId = frmModificaTratamiento2.txtIdTratamiento2.value;
    var sPosologia = frmModificaTratamiento2.txtPosologia.value;
    var dInicio = frmModificaTratamiento2.txtInicio.value;
    var dFin = frmModificaTratamiento2.txtFin.value;
    var nMedico = frmModificaTratamiento2.comboMedico.value;
    var sPaciente= frmModificaTratamiento2.ComboPaciente.value;
    var sMedicamento = frmModificaTratamiento2.comboMedicamento.value;
    var sInstruc = frmModificaTratamiento2.txtInstrucciones.value;

    var oTratamiento = new Tratamiento(sId,sPosologia,dInicio,dFin,nMedico,sPaciente,sMedicamento,sInstruc);
        //var sDatos = $("#frmAltaPaciente").serialize();
        var sDatos = 'datos='+JSON.stringify(oTratamiento);

       $.ajax({
            url: "tratamiento/modificarTratamiento.php",
            async: true,
            cache: false,
            method: "POST",
            data: sDatos,
            dataType: 'json',
            success: respuestaModificaTratamiento
        });
}

function respuestaModificaTratamiento(oDatosDevueltos)
{
    // oDatosDevueltos[0]  --- si hay o no error
    if (oDatosDevueltos[0] == false) 
    {
        // Mensaje
        alert(oDatosDevueltos[1]);

        // Como ha ido bien cierro el formulario
        $("#frmModificaPrueba2").hide("normal").get(0).reset();

    } 
    else
    {
        alert(oDatosDevueltos[1]);
    }
}