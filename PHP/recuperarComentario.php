<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");

$id_comentario = $_POST["id_comentario"]; 
$id_usuario = $_POST["id_usuario"];

$sql = "SELECT comentario FROM comentarios WHERE fk_id_usuario=$id_usuario and id_comentario=$id_comentario";
$resultado = $conexao->query($sql);
while($linha = mysqli_fetch_array($resultado)){
    $comentario = $linha["comentario"];
}

echo $comentario;

?>