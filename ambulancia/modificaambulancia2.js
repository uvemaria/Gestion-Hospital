$("#btnModificarAmbulancia2").click(modificarLaAmbulancia);

function modificarLaAmbulancia()
{
   
    var sMatri = frmModificaAmbulancia2.txtMatricula.value;
    var iCapa = frmModificaAmbulancia2.txtCapacidad.value;
    var sMarca = frmModificaAmbulancia2.txtMarca.value;

    var oAmbulancia = new Ambulancia(sMatri,iCapa,sMarca);
    var sDatos = 'datos='+JSON.stringify(oAmbulancia);

       $.ajax({
            url: "ambulancia/modificarAmbulancia.php",
            async: true,
            cache: false,
            method: "POST",
            data: sDatos,
            dataType: 'json',
            success: respuestaModificaAmbulancia
        });
}

function respuestaModificaAmbulancia(oDatosDevueltos)
{
    // oDatosDevueltos[0]  --- si hay o no error
    if (oDatosDevueltos[0] == false) 
    {
        // Mensaje
        alert(oDatosDevueltos[1]);

        // Como ha ido bien cierro el formulario
        $("#frmModificaAmbulancia2").hide("normal").get(0).reset();

    } 
    else
    {
        alert(oDatosDevueltos[1]);
    }
}