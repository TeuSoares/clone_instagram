<?php

function  con_mysql(){
    $servidor = "Localhost";
    $banco = "instagram";
    $usuario = "root";
    $senha = "";

    try{
        $con = new PDO("mysql:host=$servidor;dbname=$banco",
        $usuario,
        $senha
        );
		$con->exec("SET CHARACTER SET utf8mb4");

        return $con;
        // echo "Conectou";
    }catch(PDOException $e){
        echo $e->getMessage();
    }

}

?>
