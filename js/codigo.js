//var oHospital = new HOSPITAL();

var oXML = null;
var medicamentos = [];
datosIniciales();

function datosIniciales()
{	
	function loadXMLDoc(filename) 
	{
		if (window.XMLHttpRequest) 
		{
			xhttp = new XMLHttpRequest();
		}
		else // code for IE5 and IE6
		{
			xhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xhttp.open("GET", filename, false);

		xhttp.send();

		return xhttp.responseXML;
	}

	oXML = loadXMLDoc("datos.xml");
	
	var oPacientes = oXML.querySelectorAll("paciente");
	for (var i = 0; i < oPacientes.length; i++) 
    {
		var dni = oPacientes[i].querySelector("dniP").textContent;
		var ss = oPacientes[i].querySelector("ss").textContent;
		var nombre = oPacientes[i].querySelector("nombreP").textContent;
		var apellidos = oPacientes[i].querySelector("apellidosP").textContent;
		var direccion = oPacientes[i].querySelector("direccionP").textContent;
		var email = oPacientes[i].querySelector("emailP").textContent;
		var telefono = oPacientes[i].querySelector("telefonoP").textContent;
		oHospital.altaPaciente(new Paciente(dni,nombre,apellidos,direccion,email,telefono,ss));
	}

	var oMedicos = oXML.querySelectorAll("medico");
	for (var i = 0; i < oMedicos.length; i++) 
    {
		var dni = oMedicos[i].querySelector("dni").textContent;
		var numCole = oMedicos[i].querySelector("numColegiado").textContent;
		var nombre = oMedicos[i].querySelector("nombre").textContent;
		var apellidos = oMedicos[i].querySelector("apellidos").textContent;
		var direccion = oMedicos[i].querySelector("direccion").textContent;
		var email = oMedicos[i].querySelector("email").textContent;
		var telefono = oMedicos[i].querySelector("telefono").textContent;
		oHospital.altaMedico(new Medico(dni,nombre,apellidos,direccion,email,telefono,numCole));
	}

	var oCitas = oXML.querySelectorAll("cita");
	for (var i = 0; i < oCitas.length; i++) 
    {
		var idCita = oCitas[i].querySelector("idCita").textContent;
        var dniPaciente = oCitas[i].querySelector("dniPacienteC").textContent;
        var numCMedico = oCitas[i].querySelector("numCMedicoC").textContent;
        var fecha = oCitas[i].querySelector("fechaC").textContent;
        var hora = oCitas[i].querySelector("horaC").textContent;
		var descripcion = oCitas[i].querySelector("descripcionC").textContent;
		oHospital.altaCita(new Cita(idCita,dniPaciente,numCMedico,fecha,hora,descripcion,"false"));
	}

	var oPruebas = oXML.querySelectorAll("prueba");
	for (var i = 0; i < oPruebas.length; i++) 
    {
		var id = oPruebas[i].querySelector("idPrueba").textContent;
		var fecha = oPruebas[i].querySelector("fechaPrueba").textContent;
		var hora = oPruebas[i].querySelector("horaPrueba").textContent;
		var tipo = oPruebas[i].querySelector("tipo").textContent;
        var descripcion = oPruebas[i].querySelector("descripcion").textContent;
        var dniPaciente = oPruebas[i].querySelector("dniPaciente").textContent;
		var nCMedico = oPruebas[i].querySelector("numCMedico").textContent;
		oHospital.altaPrueba(new Prueba(id,fecha,hora,tipo,descripcion,dniPaciente,nCMedico));
	}

	var oAmbulancias = oXML.querySelectorAll("ambulancia");
	for (var i = 0; i < oAmbulancias.length; i++) 
    {
		var matr = oAmbulancias[i].querySelector("matricula").textContent;
		var capac = oAmbulancias[i].querySelector("capacidad").textContent;
		var marca = oAmbulancias[i].querySelector("marca").textContent;
		oHospital.altaAmbulancia(new Ambulancia(matr,capac,marca));
	}

	var oTratamientos = oXML.querySelectorAll("tratamiento");
	for (var i = 0; i < oTratamientos.length; i++) 
    {
		var id = oTratamientos[i].querySelector("idTratamiento").textContent;
		var posologia = oTratamientos[i].querySelector("posologia").textContent;
		var inicio = oTratamientos[i].querySelector("inicio").textContent;
		var fin = oTratamientos[i].querySelector("fin").textContent;
		var dniPaciente = oTratamientos[i].querySelector("dniPacienteT").textContent;
		var nCMedico =  oTratamientos[i].querySelector("numCMedicoT").textContent;
		var nombreM = oTratamientos[i].querySelector("nombreMedicamento").textContent;
		var instrucciones = oTratamientos[i].querySelector("instrucciones").textContent;
		oHospital.altaTratamiento(new Tratamiento(id,posologia,inicio,fin,nCMedico,dniPaciente,nombreM,instrucciones));
	}

	var oMedicamentos = oXML.querySelectorAll("medicamento");
	var indi = 0;
	for (var i = 0; i < oMedicamentos.length; i++) 
    {
		var nombre = oMedicamentos[i].querySelector("nMedicamento").textContent;
		medicamentos[indi] = nombre;
		indi++;
	}
}

ocultarformularios();

document.querySelector("#btnAltaPaciente").addEventListener("click", altaPaciente, false);
document.querySelector("#btnAltaMedico").addEventListener("click", altaMedico, false);
document.querySelector("#btnAltaCita").addEventListener("click", altaCita, false);
document.querySelector("#btnAltaAmbulancia").addEventListener("click", altaAmbulancia, false);
document.querySelector("#btnAltaPrueba").addEventListener("click", altaPrueba, false);
document.querySelector("#btnAltaTratamiento").addEventListener("click", altaTratamiento, false);

document.querySelector("#btnModificaPaciente").addEventListener("click", modificarPaciente, false);
document.querySelector("#btnModificaMedico").addEventListener("click", modificarMedico, false);
document.querySelector("#btnModificaCita").addEventListener("click", modificarCita, false);
document.querySelector("#btnModificaPrueba").addEventListener("click", modificarPrueba, false);
document.querySelector("#btnModificarPrueba").addEventListener("click",aceptarModificarPrueba,false);
document.querySelector("#btnModificaAmbulancia").addEventListener("click", modificarAmbulancia, false);
document.querySelector("#btnModificaTratamiento").addEventListener("click", modificarTratamiento, false);
//MODIFicacion 20/01
document.querySelector("#btnAceptarAltaPaciente").addEventListener("click",aceptarAltaPaciente,false);
document.querySelector("#btnListadoPacientes").addEventListener("click",listadoPacientes,false);
document.querySelector("#btnAceptarAltaMedico").addEventListener("click",aceptarAltaMedico,false);
document.querySelector("#btnListadoMedicos").addEventListener("click",listadoMedicos,false);
document.querySelector("#btnAceptarAltaCita").addEventListener("click",aceptarAltaCita,false);
document.querySelector("#btnListadoCitas").addEventListener("click",listadoCitas,false); //este para comprobar que le daba bien las altas
// FIN MODIFICACION 20/01

// MODIFICACION 21/01
document.querySelector("#btnModificarCita").addEventListener("click",aceptarModificarCita,false);
document.querySelector("#btnModificarCita2").addEventListener("click",anularCita,false);
// FIN MODIFICACION 21/01
//Modificacipon marina ambulancia prueba 1
document.querySelector("#btnAltaAmbulancia").addEventListener("click",altaAmbulancia,false);
document.querySelector("#btnAceptarAltaAmbulancia").addEventListener("click",aceptarAltaAmbulancia,false);

document.querySelector("#btnAceptarAltaPrueba").addEventListener("click",aceptarAltaPrueba,false);
//MODIFICACION 25-01 IVAN - Y MODIFICADO NOMBRE EVENTO POR VALME
document.querySelector("#btnListadoAmbulancias").addEventListener("click",listadoAmbulancias,false);

//MODIFICACION VALME 26/01
document.querySelector("#btnModificarMedico").addEventListener("click",aceptarModificarMedico,false);
document.querySelector("#btnModificarPaciente").addEventListener("click",aceptarModificarPaciente,false);
document.querySelector("#btnModificarAmbulancia").addEventListener("click",aceptarModificarAmbulancia,false);

/*document.querySelector("#btnModificaPaciente2").addEventListener("click", modificarPaciente2, false);*/
document.querySelector("#btnAceptarmodificaPaciente2").addEventListener("click", aceptarModificarPaciente2, false);
document.querySelector("#btnModificarMedico2").addEventListener("click", aceptarModificarMedico2, false);
/*document.querySelector("#btnModificaCita2").addEventListener("click", modificarCita2, false);*/

document.querySelector("#btnModificarPrueba2").addEventListener("click", modificarPrueba2, false);
document.querySelector("#btnModificarAmbulancia2").addEventListener("click", aceptarModificarAmbulancia2, false);
//Modificacion Ivan para los listados de pruebas
document.querySelector("#btnListadoPruebas").addEventListener("click", listaPruebas, false);
//MODIFICACION MARINA 27/01
document.querySelector("#btnAceptarCrearTratamiento").addEventListener("click",aceptarAltaTratamiento,false);
document.querySelector("#btnModificarTratamiento").addEventListener("click",aceptarModificarTratamiento,false);
document.querySelector("#btnModificarTratamiento2").addEventListener("click",aceptarModificacionesTratamiento,false);
//FIN MODIFICACION MARINA 27/01

//MODIFICACION MARINA 28/01
document.querySelector("#btnListadoTratamientos").addEventListener("click",listadoTratamPorPaciente,false);
document.querySelector("#btnListarPaciente").addEventListener("click",listarPaciente,false);
//FIN MODIFICACION MARINA 28/01

//MODIFICACION valme 28/01
document.querySelector("#btnListadoCitasPorMedicos").addEventListener("click",listadoCitasPorMedico,false);
document.querySelector("#btnListarMedico").addEventListener("click",listarMedico,false);
//FIN MODIFICACION valme 28/01


function altaPaciente(oEvento)
{
	var oE = oEvento || window.event;
	ocultarformularios();
	document.getElementById("altaPaciente").style.display = "block";
	frmAltaPaciente.reset();
}
//MODIFICACION 20/01:
function aceptarAltaPaciente(oEvento)
{
	var oE = oEvento || window.event;
	var oForm = document.frmAltaPaciente;
	var nif = oForm.txtDNI.value.trim();
	var nombre = oForm.txtNombrePaciente.value.trim();
	var apellidos = oForm.txtApellidosPaciente.value.trim();
	var direccion = oForm.txtDireccionPaciente.value.trim();
	var email = oForm.txtEmailPaciente.value.trim();
	var telefono = oForm.txtTelefonoPaciente.value.trim();
	var numSS = oForm.txtSSPaciente.value.trim();
	var sMensaje ="";    
    var oPaciente;
    
    if (nif=="" || nombre=="" || apellidos=="" || direccion=="" || telefono=="" || numSS=="")
    {
        sMensaje = "Debe rellenar todos los datos";
    }
    else
    {
        validarPaciente();
   		oPaciente = new Paciente(nif,nombre,apellidos,direccion,email,telefono,numSS);
        sMensaje = oHospital.altaPaciente(oPaciente);
        altaPaciente();
    }
    
    alert(sMensaje);
}
function validarPaciente(oEvento){

	var oE = oEvento || window.event;
	var bValido=true;
	var sError = "";
	
	// Campo dni
	var nif = frmAltaPaciente.txtDNI.value.trim();
	frmAltaPaciente.txtDNI.value = frmAltaPaciente.txtDNI.value.trim();
	
	var oExpReg = /^\d{8}[a-zA-Z]$/;
	
	if (oExpReg.test(nif) == false)
	{

		frmAltaPaciente.txtDNI.classList.add("error");
		frmAltaPaciente.txtDNI.focus();
		bValido = false;
		sError += "El dni tiene que ser numeros y 1 letra \n"; 
	} else {
		frmAltaPaciente.txtDNI.classList.remove("error");
	}
	//Campo SS
	var sSS = frmAltaPaciente.txtSSPaciente.value.trim();
	frmAltaPaciente.txtSSPaciente.value = frmAltaPaciente.txtSSPaciente.value.trim();
	
	var oExpReg = /^(\d{2})(\d{2})(\d{2})\d{5}$/; //Sólo se validará que sean 11 dígitos, pero usaremos la expresión para capturar los primeros 3 campos por separado
	
	if (oExpReg.test(sSS) == false){

		frmAltaPaciente.txtSSPaciente.classList.add("error");
		frmAltaPaciente.txtSSPaciente.focus();
		bValido = false;
		sError += "El Numero de la S.S. debe componerse por 11 digitos \n"; 
	} else {
		frmAltaPaciente.txtSSPaciente.classList.remove("error");
	}
	//Campo nombre
	var sNombre = frmAltaPaciente.txtNombrePaciente.value.trim();
	frmAltaPaciente.txtNombrePaciente.value = frmAltaPaciente.txtNombrePaciente.value.trim();
	
	var oExpReg = /^[a-z\s]{6,40}$/i; //para que coga caracteres entre 6 y40 digitos de la a a la z
	
	if (oExpReg.test(sNombre) == false){

		frmAltaPaciente.txtNombrePaciente.classList.add("error");
		frmAltaPaciente.txtNombrePaciente.focus();
		bValido = false;
		sError += "El nombre solo admite caracteres alfabéticos y entre 6 y 40 caracteres \n"; 
	} else {
		frmAltaPaciente.txtNombrePaciente.classList.remove("error");
	}

	//Campo apellidos
	var sApe = frmAltaPaciente.txtApellidosPaciente.value.trim();
	frmAltaPaciente.txtApellidosPaciente.value = frmAltaPaciente.txtApellidosPaciente.value.trim();
	
	var oExpReg = /^[a-z\s]{6,50}$/i; //uso la misma que la anterior ya que no sabia muy bien como enfocar el apellido asi que dejo que sean en vez de 40 , 50
	
	if (oExpReg.test(sApe) == false){

		frmAltaPaciente.txtApellidosPaciente.classList.add("error");
		frmAltaPaciente.txtApellidosPaciente.focus();
		bValido = false;
		sError += "El apellido solo puede ser alfabético ,entre 6 y 50 caracteres \n"; 
	} else {
		frmAltaPaciente.txtApellidosPaciente.classList.remove("error");
	}

	//Campo direccion
	var sDir = frmAltaPaciente.txtDireccionPaciente.value.trim();
	frmAltaPaciente.txtDireccionPaciente.value = frmAltaPaciente.txtDireccionPaciente.value.trim();
	
	var oExpReg = /^[a-z\s\d]{1,60}$/i; //hago lo mismo que las anteriores pero desde 1 a 60 para que coja todo el campo
	
	if (oExpReg.test(sDir) == false){

		frmAltaPaciente.txtDireccionPaciente.classList.add("error");
		frmAltaPaciente.txtDireccionPaciente.focus();
		bValido = false;
		sError += "El campo direccion debe ser de tipo alfabético \n"; 
	} else {
		frmAltaPaciente.txtDireccionPaciente.classList.remove("error");
	}

	//Campo Email
	var sEmail = frmAltaPaciente.txtEmailPaciente.value.trim();
	frmAltaPaciente.txtEmailPaciente.value = frmAltaPaciente.txtEmailPaciente.value.trim();
	
	oExpReg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i;
	
	if (oExpReg.test(sEmail) == false){

		frmAltaPaciente.txtEmailPaciente.classList.add("error");
		//if(bValido)     Marina dice ¿Para qué?
		frmAltaPaciente.txtEmailPaciente.focus();
		bValido = false;
		sError += "El email debe ser válido \n"; 
	} else {
		frmAltaPaciente.txtEmailPaciente.classList.remove("error");
	}

	//Campo Telefono
	var sTlf = frmAltaPaciente.txtTelefonoPaciente.value.trim();
	frmAltaPaciente.txtTelefonoPaciente.value = frmAltaPaciente.txtTelefonoPaciente.value.trim();
	
	oExpReg = /^[9|6|7][0-9]{8}$/;//comprueba si el numero es correcto en españa , si empieza por 9 6 o 7 y tiene 9 cifras
	
	if (oExpReg.test(sTlf) == false){

		frmAltaPaciente.txtTelefonoPaciente.classList.add("error");
		//if(bValido)            Marina dice ¿Para qué ?
		frmAltaPaciente.txtTelefonoPaciente.focus();
		bValido = false;
		sError += "El teléfono debe ser un número de 9 dígitos \n";
	} else {
		frmAltaPaciente.txtTelefonoPaciente.classList.remove("error");
	}

	//si no funciona alguna parte de las validaciones devuelve false , con lo que en el alert, muestra un error, si hubiera salido bien return true y vuelve a ejecutarse el programa por donde iba
	if (bValido == false)
	{
		alert(sError);
		oE.preventDefault();
	}
}
////////////////////////////////Aqui acaban las validaciones para los pacientes//////////////////////////////////////////////////



// MODIFICACION 25/01
function listadoPacientes(oEvento)
{
	var oE = oEvento || window.event;
	ocultarformularios();
	var cabe = document.querySelectorAll("h2");

	for (var x = 0; x < cabe.length; x++) 
	{
		cabe[x].remove();
	}
	document.getElementById("listados").style.display = "block";
	var lPacientes = oHospital.listadoPacientes();
	var oCapa = document.getElementById("listados");
	var cabecera = document.createElement("h2");
	cabecera.textContent = "Listado de pacientes";
	oCapa.appendChild(cabecera);
	oCapa.appendChild(lPacientes); 
}
// FIN MODIFICACION 25/01

function altaMedico(oEvento)
{
	var oE = oEvento || window.event;
	ocultarformularios();
	document.getElementById("altaMedico").style.display = "block";
	frmAltaMedico.reset();
}

// MODIFICACION 20/01
function aceptarAltaMedico(oEvento)
{
	var oE = oEvento || window.event;
	var oForm = document.frmAltaMedico;
	var nif = oForm.txtDNIMedico.value.trim();
	var nombre = oForm.txtNombreMedico.value.trim();
	var apellidos = oForm.txtApellidosMedico.value.trim();
	var direccion = oForm.txtDireccionMedico.value.trim();
	var email = oForm.txtEmailMedico.value.trim();
	var telefono = oForm.txtTelefonoMedico.value.trim();
	var numColegiado = oForm.txtSS.value.trim();
	var sMensaje ="";   
    var oMedico;
    
    if (nif=="" || nombre=="" || apellidos=="" || direccion=="" || telefono=="" || numColegiado=="")
    {
        sMensaje = "Debe rellenar todos los datos";
    }
    else
    {
    	validarMedico();
        oMedico = new Medico(nif,nombre,apellidos,direccion,email,telefono,numColegiado);
        sMensaje = oHospital.altaMedico(oMedico);
        altaMedico();
    }
    
    alert(sMensaje);
}
function validarMedico(oEvento){

	var oE = oEvento || window.event;
	var bValido=true;
	var sError = "";
	
	// Campo dni medico
	var nif = frmAltaMedico.txtDNIMedico.value.trim();
	frmAltaMedico.txtDNIMedico.value = frmAltaMedico.txtDNIMedico.value.trim();
	
	var oExpReg = /^\d{8}[a-zA-Z]$/;
	
	if (oExpReg.test(nif) == false)
	{

		frmAltaMedico.txtDNIMedico.classList.add("error");
		frmAltaMedico.txtDNIMedico.focus();
		bValido = false;
		sError += "El dni tiene que ser numeros y 1 letra \n"; 
	} else {
		frmAltaMedico.txtDNIMedico.classList.remove("error");
	}
	//Campo numColegiado
	var numColegiado = frmAltaMedico.txtSS.value.trim();
	frmAltaMedico.txtSS.value = frmAltaMedico.txtSS.value.trim();
	
	var oExpReg = /^\d{8}$/; //para que contenga 8 digitos del 0 al 9 cada uno
	
	if (oExpReg.test(numColegiado) == false)
	{

		frmAltaMedico.txtSS.classList.add("error");
		frmAltaMedico.txtSS.focus();
		bValido = false;
		sError += "El Numero de colegiado debe contener 8 nùmeros \n"; 
	} else {
		frmAltaMedico.txtSS.classList.remove("error");
	}
	//Campo nombre
	var sNombre = frmAltaMedico.txtNombreMedico.value.trim();
	frmAltaMedico.txtNombreMedico.value = frmAltaMedico.txtNombreMedico.value.trim();
	
	var oExpReg = /^[a-z\s]{6,40}$/i; //para que coga caracteres entre 6 y40 digitos de la a a la z
	
	if (oExpReg.test(sNombre) == false){

		frmAltaMedico.txtNombreMedico.classList.add("error");
		frmAltaMedico.txtNombreMedico.focus();
		bValido = false;
		sError += "El nombre solo admite caracteres alfabéticos y entre 6 y 40 caracteres \n"; 
	} else {
		frmAltaMedico.txtNombreMedico.classList.remove("error");
	}

	//Campo apellidos
	var sApe = frmAltaMedico.txtApellidosMedico.value.trim();
	frmAltaMedico.txtApellidosMedico.value = frmAltaMedico.txtApellidosMedico.value.trim();
	
	var oExpReg = /^[a-z\s]{6,50}$/i; //uso la misma que la anterior ya que no sabia muy bien como enfocar el apellido asi que dejo que sean en vez de 40 , 50
	
	if (oExpReg.test(sApe) == false){

		frmAltaMedico.txtApellidosMedico.classList.add("error");
		frmAltaMedico.txtApellidosMedico.focus();
		bValido = false;
		sError += "El apellido solo puede ser alfabético ,entre 6 y 50 caracteres \n"; 
	} else {
		frmAltaMedico.txtApellidosMedico.classList.remove("error");
	}

	//Campo direccion
	var sDir = frmAltaMedico.txtDireccionMedico.value.trim();
	frmAltaMedico.txtDireccionMedico.value = frmAltaMedico.txtDireccionMedico.value.trim();
	
	var oExpReg = /^[a-z\s]{1,60}$/i; //hago lo mismo que las anteriores pero desde 1 a 60 para que coja todo el campo
	
	if (oExpReg.test(sDir) == false){

		frmAltaMedico.txtDireccionMedico.classList.add("error");
		frmAltaMedico.txtDireccionMedico.focus();
		bValido = false;
		sError += "El campo direccion debe ser de tipo alfabético \n"; 
	} else {
		frmAltaMedico.txtDireccionMedico.classList.remove("error");
	}

	//Campo Email
	var sEmail = frmAltaMedico.txtEmailMedico.value.trim();
	frmAltaMedico.txtEmailMedico.value = frmAltaMedico.txtEmailMedico.value.trim();
	
	oExpReg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i;
	
	if (oExpReg.test(sEmail) == false){

		frmAltaMedico.txtEmailMedico.classList.add("error");
		//if(bValido)   Marina Dice ¿Para qué?
		frmAltaMedico.txtEmailMedico.focus();
		bValido = false;
		sError += "El email debe ser válido \n"; 
	} else {
		frmAltaMedico.txtEmailMedico.classList.remove("error");
	}

	//Campo Telefono
	var sTlf = frmAltaMedico.txtTelefonoMedico.value.trim();
	frmAltaMedico.txtTelefonoMedico.value = frmAltaMedico.txtTelefonoMedico.value.trim();
	
	oExpReg = /^[9|6|7][0-9]{8}$/;//comprueba si el numero es correcto en españa , si empieza por 9 6 o 7 y tiene 9 cifras
	
	if (oExpReg.test(sTlf) == false){

		frmAltaMedico.txtTelefonoMedico.classList.add("error");
		//if(bValido)  Marina Dice ¿Para qué?
		frmAltaMedico.txtTelefonoMedico.focus();
		bValido = false;
		sError += "El teléfono debe ser un número de 9 dígitos \n"; 
	} else {
		frmAltaMedico.txtTelefonoMedico.classList.remove("error");
	}

	if (bValido == false){
		alert(sError);
		oE.preventDefault();
	}
}
////////////////////////////////////////////AQUI ACABAN LAS VALIDACIONES PARA LOS MEDICOS/////////////////////////////////////////////////


//MODIFICACION 25/01
function listadoMedicos(oEvento)
{
	var oE = oEvento || window.event;
	ocultarformularios();
	var cabe = document.querySelectorAll("h2");

	for (var x = 0; x < cabe.length; x++) 
	{
		cabe[x].remove();
	}
	document.getElementById("listados").style.display = "block";
	var lMedicos = oHospital.listadoMedicos();
	var oCapa = document.getElementById("listados");
	var cabecera = document.createElement("h2");
	cabecera.textContent = "Listado de médicos";
	oCapa.appendChild(cabecera);
	oCapa.appendChild(lMedicos); 
}
//FIN MODIFICACION 25/01
function altaCita(oEvento)
{
	var oE = oEvento || window.event;
	ocultarformularios();
	document.getElementById("altaCita").style.display = "block";
	frmAltaCita.reset();
	//select de pacientes
	var oSelecc = document.frmAltaCita.comboDNIPaciente;
	oSelecc.options.length = 0;
	var sPacientes = oHospital.listaPacientes();
	for (var i=0;i<sPacientes.length;i++)
	{
		var oOption = document.createElement("option");
		oOption.text = sPacientes[i];
		oSelecc.appendChild(oOption);
	}
	//select de medicos:
	var oSeleccMed = document.frmAltaCita.comboNUMMedico;
	oSeleccMed.options.length = 0;
	var sMedicos = oHospital.listaMedicos();
	for (var j=0;j<sMedicos.length;j++)
	{
		var oOption = document.createElement("option");
		oOption.text = sMedicos[j];
		oSeleccMed.appendChild(oOption);
	}
}
function aceptarAltaCita(oEvento)
{
	var oE = oEvento || window.event;
	var oForm = document.frmAltaCita;
	var id = oForm.txtIDCita.value.trim();
	var paciente = oForm.comboDNIPaciente.value;
	var medico = oForm.comboNUMMedico.value;
	var fecha = oForm.txtFecha.value.trim();
	var hora = oForm.txtHora.value.trim();
	var descripcion = oForm.txtDescripcion.value.trim();
	var sMensaje = "";
	var oCita;
	
    if (id=="" || fecha=="" || hora=="" || descripcion=="")
    {
        sMensaje = "Debe rellenar todos los datos";
    }
    else
    {
    	validaCita();
        oCita = new Cita(id,paciente,medico,fecha,hora,descripcion);
        sMensaje = oHospital.altaCita(oCita);
        altaCita();
    }
    
    alert(sMensaje);
}
function validaCita(oEvento){
	var oE = oEvento || window.event;
	var bValido=true;
	var sError = "";

	//Campo ID
	var id=frmAltaCita.txtIDCita.value.trim();
	frmAltaCita.txtIDCita.value = frmAltaCita.txtIDCita.value.trim();
	
	var oExpReg = /^\d{4}[a-zA-Z]$/;//4 digitos mas una letra
	
	if (oExpReg.test(id) == false)
	{
		frmAltaCita.txtIDCita.classList.add("error");
		frmAltaCita.txtIDCita.focus();
		bValido = false;
		sError = "El id de la cita debe ser 4 numeros y una letra \n"; 
	} else {
		frmAltaCita.txtIDCita.classList.remove("error");
	}
	//Para el campo descripcion se puede dejar sin validar ya que se controla muy bien ya de por si
	if (bValido == false){
		alert(sError);
		oE.preventDefault();
	}
	
}
//////////////////////////////////AQUI ACABA LA VALIDACION DE LAS CITAS/////////////////////////////////////////////

//MODIFICACION 25/01
function listadoCitas(oEvento)
{
	var oE = oEvento || window.event;
	ocultarformularios();
	var cabe = document.querySelectorAll("h2");

	for (var x = 0; x < cabe.length; x++) 
	{
		cabe[x].remove();
	}
	document.getElementById("listados").style.display = "block";
	var lCitas = oHospital.listadoCitas();
	var oCapa = document.getElementById("listados");
	var cabecera = document.createElement("h2");
	cabecera.textContent = "Listado de citas";
	oCapa.appendChild(cabecera);
	oCapa.appendChild(lCitas);
}
// FIN MODIFICACION 25/01


function altaAmbulancia(oEvento)
{
	var oE = oEvento || window.event;
	ocultarformularios();
	document.getElementById("altaAmbulancia").style.display = "block";
	frmAltaAmbulancia.reset();
}

// MODIFICACION 24/01
function aceptarAltaAmbulancia(oEvento)
{
	var oE = oEvento || window.event;
	var oForm = document.frmAltaAmbulancia;
	var matricula = oForm.txtMatricula.value.trim();
	var capacidad = oForm.txtCapacidad.value.trim();
	var marca = oForm.txtMarca.value.trim();
	if (matricula=="" || capacidad=="" || marca=="")
    {
        sMensaje = "Debe rellenar todos los datos";
    }
    else
    {
    	validaAmbulancia();
        oAmbulancia = new Ambulancia(matricula,capacidad,marca);
        sMensaje = oHospital.altaAmbulancia(oAmbulancia);
        altaAmbulancia();
    }
    
    alert(sMensaje);

}
function validaAmbulancia(oEvento){
	var oE = oEvento || window.event;
	var bValido=true;
	var sError = "";

	//Campo matricula
	/**/
	var matricula=frmAltaAmbulancia.txtMatricula.value.trim();
	frmAltaAmbulancia.txtMatricula.value = frmAltaAmbulancia.txtMatricula.value.trim();

	var oExpReg = /^\d{4}[A-Z]{3}$/i;
	
	if (oExpReg.test(matricula) == false)
	{
		frmAltaAmbulancia.txtMatricula.classList.add("error");
		frmAltaAmbulancia.txtMatricula.focus();
		bValido = false;
		sError = "La matricula debe ser válida segun el formato antiguo o el europeo \n"; 
	} else {
		frmAltaAmbulancia.txtMatricula.classList.remove("error");
	}
	//Campo Capacidad

	if (bValido == false){
		alert(sError);
		oE.preventDefault();
	}
}

//MODIFICACION 25/01
function listadoAmbulancias(oEvento)
{
	var oE = oEvento || window.event;
	ocultarformularios();
	var cabe = document.querySelectorAll("h2");

	for (var x = 0; x < cabe.length; x++) 
	{
		cabe[x].remove();
	}
	document.getElementById("listados").style.display = "block";
	var lAmbu = oHospital.listadoAmbulancias();
	var oCapa = document.getElementById("listados");
	var cabecera = document.createElement("h2");
	cabecera.textContent = "Listado de ambulancias";
	oCapa.appendChild(cabecera);
	oCapa.appendChild(lAmbu);
}
// FIN MODIFICACION 25/01

function altaPrueba(oEvento)
{
	/*var sTamano = oHospital.longitudPrueba();
	alert (sTamano);*/
	var oE = oEvento || window.event;
	ocultarformularios();
	document.getElementById("creaPrueba").style.display = "block";
	frmCreaPrueba.reset();
	//select de pacientes
	var oSelecc = document.frmCreaPrueba.comboPacientePrueba;
	oSelecc.options.length = 0;
	var sPacientes = oHospital.listaPacientes();
	for (var i=0;i<sPacientes.length;i++)
	{
		var oOption = document.createElement("option");
		oOption.text = sPacientes[i];
		oSelecc.appendChild(oOption);
	}
	//select de medicos:
	var oSeleccMed = document.frmCreaPrueba.comboMedicoPrueba;
	oSeleccMed.options.length = 0;
	var sMedicos = oHospital.listaMedicos();
	for (var j=0;j<sMedicos.length;j++)
	{
		var oOption = document.createElement("option");
		oOption.text = sMedicos[j];
		oSeleccMed.appendChild(oOption);
	}

}
function aceptarAltaPrueba(oEvento)
{
	var sMensaje = "";
	var oE = oEvento || window.event;
	var oForm=document.frmCreaPrueba;
	var idPrueba=oForm.txtIDPrueba.value.trim();
	var fecha=oForm.txtFechaPrueba.value;
	var hora=oForm.txtHoraPrueba.value;
	var tipoPrueba=oForm.txtTipoPrueba.value.trim();
	var descripcion=oForm.txtDescripcionPrueba.value.trim();
	var paciente=oForm.comboPacientePrueba.value;
	var medico=oForm.comboMedicoPrueba.value;
	var oPrueba;
	if (idPrueba=="" || fecha=="" || hora=="" || tipoPrueba=="" || descripcion=="") 
	{
		sMensaje="Debe rellenar todos los campos";
	}
	else
	{
		validarPrueba();
		oPrueba = new Prueba(idPrueba,fecha,hora,tipoPrueba,descripcion,paciente,medico);
		sMensaje = oHospital.altaPrueba(oPrueba);
	}
	
	alert (sMensaje);
	frmCreaPrueba.reset();
	ocultarformularios();
}
//Modificacion Nueva Ivan Validacion de la prueba
//Queda sujeta a evaluacion del grupo para cambiar alguna expresion que se pueda mejorar
function validarPrueba(oEvento)
{
	var oE = oEvento || window.event;
	var bValido=true;
	var sError = "";
	//Campo id
	var id=frmCreaPrueba.txtIDPrueba.value.trim();
	frmCreaPrueba.txtIDPrueba.value = frmCreaPrueba.txtIDPrueba.value.trim();

	var oExpReg = /^[A-Z]{2}\d{1}$/i;
	
	if (oExpReg.test(id) == false)
	{
		frmCreaPrueba.txtIDPrueba.classList.add("error");
		frmCreaPrueba.txtIDPrueba.focus();
		bValido = false;
		sError = "El id debe ser 2 letras mayusculas y un numero \n"; 
	} else {
		frmCreaPrueba.txtIDPrueba.classList.remove("error");
	}
	//Campo fecha
	var diaForm=frmCreaPrueba.txtFechaPrueba.value.trim();
	var diaActual=new Date().getDate();//Aqui tengo el dia del mes de hoy
	var diaForm2=new Date(diaForm).getDate();//aqui tengo el dia del mes del formulario
	var mesActual=new Date().getMonth();
	//alert(mesActual);
	//alert(fechaForm2);
	if (diaForm2 < diaActual) //Si eldia es menor a la fecha actual esfalso, no puedes tener una prueba ayer cuando has ido hoy al medico
	{
		bValido = false;
		sError = "La fecha no puede ser inferior a la de hoy \n";
	}else{
		frmCreaPrueba.txtFechaPrueba.classList.remove("error");
	}

	//Campo hora
	var hora=frmCreaPrueba.txtHoraPrueba.value.trim();
	frmCreaPrueba.txtHoraPrueba.value = frmCreaPrueba.txtHoraPrueba.value.trim();

	var oExpReg= /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

	if (oExpReg.test(hora) == false)
	{
		frmCreaPrueba.txtHoraPrueba.classList.add("error");
		frmCreaPrueba.txtHoraPrueba.focus();
		bValido = false;
		sError = "Formato de fecha incompleto \n"; 
	} else {
		frmCreaPrueba.txtHoraPrueba.classList.remove("error");
	}
	//Campo tipo
	var tipo=frmCreaPrueba.txtTipoPrueba.value.trim();
	frmCreaPrueba.txtTipoPrueba.value = frmCreaPrueba.txtTipoPrueba.value.trim();

	var oExpReg= /^[aA-zZ\s]{1,15}$/i;

	if (oExpReg.test(tipo) == false)
	{
		frmCreaPrueba.txtTipoPrueba.classList.add("error");
		frmCreaPrueba.txtTipoPrueba.focus();
		bValido = false;
		sError = "Demasiados caracteres en el campo tipo \n"; 
	} else {
		frmCreaPrueba.txtTipoPrueba.classList.remove("error");
	}
	//Campo descripcion
	var descripcion=frmCreaPrueba.txtDescripcionPrueba.value.trim();
	frmCreaPrueba.txtDescripcionPrueba.value = frmCreaPrueba.txtDescripcionPrueba.value.trim();

	var oExpReg= /^[aA-zZ\s]{1,145}$/i;

	if (oExpReg.test(descripcion) == false)
	{
		frmCreaPrueba.txtDescripcionPrueba.classList.add("error");
		frmCreaPrueba.txtDescripcionPrueba.focus();
		bValido = false;
		sError = "Has superado los 145 caracteres permitidos en este campo \n"; 
	} else {
		frmCreaPrueba.txtDescripcionPrueba.classList.remove("error");
	}


	if (bValido == false){
		alert(sError);
		oE.preventDefault();
	}
}
//Modificacion Ivan
function listaPruebas(oEvento)
{
	var oE = oEvento || window.event;
	ocultarformularios();
	var cabe = document.querySelectorAll("h2");

	for (var x = 0; x < cabe.length; x++) 
	{
		cabe[x].remove();
	}
	document.getElementById("listados").style.display = "block";
	var lPruebas=oHospital.listadoPruebas();
	var oCapa = document.getElementById("listados");
	var cabecera = document.createElement("h2");
	cabecera.textContent = "Listado de Pruebas";
	oCapa.appendChild(cabecera);
	oCapa.appendChild(lPruebas); 
}
//Fin modificacion Ivan 26-1


/*function crearTratamiento(oEvento)
{
	var oE = oEvento || window.event;
	ocultarformularios();
	document.getElementById("creaTratamiento").style.display = "block";
	frmCreaTratamiento.reset();
}*/

//MODIFICACION 21/01
function modificarCita(oEvento)
{
	var oE = oEvento || window.event;
	ocultarformularios();
	document.getElementById("modificaCita").style.display = "block";
	frmModificaCita.reset();
	//select de CITAS
	var oSelecc = document.frmModificaCita.ComboCitas;
	oSelecc.options.length = 0;
	var sCitas = oHospital.listaCitas();
	for (var i=0;i<sCitas.length;i++)
	{
		var oOption = document.createElement("option");
		oOption.text = sCitas[i];
		oSelecc.appendChild(oOption);
	}
}
function aceptarModificarCita()
{
	var oForm = document.frmModificaCita;
	var oForm2 = document.frmModificaCita2;
	var citaId = oForm.ComboCitas.value;
	ocultarformularios();
	
	document.getElementById("modificaCita2").style.display = "block";
	frmModificaCita2.reset();
	//obtener resultados:
	var oCita = oHospital.datosCita(citaId);
	oForm2.txtIDCita2.value = oCita.id;
	oForm2.txtDNIPaciente2.value = oCita.paciente;
	oForm2.txtDNIMedico2.value = oCita.medico;
	oForm2.txtFecha2.value = oCita.fecha;
	oForm2.txtHora2.value = oCita.hora;
	oForm2.txtDescripcion2.value = oCita.descripcion;
	if (oCita.anulada == "true")
	{
		oForm2.txtAnulada.value = "Sí";
	}
	else
	{
		oForm2.txtAnulada.value = "No";
	}
}

function anularCita(oEvento) 
{
	var oE = oEvento || window.event;
	var citaId = document.frmModificaCita2.txtIDCita2.value;
	var sMensaje = oHospital.anularCita(citaId);
	alert (sMensaje);
}
// FIN MODIFICACION 21/01

function modificarPaciente(oEvento)
{
	var oE = oEvento || window.event;
	ocultarformularios();
	document.getElementById("modificaPaciente").style.display = "block";
	frmModificaPaciente.reset();
	//select de pacientes
	var oSelecc = document.frmModificaPaciente.ComboPacientes;
	oSelecc.options.length = 0;
	var sPacientes = oHospital.listaPacientes();
	for (var i=0;i<sPacientes.length;i++)
	{
		var oOption = document.createElement("option");
		oOption.text = sPacientes[i];
		oSelecc.appendChild(oOption);
	}
}

function aceptarModificarPaciente()
{
	//alert("Estoy en aceptar combo");
	var oForm = document.frmModificaPaciente;
	var oForm2 = document.frmModificaPaciente2;
	var pacienteNif = oForm.ComboPacientes.value;
	//alert (pacienteNif);
	ocultarformularios();
	document.getElementById("modificaPaciente2").style.display = "block";
	frmModificaPaciente2.reset();
	var oPaciente = oHospital.datosPaciente(pacienteNif);
	oForm2.txtDNI2.value = oPaciente.nif;
	oForm2.txtSSPaciente2.value = oPaciente.numSS;
	oForm2.txtNombrePaciente2.value = oPaciente.nombre;
	oForm2.txtApellidosPaciente2.value = oPaciente.apellidos;
	oForm2.txtDireccionPaciente2.value = oPaciente.direccion;
	oForm2.txtEmailPaciente2.value = oPaciente.email;
	oForm2.txtTelefonoPaciente2.value = oPaciente.telefono;
	//alert("Debe aparecer");
	
}

function aceptarModificarPaciente2()
{
	var oForm = document.frmModificaPaciente2;

	var nif = oForm.txtDNI2.value;
	var ss = oForm.txtSSPaciente2.value;
	var nombre = oForm.txtNombrePaciente2.value;
	var apellidos = oForm.txtApellidosPaciente2.value;
	var dir = oForm.txtDireccionPaciente2.value;
	var email = oForm.txtEmailPaciente2.value;
	var tlf = oForm.txtTelefonoPaciente2.value;

	//Mod ivan validarPacientes modificados
	validarPacienteModificado();
	var sMensaje = oHospital.modificarPaciente(nif,ss,nombre,apellidos,dir,email,tlf);
	alert (sMensaje);
	ocultarformularios();
}
//Modificacion Ivan Validacion de Pacientes modificados
function validarPacienteModificado(oEvento)
{
	var oE = oEvento || window.event;
	var bValido=true;
	var sError = "";
	
	// Campo dni
	var nif = frmModificaPaciente2.txtDNI2.value.trim();
	frmModificaPaciente2.txtDNI2.value = frmModificaPaciente2.txtDNI2.value.trim();
	
	var oExpReg = /^\d{8}[a-zA-Z]$/;
	
	if (oExpReg.test(nif) == false)
	{

		frmModificaPaciente2.txtDNI2.classList.add("error");
		frmModificaPaciente2.txtDNI2.focus();
		bValido = false;
		sError += "El dni tiene que ser numeros y 1 letra \n"; 
	} else {
		frmModificaPaciente2.txtDNI2.classList.remove("error");
	}
	//Campo SS
	var sSS = frmModificaPaciente2.txtSSPaciente2.value.trim();
	frmModificaPaciente2.txtSSPaciente2.value = frmModificaPaciente2.txtSSPaciente2.value.trim();
	
	var oExpReg = /^(\d{2})(\d{2})(\d{2})\d{5}$/; //Sólo se validará que sean 11 dígitos, pero usaremos la expresión para capturar los primeros 3 campos por separado
	
	if (oExpReg.test(sSS) == false){

		frmModificaPaciente2.txtSSPaciente2.classList.add("error");
		frmModificaPaciente2.txtSSPaciente2.focus();
		bValido = false;
		sError += "El Numero de la S.S. debe componerse por 11 digitos \n"; 
	} else {
		frmModificaPaciente2.txtSSPaciente2.classList.remove("error");
	}
	//Campo nombre
	var sNombre = frmModificaPaciente2.txtNombrePaciente2.value.trim();
	frmModificaPaciente2.txtNombrePaciente2.value = frmModificaPaciente2.txtNombrePaciente2.value.trim();
	
	var oExpReg = /^[a-z\s]{6,40}$/i; //para que coga caracteres entre 6 y40 digitos de la a a la z
	
	if (oExpReg.test(sNombre) == false){

		frmModificaPaciente2.txtNombrePaciente2.classList.add("error");
		frmModificaPaciente2.txtNombrePaciente2.focus();
		bValido = false;
		sError += "El nombre solo admite caracteres alfabéticos y entre 6 y 40 caracteres \n"; 
	} else {
		frmModificaPaciente2.txtNombrePaciente2.classList.remove("error");
	}

	//Campo apellidos
	var sApe = frmModificaPaciente2.txtApellidosPaciente2.value.trim();
	frmModificaPaciente2.txtApellidosPaciente2.value = frmModificaPaciente2.txtApellidosPaciente2.value.trim();
	
	var oExpReg = /^[a-z\s]{6,50}$/i; //uso la misma que la anterior ya que no sabia muy bien como enfocar el apellido asi que dejo que sean en vez de 40 , 50
	
	if (oExpReg.test(sApe) == false){

		frmModificaPaciente2.txtApellidosPaciente2.classList.add("error");
		frmModificaPaciente2.txtApellidosPaciente2.focus();
		bValido = false;
		sError += "El apellido solo puede ser alfabético ,entre 6 y 50 caracteres \n"; 
	} else {
		frmModificaPaciente2.txtApellidosPaciente2.classList.remove("error");
	}

	//Campo direccion
	var sDir = frmModificaPaciente2.txtDireccionPaciente2.value.trim();
	frmModificaPaciente2.txtDireccionPaciente2.value = frmModificaPaciente2.txtDireccionPaciente2.value.trim();
	
	var oExpReg = /^[a-z\s\d]{1,60}$/i; //hago lo mismo que las anteriores pero desde 1 a 60 para que coja todo el campo
	
	if (oExpReg.test(sDir) == false){

		frmModificaPaciente2.txtDireccionPaciente2.classList.add("error");
		frmModificaPaciente2.txtDireccionPaciente2.focus();
		bValido = false;
		sError += "El campo direccion debe ser de tipo alfabético \n"; 
	} else {
		frmModificaPaciente2.txtDireccionPaciente2.classList.remove("error");
	}

	//Campo Email
	var sEmail = frmModificaPaciente2.txtEmailPaciente2.value.trim();
	frmModificaPaciente2.txtEmailPaciente2.value = frmModificaPaciente2.txtEmailPaciente2.value.trim();
	
	oExpReg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i;
	
	if (oExpReg.test(sEmail) == false){

		frmModificaPaciente2.txtEmailPaciente2.classList.add("error");
		//if(bValido)     Marina dice ¿Para qué?
		frmModificaPaciente2.txtEmailPaciente2.focus();
		bValido = false;
		sError += "El email debe ser válido \n"; 
	} else {
		frmModificaPaciente2.txtEmailPaciente2.classList.remove("error");
	}

	//Campo Telefono
	var sTlf = frmModificaPaciente2.txtTelefonoPaciente2.value.trim();
	frmModificaPaciente2.txtTelefonoPaciente2.value = frmModificaPaciente2.txtTelefonoPaciente2.value.trim();
	
	oExpReg = /^[9|6|7][0-9]{8}$/;//comprueba si el numero es correcto en españa , si empieza por 9 6 o 7 y tiene 9 cifras
	
	if (oExpReg.test(sTlf) == false){

		frmModificaPaciente2.txtTelefonoPaciente2.classList.add("error");
		//if(bValido)            Marina dice ¿Para qué ?
		frmModificaPaciente2.txtTelefonoPaciente2.focus();
		bValido = false;
		sError += "El teléfono debe ser un número de 9 dígitos \n";
	} else {
		frmModificaPaciente2.txtTelefonoPaciente2.classList.remove("error");
	}

	//si no funciona alguna parte de las validaciones devuelve false , con lo que en el alert, muestra un error, si hubiera salido bien return true y vuelve a ejecutarse el programa por donde iba
	if (bValido == false)
	{
		alert(sError);
		oE.preventDefault();
	}
}

	/*var sMensaje = oHospital.modificarPaciente(nif,ss,nombre,apellidos,dir,email,tlf);
	alert (sMensaje);
	ocultarformularios();
}*/

//MODIFICACIÓN 26/01
function modificarMedico(oEvento)
{
	var oE = oEvento || window.event;
	ocultarformularios();
	document.getElementById("modificaMedico").style.display = "block";
	frmModificaMedico.reset();
	//select de medicos:
	var oSeleccMed = document.frmModificaMedico.ComboMedicos;
	oSeleccMed.options.length = 0;
	var sMedicos = oHospital.listaMedicos();
	for (var j=0;j<sMedicos.length;j++)
	{
		var oOption = document.createElement("option");
		oOption.text = sMedicos[j];
		oSeleccMed.appendChild(oOption);
	}
}

function aceptarModificarMedico()
{
	//alert("Estoy en aceptar combo");
	var oForm = document.frmModificaMedico;
	var oForm2 = document.frmModificaMedico2;
	var medicoNumCole = oForm.ComboMedicos.value;
	//alert (medicoNumCole);
	ocultarformularios();
	document.getElementById("modificaMedico2").style.display = "block";
	frmModificaMedico2.reset();
	//var oMedico = new Medico();
	var oMedico = oHospital.datosMedico(medicoNumCole);
	oForm2.txtDNIMedico2.value = oMedico.nif;
	oForm2.txtSS2.value = oMedico.numColegiado;
	oForm2.txtNombreMedico2.value = oMedico.nombre;
	oForm2.txtApellidosMedico2.value = oMedico.apellidos;
	oForm2.txtDireccionMedico2.value = oMedico.direccion;
	oForm2.txtEmailMedico2.value = oMedico.email;
	oForm2.txtTelefonoMedico2.value = oMedico.telefono;
	//alert("Debe aparecer");
	//frmModificaMedico2.reset();
	
}

function aceptarModificarMedico2()
{
	var oForm = document.frmModificaMedico2;

	var medicoNif = oForm.txtDNIMedico2.value;
	var numCole = oForm.txtSS2.value;
	var nombre = oForm.txtNombreMedico2.value;
	var apellidos = oForm.txtApellidosMedico2.value;
	var dir = oForm.txtDireccionMedico2.value;
	var email = oForm.txtEmailMedico2.value;
	var tlf = oForm.txtTelefonoMedico2.value;

	validarMedicoModificado();
	var sMensaje = oHospital.modificarMedico(medicoNif,numCole,nombre,apellidos,dir,email,tlf);
	alert (sMensaje);
	ocultarformularios();
}
//Modificacion Ivan Validar Medicos modificados
function validarMedicoModificado(oEvento)
{
	var oE = oEvento || window.event;
	var bValido=true;
	var sError = "";
	
	// Campo dni medico
	var nif = frmModificaMedico2.txtDNIMedico2.value.trim();
	frmModificaMedico2.txtDNIMedico2.value = frmModificaMedico2.txtDNIMedico2.value.trim();
	
	var oExpReg = /^\d{8}[a-zA-Z]$/;
	
	if (oExpReg.test(nif) == false)
	{

		frmModificaMedico2.txtDNIMedico2.classList.add("error");
		frmModificaMedico2.txtDNIMedico2.focus();
		bValido = false;
		sError += "El dni tiene que ser numeros y 1 letra \n"; 
	} else {
		frmModificaMedico2.txtDNIMedico2.classList.remove("error");
	}
	//Campo numColegiado
	var numColegiado = frmModificaMedico2.txtSS2.value.trim();
	frmModificaMedico2.txtSS2.value = frmModificaMedico2.txtSS2.value.trim();
	
	var oExpReg = /^\d{8}$/; //para que contenga 8 digitos del 0 al 9 cada uno
	
	if (oExpReg.test(numColegiado) == false)
	{

		frmModificaMedico2.txtSS2.classList.add("error");
		frmModificaMedico2.txtSS2.focus();
		bValido = false;
		sError += "El Numero de colegiado debe contener 8 nùmeros \n"; 
	} else {
		frmModificaMedico2.txtSS2.classList.remove("error");
	}
	//Campo nombre
	var sNombre = frmModificaMedico2.txtNombreMedico2.value.trim();
	frmModificaMedico2.txtNombreMedico2.value = frmModificaMedico2.txtNombreMedico2.value.trim();
	
	var oExpReg = /^[a-z\s]{6,40}$/i; //para que coga caracteres entre 6 y40 digitos de la a a la z
	
	if (oExpReg.test(sNombre) == false){

		frmModificaMedico2.txtNombreMedico2.classList.add("error");
		frmModificaMedico2.txtNombreMedico2.focus();
		bValido = false;
		sError += "El nombre solo admite caracteres alfabéticos y entre 6 y 40 caracteres \n"; 
	} else {
		frmModificaMedico2.txtNombreMedico2.classList.remove("error");
	}

	//Campo apellidos
	var sApe = frmModificaMedico2.txtApellidosMedico2.value.trim();
	frmModificaMedico2.txtApellidosMedico2.value = frmModificaMedico2.txtApellidosMedico2.value.trim();
	
	var oExpReg = /^[a-z\s]{6,50}$/i; //uso la misma que la anterior ya que no sabia muy bien como enfocar el apellido asi que dejo que sean en vez de 40 , 50
	
	if (oExpReg.test(sApe) == false){

		frmModificaMedico2.txtApellidosMedico2.classList.add("error");
		frmModificaMedico2.txtApellidosMedico2.focus();
		bValido = false;
		sError += "El apellido solo puede ser alfabético ,entre 6 y 50 caracteres \n"; 
	} else {
		frmModificaMedico2.txtApellidosMedico2.classList.remove("error");
	}

	//Campo direccion
	var sDir = frmModificaMedico2.txtDireccionMedico2.value.trim();
	frmModificaMedico2.txtDireccionMedico2.value = frmModificaMedico2.txtDireccionMedico2.value.trim();
	
	var oExpReg = /^[a-z\s]{1,60}$/i; //hago lo mismo que las anteriores pero desde 1 a 60 para que coja todo el campo
	
	if (oExpReg.test(sDir) == false){

		frmModificaMedico2.txtDireccionMedico2.classList.add("error");
		frmModificaMedico2.txtDireccionMedico2.focus();
		bValido = false;
		sError += "El campo direccion debe ser de tipo alfabético \n"; 
	} else {
		frmModificaMedico2.txtDireccionMedico2.classList.remove("error");
	}

	//Campo Email
	var sEmail = frmModificaMedico2.txtEmailMedico2.value.trim();
	frmModificaMedico2.txtEmailMedico2.value = frmModificaMedico2.txtEmailMedico2.value.trim();
	
	oExpReg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i;
	
	if (oExpReg.test(sEmail) == false){

		frmModificaMedico2.txtEmailMedico2.classList.add("error");
		//if(bValido)   Marina Dice ¿Para qué?
		frmModificaMedico2.txtEmailMedico2.focus();
		bValido = false;
		sError += "El email debe ser válido \n"; 
	} else {
		frmModificaMedico2.txtEmailMedico2.classList.remove("error");
	}

	//Campo Telefono
	var sTlf = frmModificaMedico2.txtTelefonoMedico2.value.trim();
	frmModificaMedico2.txtTelefonoMedico2.value = frmModificaMedico2.txtTelefonoMedico2.value.trim();
	
	oExpReg = /^[9|6|7][0-9]{8}$/;//comprueba si el numero es correcto en españa , si empieza por 9 6 o 7 y tiene 9 cifras
	
	if (oExpReg.test(sTlf) == false){

		frmModificaMedico2.txtTelefonoMedico2.classList.add("error");
		//if(bValido)  Marina Dice ¿Para qué?
		frmModificaMedico2.txtTelefonoMedico2.focus();
		bValido = false;
		sError += "El teléfono debe ser un número de 9 dígitos \n"; 
	} else {
		frmModificaMedico2.txtTelefonoMedico2.classList.remove("error");
	}

	if (bValido == false){
		alert(sError);
		oE.preventDefault();
	}

}
	/*var sMensaje = oHospital.modificarMedico(medicoNif,numCole,nombre,apellidos,dir,email,tlf);
	alert (sMensaje);
	ocultarformularios();
}*/

//MODIFICACION 27/01 MARINA


function modificarPrueba(oEvento)
{
	var oE = oEvento || window.event;
	ocultarformularios();
	document.getElementById("modificaPrueba").style.display = "block";
	frmModificaPrueba.reset();
	//select de tratamientos:
	var oSeleccPrueba = document.frmModificaPrueba.ComboPruebas;
	oSeleccPrueba.options.length = 0;
	var sPruebas = oHospital.listaPruebas();
	for (var j=0;j<sPruebas.length;j++)
	{
		var oOption = document.createElement("option");
		oOption.text = sPruebas[j];
		oSeleccPrueba.appendChild(oOption);
	}
}
function aceptarModificarPrueba()
{
	var oForm = document.frmModificaPrueba;
	var oForm2 = document.frmModificaPrueba2;
	var pruebaID = oForm.ComboPruebas.value;
	ocultarformularios();
	document.getElementById("modificaPrueba2").style.display = "block";
	frmModificaPrueba2.reset();
	var oPrueba = oHospital.datosPrueba(pruebaID);
	oForm2.txtIdPrueba2.value = oPrueba.ID;
	oForm2.txtFechaPrueba2.value = oPrueba.fecha;
	oForm2.txtHoraPrueba2.value = oPrueba.hora;
	oForm2.txtTipoPrueba2.value = oPrueba.tipo;
	oForm2.txtDescripcionPrueba2.value = oPrueba.descripcion;
	//select de pacientes
	var oSelecc = document.frmModificaPrueba2.comboPacientePrueba2;
	oSelecc.options.length = 0;
	var sPacientes = oHospital.listaPacientes();
	for (var i=0;i<sPacientes.length;i++)
	{
		var oOption = document.createElement("option");
		if (sPacientes[i] ==  oPrueba.paciente)
		{
			oOption.selected = true;
		}
		oOption.text = sPacientes[i];
		oSelecc.appendChild(oOption);
	}
	//select de medicos:
	var oSeleccMed = document.frmModificaPrueba2.comboMedicoPrueba2;
	oSeleccMed.options.length = 0;
	var sMedicos = oHospital.listaMedicos();
	for (var j=0;j<sMedicos.length;j++)
	{
		var oOption = document.createElement("option");
		if (sMedicos[j] == oPrueba.medico)
		{
			oOption.selected = true;
		}
		oOption.text = sMedicos[j];
		
		oSeleccMed.appendChild(oOption);	
	}
}
function modificarPrueba2()
{
	var oForm2 = document.frmModificaPrueba2;
	var id = oForm2.txtIdPrueba2.value;
	var fecha = oForm2.txtFechaPrueba2.value;
	var hora = oForm2.txtHoraPrueba2.value;
	var tipo = oForm2.txtTipoPrueba2.value;
	var descripcion = oForm2.txtDescripcionPrueba2.value;
	var paciente = oForm2.comboPacientePrueba2.value;
	var medico = oForm2.comboMedicoPrueba2.value;
	
	validarPruebaModificada();
	var oPrueba = new Prueba(id,fecha,hora,tipo,descripcion,paciente,medico)
	var sMensaje = oHospital.modificarPrueba(oPrueba);
	alert (sMensaje);
	ocultarformularios();
}
//Modificacion Ivan validar la prueba modificada
function validarPruebaModificada(oEvento)
{
	var oE = oEvento || window.event;
	var bValido=true;
	var sError = "";
	//Campo id
	var id=frmModificaPrueba2.txtIdPrueba2.value.trim();
	frmModificaPrueba2.txtIdPrueba2.value = frmModificaPrueba2.txtIdPrueba2.value.trim();

	var oExpReg = /^[A-Z]{2}\d{1}$/i;
	
	if (oExpReg.test(id) == false)
	{
		frmModificaPrueba2.txtIdPrueba2.classList.add("error");
		frmModificaPrueba2.txtIdPrueba2.focus();
		bValido = false;
		sError = "El id debe ser 2 letras mayusculas y un numero \n"; 
	} else {
		frmModificaPrueba2.txtIdPrueba2.classList.remove("error");
	}
	//Campo fecha
	var diaForm=frmModificaPrueba2.txtFechaPrueba2.value.trim();
	var diaActual=new Date().getDate();//Aqui tengo el dia del mes de hoy
	var diaForm2=new Date(diaForm).getDate();//aqui tengo el dia del mes del formulario
	var mesActual=new Date().getMonth();
	//alert(mesActual);
	//alert(fechaForm2);
	if (diaForm2 < diaActual) //Si eldia es menor a la fecha actual esfalso, no puedes tener una prueba ayer cuando has ido hoy al medico
	{
		bValido = false;
		sError = "La fecha no puede ser inferior a la de hoy \n";
	}else{
		frmModificaPrueba2.txtFechaPrueba2.classList.remove("error");
	}

	//Campo hora
	var hora=frmModificaPrueba2.txtHoraPrueba2.value.trim();
	frmModificaPrueba2.txtHoraPrueba2.value = frmModificaPrueba2.txtHoraPrueba2.value.trim();

	var oExpReg= /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

	if (oExpReg.test(hora) == false)
	{
		frmModificaPrueba2.txtHoraPrueba2.classList.add("error");
		frmModificaPrueba2.txtHoraPrueba2.focus();
		bValido = false;
		sError = "Formato de fecha incompleto \n"; 
	} else {
		frmModificaPrueba2.txtHoraPrueba2.classList.remove("error");
	}
	//Campo tipo
	var tipo=frmModificaPrueba2.txtTipoPrueba2.value.trim();
	frmModificaPrueba2.txtTipoPrueba2.value = frmModificaPrueba2.txtTipoPrueba2.value.trim();

	var oExpReg= /^[aA-zZ\s]{1,15}$/i;

	if (oExpReg.test(tipo) == false)
	{
		frmModificaPrueba2.txtTipoPrueba2.classList.add("error");
		frmModificaPrueba2.txtTipoPrueba2.focus();
		bValido = false;
		sError = "Demasiados caracteres en el campo tipo \n"; 
	} else {
		frmModificaPrueba2.txtTipoPrueba2.classList.remove("error");
	}
	//Campo descripcion
	var descripcion=frmModificaPrueba2.txtDescripcionPrueba2.value.trim();
	frmModificaPrueba2.txtDescripcionPrueba2.value = frmModificaPrueba2.txtDescripcionPrueba2.value.trim();

	var oExpReg= /^[aA-zZ\s]{1,145}$/i;

	if (oExpReg.test(descripcion) == false)
	{
		frmModificaPrueba2.txtDescripcionPrueba2.classList.add("error");
		frmModificaPrueba2.txtDescripcionPrueba2.focus();
		bValido = false;
		sError = "Has superado los 145 caracteres permitidos en este campo \n"; 
	} else {
		frmModificaPrueba2.txtDescripcionPrueba2.classList.remove("error");
	}


	if (bValido == false){
		alert(sError);
		oE.preventDefault();
	}
}
	/*var oPrueba = new Prueba(id,fecha,hora,tipo,descripcion,paciente,medico)
	var sMensaje = oHospital.modificarPrueba(oPrueba);
	alert (sMensaje);
	ocultarformularios();
}*/

function altaTratamiento(oEvento)
{
	var oE = oEvento || window.event;
	ocultarformularios();
	document.getElementById("creaTratamiento").style.display = "block";
	frmCreaTratamiento.reset();
	//select de pacientes
	var oSelecc = document.frmCreaTratamiento.ComboPaciente;
	oSelecc.options.length = 0;
	var sPacientes = oHospital.listaPacientes();
	for (var i=0;i<sPacientes.length;i++)
	{
		var oOption = document.createElement("option");
		oOption.text = sPacientes[i];
		oSelecc.appendChild(oOption);
	}
	//select de medicos:
	var oSeleccMed = document.frmCreaTratamiento.comboMedico;
	oSeleccMed.options.length = 0;
	var sMedicos = oHospital.listaMedicos();
	for (var j=0;j<sMedicos.length;j++)
	{
		var oOption = document.createElement("option");
		oOption.text = sMedicos[j];
		oSeleccMed.appendChild(oOption);
	}
	//select medicamentos
	var oSelect = document.frmCreaTratamiento.comboMedicamento;
	oSelect.options.length = 0;
	
	for (var z=0;z<medicamentos.length;z++)
	{
		var oOption = document.createElement("option");
		oOption.text = medicamentos[z];
		oSelect.appendChild(oOption);
	}
}
function aceptarAltaTratamiento(oEvento)
{
	oE = oEvento || window.event;
	oForm = document.frmCreaTratamiento;
	var sMensaje = "";
	var sId = oForm.txtIDTratamiento.value.trim();
	var sPosologia = oForm.txtPosologia.value.trim();
	var dInicio = oForm.txtInicio.value.trim();
	var dFin = oForm.txtFin.value;
	var sPaciente = oForm.ComboPaciente.value;
	var sMedico = oForm.comboMedico.value;
	var sMedicamento = oForm.comboMedicamento.value;
	var sInstrucciones = oForm.txtInstrucciones.value.trim();

	if (sId == "" || sPosologia == "" || dInicio == "" || dFin == "" || sInstrucciones == "")
	{
		alert ("Debe rellenar todos los datos");
	}
	else
	{
		validaTratamiento();
		oTratamiento = new Tratamiento(sId,sPosologia,dInicio,dFin,sMedico,sPaciente,sMedicamento,sInstrucciones);
		sMensaje = oHospital.altaTratamiento(oTratamiento);
		altaTratamiento();
	}
	alert (sMensaje);
}
//FIN MODIFICACION 27/01

//Modificacion Ivan ValidacionTratamiento
function validaTratamiento(oEvento){
	var oE = oEvento || window.event;
	var bValido=true;
	var sError = "";
	//Campo id
	var id=frmCreaTratamiento.txtIDTratamiento.value.trim();
	frmCreaTratamiento.txtIDTratamiento.value = frmCreaTratamiento.txtIDTratamiento.value.trim();

	var oExpReg = /^\d{2}[A-Z]{1}$/; //2 numeros y una letra en mayusculas
	
	if (oExpReg.test(id) == false)
	{
		frmCreaTratamiento.txtIDTratamiento.classList.add("error");
		frmCreaTratamiento.txtIDTratamiento.focus();
		bValido = false;
		sError = "El id debe ser 2 numeros y una letra \n"; 
	} else {
		frmCreaTratamiento.txtIDTratamiento.classList.remove("error");
	}
	//Campo posologia
	var posologia=frmCreaTratamiento.txtPosologia.value.trim();
	frmCreaTratamiento.txtPosologia.value = frmCreaTratamiento.txtPosologia.value.trim();

	var oExpReg = /^[A-Z\s\d]{6,40}$/i;
	
	if (oExpReg.test(posologia) == false)
	{
		frmCreaTratamiento.txtPosologia.classList.add("error");
		frmCreaTratamiento.txtPosologia.focus();
		bValido = false;
		sError = "La posología debe contener entre 6 y 40 caracteres \n"; 
	} else {
		frmCreaTratamiento.txtPosologia.classList.remove("error");
	}

	//Campo fechas
	var fechaInicio=new Date(frmCreaTratamiento.txtInicio.value);
	var fechaFin=new Date(frmCreaTratamiento.txtFin.value);
	var resultado=fechaInicio-fechaFin;
	if (resultado>0) 
	{
		frmCreaTratamiento.txtInicio.classList.add("error");	
		frmCreaTratamiento.txtFin.classList.add("error");
		frmCreaTratamiento.txtInicio.focus();
		bValido = false;
		sError="Fecha no permitida, el inicio no puede ser menor que el final del tratamiento";
	}
	else
	{
		frmCreaTratamiento.txtInicio.classList.remove("error");	
		frmCreaTratamiento.txtFin.classList.remove("error");
	}

	//Campo instrucciones /*SE PODRIA DEJAR SIN VALIDAR PORQUE LO HACE BIEN AL DETECTAR AL PRINCIPIO EL IF DEL CAMPO VACIO , PERO LO VALIDO POR SI INTENTAS METER ALGO QUE NO SEAN LETRAS Y NUMEROS*/
	var instrucciones=frmCreaTratamiento.txtInstrucciones.value.trim();
	frmCreaTratamiento.txtInstrucciones.value = frmCreaTratamiento.txtInstrucciones.value.trim();

	var oExpReg = /^[A-Z\s\d]{1,140}$/i; //Letras mayusculas o minusculas de hasta 140 caracteres para especificar el  tratamiento
	
	if (oExpReg.test(instrucciones) == false)
	{
		frmCreaTratamiento.txtInstrucciones.classList.add("error");
		frmCreaTratamiento.txtInstrucciones.focus();
		bValido = false;
		sError = "Las instrucciones deben contener entre 1 y 140 caracteres \n"; 
	} else {
		frmCreaTratamiento.txtInstrucciones.classList.remove("error");
	}

	if (bValido == false){
		alert(sError);
		oE.preventDefault();
	}
}
//FIN MODIFICACION IVAN VALIDACION

//MODIFICACION MARINA 28/01
function listadoTratamPorPaciente(oEvento)
{
	var oE = oEvento || window.event;
	ocultarformularios();
	document.getElementById("listadoPorPaciente").style.display = "block";
	frmListadoPaciente.reset();
	//select de pacientes
	var oSelecc = document.frmListadoPaciente.ComboPacientes;
	oSelecc.options.length = 0;
	var sPacientes = oHospital.listaPacientes();
	for (var i=0;i<sPacientes.length;i++)
	{
		var oOption = document.createElement("option");
		oOption.text = sPacientes[i];
		oSelecc.appendChild(oOption);
	}
}

function listadoCitasPorMedico(oEvento)
{
	var oE = oEvento || window.event;
	ocultarformularios();
	document.getElementById("listadoPorMedico").style.display = "block";
	frmListadoMedico.reset();
	//select de pacientes
	var oSelecc = document.frmListadoMedico.ComboMedicos;
	oSelecc.options.length = 0;
	var sMedicos = oHospital.listaMedicos();
	for (var i=0;i<sMedicos.length;i++)
	{
		var oOption = document.createElement("option");
		oOption.text = sMedicos[i];
		oSelecc.appendChild(oOption);
	}
}

function listarPaciente(oEvento)
{
	var oE = oEvento || window.event;
	var paciente = document.frmListadoPaciente.ComboPacientes.value;
	ocultarformularios();
	
	var cabe = document.querySelectorAll("h2");
	for (var x = 0; x < cabe.length; x++) 
	{
		cabe[x].remove();
	}
	/*var letra = document.querySelectorAll("h3");
	for (var x = 0; x < letra.length; x++) 
	{
		letra[x].remove();
	}*/
	document.getElementById("listados").style.display = "block";
	var lPruebas=oHospital.listadoTratamientosPaciente(paciente);
	var oCapa = document.getElementById("listados");
	var cabecera = document.createElement("h2");
	cabecera.textContent = "Listado de Tratamientos del Paciente: "+paciente;
	oCapa.appendChild(cabecera);
	oCapa.appendChild(lPruebas); 
}
//FIN MODIFICACION MARINA 28/01

function listarMedico(oEvento)
{
	var oE = oEvento || window.event;
	var medico = document.frmListadoMedico.ComboMedicos.value;
	ocultarformularios();
	
	var cabe = document.querySelectorAll("h2");
	for (var x = 0; x < cabe.length; x++) 
	{
		cabe[x].remove();
	}

	document.getElementById("listados").style.display = "block";
	var lCitas=oHospital.listadoCitasMedico(medico);
	var oCapa = document.getElementById("listados");
	var cabecera = document.createElement("h2");
	cabecera.textContent = "Listado de Citas del médico: "+medico;
	oCapa.appendChild(cabecera);
	oCapa.appendChild(lCitas); 
}


function modificarTratamiento(oEvento)
{
	var oE = oEvento || window.event;
	ocultarformularios();
	document.getElementById("modificaTratamiento").style.display = "block";
	frmModificaTratamiento.reset();
	//select de tratamientos:
	var oSeleccTratamientos = document.frmModificaTratamiento.ComboTratamientos;
	oSeleccTratamientos.options.length = 0;
	var sTratamientos = oHospital.listaTratamientos();
	for (var j=0;j<sTratamientos.length;j++)
	{
		var oOption = document.createElement("option");
		oOption.text = sTratamientos[j];
		oSeleccTratamientos.appendChild(oOption);
	}
}
//MODIFICACION MARINA 27/01
function aceptarModificarTratamiento()
{
	var oForm = document.frmModificaTratamiento;
	var oForm2 = document.frmModificaTratamiento2;
	var tratamientoID = oForm.ComboTratamientos.value;
	ocultarformularios();
	document.getElementById("modificaTratamiento2").style.display = "block";
	frmModificaTratamiento2.reset();

	var oTratamiento = oHospital.datosTratamiento(tratamientoID);
	oForm2.txtIdTratamiento2.value = oTratamiento.ID;
	oForm2.txtPosologia.value = oTratamiento.posologia;
	oForm2.txtInicio.value = oTratamiento.inicio;
	oForm2.txtFin.value = oTratamiento.fin;
	//select de pacientes
	var oSelecc = oForm2.ComboPaciente;
	oSelecc.options.length = 0;
	var sPacientes = oHospital.listaPacientes();
	for (var i=0;i<sPacientes.length;i++)
	{
		var oOption = document.createElement("option");
		if (sPacientes[i] ==  oTratamiento.paciente)
		{
			oOption.selected = true;
		}
		oOption.text = sPacientes[i];
		oSelecc.appendChild(oOption);
	}
	//select de medicos:
	var oSeleccMed = oForm2.comboMedico;
	oSeleccMed.options.length = 0;
	var sMedicos = oHospital.listaMedicos();
	for (var j=0;j<sMedicos.length;j++)
	{
		var oOption = document.createElement("option");
		if (sMedicos[j] == oTratamiento.medico)
		{
			oOption.selected = true;
		}
		oOption.text = sMedicos[j];
		oSeleccMed.appendChild(oOption);	
	}
	//select medicamento:
	var oSelect = oForm2.comboMedicamento;
	oSelect.options.length = 0;
	
	for (var z=0;z<medicamentos.length;z++)
	{
		var oOption = document.createElement("option");
		if (medicamentos[z] == oTratamiento.medicamento)
		{
			oOption.selected = true;
		}
		oOption.text = medicamentos[z];
		oSelect.appendChild(oOption);
	}
	
	oForm2.txtInstrucciones.value = oTratamiento.instrucciones;
}

function aceptarModificacionesTratamiento()
{
	var oForm = document.frmModificaTratamiento2;
	var tratamientoID = oForm.txtIdTratamiento2.value;
	var posologia = oForm.txtPosologia.value.trim();
	var inicio = oForm.txtInicio.value;
	var fin = oForm.txtFin.value;
	var paciente = oForm.ComboPaciente.value;
	var medico = oForm.comboMedico.value;
	var medicamento = oForm.comboMedicamento;
	var instrucciones = oForm.txtInstrucciones.value.trim();
	
	//MODIFICACION para validar un tratamiento modificado
	validarTratamientoModificado();
	var oTratamiento = new Tratamiento(tratamientoID,posologia,inicio,fin,paciente,medico,medicamento,instrucciones);
	var sMensaje = oHospital.modificarTratamiento(oTratamiento);
	alert (sMensaje);
	ocultarformularios();
}
//MODIFICACION VALIDACION MODIFICADO
function validarTratamientoModificado(oEvento)
{
	var oE = oEvento || window.event;
	var bValido=true;
	var sError = "";
	//Campo id
	var id=frmModificaTratamiento2.txtIdTratamiento2.value.trim();
	frmModificaTratamiento2.txtIdTratamiento2.value = frmModificaTratamiento2.txtIdTratamiento2.value.trim();

	var oExpReg = /^\d{2}[A-Z]{1}$/; //2 numeros y una letra en mayusculas
	
	if (oExpReg.test(id) == false)
	{
		frmModificaTratamiento2.txtIdTratamiento2.classList.add("error");
		frmModificaTratamiento2.txtIdTratamiento2.focus();
		bValido = false;
		sError += "El id debe ser 2 numeros y una letra \n"; 
	} else {
		frmModificaTratamiento2.txtIdTratamiento2.classList.remove("error");
	}
	//Campo posologia
	var posologia=frmModificaTratamiento2.txtPosologia.value.trim();
	frmModificaTratamiento2.txtPosologia.value = frmModificaTratamiento2.txtPosologia.value.trim();

	var oExpReg = /^[A-Z\s\d]{6,40}$/i;
	
	if (oExpReg.test(posologia) == false)
	{
		frmModificaTratamiento2.txtPosologia.classList.add("error");
		frmModificaTratamiento2.txtPosologia.focus();
		bValido = false;
		sError += "La posología debe contener entre 6 y 40 caracteres \n"; 
	} else {
		frmModificaTratamiento2.txtPosologia.classList.remove("error");
	}

	//Campo fechas
	var fechaInicio=new Date(frmModificaTratamiento2.txtInicio.value);
	var fechaFin=new Date(frmModificaTratamiento2.txtFin.value);
	var resultado=fechaInicio-fechaFin;
	if (resultado>0) 
	{
		frmModificaTratamiento2.txtInicio.classList.add("error");	
		frmModificaTratamiento2.txtFin.classList.add("error");
		frmModificaTratamiento2.txtInicio.focus();
		bValido = false;
		sError+="Fecha no permitida, el inicio no puede ser menor que el final del tratamiento";
	}
	else
	{
		frmModificaTratamiento2.txtInicio.classList.remove("error");	
		frmModificaTratamiento2.txtFin.classList.remove("error");
	}

	//Campo instrucciones /*SE PODRIA DEJAR SIN VALIDAR PORQUE LO HACE BIEN AL DETECTAR AL PRINCIPIO EL IF DEL CAMPO VACIO , PERO LO VALIDO POR SI INTENTAS METER ALGO QUE NO SEAN LETRAS Y NUMEROS*/
	var instrucciones=frmModificaTratamiento2.txtInstrucciones.value.trim();
	frmModificaTratamiento2.txtInstrucciones.value = frmModificaTratamiento2.txtInstrucciones.value.trim();

	var oExpReg = /^[A-Z\s\d]{1,140}$/i; //Letras mayusculas o minusculas de hasta 140 caracteres para especificar el  tratamiento
	
	if (oExpReg.test(instrucciones) == false)
	{
		frmModificaTratamiento2.txtInstrucciones.classList.add("error");
		frmModificaTratamiento2.txtInstrucciones.focus();
		bValido = false;
		sError += "Las instrucciones deben contener entre 1 y 140 caracteres \n"; 
	} else 
	{
		frmModificaTratamiento2.txtInstrucciones.classList.remove("error");
	}

	if (bValido == false){
		alert(sError);
		oE.preventDefault();
	}
}
	/*var oTratamiento = new Tratamiento(tratamientoID,posologia,inicio,fin,paciente,medico,medicamento,instrucciones);
	var sMensaje = oHospital.modificarTratamiento(oTratamiento);
	alert (sMensaje);
	ocultarformularios();
}*/

function modificarPaciente2(oEvento)
{
	var oE = oEvento || window.event;
	ocultarformularios();
	document.getElementById("modificaPaciente2").style.display = "block";
	frmModificaPaciente2.reset();
}

function modificarAmbulancia(oEvento)
{
	var oE = oEvento || window.event;
	ocultarformularios();
	document.getElementById("modificaAmbulancia").style.display = "block";
	frmModificaAmbulancia.reset();
	//select de ambulancias:
	var oSeleccAmbulancia = document.frmModificaAmbulancia.ComboAmbulancias;
	oSeleccAmbulancia.options.length = 0;
	var sAmbulancia = oHospital.listaAmbulancias();
	for (var j=0;j<sAmbulancia.length;j++)
	{
		var oOption = document.createElement("option");
		oOption.text = sAmbulancia[j];
		oSeleccAmbulancia.appendChild(oOption);
	}
}

function aceptarModificarAmbulancia()
{
	//alert("Estoy en aceptar combo");
	var oForm = document.frmModificaAmbulancia;
	var oForm2 = document.frmModificaAmbulancia2;
	var matricula = oForm.ComboAmbulancias.value;
	alert (matricula);
	ocultarformularios();
	document.getElementById("modificaAmbulancia2").style.display = "block";
	frmModificaAmbulancia2.reset();
	//var oMedico = new Medico();
	var oAmbu = oHospital.datosAmbulancia(matricula);
	oForm2.txtCapacidad.value = oAmbu.capacidad;
	oForm2.txtMarca.value = oAmbu.marca;
	oForm2.txtMatricula.value = matricula;
	//alert("Debe aparecer");
	//frmModificaMedico2.reset();
}

function aceptarModificarAmbulancia2()
{
	var oForm = document.frmModificaAmbulancia2;

	var capacidad = oForm.txtCapacidad.value;
	var marca = oForm.txtMarca.value;
	var matricula = oForm.txtMatricula.value;

	validarAmbulanciaModificada();
	var sMensaje = oHospital.modificarAmbulancia(matricula,marca,capacidad);
	alert (sMensaje);
	ocultarformularios();
}

function validarAmbulanciaModificada(oEvento)
{
	var oE = oEvento || window.event;
	var bValido=true;
	var sError = "";

	//Campo matricula
	/**/
	var matricula=frmModificaAmbulancia2.txtMatricula.value.trim();
	frmModificaAmbulancia2.txtMatricula.value = frmModificaAmbulancia2.txtMatricula.value.trim();

	var oExpReg = /^\d{4}[A-Z]{3}$/i;
	
	if (oExpReg.test(matricula) == false)
	{
		frmModificaAmbulancia2.txtMatricula.classList.add("error");
		frmModificaAmbulancia2.txtMatricula.focus();
		bValido = false;
		sError = "La matricula debe ser válida segun el formato antiguo o el europeo \n"; 
	} else {
		frmModificaAmbulancia2.txtMatricula.classList.remove("error");
	}
	//Campo Capacidad
	var capacidad=frmModificaAmbulancia2.txtCapacidad.value.trim();
	frmModificaAmbulancia2.txtCapacidad.value = frmModificaAmbulancia2.txtCapacidad.value.trim();

	var oExpReg = /^\d{1}[0-7]$/i;
	
	if (oExpReg.test(matricula) == false)
	{
		frmModificaAmbulancia2.txtCapacidad.classList.add("error");
		frmModificaAmbulancia2.txtCapacidad.focus();
		bValido = false;
		sError = "La matricula debe ser válida segun el formato antiguo o el europeo \n"; 
	} else {
		frmModificaAmbulancia2.txtCapacidad.classList.remove("error");
	}
	//Campo Marca
	var marca=frmModificaAmbulancia2.txtMarca.value.trim();
	frmModificaAmbulancia2.txtMarca.value = frmModificaAmbulancia2.txtMarca.value.trim();

	var oExpReg = /^[aA-zZ\s]{1,60}$/i;
	
	if (oExpReg.test(matricula) == false)
	{
		frmModificaAmbulancia2.txtMarca.classList.add("error");
		frmModificaAmbulancia2.txtMarca.focus();
		bValido = false;
		sError = "La matricula debe ser válida segun el formato antiguo o el europeo \n"; 
	} else {
		frmModificaAmbulancia2.txtMarca.classList.remove("error");
	}

	if (bValido == false){
		alert(sError);
		oE.preventDefault();
	}
}
	/*var sMensaje = oHospital.modificarAmbulancia(matricula,marca,capacidad);
	alert (sMensaje);
	ocultarformularios();
}*/






function ocultarformularios()
{
	//ALTAS:
	document.getElementById("altaPaciente").style.display = "none";
    frmAltaPaciente.reset();

    document.getElementById("altaMedico").style.display = "none";
    frmAltaMedico.reset();

    document.getElementById("altaCita").style.display = "none";
	frmAltaCita.reset();

	document.getElementById("altaAmbulancia").style.display = "none";
    frmAltaAmbulancia.reset();

    document.getElementById("creaTratamiento").style.display = "none";
    frmCreaTratamiento.reset();

    document.getElementById("creaPrueba").style.display = "none";
	frmCreaPrueba.reset();

	//MODIFICACIONES: 
	document.getElementById("modificaPaciente").style.display = "none";
	frmModificaPaciente.reset();

	document.getElementById("modificaMedico").style.display = "none";
	//frmModificaMedico.reset();

	document.getElementById("modificaCita").style.display = "none";
	frmModificaCita.reset();

	document.getElementById("modificaPrueba").style.display = "none";
	frmModificaPrueba.reset();

	document.getElementById("modificaAmbulancia").style.display = "none";
	frmModificaAmbulancia.reset();

	document.getElementById("modificaTratamiento").style.display = "none";
	frmModificaTratamiento.reset();

	document.getElementById("modificaPaciente2").style.display = "none";
	frmModificaPaciente.reset();

	document.getElementById("modificaMedico2").style.display = "none";
	//frmModificaMedico.reset();

	document.getElementById("modificaCita2").style.display = "none";
	frmModificaCita.reset();

	document.getElementById("modificaPrueba2").style.display = "none";
	frmModificaPrueba.reset();

	document.getElementById("modificaAmbulancia2").style.display = "none";
	frmModificaAmbulancia.reset();

	document.getElementById("modificaTratamiento2").style.display = "none";
	frmModificaTratamiento.reset();

	//MODIFICACION MARINA 28/01
	document.getElementById("listadoPorPaciente").style.display = "none";
	frmListadoPaciente.reset();
	//FIN MODIFICACION MARINA 28/01

	//MODIFICACION valme 28/01
	document.getElementById("listadoPorMedico").style.display = "none";
	frmListadoMedico.reset();
	//FIN MODIFICACION valme 28/01

	//LISTADOS:
	document.getElementById("listados").style.display = "none";
	
}