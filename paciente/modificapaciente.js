// Registrar evento del boton aceptar de modificar paciente
$("#btnModificarPaciente").click(modificaPaciente);

// Ahora cargo el combo de pacientes
$.get('combos/cargarComboPacientes.php', null, tratarGetPacientes, 'json');

var sPaciente = "";
var oDatos = "";
function tratarGetPacientes(oArrayPacientes, sStatus, oXHR) {

    rellenaCombo(oArrayPacientes);

    // Guardar en localStorage
    localStorage["pacientes"] = JSON.stringify(oArrayPacientes);
}

function rellenaCombo(oArrayPacientes) {
    $("#ComboPacientes").empty();

    jQuery.each(oArrayPacientes, function(i, elemento) {
        $('<option value="' + elemento.dni + '" >' + elemento.dni + '</option>').appendTo("#ComboPacientes");
    });

}


function modificaPaciente() {

    cargaModificarPaciente();
    var oAjax1 = instanciarXHR();
    sPaciente = frmModificaPaciente.ComboPacientes.value;
    
    //alert (sPaciente);
    var sDatoEnvio = "dato=" + JSON.stringify(sPaciente);
    oAjax1.open("GET","paciente/modificapacienteGet.php?"+sDatoEnvio);
    oAjax1.addEventListener("readystatechange", procesoRespuesta, false);
    oAjax1.send();   
}

function procesoRespuesta()
{
    var oAjax1 = this;

            if (oAjax1.readyState == 4 && oAjax1.status == 200)
            {

                var sDatosRespuesta = oAjax1.responseText;

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
    frmModificaPaciente2.txtDNI2.value = sPaciente;
    frmModificaPaciente2.txtSSPaciente2.value = oDatos.num_ss;
    frmModificaPaciente2.txtNombrePaciente2.value = oDatos.nombre;
    frmModificaPaciente2.txtApellidosPaciente2.value = oDatos.apellidos;
    frmModificaPaciente2.txtDireccionPaciente2.value = oDatos.direccion;
    frmModificaPaciente2.txtEmailPaciente2.value = oDatos.correo;
    frmModificaPaciente2.txtTelefonoPaciente2.value = oDatos.telefono;
}


function cargaModificarPaciente()
{
    $("form:not('#frmModificaPaciente2')").hide("normal"); //oculta todos los form menos éste
    
    if($('#frmModificaPaciente2').size()==0)  //verifico si ya se ha cargado el form antes
    {
        $("<div>").appendTo("#formularios").load("paciente/modificaPaciente2.html", function(){$.getScript("paciente/modificaPaciente2.js");});   
    }
    else
    {
        $("frmModificaPaciente2").show("normal");
    }
}

