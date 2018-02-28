 <?php

// Va a devolver una respuesta JSON que no se debe cachear 
header('Content-Type: application/json');


$servidor  = "localhost";
$basedatos = "hospital";
$usuario   = "root";
$password  = "";

// Abrir conexion con la BD
$conexion = mysql_connect($servidor, $usuario, $password) or die(mysql_error());
mysql_query("SET NAMES 'utf8'", $conexion);

mysql_select_db($basedatos, $conexion) or die(mysql_error());

$sql = "SELECT p.id, p.hora, p.fecha, p.tipo, p.descripcion, CONCAT(m.nombre,' ',m.apellidos) AS medico, CONCAT(pa.nombre,' ',pa.apellidos) AS paciente FROM prueba p, medico m, paciente pa WHERE p.num_colegiado=m.num_colegiado AND pa.dni=p.dni_paciente ORDER BY p.fecha";
$resultados = mysql_query($sql, $conexion) or die(mysql_error());
$arrayPruebas = array();

while ($fila = mysql_fetch_array($resultados, MYSQL_ASSOC)) {
    // Almacenamos en un array cada una de las filas que vamos leyendo del recordset.
    $arrayPruebas[] = $fila;
}

// función de PHP que convierte a formato JSON el array.
echo json_encode($arrayPruebas,JSON_UNESCAPED_UNICODE); 

mysql_close($conexion);

?> 