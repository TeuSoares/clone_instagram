<?php

$servidor = "robb0466.publiccloud.com.br:3306";      // Nome ou IP do servido. Onde está?
$usuario = "limei_mateus";
$senha = "@a1b2c3d4#";
$banco = "limeiraweb_mateus";
$conexao = new mysqli($servidor,$usuario,$senha,$banco);   // Criando conexão com o banco
mysqli_query($conexao,"SET NAMES 'utf8'");  
mysqli_query($conexao,'SET character_set_connection=utf8');  
mysqli_query($conexao,'SET character_set_client=utf8');  
mysqli_query($conexao,'SET character_set_results=utf8');

?>