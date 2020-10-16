<?php
header("Access-Control-Allow-Origin:*");
date_default_timezone_set('America/Sao_Paulo');

// Incluir conexao
include ("funcoes.php");

$id_usuario = $_POST["id_usuario"];
$data = date("Y-m-d");

$result = "";

$sql = "SELECT fk_id_usuario,tipoPublicacao,dataPublicacao FROM publicacao_instagram WHERE fk_id_usuario = $id_usuario and dataPublicacao = '$data'";
$resultado = $conexao->query($sql);
while($linha = mysqli_fetch_array($resultado)){
    $result = $linha["fk_id_usuario"];
}

echo "$result|";

?>