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

$editFormAction = $_SERVER['PHP_SELF'];
if (isset($_SERVER['QUERY_STRING'])) {
  $editFormAction .= "?" . htmlentities($_SERVER['QUERY_STRING']);
}

if ((isset($_POST["MM_insert"])) && ($_POST["MM_insert"] == "form1")) {
  $insertSQL = sprintf("INSERT INTO elviro_pc (id_accesorio, accesorio, cantidad, precio, existencia) VALUES (%s, %s, %s, %s, %s)",
                       GetSQLValueString($_POST['id_accesorio'], "text"),
                       GetSQLValueString($_POST['accesorio'], "text"),
                       GetSQLValueString($_POST['cantidad'], "int"),
                       GetSQLValueString($_POST['precio'], "double"),
                       GetSQLValueString($_POST['existencia'], "int"));

  mysql_select_db($database_elviro_dominguez, $elviro_dominguez);
  $Result1 = mysql_query($insertSQL, $elviro_dominguez) or die(mysql_error());

  $insertGoTo = "msj_pantalla.php";
  if (isset($_SERVER['QUERY_STRING'])) {
    $insertGoTo .= (strpos($insertGoTo, '?')) ? "&" : "?";
    $insertGoTo .= $_SERVER['QUERY_STRING'];
  }
  header(sprintf("Location: %s", $insertGoTo));
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>
<style type="text/css">
.sistema {
	text-align: center;
	font-weight: bold;
	font-style: italic;
	font-family: "Comic Sans MS", cursive;
}
.titulo {
	text-align: center;
	font-weight: bold;
	font-style: italic;
	font-family: "Comic Sans MS", cursive;
}
body {
	background-image: url(imagenes/fondo%20azul.jpg);
}
#form1 table tr td {
	font-style: italic;
	font-weight: bold;
	text-align: center;
	font-family: "Comic Sans MS", cursive;
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
<p>&nbsp;</p>
<form action="<?php echo $editFormAction; ?>" method="post" name="form1" id="form1">
  <table align="center">
    <tr valign="baseline">
      <td align="right" nowrap="nowrap" bgcolor="#999999">Id_accesorio:</td>
      <td><input type="text" name="id_accesorio" value="" size="32" /></td>
    </tr>
    <tr valign="baseline">
      <td align="right" nowrap="nowrap" bgcolor="#999999">Accesorio:</td>
      <td><input type="text" name="accesorio" value="" size="32" /></td>
    </tr>
    <tr valign="baseline">
      <td align="right" nowrap="nowrap" bgcolor="#999999">Cantidad:</td>
      <td><input type="text" name="cantidad" value="" size="32" /></td>
    </tr>
    <tr valign="baseline">
      <td align="right" nowrap="nowrap" bgcolor="#999999">Precio:</td>
      <td><input type="text" name="precio" value="" size="32" /></td>
    </tr>
    <tr valign="baseline">
      <td align="right" nowrap="nowrap" bgcolor="#999999">Existencia:</td>
      <td><input type="text" name="existencia" value="" size="32" /></td>
    </tr>
    <tr valign="baseline">
      <td nowrap="nowrap" align="right">&nbsp;</td>
      <td><input type="submit" value="Insertar registro" /></td>
    </tr>
  </table>
  <input type="hidden" name="MM_insert" value="form1" />
</form>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p></p>
</body>
</html>