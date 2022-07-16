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

$colname_Recordset1 = "-1";
if (isset($_GET['id_accesorio'])) {
  $colname_Recordset1 = $_GET['id_accesorio'];
}
mysql_select_db($database_elviro_dominguez, $elviro_dominguez);
$query_Recordset1 = sprintf("SELECT * FROM elviro_pc WHERE id_accesorio = %s", GetSQLValueString($colname_Recordset1, "text"));
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
.volver {
	text-align: center;
}
body {
	background-image: url(imagenes/fondo%20azul.jpg);
}
#form1 table tr td {
	font-family: "Comic Sans MS", cursive;
	font-style: italic;
	font-weight: bold;
	text-align: center;
}
</style>
</head>

<body>
<table width="500" border="1" align="center">
  <tr>
    <td colspan="2" rowspan="2" bgcolor="#FFFFFF"><img src="imagenes/Base de datos.png" alt="" width="148" height="148" /></td>
    <td width="255" height="81" colspan="2" bgcolor="#999999" class="titulo">Sistema de base de datos para usuarios</td>
  </tr>
  <tr>
    <td colspan="2" bgcolor="#999999" class="sistema">&quot;Sistema profesonal&quot;</td>
  </tr>
</table>
<form id="form1" name="form1" method="post" action="">
  <p>&nbsp;</p>
  <table width="200" border="1" align="center">
    <tr>
      <td>id_accesorio</td>
      <td><label for="textfield"></label>
      <input name="textfield" type="text" id="textfield" value="<?php echo $row_Recordset1['id_accesorio']; ?>" /></td>
    </tr>
    <tr>
      <td>accesorio</td>
      <td><input name="textfield2" type="text" id="textfield2" value="<?php echo $row_Recordset1['accesorio']; ?>" /></td>
    </tr>
    <tr>
      <td>cantidad</td>
      <td><input name="textfield3" type="text" id="textfield3" value="<?php echo $row_Recordset1['cantidad']; ?>" /></td>
    </tr>
    <tr>
      <td>precio</td>
      <td><input name="textfield4" type="text" id="textfield4" value="<?php echo $row_Recordset1['precio']; ?>" /></td>
    </tr>
    <tr>
      <td>existencia</td>
      <td><input name="textfield5" type="text" id="textfield5" value="<?php echo $row_Recordset1['existencia']; ?>" /></td>
    </tr>
  </table>
  <p>&nbsp;</p>
</form>
<p class="volver"><a href="index.php"><img src="imagenes/Datos.png" width="85" height="87" /></a></p>
<p class="volver"><a href="index.php">Volver al menú principal</a></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
</body>
</html>
<?php
mysql_free_result($Recordset1);
?>
