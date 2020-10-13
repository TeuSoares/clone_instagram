<?php

header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");

$id_perfil = $_POST["id_perfil"];

$lista = "";
$dataNova = "";

$sql = "SELECT * FROM feedback_profissional
INNER JOIN usuarios_instagram
ON feedback_profissional.fk_id_perfil = id_usuario
WHERE fk_id_usuario = $id_perfil";
$resultado = $conexao->query($sql);

while($registro = mysqli_fetch_array($resultado)){
    $nome = $registro["nome"];
    $comentario = $registro["comentario"];
	$imagePerfil = $registro["imagePerfil"];
	$id_usuario = $registro["id_usuario"];
	$id_comentario = $registro["id_feedback"];
	$fk_id_usuario = $registro["fk_id_usuario"];
	$hora = $registro["hora"];
	
	$horamensagem = date('H:i', strtotime($hora));
	
    $lista.="
        <li class='recebe-background'>
			<div class='item-link item-content setIdComentario fkUser' data-comentario='$id_comentario' data-fkuser='$fk_id_usuario'>
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
						<em class='data-comentario'>$horamensagem</em>
					</div>
					<div class='item-text verComentario'>$comentario</div>
				</div>	
			</div>
        </li>
    ";

}

echo $lista;
?>