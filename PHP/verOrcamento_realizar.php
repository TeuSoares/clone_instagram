<?php

header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");

$id_usuario = $_POST["id_usuario"];

$lista = "";
$data_format = "";
$data_formatNova = "";

$sql = "SELECT * FROM orcamento_solicitadocliente 
INNER JOIN usuarios_instagram
ON orcamento_solicitadocliente.fk_id_usuario = id_usuario
WHERE fk_id_profissional = $id_usuario";
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
                    <a href='/perfil2/' class='imgPerfil' data-usuario='$fk_id_usuario'>
                        <div class='icon-chat'>
                            <img src='https://www.limeiraweb.com.br/mateus/php/uploads/$imagePerfil'>
                        </div>
                    </a>
                </div>
                <div class='item-inner bg-black'>
                    <a href='/visualizarOrcamento/' class='verTrabalho_socilitado' data-trabalho='$orcamentoCliente'>
                        <div class='item-title'>
                            <a href='#' class='verComent'>
                                $nome
                            </a>
                            <em class='data-comentario'>$data_formatNova</em>
                        </div>
                        <div class='item-text verOrcamento'>$trabalho_solicitado</div>
                    </a>
                </div>	
            </div>
        </li>
    ";

}

echo $lista;
?>
