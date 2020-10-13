<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$id_perfil= $_POST["id_perfil"];   
$id_usuario = $_POST["id_usuario"];
$estrelas = $_POST["estrelas"];

$SQL = "INSERT INTO feedback_estrelas (fk_id_usuario,fk_id_perfil,estrelas) VALUES ($id_usuario,$id_perfil,$estrelas) ";

if($conexao->query($SQL)){
    echo $SQL;
}else{
    echo $SQL;
}

?>