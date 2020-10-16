<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");
date_default_timezone_set('America/Sao_Paulo');

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$nomeFoto = urldecode($_FILES["file"]["name"]);
$legenda = $_POST["value1"];
$id_usuario = $_POST["value2"];
$data = date("Y-m-d");
$tipoPublicacao = "anuncio";

move_uploaded_file($_FILES["file"]["tmp_name"],"../php/uploads/".$nomeFoto);

$SQL = "INSERT INTO publicacao_instagram (fk_id_usuario,descricao,dataPublicacao,imagem,tipoPublicacao) VALUES (?,?,?,?,?) ";
$operacao = $conexao->prepare($SQL);
$inserir = $operacao->execute(array($id_usuario,$legenda,$data,$nomeFoto,$tipoPublicacao));
?>