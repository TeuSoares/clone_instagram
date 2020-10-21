<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$id_public = $_POST["id_public"]; 
$valuelegenda = $_POST["valuelegenda"];

$operacao = $conexao->prepare("UPDATE publicacao_instagram SET descricao='$valuelegenda' WHERE id_publicInsta=$id_public "); 
$operacao->execute();
echo "Sucesso";

?>