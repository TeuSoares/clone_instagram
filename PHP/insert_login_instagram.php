<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = MD5($_POST['senha']);

// Verificando se email já existe
$operacao = $conexao->prepare("SELECT email from usuarios_instagram WHERE email = '$email' "); 
$operacao->execute();
$resultado = $operacao->rowCount();

$operacao2 = $conexao->prepare("SELECT nome from usuarios_instagram WHERE nome = '$nome' "); 
$operacao2->execute();
$resultado2 = $operacao2->rowCount();

if($resultado > 0 and $resultado2 > 0){
    echo "existeAmbos";
}else if($resultado2 > 0){
    echo "existeUser";
}else if($resultado > 0){
    echo "existe";
}else{
    $SQLinsert = "INSERT INTO usuarios_instagram(nome,email,senha) VALUES(?,?,?) ";
    $operacao = $conexao->prepare($SQLinsert);
    $inserir = $operacao->execute(array($nome,$email,$senha));

    echo "Cadastrado";
}

// echo "Sucesso";

// echo $inserir;

// echo json_encode($resposta);
?>