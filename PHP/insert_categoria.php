<?php
header("Content-type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$categoria = $_POST["categoria"];
$id_usuario = $_POST["id_usuario"];

$SQL = "INSERT INTO perfil_profissional (fk_id_usuario,categoria) VALUES (?,?) ";
$operacao = $conexao->prepare($SQL);
$inserir = $operacao->execute(array($id_usuario,$categoria));

$operacao2 = $conexao->prepare("UPDATE usuarios_instagram SET tipoPerfil='profissional' WHERE id_usuario=$id_usuario "); 
$operacao2->execute();
?>