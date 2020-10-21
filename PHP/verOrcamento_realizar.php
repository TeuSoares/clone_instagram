<?php

header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");

$id_usuario = $_POST["id_usuario"];

$lista = "";
$lista1 = "";
$lista2 = "";
$lista3 = "";
$data_format = "";
$data_formatNova = "";

$sql = "SELECT * FROM orcamento_solicitadocliente 
INNER JOIN usuarios_instagram
ON orcamento_solicitadocliente.fk_id_usuario = id_usuario
WHERE fk_id_profissional = $id_usuario and andamento = 'Esperando'";
$resultado = $conexao->query($sql);

while($registro = mysqli_fetch_array($resultado)){
    $nome = $registro["nome"];
	$imagePerfil = $registro["imagePerfil"];
	$data = $registro["data"];
	$trabalho_solicitado = $registro["trabalho_solicitado"];
    $visualizacao = $registro["visualizacaoProfissional"];
    $fk_id_usuario = $registro["fk_id_usuario"];
    $orcamentoCliente = $registro["id_orcamentoCliente"];
    
    $data_format = explode('-', $data);
    $data_formatNova = $data_format[2].'/'.$data_format[1].'/'.$data_format[0];

    $lista.="
        <li class='recebe-background'>
            <div class='item-link item-content setIdComentario fkUser'>
                <div class='item-media bg-black'>
                    <a href='#' class='imgPerfil' data-usuario='$fk_id_usuario'>
                        <div class='icon-chat'>
                            <img src='https://www.limeiraweb.com.br/mateus/php/uploads/$imagePerfil'>
                        </div>
                    </a>
                </div>
				<div class='item-inner bg-black'>
					<a href='/orcamento_cliente/' class='verTrabalho_socilitado' data-trabalho='$orcamentoCliente' data-cliente='$fk_id_usuario'>
						<div class='item-title black-font'>
							$nome
							<em class='data-comentario'>$data_formatNova</em>
						</div>
						<div class='item-text verOrcamento'>$trabalho_solicitado</div>
					</a>
				</div>	
            </div>
        </li>
    ";

}

$sq1 = "SELECT * FROM orcamento_solicitadocliente 
INNER JOIN usuarios_instagram
ON orcamento_solicitadocliente.fk_id_usuario = id_usuario
INNER JOIN orcamento_realizado
ON orcamento_realizado.id_trabalho = id_orcamentoCliente
WHERE orcamento_solicitadocliente.fk_id_profissional = $id_usuario and situacao = 'Aguardando'";
$resultado1 = $conexao->query($sq1);

while($registr1 = mysqli_fetch_array($resultado1)){
    $nome = $registr1["nome"];
	$imagePerfil = $registr1["imagePerfil"];
	$data = $registr1["data"];
	$trabalho_solicitado = $registr1["trabalho_solicitado"];
    $visualizacao = $registr1["visualizacaoProfissional"];
    $fk_id_usuario = $registr1["fk_id_usuario"];
    $orcamentoCliente = $registr1["id_orcamentoCliente"];
    
    $data_format = explode('-', $data);
    $data_formatNova = $data_format[2].'/'.$data_format[1].'/'.$data_format[0];

    $lista1.="
        <li class='recebe-background-aguardando'>
            <div class='item-link item-content setIdComentario fkUser'>
                <div class='item-media bg-black'>
                    <a href='#' class='imgPerfil' data-usuario='$fk_id_usuario'>
                        <div class='icon-chat'>
                            <img src='https://www.limeiraweb.com.br/mateus/php/uploads/$imagePerfil'>
                        </div>
                    </a>
                </div>
				<div class='item-inner bg-black'>
					<a href='/orcamento_cliente/' class='verTrabalho_socilitado' data-trabalho='$orcamentoCliente' data-cliente='$fk_id_usuario'>
						<div class='item-title'>
							$nome
							<em class='data-comentario'>$data_formatNova</em>
						</div>
						<div class='item-text verOrcamento'>$trabalho_solicitado</div>
					</a>
				</div>	
            </div>
        </li>
    ";

}

