 <?php

// Va a devolver una respuesta JSON que no se debe cachear 
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


$servidor  = "localhost";
$basedatos = "hospital";
$usuario   = "root";
$password  = "";

$dni = $_POST['txtDNIMedico'];
$numCole = $_POST['txtSS'];
$nombre = $_POST['txtNombreMedico'];
$apellidos = $_POST['txtApellidosMedico'];
$dir = $_POST['txtDireccionMedico'];
$email = $_POST['txtEmailMedico'];
$tlf = $_POST['txtTelefonoMedico'];

// Abrir conexion con la BD
$conexion = mysql_connect($servidor, $usuario, $password) or die(mysql_error());
mysql_query("SET NAMES 'utf8'", $conexion);

mysql_select_db($basedatos, $conexion) or die(mysql_error());

$sql = "select dni from medico where dni = '".$dni."' ";


$resultados = mysql_query($sql, $conexion) or die(mysql_error());


$contador=mysql_num_rows($resultados);

if($contador>0)
{
	$mensaje= 'YA EXISTE ESE MÉDICO';
	$error = true;

}
else
{
	$mensaje='MÉDICO INSERTADO CON EXITO';
	$error = false;

	$sql = "insert into medico VALUES ('$dni','$nombre','$apellidos','$dir','$email','$tlf','$numCole')";

	$resultados = @mysql_query($sql, $conexion) or die(mysql_error());
	
}

$respuesta = array($error,$mensaje);

echo json_encode($respuesta); 

mysql_close($conexion);

?> 