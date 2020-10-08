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
#form1 label {
	text-align: center;
}
#form1 label {
	text-align: center;
}
#form1 label {
	text-align: center;
}
#form1 {
	text-align: center;
}
.ingresar {
	font-family: "Comic Sans MS", cursive;
}
body {
	background-image: url(imagenes/fondo%20azul.jpg);
	text-align: center;
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
<form id="form1" name="form1" method="get" action="actualizar.php?$id_accesorio=id_accesorio">
  <label for="id_accesorio" class="ingresar">	Ingresar el ID a Actualizar:</label>
  <input type="text" name="id_accesorio" id="id_accesorio" />
  <input type="submit" name="button" id="button" value="Buscar" />
</form>
<p><a href="index.php"><img src="imagenes/Datos.png" width="85" height="87" /></a></p>
<p><a href="index.php">Volver al menú principal</a></p>
</body>
</html>