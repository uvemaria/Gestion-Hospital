 <?php

// Va a devolver una respuesta JSON que no se debe cachear 
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


$servidor  = "localhost";
$basedatos = "hospital";
$usuario   = "root";
$password  = "";

$sMedico=$_REQUEST['datos'];

$oMedico = json_decode($sMedico);

// Abrir conexion con la BD
$conexion = mysql_connect($servidor, $usuario, $password) or die(mysql_error());
mysql_query("SET NAMES 'utf8'", $conexion);

mysql_select_db($basedatos, $conexion) or die(mysql_error());

//comprobar si ese registro ya existe en mysqli en proceso 
$iNum = $oMedico->numColegiado;

	$sql = "UPDATE medico SET dni='oMedico->nif', nombre='$oMedico->nombre',
            apellidos='$oMedico->apellidos',direccion='$oMedico->direccion',correo='$oMedico->email',telefono=$oMedico->telefono WHERE num_colegiado = $iNum";

	$resultados = @mysql_query($sql, $conexion) or die(mysql_error());
	
if ($resultados)
{
    $mensaje='MÉDICO MODIFICADO CON EXITO';
	$error = false;
}
else
{
	$mensaje = 'MÉDICO NO MODIFICADO';
	$error = true;
}

$respuesta = array($error,$mensaje);

echo json_encode($respuesta); 

mysql_close($conexion);

?> 