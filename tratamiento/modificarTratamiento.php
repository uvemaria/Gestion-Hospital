 <?php

// Va a devolver una respuesta JSON que no se debe cachear 
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


$servidor  = "localhost";
$basedatos = "hospital";
$usuario   = "root";
$password  = "";

$sTratamiento=$_REQUEST['datos'];

$oTratamiento = json_decode($sTratamiento);

// Abrir conexion con la BD
$conexion = mysql_connect($servidor, $usuario, $password) or die(mysql_error());
mysql_query("SET NAMES 'utf8'", $conexion);

mysql_select_db($basedatos, $conexion) or die(mysql_error());


$id = $oTratamiento->ID;

	$sql = "UPDATE tratamiento SET posologia='$oTratamiento->posologia', fecha_inicio='$oTratamiento->inicio', fecha_fin='$oTratamiento->fin', paciente='$oTratamiento->paciente', medico=$oTratamiento->medico, medicamento='$oTratamiento->medicamento', instrucciones='$oTratamiento->instrucciones'  WHERE id = '".$id."'";

	$resultados = @mysql_query($sql, $conexion) or die(mysql_error());
	
if ($resultados)
{
    $mensaje='TRATAMIENTO MODIFICADO CON EXITO';
	$error = false;
}
else
{
	$mensaje = 'TRATAMIENTO NO MODIFICADO';
	$error = true;
}

$respuesta = array($error,$mensaje);

echo json_encode($respuesta); 

mysql_close($conexion);

?> 