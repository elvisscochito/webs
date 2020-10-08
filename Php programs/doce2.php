
<html>
<head>
<title>Problema</title>
</head>
<body>
<?php
if (isset($_POST['check1']))
{
$suma=$_POST['valor1']+$_POST['valor2'];
echo "La suma es:".$suma;
echo "<br>";
}
if (isset($_POST['check2']))
{
$resta=$_POST['valor1']-$_POST['valor2'];
echo "La resta es:".$resta;
}
?>
</body>
</html>
