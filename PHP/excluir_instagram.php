<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$id_public = $_POST["id_public"]; 

$operacao = $conexao->prepare("SELECT imagem FROM publicacao_instagram WHERE id_publicInsta = $id_public "); 
$operacao->execute();
$resultado = $operacao->fetch(PDO::FETCH_ASSOC);

$image = $resultado['imagem'];
unlink("../../mateus/php/uploads/".$image);

$SQLdelete = $conexao->query("DELETE FROM publicacao_instagram WHERE id_publicInsta = $id_public ");
echo "Sucesso";

?>