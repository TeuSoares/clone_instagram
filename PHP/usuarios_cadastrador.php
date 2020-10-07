<?php
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");

$sql = "SELECT COUNT(id_usuario) as usuarios_cadastrados FROM usuarios_instagram";
$resultado = $conexao->query($sql);
while($linha = mysqli_fetch_array($resultado)){
    $usuarios_cadastrados = $linha["usuarios_cadastrados"];
}

echo $usuarios_cadastrados;

?>