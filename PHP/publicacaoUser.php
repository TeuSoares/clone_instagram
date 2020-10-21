<?php
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include("funcoes.php");

$id_public = $_POST["id_public"];

$result = "";
$sql = "SELECT
publicacao_instagram.*,usuarios_instagram.*,curtidas.curtida,curtidas.usuario_like,curtidas.fk_id_usuario as id_user_like,
CONCAT(DAY(dataPublicacao), ' de ' ,ELT(MONTH(dataPublicacao), 'Janeiro', 'Fevereiro',
'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 
'Setembro', 'Outubro', 'Novembro', 'Dezembro'), ' de ', YEAR(dataPublicacao)) as dataFormat,
COUNT(DISTINCT comentario) AS quantidade
FROM publicacao_instagram 
LEFT JOIN comentarios
ON comentarios.fk_id_publicacao = id_publicInsta
INNER JOIN usuarios_instagram
ON publicacao_instagram.fk_id_usuario = id_usuario
LEFT JOIN curtidas
ON curtidas.fk_id_publicacao = id_publicInsta
WHERE id_publicInsta = $id_public"; 
$resultado = mysqli_query($conexao,$sql);

while($registro = mysqli_fetch_array($resultado)){

    $id_publicInsta = $registro["id_publicInsta"];
    $nome = $registro["nome"];
    $quantidade = $registro["quantidade"];
    $image = $registro["imagem"];
    $descricao = $registro["descricao"];
    $fk_id_usuario = $registro["fk_id_usuario"];
    $imagePerfil = $registro["imagePerfil"];
    $data = $registro["dataFormat"];
	$id_user_like = $registro["id_user_like"];
	$usuario_like = $registro["usuario_like"];
	$tipoPerfil = $registro["tipoPerfil"];
	$curtida = $registro["curtida"];
	
	$result ="$nome|$quantidade|$image|$descricao|$fk_id_usuario|$imagePerfil|$data|$id_publicInsta|$id_user_like|$usuario_like|$curtida|$tipoPerfil";


}
mysqli_close($conexao);
echo $result;

?>