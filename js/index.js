
$("#btnAltaPaciente").click(cargaAltaPaciente);
$("#btnModificaPaciente").click(cargaModificaPaciente);
$("#btnAltaMedico").click(cargaAltaMedico);
$("#btnModificaMedico").click(cargaModificaMedico);
$("#btnAltaCita").click(cargaAltaCita);
$("#btnModificaCita").click(cargaModificaCita);
$("#btnAltaAmbulancia").click(cargaAltaAmbulancia);
$("#btnModificaAmbulancia").click(cargaModificaAmbulancia);
$("#btnAltaPrueba").click(cargaAltaPrueba);
$("#btnModificaPrueba").click(cargaModificaPrueba);
$("#btnAltaTratamiento").click(cargaAltaTratamiento);
$("#btnModificaTratamiento").click(cargaModificaTratamiento);
$("#btnListadoPacientes").click(cargaListadoPacientes);
$("#btnListadoMedicos").click(cargaListadoMedicos);
$("#btnListadoCitasPorMedicos").click(cargaListadoCitasPorMedicos);
$("#btnListadoPruebas").click(cargaListadoPruebas);
$("#btnListadoAmbulancias").click(cargaListadoAmbulancias);
$("#btnListadoTratamientos").click(cargaListadoTratamientos);
$("#btnListadoCitas").click(cargaListadoCitas);

function cargaListadoPacientes()
{
	$("#formularios").hide("normal"); //oculta todos los formularios
	$.getScript("listados/listadoPacientes.js");
}

function cargaListadoPruebas()
{
	$("#formularios").hide("normal"); //oculta todos los formularios
	$.getScript("listados/listadoPruebas.js");
}

function cargaListadoMedicos()
{
	$("#formularios").hide("normal"); //oculta todos los formularios
	$.getScript("listados/listadoMedicos.js");
}

function cargaListadoAmbulancias()
{
	$("#formularios").hide("normal"); //oculta todos los formularios
	$.getScript("listados/listadoAmbulancias.js");
}

function cargaListadoCitas()
{
	$("#formularios").hide("normal"); //oculta todos los formularios
	$.getScript("listados/listadoCitas.js");
}

function cargaListadoCitasPorMedicos()
{
	$("#formularios").hide("normal"); //oculta todos los formularios
	$("#listados").empty();
	$("<div>").appendTo("#listados").load("listados/listadoCitasMedico.html", function(){$.getScript("listados/listadoCitasMedico.js");});
}

function cargaListadoTratamientos()
{
	$("#formularios").hide("normal"); //oculta todos los formularios
	$("#listados").empty();
	$("<div>").appendTo("#listados").load("listados/listadoTratamientosPaciente.html", function(){$.getScript("listados/listadoTratamientosPaciente.js");});
}

function cargaAltaPaciente() {
	$("form:not('#frmAltaPaciente')").hide("normal"); //oculta todos los form menos éste
	
	if($('#frmAltaPaciente').size()==0)  //verifico si ya se ha cargado el form antes
	{
		$("<div>").appendTo("#formularios").load("paciente/altapaciente.html", function(){$.getScript("paciente/altapaciente.js");});	
	}
	else
	{
		$("frmAltaPaciente").show("normal");
	}
}

function cargaModificaPaciente()
{
	$("form:not('#frmModificaPaciente')").hide("normal"); //oculta todos los form menos éste
	
	if($('#frmModificaPaciente').size()==0)  //verifico si ya se ha cargado el form antes
	{
		$("<div>").appendTo("#formularios").load("paciente/modificapaciente.html", function(){$.getScript("paciente/modificapaciente.js");});	
	}
	else
	{
		$("frmModificaPaciente").show("normal");
	}
}

function cargaAltaMedico() {
	$("form:not('#frmAltaMedico')").hide("normal"); //oculta todos los form menos éste
	
	if($('#frmAltaMedico').size()==0)  //verifico si ya se ha cargado el form antes
	{
		$("<div>").appendTo("#formularios").load("medico/altamedico.html", function(){$.getScript("medico/altamedico.js");});	
	}
	else
	{
		$("frmAltaMedico").show("normal");
	}
}

