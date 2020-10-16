<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$id_anuncio = $_POST["id_anuncio"]; 

$operacao = $conexao->prepare("SELECT imagem FROM publicacao_instagram WHERE id_publicInsta = $id_anuncio "); 
$operacao->execute();
$resultado = $operacao->fetch(PDO::FETCH_ASSOC);

$image = $resultado['imagem'];
unlink("../../mateus/php/uploads/".$image);

$SQLdelete = $conexao->query("DELETE FROM publicacao_instagram WHERE id_publicInsta = $id_anuncio ");
echo "Sucesso";

?>