<?php
header("Access-Control-Allow-Origin:*");
date_default_timezone_set('America/Sao_Paulo');

// Incluir conexao
include ("funcoes.php");

$id_usuario = $_POST["id_usuario"];
$data = date("Y-m-d");

$quantidadeVisitantes = "";
$sql = "";
$sql = "SELECT COUNT(fk_id_usuario) as quantidadeVisitantes FROM visitas_perfil WHERE fk_id_perfil=$id_usuario and data='$data' ";
$resultado = $conexao->query($sql);
while($linha = mysqli_fetch_array($resultado)){
    $quantidadeVisitantes = $linha["quantidadeVisitantes"];
}

echo "$quantidadeVisitantes|$sql";

?>