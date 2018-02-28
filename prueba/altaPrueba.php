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
$fecha = $oDatos->fecha;
$hora = $oDatos->hora;
$descripcion = $oDatos->descripcion;
$tipo = $oDatos->tipo;

// Abrir conexion con la BD
$conexion = mysql_connect($servidor, $usuario, $password) or die(mysql_error());
mysql_query("SET NAMES 'utf8'", $conexion);

mysql_select_db($basedatos, $conexion) or die(mysql_error());

$sql = "select id from prueba where id = '".$id."'";


$resultados = mysql_query($sql, $conexion) or die(mysql_error());


$contador=mysql_num_rows($resultados);

if($contador>0)
{
	$mensaje= 'YA EXISTE ESA PRUEBA';
	$error = true;

}
else
{
	$mensaje='PRUEBA INSERTADA CON EXITO';
	$error = false;

	$sql = "insert into prueba VALUES ('$id','$hora','$fecha','$tipo','$descripcion',$numCole,'$dniP')";

	$resultados = @mysql_query($sql, $conexion) or die(mysql_error());
	
}

$respuesta = array($error,$mensaje);

echo json_encode($respuesta); 

mysql_close($conexion);

?> 