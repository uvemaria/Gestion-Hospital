// Registrar evento del boton aceptar de modificar paciente
$("#btnModificarCita").click(modificaCita);

// Ahora cargo el combo de pacientes
$.get('combos/cargarComboCitas.php', null, tratarGetCitas, 'json');

var sCita = "";
var oDatos = "";
function tratarGetCitas(oArrayCitas, sStatus, oXHR) {

    rellenaCombo(oArrayCitas);

    // Guardar en localStorage
    localStorage["citas"] = JSON.stringify(oArrayCitas);
}

function rellenaCombo(oArrayCitas) {
    $("#ComboCitas").empty();

    jQuery.each(oArrayCitas, function(i, elemento) {
        $('<option value="' + elemento.id + '" >' + elemento.id + '</option>').appendTo("#ComboCitas");
    });

}


function modificaCita() {

    cargaModificarCita();
    var oAjax = instanciarXHR();
    sCita = frmModificaCita.ComboCitas.value;
    
    //alert (sPaciente);
    var sDatoEnvio = "dato=" + JSON.stringify(sCita);
    oAjax.open("GET","cita/modificaCitaGet.php?"+sDatoEnvio);
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
    frmModificaCita2.txtIDCita2.value = sCita;
    frmModificaCita2.txtDNIPaciente2.value = oDatos.dni_paciente;
    frmModificaCita2.txtDNIMedico2.value = oDatos.num_colegiado;
    frmModificaCita2.txtFecha2.value = oDatos.fecha;
    frmModificaCita2.txtHora2.value = oDatos.hora;
    frmModificaCita2.txtDescripcion2.value = oDatos.descripcion;
    frmModificaCita2.txtAnulada.value = oDatos.anulada;
}


function cargaModificarCita()
{
    $("form:not('#frmModificaCita2')").hide("normal"); //oculta todos los form menos éste
    
    if($('#frmModificaCita2').size()==0)  //verifico si ya se ha cargado el form antes
    {
        $("<div>").appendTo("#formularios").load("cita/modificacita2.html", function(){$.getScript("cita/modificacita2.js");});   
    }
    else
    {
        $("frmModificaCita2").show("normal");
    }
}

