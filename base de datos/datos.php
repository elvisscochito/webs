<?php require_once('Connections/elviro_dominguez.php'); ?>
<?php
if (!function_exists("GetSQLValueString")) {
function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
{
  if (PHP_VERSION < 6) {
    $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;
  }

  $theValue = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($theValue) : mysql_escape_string($theValue);

  switch ($theType) {
    case "text":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;    
    case "long":
    case "int":
      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
      break;
    case "double":
      $theValue = ($theValue != "") ? doubleval($theValue) : "NULL";
      break;
    case "date":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;
    case "defined":
      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
      break;
  }
  return $theValue;
}
}

mysql_select_db($database_elviro_dominguez, $elviro_dominguez);
$query_Recordset1 = "SELECT * FROM elviro_pc";
$Recordset1 = mysql_query($query_Recordset1, $elviro_dominguez) or die(mysql_error());
$row_Recordset1 = mysql_fetch_assoc($Recordset1);
$totalRows_Recordset1 = mysql_num_rows($Recordset1);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>
<style type="text/css">
.sistema {	text-align: center;
	font-weight: bold;
	font-style: italic;
	font-family: "Comic Sans MS", cursive;
}
.titulo {	text-align: center;
	font-weight: bold;
	font-style: italic;
	font-family: "Comic Sans MS", cursive;
}
.id_accesorio {
	text-align: center;
	font-style: italic;
	font-weight: bold;
	font-family: "Comic Sans MS", cursive;
}
.accesorio {
	text-align: center;
	font-style: italic;
	font-weight: bold;
	font-family: "Comic Sans MS", cursive;
}
.cantidad {
	text-align: center;
	font-style: italic;
	font-weight: bold;
	font-family: "Comic Sans MS", cursive;
}
.precio {
	text-align: center;
	font-style: italic;
	font-weight: bold;
	font-family: "Comic Sans MS", cursive;
}
.existencia {
	text-align: center;
	font-style: italic;
	font-weight: bold;
	font-family: "Comic Sans MS", cursive;
}
body {
	background-image: url(imagenes/fondo%20azul.jpg);
}
.volver {
	text-align: center;
	font-style: italic;
}
.volver {
	font-weight: bold;
}
.volver {
	font-family: "Comic Sans MS", cursive;
}
</style>
</head>

<body>
<table width="500" border="1" align="center">
  <tr>
    <td colspan="2" rowspan="2" bgcolor="#FFFFFF"><img src="imagenes/Base de datos.png" width="148" height="148" /></td>
    <td width="255" height="81" colspan="2" bgcolor="#999999" class="titulo">Sistema de base de datos para usuarios</td>
  </tr>
  <tr>
    <td height="55" colspan="2" bgcolor="#999999" class="sistema">&quot;Sistema profesonal&quot;</td>
  </tr>
</table>
<p>&nbsp;</p>
<table border="1" align="center">
  <tr>
    <td bgcolor="#FFFFFF" class="id_accesorio">id_accesorio</td>
    <td bgcolor="#FFFFFF" class="accesorio">accesorio</td>
    <td bgcolor="#FFFFFF" class="cantidad">cantidad</td>
    <td bgcolor="#FFFFFF" class="precio">precio</td>
    <td bgcolor="#FFFFFF" class="existencia">existencia</td>
  </tr>
  <?php do { ?>
    <tr>
      <td bgcolor="#999999"><?php echo $row_Recordset1['id_accesorio']; ?></td>
      <td bgcolor="#999999"><?php echo $row_Recordset1['accesorio']; ?></td>
      <td bgcolor="#999999"><?php echo $row_Recordset1['cantidad']; ?></td>
      <td bgcolor="#999999"><?php echo $row_Recordset1['precio']; ?></td>
      <td bgcolor="#999999"><?php echo $row_Recordset1['existencia']; ?></td>
    </tr>
    <?php } while ($row_Recordset1 = mysql_fetch_assoc($Recordset1)); ?>
</table>
<p class="volver"><span class="volver"><span class="volver"><a href="index.php"><img src="imagenes/Datos.png" width="85" height="87" /></a></span></span></p>
<p class="volver"><span class="volver"><span class="volver"><a href="index.php">Volver al menú principal</a></span></span></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
</body>
</html>
<?php
mysql_free_result($Recordset1);
?>