function cargaModificaMedico()
{
	$("form:not('#frmModificaMedico')").hide("normal"); //oculta todos los form menos éste
	
	if($('#frmModificaMedico').size()==0)  //verifico si ya se ha cargado el form antes
	{
		$("<div>").appendTo("#formularios").load("medico/modificamedico.html", function(){$.getScript("medico/modificamedico.js");});	
	}
	else
	{
		$("frmModificaMedico").show("normal");
	}
}

function cargaAltaCita() {
	$("form:not('#frmAltaCita')").hide("normal"); //oculta todos los form menos éste
	
	if($('#frmAltaCita').size()==0)  //verifico si ya se ha cargado el form antes
	{
		$("<div>").appendTo("#formularios").load("cita/altacita.html", function(){$.getScript("cita/altacita.js");});	
	}
	else
	{
		$("frmAltaCita").show("normal");
	}
}

function cargaModificaCita()
{
	$("form:not('#frmModificaCita')").hide("normal"); //oculta todos los form menos éste
	
	if($('#frmModificaCita').size()==0)  //verifico si ya se ha cargado el form antes
	{
		$("<div>").appendTo("#formularios").load("cita/modificacita.html", function(){$.getScript("cita/modificacita.js");});	
	}
	else
	{
		$("frmModificaCita").show("normal");
	}
}

function cargaAltaAmbulancia() {
	$("form:not('#frmAltaAmbulancia')").hide("normal"); //oculta todos los form menos éste
	
	if($('#frmAltaAmbulancia').size()==0)  //verifico si ya se ha cargado el form antes
	{
		$("<div>").appendTo("#formularios").load("ambulancia/altaambulancia.html", function(){$.getScript("ambulancia/altaambulancia.js");});	
	}
	else
	{
		$("frmAltaAmbulancia").show("normal");
	}
}

function cargaModificaAmbulancia()
{
	$("form:not('#frmModificaAmbulancia')").hide("normal"); //oculta todos los form menos éste
	
	if($('#frmModificaAmbulancia').size()==0)  //verifico si ya se ha cargado el form antes
	{
		$("<div>").appendTo("#formularios").load("ambulancia/modificaambulancia.html", function(){$.getScript("ambulancia/modificaambulancia.js");});	
	}
	else
	{
		$("frmModificaAmbulancia").show("normal");
	}
}

function cargaAltaPrueba() {
	$("form:not('#frmCreaPrueba')").hide("normal"); //oculta todos los form menos éste
	
	if($('#frmCreaPrueba').size()==0)  //verifico si ya se ha cargado el form antes
	{
		$("<div>").appendTo("#formularios").load("prueba/altaprueba.html", function(){$.getScript("prueba/altaprueba.js");});	
	}
	else
	{
		$("frmCreaPrueba").show("normal");
	}
}

function cargaModificaPrueba()
{
	$("form:not('#frmModificaPrueba')").hide("normal"); //oculta todos los form menos éste
	
	if($('#frmModificaPrueba').size()==0)  //verifico si ya se ha cargado el form antes
	{
		$("<div>").appendTo("#formularios").load("prueba/modificaprueba.html", function(){$.getScript("prueba/modificaprueba.js");});	
	}
	else
	{
		$("frmModificaPrueba").show("normal");
	}
}

function cargaAltaTratamiento() {
	$("form:not('#frmCreaTratamiento')").hide("normal"); //oculta todos los form menos éste
	
	if($('#frmCreaTratamiento').size()==0)  //verifico si ya se ha cargado el form antes
	{
		$("<div>").appendTo("#formularios").load("tratamiento/altatratamiento.html", function(){$.getScript("tratamiento/altatratamiento.js");});	
	}
	else
	{
		$("frmCreaTratamiento").show("normal");
	}
}

function cargaModificaTratamiento()
{
	$("form:not('#frmModificaTratamiento')").hide("normal"); //oculta todos los form menos éste
	
	if($('#frmModificaTratamiento').size()==0)  //verifico si ya se ha cargado el form antes
	{
		$("<div>").appendTo("#formularios").load("tratamiento/modificatratamiento.html", function(){$.getScript("tratamiento/modificatratamiento.js");});	
	}
	else
	{
		$("frmModificaTratamiento").show("normal");
	}
}

