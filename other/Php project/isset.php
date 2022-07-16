<?php
//Ejemplo con variable definida
$variable = 'valor';
if (isset($variable)) 
	{
    echo "Variable definida!!!";
	}else
		{
		echo "Variable NO definida!!!";
		}
 echo "<br>";
  echo "<br>";
//Ejemplo con variables definidas
$variable = 'valor';
$variable2 = 'valor2';
if (isset($variable,$variable2)) 
	{
    echo "Variables definidas!!!";
	}else
		{
		echo "Variables NO definidas!!!";
		}
 
 echo "<br>";
 echo "<br>";
//Ejemplo con variables NO definidas
$variable = 'valor';
$variable2 = 'valor2';
 
if (isset($variable,$variable2, $variable3)) 
	{
    echo "Variables definidas!!!";
	}else
		{
		echo "Variables NO definidas!!!";
		}
?>