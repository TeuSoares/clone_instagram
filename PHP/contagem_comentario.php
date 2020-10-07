<?php

header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$operacao = $conexao->prepare("SELECT publicacao_instagram.id_publicInsta,comentarios.comentario FROM publicacao_instagram
INNER JOIN usuarios_instagram
ON publicacao_instagram.fk_id_usuario = id_usuario
LEFT JOIN comentarios
ON comentarios.fk_id_usuario = id_usuario;"); 
$operacao->execute();

while($resultado = $operacao->fetch(PDO::FETCH_ASSOC)){
    $resposta[] = array(
        'id_publicInsta'=>$resultado['id_publicInsta'],
        'descricao'=>$resultado['descricao']
    );
}

echo json_encode($resposta);

$sql2 = $conexao->query("SELECT COUNT(comentario) FROM comentarios WHERE fk_id_publicacao = $id_public");

 $row = $sql2->fetch_row();
 $count = 0 + $row[0];

echo $_COOKIE;
?>
