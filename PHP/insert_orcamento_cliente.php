<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");
date_default_timezone_set('America/Sao_Paulo');

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$id_usuario = $_POST["id_usuario"];
$fk_id_profissional = $_POST["id_perfil"];
$trabalho_solicitado = $_POST["trabalho_solicitado"];
$data = date("Y-m-d");

move_uploaded_file($_FILES["file"]["tmp_name"],"../php/uploads/".$nomeFoto);

$SQL = "INSERT INTO orcamento_solicitadocliente (fk_id_usuario,fk_id_profissional,trabalho_solicitado,data,visualizacaoProfissional) VALUES (?,?,?,?,?) ";
$operacao = $conexao->prepare($SQL);
$inserir = $operacao->execute(array($id_usuario,$fk_id_profissional,$trabalho_solicitado,$data,$$fk_id_profissional));
?>