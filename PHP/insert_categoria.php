<?php
header("Content-type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$categoria = $_POST["categoria"];

$SQL = "INSERT INTO perfil_profissional (categoria) VALUES (?) ";
$operacao = $conexao->prepare($SQL);
$inserir = $operacao->execute(array($categoria));
?>