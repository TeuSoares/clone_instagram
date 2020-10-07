<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");
date_default_timezone_set('America/Sao_Paulo');

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$id_usuario = $_POST['id_usuario'];
$id_perfil = $_POST['id_perfil'];
$conversa = $_POST['conversa'];
$data = date("Y-m-d");
$hora = date("H:i:s", time());

$SQLinsert = "INSERT INTO chat(fk_id_usuario,fk_id_perfil,conversa,data,hora,enviou,recebeu) VALUES(?,?,?,?,?,?,?) ";
$operacao = $conexao->prepare($SQLinsert);
$inserir = $operacao->execute(array($id_usuario,$id_perfil,$conversa,$data,$hora,$id_usuario,$id_perfil));

$operacao2 = $conexao->prepare("UPDATE usuarios_instagram SET fk_usuario=$id_usuario WHERE id_usuario=$id_usuario "); 
$operacao2->execute();

?>