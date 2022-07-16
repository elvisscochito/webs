<?php
	echo '<body style="background-color:orange">';
$valor1=$_POST['art1'];
$valor2=$_POST['art2'];
$valor3=$_POST['art3'];
$compra=$valor1+$valor2+$valor3;
if ($compra>=500){
	$descuento=$compra*0.10;
	$descfin=$compra-$descuento;
	echo "El total de tu compra es: $compra <br>";
	echo "Tus productos si obtienen descuento y tu descuento es de: $descuento <br>";
	echo "El precio final a pagar es de: $descfin <br>";
}
else{
	echo "Tus productos no tienen descuento y pagar&aacute;s $compra";
}
echo '<center>';
echo '<a> <a href="index.html"><img src="home.jpg" align="center" height="200" width="200"> </a>';
echo '</center>';
?>









