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
$sql = "select dni from paciente where dni = '".$dni."' ";

$resultados = mysql_query($sql, $conexion) or die(mysql_error());


$contador=mysql_num_rows($resultados);

if($contador>0)
{
	$mensaje= 'YA EXISTE ESE PACIENTE';
	$error = true;

}
else
{
	$mensaje='PACIENTE INSERTADO CON EXITO';
	$error = false;

	$sql = "insert into paciente VALUES ('$dni','$oPaciente->nombre',
            '$oPaciente->apellidos','$oPaciente->direccion','$oPaciente->email',$oPaciente->telefono,$oPaciente->numSS)";

	$resultados = @mysql_query($sql, $conexion) or die(mysql_error());
	
}

$respuesta = array($error,$mensaje);

echo json_encode($respuesta); 

mysql_close($conexion);

?> 