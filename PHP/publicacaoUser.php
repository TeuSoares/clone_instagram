<?php
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");

$id_public = $_POST["id_public"];

$result = "";
$sql = "SELECT
publicacao_instagram.*,usuarios_instagram.*,
COUNT(comentario) AS quantidade
FROM publicacao_instagram 
LEFT JOIN comentarios
ON comentarios.fk_id_publicacao = id_publicInsta
INNER JOIN usuarios_instagram
ON publicacao_instagram.fk_id_usuario = id_usuario
WHERE publicacao_instagram.id_publicInsta = 17
GROUP BY id_publicInsta"; 
$resultado = $conexao->query($sql);

while($registro = mysqli_fetch_array($resultado)){

    $id_publicInsta = $registro["id_publicInsta"];
    $nome = $registro["nome"];
    $quantidade = $registro["quantidade"];
    $image = $registro["imagem"];
    $descricao = $registro["descricao"];
    $fk_id_usuario = $registro["fk_id_usuario"];
    $imagePerfil = $registro["imagePerfil"];
    $data = $registro["dataPublicacao"];

    $result ="$nome|$quantidade|$image|$descricao|$fk_id_usuario|$imagePerfil|$data|$id_publicInsta";

}

echo $result;
?>