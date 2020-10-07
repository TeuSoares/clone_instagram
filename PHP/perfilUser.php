<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$id_usuario = $_POST["id_usuario"];

$lista = "";
$sql = "SELECT * FROM usuarios_instagram WHERE id_usuario=$id_usuario";
$resultado = $conexao->query($sql);
while($linha = mysqli_fetch_array($resultado)){
    $nome = $linha["nome"];
    $user = $linha["apelido"];
    $bio = $linha["bio"];
    $email = $linha["email"];
    $imagem = $linha["imagePerfil"];

    $verImage = "https://www.limeiraweb.com.br/mateus/php/uploads/$imagem";

    $bio = str_replace("<br>"," ",$bio);

    $lista = "$nome|$user|$email|$bio|$verImage";
}

echo $lista;

?>