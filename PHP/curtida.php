<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$id_public = $_POST["id_public"];   
$id_usuario = $_POST["id_usuario"];

$operacao = $conexao->prepare("SELECT fk_id_usuario,fk_id_publicacao from curtidas 
WHERE fk_id_publicacao = $id_public and fk_id_usuario = $id_usuario "); 
$operacao->execute();
$resultado = $operacao->rowCount();

$mensagem = "";
if($resultado > 0){
    $SQL = "";
    $mensagem = "Existe";
}else{
    $SQL = "INSERT INTO curtidas (fk_id_usuario,fk_id_publicacao,curtida) VALUES ($id_usuario,$id_public,1) ";
    $mensagem = "Você acabou de curtir essa publicação";
}

if($conexao->query($SQL)){
    echo $mensagem;
}else{
    echo $mensagem;
}

?>