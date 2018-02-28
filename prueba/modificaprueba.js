
$("#btnModificarPrueba").click(modificaPrueba);


$.get('combos/cargarComboPruebas.php', null, tratarGetPruebas, 'json');

var sPrueba = "";
var oDatos = "";

function tratarGetPruebas(oArrayPruebas, sStatus, oXHR) {

    rellenaCombo(oArrayPruebas);

    // Guardar en localStorage
    localStorage["pruebas"] = JSON.stringify(oArrayPruebas);
}

function rellenaCombo(oArrayPruebas) {
    $("#ComboPruebas").empty();

    jQuery.each(oArrayPruebas, function(i, elemento) {
        $('<option value="' + elemento.id + '" >' + elemento.id + '</option>').appendTo("#ComboPruebas");
    });

}


function modificaPrueba() {

    cargaModificarPrueba();
    var oAjax = instanciarXHR();
    sPrueba = frmModificaPrueba.ComboPruebas.value;
    
    //alert (sPaciente);
    var sDatoEnvio = "dato=" + JSON.stringify(sPrueba);
    oAjax.open("GET","prueba/modificaPruebaGet.php?"+sDatoEnvio);
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
    frmModificaPrueba2.txtIdPrueba2.value = sPrueba;
    frmModificaPrueba2.txtFechaPrueba2.value = oDatos.fecha;
    frmModificaPrueba2.txtHoraPrueba2.value = oDatos.hora;
    frmModificaPrueba2.txtTipoPrueba2.value = oDatos.tipo;
    frmModificaPrueba2.txtDescripcionPrueba2.value = oDatos.descripcion;
    //$('#capa img').attr("selected","andando.gif");
   // frmModificaPrueba2.comboPacientePrueba2.value = oDatos.dni_paciente;
    //frmModificaPrueba2.comboMedicoPrueba2.value = oDatos.num_colegiado;
}


function cargaModificarPrueba()
{
    $("form:not('#frmModificaPrueba2')").hide("normal"); //oculta todos los form menos éste
    
    if($('#frmModificaPrueba2').size()==0)  //verifico si ya se ha cargado el form antes
    {
        $("<div>").appendTo("#formularios").load("prueba/modificaprueba2.html", function(){$.getScript("prueba/modificaprueba2.js");});   
    }
    else
    {
        $("frmModificaPrueba2").show("normal");
    }
}

function tratarGetPacientes(oArrayPacientes, sStatus, oXHR)
{
    $("#comboPacientePrueba2").empty();

    jQuery.each(oArrayPacientes, function(i, elemento) {
        if (elemento.dni == oDatos.dni_paciente)
        {
            $('<option value="' + elemento.dni + '" selected>' + elemento.dni + '</option>').appendTo("#comboPacientePrueba2");
        }
        else
        {
            $('<option value="' + elemento.dni + '" >' + elemento.dni + '</option>').appendTo("#comboPacientePrueba2");
        }
    });

    localStorage["pacientes"] = JSON.stringify(oArrayPacientes);
}

function tratarGetMedicos(oArrayMedicos, sStatus, oXHR)
{
    $("#comboMedicoPrueba2").empty();

    jQuery.each(oArrayMedicos, function(i, elemento) {
        if (elemento.num_colegiado == oDatos.num_colegiado)
        {
            $('<option value="' + elemento.num_colegiado + '" selected >' + elemento.num_colegiado + '</option>').appendTo("#comboMedicoPrueba2");
        }
        else
        {
            $('<option value="' + elemento.num_colegiado + '" >' + elemento.num_colegiado + '</option>').appendTo("#comboMedicoPrueba2");
        }
    });

    localStorage["medicos"] = JSON.stringify(oArrayMedicos);
}