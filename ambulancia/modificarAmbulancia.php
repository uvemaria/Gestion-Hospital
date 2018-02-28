 <?php

// Va a devolver una respuesta JSON que no se debe cachear 
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


$servidor  = "localhost";
$basedatos = "hospital";
$usuario   = "root";
$password  = "";

$sAmbulancia=$_REQUEST['datos'];

$oAmbulancia = json_decode($sAmbulancia);

// Abrir conexion con la BD
$conexion = mysql_connect($servidor, $usuario, $password) or die(mysql_error());
mysql_query("SET NAMES 'utf8'", $conexion);

mysql_select_db($basedatos, $conexion) or die(mysql_error());


$matricula = $oAmbulancia->matricula;

	$sql = "UPDATE ambulancia SET capacidad=$oAmbulancia->capacidad, marca='$oAmbulancia->marca' WHERE matricula = '".$matricula."'";

	$resultados = @mysql_query($sql, $conexion) or die(mysql_error());
	
if ($resultados)
{
    $mensaje='AMBULANCIA MODIFICADA CON EXITO';
	$error = false;
}
else
{
	$mensaje = 'AMBULANCIA NO MODIFICADA';
	$error = true;
}

$respuesta = array($error,$mensaje);

echo json_encode($respuesta); 

mysql_close($conexion);

?> 