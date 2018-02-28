 <?php

// Va a devolver una respuesta JSON que no se debe cachear 
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


$servidor  = "localhost";
$basedatos = "hospital";
$usuario   = "root";
$password  = "";

$sCita=$_REQUEST['dato'];

$oCita = json_decode($sCita);

// Abrir conexion con la BD
$conexion = mysql_connect($servidor, $usuario, $password) or die(mysql_error());
mysql_query("SET NAMES 'utf8'", $conexion);

mysql_select_db($basedatos, $conexion) or die(mysql_error());


$sql = "select * from cita where id = '".$oCita."'";

$resultados = mysql_query($sql, $conexion) or die(mysql_error());


$fila=mysql_fetch_array($resultados);


echo json_encode($fila); 

mysql_close($conexion);

?> 