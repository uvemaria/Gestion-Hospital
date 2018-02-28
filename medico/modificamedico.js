// Registrar evento del boton aceptar de modificar medico
$("#btnModificarMedico").click(modificaMedico);

// Ahora cargo el combo de medicos
$.get('combos/cargarComboMedicos.php', null, tratarGetMedico, 'json');

var sMedico = "";
var oDatos = "";

function tratarGetMedico(oArrayMedicos, sStatus, oXHR) {
    rellenaCombo(oArrayMedicos);

    // Guardar en localStorage
    localStorage["medicos"] = JSON.stringify(oArrayMedicos);
}

function rellenaCombo(oArrayMedicos) {
    $("#ComboMedicos").empty();

    jQuery.each(oArrayMedicos, function(i, elemento) {
        $('<option value="' + elemento.num_colegiado + '" >' + elemento.num_colegiado + '</option>').appendTo("#ComboMedicos");
    });

}


function modificaMedico() {

    cargaModificarMedico();
    var oAjax = instanciarXHR();
    sMedico = frmModificaMedico.ComboMedicos.value;
    
    var sDatoEnvio = "dato=" + JSON.stringify(sMedico);
    oAjax.open("GET","medico/modificamedicoGet.php?"+sDatoEnvio);
    oAjax.addEventListener("readystatechange", procesoRespuesta, false);
    oAjax.send();  
}

function procesoRespuesta()
{
    var oAjax = this;

            if (oAjax.readyState == 4 && oAjax.status == 200)
            {

                var sDatosRespuesta = oAjax.responseText;

                // Los datos vienen como cadena JSON
                oDatos = JSON.parse(sDatosRespuesta);
                meterDatosFormulario(); 
            }
}

function instanciarXHR() 
{
            var xhttp = null;

            if (window.XMLHttpRequest) {
                xhttp = new XMLHttpRequest();
            } else // code for IE5 and IE6
            {
                xhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }

            return xhttp;
}

function meterDatosFormulario()
{
    frmModificaMedico2.txtDNIMedico2.value = oDatos.dni;
    frmModificaMedico2.txtSS2.value = sMedico;
    frmModificaMedico2.txtNombreMedico2.value = oDatos.nombre;
    frmModificaMedico2.txtApellidosMedico2.value = oDatos.apellidos;
    frmModificaMedico2.txtDireccionMedico2.value = oDatos.direccion;
    frmModificaMedico2.txtTelefonoMedico2.value = oDatos.telefono;
    frmModificaMedico2.txtEmailMedico2.value = oDatos.correo;
}


function cargaModificarMedico()
{
    $("form:not('#frmModificaMedico2')").hide("normal"); //oculta todos los form menos éste
    
    if($('#frmModificaMedico2').size()==0)  //verifico si ya se ha cargado el form antes
    {
        $("<div>").appendTo("#formularios").load("medico/modificamedico2.html", function(){$.getScript("medico/modificamedico2.js");});   
    }
    else
    {
        $("frmModificaMedico2").show("normal");
    }
}

