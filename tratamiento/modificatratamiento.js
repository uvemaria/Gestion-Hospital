
$("#btnModificarTratamiento").click(modificaTratamiento);


$.get('combos/cargarComboTratamiento.php', null, tratarGetTratamientos, 'json');

var sTratamiento = "";
var oDatos = "";

function tratarGetTratamientos(oArrayTratamientos, sStatus, oXHR) {

    rellenaCombo(oArrayTratamientos);

    // Guardar en localStorage
    localStorage["tratamientos"] = JSON.stringify(oArrayTratamientos);
}

function rellenaCombo(oArrayTratamientos) {
    $("#ComboTratamientos").empty();

    jQuery.each(oArrayTratamientos, function(i, elemento) {
        $('<option value="' + elemento.id + '" >' + elemento.id + '</option>').appendTo("#ComboTratamientos");
    });

}


function modificaTratamiento() {

    cargaModificarTratamiento();
    var oAjax = instanciarXHR();
    sTratamiento = frmModificaTratamiento.ComboTratamientos.value;
    
    
    var sDatoEnvio = "dato=" + JSON.stringify(sTratamiento);
    oAjax.open("GET","tratamiento/modificaTratamientoGet.php?"+sDatoEnvio);
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
    $.get('combos/cargarComboPacientes.php', null, tratarGetPacientes, 'json');
    $.get('combos/cargarComboMedicos.php', null, tratarGetMedicos, 'json');
    $.get('combos/cargarComboMedicamentos.php', null, tratarGetMedicamentos, 'json');
    frmModificaTratamiento2.txtIdTratamiento2.value = sTratamiento;
    frmModificaTratamiento2.txtPosologia.value = oDatos.posologia;
    frmModificaTratamiento2.txtInicio.value = oDatos.fecha_inicio;
    frmModificaTratamiento2.txtFin.value = oDatos.fecha_fin;
    frmModificaTratamiento2.txtInstrucciones.value = oDatos.instrucciones;
}


function cargaModificarTratamiento()
{
    $("form:not('#frmModificaTratamiento2')").hide("normal"); //oculta todos los form menos éste
    
    if($('#frmModificaTratamiento2').size()==0)  //verifico si ya se ha cargado el form antes
    {
        $("<div>").appendTo("#formularios").load("tratamiento/modificatratamiento2.html", function(){$.getScript("tratamiento/modificatratamiento2.js");});   
    }
    else
    {
        $("frmModificaTratamiento2").show("normal");
    }
}

function tratarGetPacientes(oArrayPacientes, sStatus, oXHR)
{
    $("#ComboPaciente").empty();

    jQuery.each(oArrayPacientes, function(i, elemento) {
        if (elemento.dni == oDatos.paciente)
        {
            $('<option value="' + elemento.dni + '" selected>' + elemento.dni + '</option>').appendTo("#ComboPaciente");
        }
        else
        {
            $('<option value="' + elemento.dni + '" >' + elemento.dni + '</option>').appendTo("#ComboPaciente");
        }
    });

    localStorage["pacientes"] = JSON.stringify(oArrayPacientes);
}

function tratarGetMedicos(oArrayMedicos, sStatus, oXHR)
{
    $("#comboMedico").empty();

    jQuery.each(oArrayMedicos, function(i, elemento) {
        if (elemento.num_colegiado == oDatos.medico)
        {
            $('<option value="' + elemento.num_colegiado + '" selected >' + elemento.num_colegiado + '</option>').appendTo("#comboMedico");
        }
        else
        {
            $('<option value="' + elemento.num_colegiado + '" >' + elemento.num_colegiado + '</option>').appendTo("#comboMedico");
        }
    });

    localStorage["medicos"] = JSON.stringify(oArrayMedicos);
}

function tratarGetMedicamentos(oArrayMedicamentos, sStatus, oXHR)
{
    $("#comboMedicamento").empty();

    jQuery.each(oArrayMedicamentos, function(i, elemento) {
        if (elemento.id == oDatos.medicamento)
        {
            $('<option value="' + elemento.id + '" selected >' + elemento.nombre + '</option>').appendTo("#comboMedicamento");
        }
        else
        {
            $('<option value="' + elemento.id + '" >' + elemento.nombre + '</option>').appendTo("#comboMedicamento");
        }
    });

    localStorage["medicamentos"] = JSON.stringify(oArrayMedicamentos);
}