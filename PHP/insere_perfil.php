<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$nomeFoto = urldecode($_FILES["file"]["name"]);
$nome_c = $_POST["value1"];
$user = $_POST["value2"];
$email_c = $_POST["value3"];
$bio = $_POST["value4"];
$id_usuario = $_POST["value5"];
$celular = $_POST["value6"];

move_uploaded_file($_FILES["file"]["tmp_name"],"../php/uploads/".$nomeFoto);

$operacao = $conexao->prepare("UPDATE usuarios_instagram SET nome='$nome_c',email='$email_c',celular='$celular',bio='$bio',imagePerfil='$nomeFoto',nomeUser='$user' WHERE id_usuario=$id_usuario "); 
$operacao->execute();

$operacao2 = $conexao->prepare("UPDATE curtidas SET usuario_like='$nome_c' WHERE fk_id_usuario=$id_usuario "); 
$operacao2->execute();

?>