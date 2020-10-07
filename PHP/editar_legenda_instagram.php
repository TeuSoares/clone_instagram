<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$id_public = $_POST["id_public"]; 
$editarL = $_POST["value-legenda"];

$operacao = $conexao->prepare("UPDATE publicacao_instagram SET descricao='Teste de gravação via PHP' WHERE id_publicInsta=$id_public "); 
$operacao->execute();
echo "Sucesso";

?>