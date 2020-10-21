<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");
date_default_timezone_set('America/Sao_Paulo');

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$id_public = $_POST["id_public"];   
$id_usuario = $_POST["id_usuario"];
$comentario = $_POST["comentario"];
$hora = date("H:i:s", time());

$operacao = $conexao->prepare("SELECT comentario from comentarios 
WHERE comentario = '$comentario' and fk_id_publicacao = $id_public"); 
$operacao->execute();
$resultado = $operacao->rowCount();

$mensagem = "";
if($resultado > 0){
    $SQL = "INSERT INTO comentarios (fk_id_usuario,fk_id_publicacao,comentario,hora) VALUES ($id_usuario,$id_public,'$comentario.','$hora') ";
    $mensagem = "Comentário realizado com sucesso!!";
}else{
    $SQL = "INSERT INTO comentarios (fk_id_usuario,fk_id_publicacao,comentario,hora) VALUES ($id_usuario,$id_public,'$comentario','$hora') ";
    $mensagem = "Comentário realizado com sucesso!!";
}

if($conexao->query($SQL)){
    echo $mensagem;
}else{
    //echo "Não foi possível realizar seu comentário. Tente novamente mais tarde!!";
    echo $mensagem;
}

?>