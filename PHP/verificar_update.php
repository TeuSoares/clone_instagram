<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$nome = $_POST['nome'];
$email = $_POST['email'];
$usuario = $_POST['usuario'];
$email_instagram = $_POST['email_instagram'];

// Verificando se email já existe
$operacao = $conexao->prepare("SELECT email from usuarios_instagram WHERE email = '$email' "); 
$operacao->execute();
$resultado = $operacao->rowCount();

$operacao2 = $conexao->prepare("SELECT nome from usuarios_instagram WHERE nome = '$nome' "); 
$operacao2->execute();
$resultado2 = $operacao2->rowCount();

if($email == $email_instagram and $resultado2 == 0){
    echo "gravar1";
}else if($nome == $usuario and $resultado == 0){
	echo "gravar2";
}else if($resultado > 0 and $resultado2 > 0){
    echo "existeAmbos";
}else if($resultado2 > 0){
    echo "existeUser";
}else if($resultado > 0){
    echo "existe";
}else{
    echo "gravar";
}

?>