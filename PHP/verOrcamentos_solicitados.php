<?php

header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");

$id_usuario = $_POST["id_usuario"];

$lista = "";
$lista2 = "";
$data_format = "";
$data_formatNova = "";

$sql = "SELECT * FROM orcamento_realizado 
INNER JOIN usuarios_instagram
ON orcamento_realizado.fk_id_profissional = id_usuario
WHERE fk_id_usuario = $id_usuario and visualizacaoCliente = $id_usuario and situacao = 'Aguardando'";
$resultado = $conexao->query($sql);

while($registro = mysqli_fetch_array($resultado)){
    $nome = $registro["nome"];
	$imagePerfil = $registro["imagePerfil"];
	$data = $registro["data"];
	$orcamento = $registro["orcamento"];
    $visualizacao = $registro["visualizacaoCliente"];
    $fk_id_profissional = $registro["fk_id_profissional"];
    $orcamentoPRO = $registro["id_orcamento"];
    
    $data_format = explode('-', $data);
    $data_formatNova = $data_format[2].'/'.$data_format[1].'/'.$data_format[0];

    $lista.="
        <li class='recebe-background'>
            <div class='item-link item-content setIdComentario fkUser'>
                <div class='item-media bg-black'>
                    <a href='#' class='imgPerfil'>
                        <div class='icon-chat'>
                            <img src='https://www.limeiraweb.com.br/mateus/php/uploads/$imagePerfil'>
                        </div>
                    </a>
                </div>
				<div class='item-inner bg-black'>
					<a href='/solitacaoOrcamentos/' class='verOrcamento' data-orcamento='$orcamentoPRO' data-profissional='$fk_id_profissional'>
						<div class='item-title'>
							$nome
							<em class='data-comentario'>$data_formatNova</em>
						</div>
						<div class='item-text verOrcamento'>$orcamento</div>
					</a>
				</div>	
            </div>
        </li>
    ";

}

$sql2 = "SELECT * FROM orcamento_realizado 
INNER JOIN usuarios_instagram
ON orcamento_realizado.fk_id_profissional = id_usuario
WHERE fk_id_usuario = $id_usuario and visualizacaoCliente = $id_usuario and situacao = 'Interesse'";
$resultado2 = $conexao->query($sql2);

while($registro2 = mysqli_fetch_array($resultado2)){
    $nome = $registro2["nome"];
	$imagePerfil = $registro2["imagePerfil"];
	$data = $registro2["data"];
	$orcamento = $registro2["orcamento"];
    $visualizacao = $registro2["visualizacaoCliente"];
    $fk_id_profissional = $registro2["fk_id_profissional"];
    $orcamentoPRO = $registro2["id_orcamento"];
    
    $data_format = explode('-', $data);
    $data_formatNova = $data_format[2].'/'.$data_format[1].'/'.$data_format[0];

    $lista2.="
        <li class='recebe-background'>
            <div class='item-link item-content setIdComentario fkUser'>
                <div class='item-media bg-black'>
                    <a href='#' class='imgPerfil'>
                        <div class='icon-chat'>
                            <img src='https://www.limeiraweb.com.br/mateus/php/uploads/$imagePerfil'>
                        </div>
                    </a>
                </div>
				<div class='item-inner bg-black'>
					<a href='/solitacaoOrcamentos/' class='verOrcamento' data-orcamento='$orcamentoPRO' data-profissional='$fk_id_profissional'>
						<div class='item-title'>
							$nome
							<em class='data-comentario'>$data_formatNova</em>
						</div>
						<div class='item-text verOrcamento'>$orcamento</div>
					</a>
				</div>	
            </div>
        </li>
    ";

}

echo "$lista|$lista2";
?>