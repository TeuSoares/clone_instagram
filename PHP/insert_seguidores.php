<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");
date_default_timezone_set('America/Sao_Paulo');

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$id_usuario = $_POST["id_usuario"];
$id_perfil = $_POST["id_perfil"];
$data = date("Y-m-d");

$operacao = $conexao->prepare("SELECT fk_id_usuario,seguindo from seguidores 
WHERE fk_id_usuario = $id_usuario and seguindo = $id_perfil "); 
$operacao->execute();
$resultado = $operacao->rowCount();

$mensagem = "";
if($resultado > 0){
    $SQL = "";
    $mensagem = "Existe";
}else{
    $SQL = "INSERT INTO seguidores (fk_id_usuario,seguindo,data) VALUES (?,?,?) ";
    $operacao = $conexao->prepare($SQL);
    $inserir = $operacao->execute(array($id_usuario,$id_perfil,$data));

    $mensagem = "";
}

if($conexao->query($SQL)){
    echo $mensagem;
}else{
    echo $mensagem;
}

?>