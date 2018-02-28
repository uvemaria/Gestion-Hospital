//persona:
function Persona(sNif, sNombre, sApellidos, sDireccion,sEmail,sTelefono,sFoto)
{
    this.nif = sNif;
    this.nombre = sNombre;
    this.apellidos = sApellidos;
    this.direccion = sDireccion;
    this.email = sEmail;
    this.telefono = sTelefono;
}

function Medico(sNif, sNombre, sApellidos, sDireccion,sEmail,sTelefono,iColegiado)
{
    Persona.call(this,sNif, sNombre, sApellidos, sDireccion,sEmail,sTelefono);
    this.numColegiado = iColegiado;
}

function Paciente(sNif, sNombre, sApellidos, sDireccion,sEmail,sTelefono,iSegSocial)
{
    Persona.call(this,sNif, sNombre, sApellidos, sDireccion,sEmail,sTelefono);
    this.numSS = iSegSocial;
}

function Ambulancia(sMatricula,iCapacidad,sMarca)
{
    this.matricula = sMatricula;
    this.capacidad = iCapacidad;
    this.marca = sMarca;
}

function Prueba(id,sFecha,sHora,sTipo,sDescripcion,iPaciente,iMedico)
{
    this.ID = id;
    this.fecha = sFecha;
    this.hora = sHora;
    this.tipo = sTipo;
    this.descripcion = sDescripcion;
    this.paciente = iPaciente;
    this.medico = iMedico;
}

function Tratamiento(iID,sPosologia,sInicio,sFin,oMedico,oPaciente,sMedicamento,sInstrucciones)
{
    this.ID = iID;
    this.posologia = sPosologia;
    this.inicio = sInicio;
    this.fin = sFin;
    this.medico = oMedico;
    this.paciente = oPaciente;
    this.medicamento = sMedicamento;
    this.instrucciones = sInstrucciones;
}

function Medicamento(sNombre,sProspecto,iId)
{
    this.nombre = sNombre;
    this.prospecto = sProspecto;
    this.id = iId;
}

function Cita(iId,sNifPaciente,sNifMedico,sFecha,sHora,sDescripcion)
{
	this.id = iId;
	this.medico = sNifMedico;
	this.paciente = sNifPaciente;
	this.fecha = sFecha;
	this.hora = sHora;
    this.descripcion = sDescripcion;
    this.anulada = false;
}


