<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$id_comentario = $_POST["id_comentario"]; 
$id_usuario = $_POST["id_usuario"];

$SQLdelete = $conexao->query("DELETE FROM comentarios WHERE id_comentario = $id_comentario and fk_id_usuario = $id_usuario ");
echo "Sucesso";

?>