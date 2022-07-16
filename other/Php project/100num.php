<html>
 <head>
 	<title>100num</title>
 </head>
 	<body background="rojo.jpg">
 	<form method="post" action="100num.php">
	<?php
	$num=1;
	$cont=0;
	while($num<101){
		echo $num++;
		echo "<br>";
		$cont=$cont+$num;
 	}
 	echo "La suma total es:".$cont;
	?>
 	</body>
</html>	