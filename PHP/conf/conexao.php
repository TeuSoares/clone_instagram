<?php

function  con_mysql(){
    $servidor = "Localhost";
    $banco = "instagram";
    $usuario = "root";
    $senha = "";

    // $servidor = "robb0466.publiccloud.com.br:3306";
    // $banco = "limeiraweb_mateus";
    // $usuario = "limei_mateus";
    // $senha = "@a1b2c3d4#";

    try{
        $con = new PDO("mysql:host=$servidor;dbname=$banco",
        $usuario,
        $senha,
        array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\'')
        );

        return $con;
        echo "Conectou";
    }catch(PDOException $e){
        echo $e->getMessage();
    }

}

// $servidor = "localhost";      // Nome ou IP do servido. Onde está?
// $usuario = "root";
// $senha = "";
// $banco = "instagram";
// $conexao = new mysqli($servidor,$usuario,$senha,$banco);   // Criando conexão com o banco
// mysqli_query($conexao,"SET NAMES 'utf8'");  
// mysqli_query($conexao,'SET character_set_connection=utf8');  
// mysqli_query($conexao,'SET character_set_client=utf8');  
// mysqli_query($conexao,'SET character_set_results=utf8');

?>