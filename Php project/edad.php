<html>
 <head>
 	<title>Edad</title>
 </head>
 	<?php
 	echo '<body background=rojo.jpg>';
 	echo '<form method="post" action="edad.php">';
 	echo '<b>Ingresa el a&ntilde;o de su nacimiento: </b> <input type="text" name="edad" required> <input type="submit" name="edadenv" value="Enviar">';
 	echo '<br>';

 	if(isset($_POST['edadenv'])){
 		$valor1=$_POST['edad'];

 		$caledad=2019-$valor1;

 		if($caledad>=18){
 			echo "Tu edad es de $caledad <br>";
 			echo "Puedes votar, cumples la mayoria de edad";
 		}else{
 				echo "Tu edad es de $caledad <br>";
 				echo "No puedes votar eres menor a&uacute;n";
 			}
 	}
 	echo '</form>';
 	?>
 	<center>
    <a> <a href="index.html"><img src="home.jpg" align="center" height="200" width="200"> </a>
    </center>
 	</body>
</html>