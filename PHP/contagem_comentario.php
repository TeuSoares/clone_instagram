<?php

header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");

$id_public = $_POST["id_public"];


$sql2 = $conexao->query("SELECT COUNT(comentario) FROM comentarios WHERE fk_id_publicacao = $id_public");

 $row = $sql2->fetch_row();
 $count = 0 + $row[0];

echo $count;
?>

