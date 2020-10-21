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

$quantidadeSeguidores = "";
$sql2 = "SELECT COUNT(seguindo) as quantidadeSeguidores FROM seguidores WHERE seguindo = $id_usuario and data='$data' ";
$resultado2 = $conexao->query($sql2);
while($linha2 = mysqli_fetch_array($resultado2)){
    $quantidadeSeguidores = $linha2["quantidadeSeguidores"];
}

$visitasSemana = "";
$sql3 = "SELECT COUNT(fk_id_perfil) as visitasSemana
FROM visitas_perfil
WHERE YEARWEEK(data, 1) = YEARWEEK(NOW(), 1) and fk_id_perfil = $id_usuario ";
$resultado3 = $conexao->query($sql3);
while($linha3 = mysqli_fetch_array($resultado3)){
    $visitasSemana = $linha3["visitasSemana"];
}

$seguidoresSemana = "";
$sql4 = "SELECT COUNT(seguindo) as seguidoresSemana
FROM seguidores
WHERE YEARWEEK(data, 1) = YEARWEEK(NOW(), 1) and seguindo = $id_usuario ";
$resultado4 = $conexao->query($sql4);
while($linha4 = mysqli_fetch_array($resultado4)){
    $seguidoresSemana = $linha4["seguidoresSemana"];
}

$visitasMes = "";
$sql5 = "SELECT COUNT(fk_id_perfil) as visitasMes FROM visitas_perfil WHERE Month(data) = MONTH(now()) and fk_id_perfil = $id_usuario ";
$resultado5 = $conexao->query($sql5);
while($linha5 = mysqli_fetch_array($resultado5)){
    $visitasMes = $linha5["visitasMes"];
}

$seguidoresMes = "";
$sql6 = "SELECT COUNT(seguindo) as seguidoresMes FROM seguidores WHERE Month(data) = MONTH(now()) and seguindo = $id_usuario ";
$resultado6 = $conexao->query($sql6);
while($linha6 = mysqli_fetch_array($resultado6)){
    $seguidoresMes = $linha6["seguidoresMes"];
}

$publicMaisCurtida = "";
$imgPublic = "";
$fk_id_publicacao = "";
$sql7 = "SELECT imagem,fk_id_publicacao,COUNT(fk_id_publicacao) as publicMaisCurtida FROM publicacao_instagram 
INNER JOIN curtidas
ON curtidas.fk_id_publicacao = id_publicInsta
WHERE publicacao_instagram.fk_id_usuario = $id_usuario
GROUP BY (fk_id_publicacao)
ORDER BY publicMaisCurtida DESC
LIMIT 1 ";
$resultado7 = $conexao->query($sql7);
while($linha7 = mysqli_fetch_array($resultado7)){
	$fk_id_publicacao = $linha7["fk_id_publicacao"];
    $publicMaisCurtida = $linha7["publicMaisCurtida"];
	$imagem = $linha7["imagem"];
	
	$imgPublic = "https://www.limeiraweb.com.br/mateus/php/uploads/$imagem";
}

$publicMaisComentario = "";
$imgPublic2 = "";
$fk_id_publicacao2 = "";
$sql8 = "SELECT imagem,fk_id_publicacao,COUNT(fk_id_publicacao) as publicMaisComentario FROM publicacao_instagram 
INNER JOIN comentarios
ON comentarios.fk_id_publicacao = id_publicInsta
WHERE publicacao_instagram.fk_id_usuario = $id_usuario
GROUP BY (fk_id_publicacao)
ORDER BY publicMaisComentario DESC
LIMIT 1 ";
$resultado8 = $conexao->query($sql8);
while($linha8 = mysqli_fetch_array($resultado8)){
	$fk_id_publicacao2 = $linha8["fk_id_publicacao"];
    $publicMaisComentario = $linha8["publicMaisComentario"];
	$imagem2 = $linha8["imagem"];
	
	$imgPublic2 = "https://www.limeiraweb.com.br/mateus/php/uploads/$imagem2";
}

echo "$quantidadeVisitantes|$quantidadeSeguidores|$visitasSemana|$seguidoresSemana|$visitasMes|$seguidoresMes|$publicMaisCurtida|$imgPublic|$publicMaisComentario|$imgPublic2|$fk_id_publicacao|$fk_id_publicacao2";

?>