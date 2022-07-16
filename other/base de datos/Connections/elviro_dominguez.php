<?php
# FileName="Connection_php_mysql.htm"
# Type="MYSQL"
# HTTP="true"
$hostname_elviro_dominguez = "localhost";
$database_elviro_dominguez = "elviro_pc";
$username_elviro_dominguez = "root";
$password_elviro_dominguez = "root";
$elviro_dominguez = mysql_pconnect($hostname_elviro_dominguez, $username_elviro_dominguez, $password_elviro_dominguez) or trigger_error(mysql_error(),E_USER_ERROR); 
?>