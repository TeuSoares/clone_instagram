<?php

header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");

$id_trabalho = $_POST["id_trabalho"];
$id_usuario = $_POST["id_usuario"];

$lista = "";
$data_format = "";
$data_formatNova = "";

$sql = "SELECT * FROM orcamento_solicitadocliente 
INNER JOIN usuarios_instagram
ON orcamento_solicitadocliente.fk_id_usuario = id_usuario
WHERE id_orcamentoCliente = $id_trabalho";
$resultado = $conexao->query($sql);

while($registro = mysqli_fetch_array($resultado)){
    $nome = $registro["nome"];
	$imagePerfil = $registro["imagePerfil"];
	$data = $registro["data"];
	$trabalho_solicitado = $registro["trabalho_solicitado"];
    $visualizacao = $registro["visualizacaoProfissional"];
    $fk_id_usuario = $registro["fk_id_usuario"];
    $orcamentoCliente = $registro["id_orcamentoCliente"];
    $celular = $registro["celular"];
    $email = $registro["email"];
    
    $data_format = explode('-', $data);
    $data_formatNova = $data_format[2].'/'.$data_format[1].'/'.$data_format[0];

    $lista.="
            <div class='display-flex justify-content-space-between'>
            <div class='card-header'>
                <div class='demo-facebook-avatar'><img src='https://www.limeiraweb.com.br/mateus/php/uploads/$imagePerfil' width='34' height='34'/></div>
                <div class='demo-facebook-name'>
                    $nome 
                </div>
                <div class='demo-facebook-date'>$data_formatNova</div>
                
            </div>
            <div class='margin-top margin-right'>
                <a class='list-button item-link text-align-center sheet-open' href='#' data-sheet='.my-sheet-swipe-to-step'><i class='f7-icons'>info_circle_fill</i></a>
                <a class='list-button item-link text-align-center chat_cliente' href='/chat/'><i class='f7-icons'>chat_bubble_fill</i></a>
            </div>
        </div>
        <div class='card-content-padding'>
            <p>
                $trabalho_solicitado
            </p>
        </div>
        <div class='sheet-modal my-sheet-swipe-to-step' style='height:auto;'>
            <div class='sheet-modal-inner'>
            <div class='sheet-modal-swipe-step'>
                <div class='list media-list'>
                    <ul>
                    <h2 class='margin-left'>Informações de contato</h2>
                    <li>
                        <div class='item-content'>
                        <div class='item-media'><i class='f7-icons'>device_phone_portrait</i></div>
                        <div class='item-inner'>
                            <div class='item-title-row'>
                            <div class='item-title'>Celular</div>
                            </div>
                            <div class='item-subtitle'>$celular</div>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div class='item-content'>
                        <div class='item-media'><i class='f7-icons'>envelope_fill</i></div>
                        <div class='item-inner'>
                            <div class='item-title-row'>
                            <div class='item-title'>E-mail</div>
                            </div>
                            <div class='item-subtitle'>$email</div>
                        </div>
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    ";

}

$fk_id_profissional2 = "";
$fk_id_usuario2 = "";
$sql2 = "SELECT * FROM orcamento_solicitadocliente 
INNER JOIN usuarios_instagram
ON orcamento_solicitadocliente.fk_id_usuario = id_usuario
INNER JOIN orcamento_realizado
ON orcamento_realizado.fk_id_usuario = id_usuario
WHERE id_orcamentoCliente = $id_trabalho and orcamento_realizado.fk_id_profissional = $id_usuario and id_trabalho = $id_trabalho";
$resultado2 = $conexao->query($sql2);

while($registro2 = mysqli_fetch_array($resultado2)){
    $fk_id_profissional2 = $registro2["fk_id_profissional"];
    $fk_id_usuario2 = $registro2["fk_id_usuario"];
}

echo "$lista|$fk_id_profissional2|$fk_id_usuario2";
?>