$sq2 = "SELECT * FROM orcamento_solicitadocliente 
INNER JOIN usuarios_instagram
ON orcamento_solicitadocliente.fk_id_usuario = id_usuario
INNER JOIN orcamento_realizado
ON orcamento_realizado.id_trabalho = id_orcamentoCliente
WHERE orcamento_solicitadocliente.fk_id_profissional = $id_usuario and situacao = 'Interesse'";
$resultado2 = $conexao->query($sq2);

while($registr2 = mysqli_fetch_array($resultado2)){
    $nome = $registr2["nome"];
	$imagePerfil = $registr2["imagePerfil"];
	$data = $registr2["data"];
	$trabalho_solicitado = $registr2["trabalho_solicitado"];
    $visualizacao = $registr2["visualizacaoProfissional"];
    $fk_id_usuario = $registr2["fk_id_usuario"];
    $orcamentoCliente = $registr2["id_orcamentoCliente"];
    
    $data_format = explode('-', $data);
    $data_formatNova = $data_format[2].'/'.$data_format[1].'/'.$data_format[0];

    $lista2.="
        <li class='recebe-background-interesse'>
            <div class='item-link item-content setIdComentario fkUser'>
                <div class='item-media bg-black'>
                    <a href='#' class='imgPerfil' data-usuario='$fk_id_usuario'>
                        <div class='icon-chat'>
                            <img src='https://www.limeiraweb.com.br/mateus/php/uploads/$imagePerfil'>
                        </div>
                    </a>
                </div>
				<div class='item-inner bg-black'>
					<a href='/orcamento_cliente/' class='verTrabalho_socilitado' data-trabalho='$orcamentoCliente' data-cliente='$fk_id_usuario'>
						<div class='item-title'>
							$nome
							<em class='data-comentario'>$data_formatNova</em>
						</div>
						<div class='item-text verOrcamento'>$trabalho_solicitado</div>
					</a>
				</div>	
            </div>
        </li>
    ";

}

$sq3 = "SELECT * FROM orcamento_solicitadocliente 
INNER JOIN usuarios_instagram
ON orcamento_solicitadocliente.fk_id_usuario = id_usuario
INNER JOIN orcamento_realizado
ON orcamento_realizado.id_trabalho = id_orcamentoCliente
WHERE orcamento_solicitadocliente.fk_id_profissional = $id_usuario and situacao = 'Recusado'";
$resultado3 = $conexao->query($sq3);

while($registr3 = mysqli_fetch_array($resultado3)){
    $nome = $registr3["nome"];
	$imagePerfil = $registr3["imagePerfil"];
	$data = $registr3["data"];
	$trabalho_solicitado = $registr3["trabalho_solicitado"];
    $visualizacao = $registr3["visualizacaoProfissional"];
    $fk_id_usuario = $registr3["fk_id_usuario"];
    $orcamentoCliente = $registr3["id_orcamentoCliente"];
    
    $data_format = explode('-', $data);
    $data_formatNova = $data_format[2].'/'.$data_format[1].'/'.$data_format[0];

    $lista3.="
        <li class='recebe-background-recusado'>
            <div class='item-link item-content setIdComentario fkUser'>
                <div class='item-media bg-black'>
                    <a href='#' class='imgPerfil' data-usuario='$fk_id_usuario'>
                        <div class='icon-chat'>
                            <img src='https://www.limeiraweb.com.br/mateus/php/uploads/$imagePerfil'>
                        </div>
                    </a>
                </div>
				<div class='item-inner bg-black'>
					<a href='/orcamento_cliente/' class='verTrabalho_socilitado' data-trabalho='$orcamentoCliente' data-cliente='$fk_id_usuario'>
						<div class='item-title'>
							$nome
							<em class='data-comentario'>$data_formatNova</em>
						</div>
						<div class='item-text verOrcamento'>$trabalho_solicitado</div>
					</a>
				</div>	
            </div>
        </li>
    ";

}

echo "$lista|$lista1|$lista2|$lista3";
?>
