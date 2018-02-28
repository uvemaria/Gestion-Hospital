
$("#btnModificarAmbulancia").click(modificaAmbulancia);


$.get('combos/cargarComboAmbulancias.php', null, tratarGetAmbulancias, 'json');

var sAmbulancia = "";
var oDatos = "";

function tratarGetAmbulancias(oArrayAmbulancias, sStatus, oXHR) {

    rellenaCombo(oArrayAmbulancias);

    // Guardar en localStorage
    localStorage["ambulancias"] = JSON.stringify(oArrayAmbulancias);
}

function rellenaCombo(oArrayAmbulancias) {
    $("#ComboAmbulancias").empty();

    jQuery.each(oArrayAmbulancias, function(i, elemento) {
        $('<option value="' + elemento.matricula + '" >' + elemento.matricula + '</option>').appendTo("#ComboAmbulancias");
    });

}


function modificaAmbulancia() {

    cargaModificarAmbulancia();
    var oAjax = instanciarXHR();
    sAmbulancia = frmModificaAmbulancia.ComboAmbulancias.value;
    
    //alert (sPaciente);
    var sDatoEnvio = "dato=" + JSON.stringify(sAmbulancia);
    oAjax.open("GET","ambulancia/modificaAmbulanciaGet.php?"+sDatoEnvio);
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
    frmModificaAmbulancia2.txtMatricula.value = sAmbulancia;
    frmModificaAmbulancia2.txtCapacidad.value = oDatos.capacidad;
    frmModificaAmbulancia2.txtMarca.value = oDatos.marca;
}


function cargaModificarAmbulancia()
{
    $("form:not('#frmModificaAmbulancia2')").hide("normal"); //oculta todos los form menos éste
    
    if($('#frmModificaAmbulancia2').size()==0)  //verifico si ya se ha cargado el form antes
    {
        $("<div>").appendTo("#formularios").load("ambulancia/modificaambulancia2.html", function(){$.getScript("ambulancia/modificaambulancia2.js");});   
    }
    else
    {
        $("frmModificaAmbulancia2").show("normal");
    }
}

