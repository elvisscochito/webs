<html>
<head>
 <title>Operaciones basicas</title>
</head>
  <body background="ny.jpg">
   <font color="white">
   <center>
   <hr>
   <h1>Operaciones b&aacute;sicas con dos valores introducidos por el usuario</h1>
   <hr>
   </center>
	
	<form  method="post" action="operacionesbasicas.php">
	<center>
 	<h3>Seleccione que operaci&oacute;n desea realizar:</h3>
 	<br>

 	<table width=280 height=220 border="0" bordercolor="black" align="center">

 	<tr width=80 align=center>
 	<th>OPCI&Oacute;N</th>
	<th>OPERACI&Oacute;N</th>
	<th>SIMBOLO</th>
	</tr>

    <tr width=80 align=center>
	<td><b>1</b></td>
	<td><b>Suma</b></td>
	<td><img src="suma.jpeg" width="80" height="80" align="middle"></a></td>
	</tr>

	<tr  width=80 align=center>
	<td><b>2</b></td>
	<td><b>Resta</b></td>
	<td><img src="resta.jpeg" width="80" height="80" align="middle"></a></td>
	</tr>

	<tr width=80 align=center>
	<td><b>3</b></td>
	<td><b>Producto</b></td>
	<td><img src="producto.jpeg" width="80" height="80" align="middle"></a></td>
	</tr>

	<tr  width=80 align=center>
	<td><b>4</b></td>
	<td><b>Divisi&oacute;n</b></td>
	<td><img src="division.jpeg" width="80" height="80" align="middle"></a></td>
	</tr>

	<tr  width=80 align=center>
	<td><b>5</b></td>
	<td><b>Residuo</b></td>
	<td><img src="residuo.jpeg" width="80" height="80" align="middle"></a></td>
	</tr>
	<table>

	<br>

	<table width=280 height=130 border="0" bordercolor="black" align="center">
	<tr  width=80>
	<td><b>Opci&oacute;n:</b></td>
	<td><input type="text" name="opc" value="<?php if (isset($_POST['opc'])){ echo $_POST['opc']; } ?>" required></td>
	</tr>

	<tr  width=80>
  	<td><b>1er. N&uacute;mero:</b>
  	<td><input type="text" name="num1" value="<?php if (isset($_POST['num1'])){ echo $_POST['num1']; } ?>" required></td>
  	</tr>

	<tr  width=80>
  	<td><b>2do. N&uacute;mero:</b></td>
  	<td><input type="text" name="num2" value="<?php if (isset($_POST['num2'])){ echo $_POST['num2']; } ?>" required></td>
  	</tr>
	<table>

<?php
if(isset($_POST['operacion'])){
	$valor1=$_POST['opc'];
	$valor2=$_POST['num1'];
	$valor3=$_POST['num2'];
 		if($valor1==1){
 			$suma=$valor2+$valor3;
 				echo '<table width=280 height=5 border="0" bordercolor="black" align="center">';
				echo '<tr  width=80>';
				echo '<td><b>La suma es:</b></td>';
				echo "<td><input type='text' name='res' value='$suma'></td>";
				echo '</tr>';
				echo '<table>';
 		}else if($valor1==2){
 			$resta=$valor2-$valor3;
 			 	echo '<table width=280 height=5 border="0" bordercolor="black" align="center">';
				echo '<tr  width=80>';
				echo '<td><b>La resta es:</b></td>';
				echo "<td><input type='text' name='res' value='$resta'></td>";
				echo '</tr>';
				echo '<table>';
 		}else if($valor1==3){
 			$producto=$valor2*$valor3;
 			 	echo '<table width=280 height=5 border="0" bordercolor="black" align="center">';
				echo '<tr  width=80>';
				echo '<td><b>El producto es:</b></td>';
				echo "<td><input type='text' name='res' value='$producto'></td>";
				echo '</tr>';
				echo '<table>';
 		}else if($valor1==4){
 			$division=$valor2/$valor3;
 			 	echo '<table width=280 height=5 border="0" bordercolor="black" align="center">';
				echo '<tr  width=80>';
				echo '<td><b>La divisi&oacute;n es:</b></td>';
				echo "<td><input type='text' name='res' value='$division'></td>";
				echo '</tr>';
				echo '<table>';
 		}else if($valor1==5){
 			$residuo=$valor2%$valor3;
 			 	echo '<table width=280 height=5 border="0" bordercolor="black" align="center">';
				echo '<tr  width=80>';
				echo '<td><b>El residuo es:</b></td>';
				echo "<td><input type='text' name='res' value='$residuo'></td>";
				echo '</tr>';
				echo '<table>';
 		}else{
 			echo "<font color='red'>";
 			echo "<h3>Opci&oacute;n no valida, introduce una opci&oacute;n correcta</h3>";
 		}
}
	?>
  	<table width=280 height=5 border="0" bordercolor="black" align="center">
 	<tr width=80>
  	<td><input type="submit" name="operacion" value="Calcular..."></td>
  	<td><input type="reset" name="limpiar" onclick="formReset()" value="Borrar..."></td>
  	</tr>
  	</table>
  	</form>
	
  </body>
</html>

