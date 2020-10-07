<?php

header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");

$id_public = $_POST["id_public"];
$id_usuario = $_POST["id_usuario"];

$lista = "";
$resultFK = "";

$sql = "SELECT publicacao_instagram.id_publicInsta,usuarios_instagram.nome,comentarios.comentario,usuarios_instagram.imagePerfil,usuarios_instagram.id_usuario,id_comentario,comentarios.fk_id_usuario
FROM publicacao_instagram
INNER JOIN comentarios
ON comentarios.fk_id_publicacao = id_publicInsta
INNER JOIN usuarios_instagram
ON comentarios.fk_id_usuario = id_usuario
WHERE id_publicInsta=$id_public
ORDER BY id_comentario ASC";
$resultado = $conexao->query($sql);

while($registro = mysqli_fetch_array($resultado)){
    $nome = $registro["nome"];
    $comentario = $registro["comentario"];
	$imagePerfil = $registro["imagePerfil"];
	$id_usuario = $registro["id_usuario"];
	$id_comentario = $registro["id_comentario"];
	$fk_id_usuario = $registro["fk_id_usuario"];

    $lista.="
        <li>
			<div class='item-link item-content setIdComentario' data-comentario='$id_comentario'>
				<div class='item-media bg-black'>
					<a href='/perfil2/' class='verComent' data='$id_usuario'>
						<div class='icon-chat'>
							<img src='https://www.limeiraweb.com.br/mateus/php/uploads/$imagePerfil'>
						</div>
					</a>
				</div>
				<div class='item-inner bg-black'>
					<div class='item-title'>
						<a href='/perfil2/' class='verComent' data='$id_usuario'>
							$nome
						</a>
					</div>
					<div class='item-text'>$comentario</div>
				</div>	
			</div>
        </li>
    ";

}

echo $lista;
?>
