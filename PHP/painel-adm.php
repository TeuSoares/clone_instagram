<?php

header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");

$lista = "";
$lista2 = "";

$data_format2 = "";
$data_formatNova2 = "";
$sql = "SELECT * FROM suporte
INNER JOIN usuarios_instagram
ON suporte.fk_id_usuario = id_usuario;";
$resultado = $conexao->query($sql);

while($registro = mysqli_fetch_array($resultado)){
    $nome = $registro["nome"];
    $suporte = $registro["problema"];
    $imagePerfil = $registro["imagePerfil"];
    $data = $registro["data"];
    $id_usuario = $registro["fk_id_usuario"];
    
    $data_format2 = explode('-', $data);
    $data_formatNova2 = $data_format2[2].'/'.$data_format2[1].'/'.$data_format2[0];

    $lista.="
        <li>
			<div class='item-link item-content'>
				<div class='item-media bg-black'>
					<a href='/perfil2/' class='verComent setADM' data='$id_usuario'>
						<div class='icon-chat'>
							<img src='https://www.limeiraweb.com.br/mateus/php/uploads/$imagePerfil'>
						</div>
					</a>
				</div>
				<div class='item-inner bg-black'>
					<div class='item-title'>
						<a href='/perfil2/' class='verComent setADM' data='$id_usuario'>
							$nome
                        </a>
                        <em class='data-comentario'>$data_formatNova2</em>
                        <em class='data-comentario'>ID: $id_usuario</em>
					</div>
					<div class='item-text'>$suporte</div>
				</div>	
			</div>
        </li>
    ";

}

$data_format = "";
$data_formatNova = "";
$sql2 = "SELECT * FROM reporte_bug
INNER JOIN usuarios_instagram
ON reporte_bug.fk_id_usuario = id_usuario;";
$resultado2 = $conexao->query($sql2);

while($registro2 = mysqli_fetch_array($resultado2)){
    $nome = $registro2["nome"];
    $problema = $registro2["bug"];
    $imagePerfil = $registro2["imagePerfil"];
    $data = $registro2["data"];
    $id_usuario = $registro2["fk_id_usuario"];
    
    $data_format = explode('-', $data);
    $data_formatNova = $data_format[2].'/'.$data_format[1].'/'.$data_format[0];

    $lista2.="
        <li>
			<div class='item-link item-content'>
				<div class='item-media bg-black'>
					<a href='/perfil2/' class='verComent setADM' data='$id_usuario'>
						<div class='icon-chat'>
							<img src='https://www.limeiraweb.com.br/mateus/php/uploads/$imagePerfil'>
						</div>
					</a>
				</div>
				<div class='item-inner bg-black'>
					<div class='item-title'>
						<a href='/perfil2/' class='verComent setADM' data='$id_usuario'>
							$nome
                        </a>
                        <em class='data-comentario'>$data_formatNova</em>
                        <em class='data-comentario'>ID: $id_usuario</em>
					</div>
					<div class='item-text'>$problema</div>
				</div>	
			</div>
        </li>
    ";

}

echo "$lista|$lista2";
?>