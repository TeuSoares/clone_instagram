<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");
date_default_timezone_set('America/Sao_Paulo');

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$id_perfil= $_POST["id_perfil"];   
$id_usuario = $_POST["id_usuario"];
$data = date("Y-m-d");

$SQL = "INSERT INTO visitas_perfil (fk_id_usuario,fk_id_perfil,data) VALUES ($id_usuario,$id_perfil,'$data') ";

if($conexao->query($SQL)){
    echo $SQL;
}else{
    echo $SQL;
}

?>