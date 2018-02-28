$("#btnModificarPrueba2").click(modificarLaPrueba);

function modificarLaPrueba()
{
    var sId = frmModificaPrueba2.txtIdPrueba2.value;
    var sHora = frmModificaPrueba2.txtHoraPrueba2.value;
    var dFecha = frmModificaPrueba2.txtFechaPrueba2.value;
    var sTipo = frmModificaPrueba2.txtTipoPrueba2.value;
    var sDesc = frmModificaPrueba2.txtDescripcionPrueba2.value;
    var nColeg = frmModificaPrueba2.comboMedicoPrueba2.value;
    var sDniPac = frmModificaPrueba2.comboPacientePrueba2.value;

    var oPrueba = new Prueba(sId,dFecha,sHora,sTipo,sDesc,sDniPac,nColeg);
        //var sDatos = $("#frmAltaPaciente").serialize();
        var sDatos = 'datos='+JSON.stringify(oPrueba);

       $.ajax({
            url: "prueba/modificarPrueba.php",
            async: true,
            cache: false,
            method: "POST",
            data: sDatos,
            dataType: 'json',
            success: respuestaModificaPrueba
        });
}

function respuestaModificaPrueba(oDatosDevueltos)
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