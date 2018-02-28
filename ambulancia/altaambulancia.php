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

//comprobar si ese registro ya existe en mysqli en proceso 
$matricula = $oAmbulancia->matricula;
$sql = "select matricula from ambulancia where matricula = '".$matricula."' ";

$resultados = mysql_query($sql, $conexion) or die(mysql_error());


$contador=mysql_num_rows($resultados);

if($contador>0)
{
	$mensaje= 'YA EXISTE ESA AMBULANCIA';
	$error = true;

}
else
{
	$mensaje='AMBULANCIA INSERTADA CON EXITO';
	$error = false;

	$sql = "insert into ambulancia VALUES ('$matricula','$oAmbulancia->capacidad','$oAmbulancia->marca')";

	$resultados = @mysql_query($sql, $conexion) or die(mysql_error());
	
}

$respuesta = array($error,$mensaje);

echo json_encode($respuesta); 

mysql_close($conexion);

?> 