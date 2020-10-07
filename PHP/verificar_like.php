<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$id_usuario = $_POST["id_usuario"];

$operacao = $conexao->prepare("SELECT id_publicInsta,usuario_like FROM curtidas 
INNER JOIN publicacao_instagram
ON curtidas.fk_id_publicacao = id_publicInsta
WHERE curtidas.fk_id_usuario = 1"); 
$operacao->execute();

while($resultado = $operacao->fetch(PDO::FETCH_ASSOC)){
    $resposta[] = array(
        'id_publicInsta'=>$resultado['id_publicInsta'],
        'usuario_like'=>$resultado['usuario_like']
    );
}

echo json_encode($resposta);

?>