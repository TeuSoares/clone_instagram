<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

// $email = "mateussoas@hotmail.com";
// $senha = "123456";

$email = $_POST['email'];
$senha = MD5($_POST['senha']);

$operacao = $conexao->prepare("SELECT * from usuarios_instagram WHERE (email = '$email' or nome = '$email') and senha='$senha' "); 
$operacao->execute();
$resultado = $operacao->rowCount();

if($resultado == 0){
    $resposta = array('resultado'=>'0');
}else{
    // $resposta = array('resultado'=>'Usuário cadastrado');
    $dados = $operacao->fetch(PDO::FETCH_ASSOC);
    $resposta = array(
        'id_usuario'=>$dados['id_usuario'],
        'nome'=>$dados['nome'],
        'email'=>$dados['email']
    );
}

//echo $resultado;
echo json_encode($resposta);
?>