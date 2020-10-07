<?php
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");

$id_perfil = $_POST["id_perfil"];
$imageChat = "";
$nome = "";
$lista = "";
$sql = "SELECT nome,imagePerfil FROM usuarios_instagram
WHERE id_usuario = $id_perfil"; 
$resultado = $conexao->query($sql);

while($registro = mysqli_fetch_array($resultado)){

    $nome = $registro["nome"];
    $imagePerfil = $registro["imagePerfil"];

    $imageChat = "https://www.limeiraweb.com.br/mateus/php/uploads/$imagePerfil";

}

echo "$nome|$imageChat";
?>