<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$nomeFoto = urldecode($_FILES["file"]["name"]);
$nome = $_POST["value1"];
$user = $_POST["value2"];
$email = $_POST["value3"];
$bio = $_POST["value4"];
$id_usuario = $_POST["value5"];

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
    move_uploaded_file($_FILES["file"]["tmp_name"],"../php/uploads/".$nomeFoto);

    $operacao = $conexao->prepare("UPDATE usuarios_instagram SET nome='$nome',email='$email',bio='$bio',imagePerfil='$nomeFoto',nomeUser='$user' WHERE id_usuario=$id_usuario "); 
    $operacao->execute();

    echo "Cadastrado";
}

?>