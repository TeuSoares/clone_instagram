<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");
date_default_timezone_set('America/Sao_Paulo');

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$id_usuario = $_POST["id_usuario"];
$id_perfil = $_POST["id_perfil"];
$resposta_orcamento = $_POST["resposta_orcamento"];
$id_trabalho = $_POST["id_trabalho"];
$situacao = "Aguardando";
$data = date("Y-m-d");

$SQL = "INSERT INTO orcamento_realizado (fk_id_usuario,fk_id_profissional,orcamento,data,visualizacaoCliente,id_trabalho,situacao) VALUES (?,?,?,?,?,?,?) ";
$operacao = $conexao->prepare($SQL);
$inserir = $operacao->execute(array($id_perfil,$id_usuario,$resposta_orcamento,$data,$id_perfil,$id_trabalho,$situacao));

$operacao2 = $conexao->prepare("UPDATE orcamento_solicitadocliente SET andamento='Respondido' WHERE id_orcamentoCliente = $id_trabalho and fk_id_profissional = $id_usuario");
$operacao2->execute();
?>