<?php

header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");

$id_trabalho = $_POST["id_trabalho"];
$id_usuario = $_POST["id_usuario"];

$lista = "";
$data_format = "";
$data_formatNova = "";

$sql = "SELECT * FROM orcamento_realizado 
INNER JOIN usuarios_instagram
ON orcamento_realizado.fk_id_profissional = id_usuario
LEFT JOIN perfil_profissional
ON perfil_profissional.fk_id_usuario = id_usuario
LEFT JOIN cidades
ON cidades.cidade = codigo
WHERE id_orcamento = $id_trabalho";
$resultado = $conexao->query($sql);

while($registro = mysqli_fetch_array($resultado)){
    $nome = $registro["nome"];
	$imagePerfil = $registro["imagePerfil"];
	$data = $registro["data"];
	$orcamento = $registro["orcamento"];
    $visualizacao = $registro["visualizacaoCliente"];
    $fk_id_usuario = $registro["fk_id_usuario"];
    $id_orcamento = $registro["id_orcamento"];
    $celular = $registro["celular"];
    $email = $registro["email"];
    $situacao = $registro["situacao"];
    $categoria = $registro["categoria"];
    $rv = $registro["rua_avenida"];
    $telefone = $registro["telefone"];
    $numero = $registro["numero"];
    $bairro = $registro["bairro"];
    $site = $registro["site"];
    $cidade = $registro["cidade"];
    $uf = $registro["uf"];
    
    $data_format = explode('-', $data);
    $data_formatNova = $data_format[2].'/'.$data_format[1].'/'.$data_format[0];

    $lista.="
            <div class='display-flex justify-content-space-between'>
            <div class='card-header'>
                <div class='demo-facebook-avatar'><img src='https://www.limeiraweb.com.br/mateus/php/uploads/$imagePerfil' width='34' height='34'/></div>
                <div class='demo-facebook-name'>
                    $nome - $data_formatNova
                </div>
                <div class='demo-facebook-date'>Situação: <span class='situacaoOrcamento'>$situacao</span></div>
                
            </div>
            <div class='margin-top margin-right'>
                <a class='list-button item-link text-align-center sheet-open' href='#' data-sheet='.my-sheet-swipe-to-step'><i class='f7-icons'>info_circle_fill</i></a>
                <a class='list-button item-link text-align-center chat_cliente' href='/chat/'><i class='f7-icons'>chat_bubble_fill</i></a>
            </div>
        </div>
        <div class='card-content-padding'>
            <p>
                $orcamento
            </p>
        </div>
        <div class='sheet-modal my-sheet-swipe-to-step' style='height:auto; --f7-sheet-bg-color: #fff;'>
            <div class='sheet-modal-inner'>
                <div class='sheet-modal-swipe-step'>
                <div class='list media-list'>
                    <ul>
                        <h2 class='margin-left'>Informações de contato</h2>
                        <li>
                        <div class='item-content'>
                            <div class='item-media'><i class='f7-icons'>phone_fill</i></div>
                            <div class='item-inner'>
                            <div class='item-title-row'>
                                <div class='item-title'>Telefone</div>
                            </div>
                            <div class='item-subtitle'>$telefone</div>
                            </div>
                        </div>
                        </li>
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
                        <li>
                        <div class='item-content'>
                            <div class='item-media'>
                            <span class='material-icons'>
                                public
                            </span>
                            </div>
                            <div class='item-inner'>
                            <div class='item-title-row'>
                                <div class='item-title'>Site</div>
                            </div>
                            <div class='item-subtitle'><a href='#'>$site</a></div>
                            </div>
                        </div>
                        </li>
                        <li>
                        <div class='item-content'>
                            <div class='item-media'>
                            <i class='f7-icons'>house</i>
                            </div>
                            <div class='item-inner'>
                            <div class='item-title-row'>
                                <div class='item-title'>Endereço</div>
                            </div>
                            <div class='item-subtitle'>Rua/Avenida: $rv</div>
                            <div class='item-subtitle'>Número: $numero</div>
                            <div class='item-subtitle'>Bairro: $bairro</div>
                            <div class='item-subtitle'>Cidade: $cidade/$uf</div>
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
WHERE id_orcamentoCliente = $id_trabalho and orcamento_realizado.fk_id_profissional = $id_usuario";
$resultado2 = $conexao->query($sql2);

while($registro2 = mysqli_fetch_array($resultado2)){
    $fk_id_profissional2 = $registro2["fk_id_profissional"];
    $fk_id_usuario2 = $registro2["fk_id_usuario"];
}

echo "$lista|$fk_id_profissional2|$fk_id_usuario2";
?>
