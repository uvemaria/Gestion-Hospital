 <?php

// Va a devolver una respuesta JSON que no se debe cachear 
header('Content-Type: application/json');


$servidor  = "localhost";
$basedatos = "hospital";
$usuario   = "root";
$password  = "";

$paciente = $_POST['ComboPacientes'];

// Abrir conexion con la BD
$conexion = mysql_connect($servidor, $usuario, $password) or die(mysql_error());
mysql_query("SET NAMES 'utf8'", $conexion);

mysql_select_db($basedatos, $conexion) or die(mysql_error());

$sql = "SELECT t.id, t.posologia, t.fecha_inicio, t.fecha_fin, CONCAT(pa.nombre,' ',pa.apellidos) AS paciente, CONCAT(m.nombre,' ',m.apellidos) AS medico, me.nombre, t.instrucciones FROM medicamento me, tratamiento t, medico m, paciente pa WHERE t.medico=m.num_colegiado AND pa.dni=t.paciente AND t.medicamento=me.id AND t.paciente='".$paciente."'";
$resultados = mysql_query($sql, $conexion) or die(mysql_error());
$arrayTratamientos = array();

while ($fila = mysql_fetch_array($resultados, MYSQL_ASSOC)) {
    // Almacenamos en un array cada una de las filas que vamos leyendo del recordset.
    $arrayTratamientos[] = $fila;
}

// función de PHP que convierte a formato JSON el array.
echo json_encode($arrayTratamientos,JSON_UNESCAPED_UNICODE); 

mysql_close($conexion);

?> 