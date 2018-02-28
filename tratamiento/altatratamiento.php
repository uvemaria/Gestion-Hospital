<?php

// Va a devolver una respuesta JSON que no se debe cachear 
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


$servidor  = "localhost";
$basedatos = "hospital";
$usuario   = "root";
$password  = "";

$datos = $_REQUEST['datos'];

$oDatos = json_decode($datos);

$id = $oDatos->id;
$dniP = $oDatos->dniP;
$numCole = $oDatos->numCole;
$fechaInicio = $oDatos->fechaInicio;
$fechaFin = $oDatos->fechaFin;
$posologia = $oDatos->posologia;
$medicamento = $oDatos->medicamento;
$instrucciones = $oDatos->instrucciones;

// Abrir conexion con la BD
$conexion = mysql_connect($servidor, $usuario, $password) or die(mysql_error());
mysql_query("SET NAMES 'utf8'", $conexion);

mysql_select_db($basedatos, $conexion) or die(mysql_error());

$sql = "select id from tratamiento where id = '".$id."'";


$resultados = mysql_query($sql, $conexion) or die(mysql_error());


$contador=mysql_num_rows($resultados);

if($contador>0)
{
	$mensaje= 'YA EXISTE ESE TRATAMIENTO';
	$error = true;

}
else
{
	$mensaje='TRATAMIENTO INSERTADO CON EXITO';
	$error = false;

    $sql = "insert into tratamiento VALUES ('$id','$posologia','$fechaInicio','$fechaFin','$dniP','$numCole','$medicamento','$instrucciones')";

	$resultados = @mysql_query($sql, $conexion) or die(mysql_error());
	
}

$respuesta = array($error,$mensaje);

echo json_encode($respuesta); 

mysql_close($conexion);

?> 