<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$operacao = $conexao->prepare("SELECT 
(SELECT usuario_like FROM curtidas WHERE usuario_like = 'teusoares1' LIMIT 1) as teste;
(SELECT
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
GROUP BY id_publicInsta DESC)"); 
$operacao->execute();

while($resultado = $operacao->fetch(PDO::FETCH_ASSOC)){
    $resposta[] = array(
        'id_publicInsta'=>$resultado['id_publicInsta'],
        'descricao'=>$resultado['descricao'],
        'dataFormat'=>$resultado['dataFormat'],
        'imagem'=>$resultado['imagem'],
        'nome'=>$resultado['nome'],
		'fk_id_usuario'=>$resultado['fk_id_usuario'],
		'curtida'=>$resultado['curtida'],
		'usuario_like'=>$resultado['usuario_like'],
		'id_user_like'=>$resultado['id_user_like'],
		'imagePerfil'=>$resultado['imagePerfil'],
		'teste'=>$resultado['teste'],
        'quantidade'=>$resultado['quantidade']
    );
}

echo json_encode($resposta);
 print_r($resposta);
?>
