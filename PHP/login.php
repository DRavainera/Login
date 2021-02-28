<?php
include ("cuenta.php"); //aqui vienen los datos que serian de una base de datos

$email = $_GET['email']; //email del usuario
$pass = $_GET['pass']; //contraseña cifrada del usuario
$codigo; //un codigo que sirve para indicar la validacion

//se validan los datos y se envia el codigo correspondiente
if (isset($email) && $email == $username){
    if (isset($pass) && $pass == $password){
        $codigo = 0;
    }else if (empty($pass)){
        $codigo = 1;
    }else if (strlen($pass) < 4 || strlen($pass) > 10){
        $codigo = 2;
    }else {
        $codigo = 3;
    }
}else if (empty($email)){
    $codigo = 1;
}else if (!preg_match("/^[_.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+.)+[a-zA-Z]{2,6}$/i", $email)){
    $codigo = 4;
}else{
    $codigo = 3;
}

echo $codigo;
