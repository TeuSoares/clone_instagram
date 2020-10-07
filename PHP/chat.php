<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$id_usuario = $_POST["id_usuario"];
$id_perfil = $_POST["id_perfil"];

$operacao = $conexao->prepare("SELECT usuarios_instagram.nome,usuarios_instagram.imagePerfil,chat.*,
CONCAT(DAY(data), ' de ' ,ELT(MONTH(data), 'Jan', 'Fev',
'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Agos', 
'Set', 'Out', 'Nov', 'Dez'), ' às ', hora) as dataFormat
 FROM chat
INNER JOIN usuarios_instagram
ON chat.enviou = id_usuario
WHERE fk_id_usuario = $id_usuario and fk_id_perfil = $id_perfil"); 
$operacao->execute();

while($resultado = $operacao->fetch(PDO::FETCH_ASSOC)){
    $resposta[] = array(
        'conversa'=>$resultado['conversa'],
        'hora'=>$resultado['hora'],
        'dataFormat'=>$resultado['dataFormat'],
        'nome'=>$resultado['nome'],
		'fk_id_usuario'=>$resultado['fk_id_usuario'],
		'fk_id_perfil'=>$resultado['fk_id_perfil'],
		'enviou'=>$resultado['enviou'],
		'recebeu'=>$resultado['recebeu'],
		'imagePerfil'=>$resultado['imagePerfil']
    );
}

echo json_encode($resposta);
?>