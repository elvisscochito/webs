<?php
//CÓDIGO CONEXÍON

//VARIABLES
$usuario = "root";
$contrasena = "root";
$servidor = "localhost";
$basededatos = "alumnos";

//conexión con el servidor de base de datos con mysqli_connect()
$conexion = mysqli_connect( $servidor, $usuario, $contrasena ) or die ("No se ha podido conectar al servidor de Base de datos");

//Conexión a la base de datos
$db = mysqli_select_db( $conexion, $basededatos ) or die ( "Upps! Pues va a ser que no se ha podido conectar a la base de datos" );

//Variable que guarda consulta
$consulta = "SELECT * FROM alumnos";

//Función para hacer consulta
$resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos");

//creación tabla
echo "<table borde='2'>";
echo "<tr>";
echo "<th>Nombre</th>";
echo "<th>Edad</th>";
echo "</tr>";

//Imprime registros
while ($columna = mysqli_fetch_array( $resultado ))
{
 echo "<tr>";
 echo "<td>" . $columna['nombre'] . "</td><td>" . $columna['edad'] . "</td>";
 echo "</tr>";
}
echo "</table>";

//Desconexión con la base de datos	
mysqli_close( $conexion )
?>