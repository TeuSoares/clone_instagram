<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$id_publicacao = $_POST["id_publicacao"];

$operacao = $conexao->prepare("SELECT image FROM publicacao WHERE id_publicacao = '$id_publicacao' "); 
$operacao->execute();
$resultado = $operacao->fetch(PDO::FETCH_ASSOC);

$image = $resultado['image'];
unlink("../../mateus/php/uploads/".$image);

$SQLdelete = $conexao->query("DELETE FROM publicacao WHERE id_publicacao = '$id_publicacao' ");
echo "Sucesso";

?>