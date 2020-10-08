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

if ((isset($_POST["MM_update"])) && ($_POST["MM_update"] == "form1")) {
  $updateSQL = sprintf("UPDATE elviro_pc SET accesorio=%s, cantidad=%s, precio=%s, existencia=%s WHERE id_accesorio=%s",
                       GetSQLValueString($_POST['accesorio'], "text"),
                       GetSQLValueString($_POST['cantidad'], "int"),
                       GetSQLValueString($_POST['precio'], "double"),
                       GetSQLValueString($_POST['existencia'], "int"),
                       GetSQLValueString($_POST['id_accesorio'], "text"));

  mysql_select_db($database_elviro_dominguez, $elviro_dominguez);
  $Result1 = mysql_query($updateSQL, $elviro_dominguez) or die(mysql_error());

  $updateGoTo = "msj_actualizar.php";
  if (isset($_SERVER['QUERY_STRING'])) {
    $updateGoTo .= (strpos($updateGoTo, '?')) ? "&" : "?";
    $updateGoTo .= $_SERVER['QUERY_STRING'];
  }
  header(sprintf("Location: %s", $updateGoTo));
}

if ((isset($_POST["MM_update"])) && ($_POST["MM_update"] == "form2")) {
  $updateSQL = sprintf("UPDATE elviro_pc SET accesorio=%s, cantidad=%s, precio=%s, existencia=%s WHERE id_accesorio=%s",
                       GetSQLValueString($_POST['accesorio'], "text"),
                       GetSQLValueString($_POST['cantidad'], "int"),
                       GetSQLValueString($_POST['precio'], "double"),
                       GetSQLValueString($_POST['existencia'], "int"),
                       GetSQLValueString($_POST['id_accesorio'], "text"));

  mysql_select_db($database_elviro_dominguez, $elviro_dominguez);
  $Result1 = mysql_query($updateSQL, $elviro_dominguez) or die(mysql_error());

  $updateGoTo = "msj_actualizar.php";
  if (isset($_SERVER['QUERY_STRING'])) {
    $updateGoTo .= (strpos($updateGoTo, '?')) ? "&" : "?";
    $updateGoTo .= $_SERVER['QUERY_STRING'];
  }
  header(sprintf("Location: %s", $updateGoTo));
}

if ((isset($_POST["MM_update"])) && ($_POST["MM_update"] == "form1")) {
  $updateSQL = sprintf("UPDATE elviro_pc SET accesorio=%s, cantidad=%s, precio=%s, existencia=%s WHERE id_accesorio=%s",
                       GetSQLValueString($_POST['accesorio'], "text"),
                       GetSQLValueString($_POST['cantidad'], "int"),
                       GetSQLValueString($_POST['precio'], "double"),
                       GetSQLValueString($_POST['existencia'], "int"),
                       GetSQLValueString($_POST['id_accesorio'], "text"));

  mysql_select_db($database_elviro_dominguez, $elviro_dominguez);
  $Result1 = mysql_query($updateSQL, $elviro_dominguez) or die(mysql_error());

  $updateGoTo = "msj_actualizar.php";
  if (isset($_SERVER['QUERY_STRING'])) {
    $updateGoTo .= (strpos($updateGoTo, '?')) ? "&" : "?";
    $updateGoTo .= $_SERVER['QUERY_STRING'];
  }
  header(sprintf("Location: %s", $updateGoTo));
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
.sistema {text-align: center;
	font-weight: bold;
	font-style: italic;
	font-family: "Comic Sans MS", cursive;
}
.titulo {text-align: center;
	font-weight: bold;
	font-style: italic;
	font-family: "Comic Sans MS", cursive;
}
body {
	background-image: url(imagenes/fondo%20azul.jpg);
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
    <td height="55" colspan="2" bgcolor="#999999" class="sistema">&quot;Sistema profesonal&quot;</td>
  </tr>
</table>
<p>&nbsp;</p>
<form action="<?php echo $editFormAction; ?>" method="post" name="form1" id="form1">
  <table align="center">
    <tr valign="baseline">
      <td nowrap="nowrap" align="right">Id_accesorio:</td>
      <td><?php echo $row_Recordset1['id_accesorio']; ?></td>
    </tr>
    <tr valign="baseline">
      <td nowrap="nowrap" align="right">Accesorio:</td>
      <td><input type="text" name="accesorio" value="<?php echo htmlentities($row_Recordset1['accesorio'], ENT_COMPAT, 'utf-8'); ?>" size="32" /></td>
    </tr>
    <tr valign="baseline">
      <td nowrap="nowrap" align="right">Cantidad:</td>
      <td><input type="text" name="cantidad" value="<?php echo htmlentities($row_Recordset1['cantidad'], ENT_COMPAT, 'utf-8'); ?>" size="32" /></td>
    </tr>
    <tr valign="baseline">
      <td nowrap="nowrap" align="right">Precio:</td>
      <td><input type="text" name="precio" value="<?php echo htmlentities($row_Recordset1['precio'], ENT_COMPAT, 'utf-8'); ?>" size="32" /></td>
    </tr>
    <tr valign="baseline">
      <td nowrap="nowrap" align="right">Existencia:</td>
      <td><input type="text" name="existencia" value="<?php echo htmlentities($row_Recordset1['existencia'], ENT_COMPAT, 'utf-8'); ?>" size="32" /></td>
    </tr>
    <tr valign="baseline">
      <td nowrap="nowrap" align="right">&nbsp;</td>
      <td><input type="submit" value="Actualizar registro" /></td>
    </tr>
  </table>
  <input type="hidden" name="MM_update" value="form1" />
  <input type="hidden" name="id_accesorio" value="<?php echo $row_Recordset1['id_accesorio']; ?>" />
</form>
<p>&nbsp;</p>
</body>
</html>
<?php
mysql_free_result($Recordset1);
?>
