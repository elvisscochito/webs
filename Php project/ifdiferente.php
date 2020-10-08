//////////////////
<
if ($a > $b) {
    echo "a es mayor que b";
} elseif ($a == $b) {
    echo "a es igual que b";
} else {
    echo "a es menor que b";
}
?>


if ($a > $b) {
  echo "a es mayor que b";
}




/* Método incorrecto: */
if ($a > $b):
    echo $a." es mayor que ".$b;
else if ($a == $b): // No compilará
    echo "La línea anterior provoca un error del interprete.";
endif;




/* Método correcto: */
if ($a > $b):
    echo $a." es mayor que ".$b;
elseif ($a == $b): // Tenga en cuenta la combinación de las palabras.
    echo $a." igual ".$b;
else:
    echo $a." no es ni mayor ni igual a ".$b;
endif;
//////////////////////