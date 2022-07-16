
<html>
<head>
<title>Problemas</title>
</head>
<body>
<?php
function mensajecentrado($men)
{
echo "<table width=\"100%\"border=\"1\">";
echo "<tr> <td align=\"center\">";
echo $men;
echo "<tr> <td>";
echo "</table>";
}

mensajecentrado ("Primer recuadro:");
echo "<br>";
mensajecentrado ("Segundo recuadro:");
?>
</body>
</html>
