<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$id_comentario = $_POST["id_comentario"]; 
$id_usuario = $_POST["id_usuario"];
$comentario = $_POST["comentario"];

$operacao = $conexao->prepare("UPDATE comentarios SET comentario='$comentario' WHERE fk_id_usuario=$id_usuario and id_comentario=$id_comentario "); 
$operacao->execute();
echo "Sucesso";

?>