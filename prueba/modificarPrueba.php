 <?php

// Va a devolver una respuesta JSON que no se debe cachear 
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


$servidor  = "localhost";
$basedatos = "hospital";
$usuario   = "root";
$password  = "";

$sPrueba=$_REQUEST['datos'];

$oPrueba = json_decode($sPrueba);

// Abrir conexion con la BD
$conexion = mysql_connect($servidor, $usuario, $password) or die(mysql_error());
mysql_query("SET NAMES 'utf8'", $conexion);

mysql_select_db($basedatos, $conexion) or die(mysql_error());


$id = $oPrueba->ID;

	$sql = "UPDATE prueba SET hora='$oPrueba->hora',
            fecha='$oPrueba->fecha',tipo='$oPrueba->tipo',descripcion='$oPrueba->descripcion',num_colegiado=$oPrueba->medico,dni_paciente='$oPrueba->paciente' WHERE id = '".$id."'";

	$resultados = @mysql_query($sql, $conexion) or die(mysql_error());
	
if ($resultados)
{
    $mensaje='PRUEBA MODIFICADA CON EXITO';
	$error = false;
}
else
{
	$mensaje = 'PRUEBA NO MODIFICADA';
	$error = true;
}

$respuesta = array($error,$mensaje);

echo json_encode($respuesta); 

mysql_close($conexion);

?> 