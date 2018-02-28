 <?php

// Va a devolver una respuesta JSON que no se debe cachear 
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


$servidor  = "localhost";
$basedatos = "hospital";
$usuario   = "root";
$password  = "";

$sPaciente=$_REQUEST['datos'];

$oPaciente = json_decode($sPaciente);

// Abrir conexion con la BD
$conexion = mysql_connect($servidor, $usuario, $password) or die(mysql_error());
mysql_query("SET NAMES 'utf8'", $conexion);

mysql_select_db($basedatos, $conexion) or die(mysql_error());

//comprobar si ese registro ya existe en mysqli en proceso 
$dni = $oPaciente->nif;

	$sql = "UPDATE paciente SET nombre='$oPaciente->nombre',
            apellidos='$oPaciente->apellidos',direccion='$oPaciente->direccion',correo='$oPaciente->email',telefono=$oPaciente->telefono,num_ss=$oPaciente->numSS WHERE dni = '".$dni."'";

	$resultados = @mysql_query($sql, $conexion) or die(mysql_error());
	
if ($resultados)
{
    $mensaje='PACIENTE MODIFICADO CON EXITO';
	$error = false;
}
else
{
	$mensaje = 'PACIENTE NO MODIFICADO';
	$error = true;
}

$respuesta = array($error,$mensaje);

echo json_encode($respuesta); 

mysql_close($conexion);

?> 