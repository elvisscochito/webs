<?php
echo "<h2>Ciclo FOR Tabla de multiplicar</h2>";
echo '<body style="background-color:pink">';

  echo  '<form method="post" action="tablademultiplicar.php">';
	echo '<b>Qu&eacute; tabla desea imprimir?</b> <input type="text" name="num" required> <input type="submit" name="tablas" value="Enviar">';
	echo "<br>";
	if (isset ($_POST['tablas'])){
		$savenum=$_POST['num'];
		for($res=1; $res<=10; $res++)
		{
			$mul=$savenum*$res;
			echo "<br>";
			echo  ''.$savenum.'x'.$res.'='.$mul;
		}
	 echo "<br>";
	 echo "Se acabo.";
	}
echo '<center>';
echo '<a> <a href="index.html"><img src="home.jpg" align="center" height="200" width="200"> </a>';
echo '</center>';
?>


