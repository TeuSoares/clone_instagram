<?php

function  con_mysql(){
    // $servidor = "Localhost";
    // $banco = "db_food";
    // $usuario = "root";
    // $senha = "";

    $servidor = "robb0466.publiccloud.com.br:3306";
    $banco = "limeiraweb_mateus";
    $usuario = "limei_mateus";
    $senha = "@a1b2c3d4#";

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