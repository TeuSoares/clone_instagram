<?php

header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");

$id_usuario = $_POST["id_usuario"];

$lista = "";
$data_format = "";
$data_formatNova = "";

$sql = "SELECT * FROM publicacao_instagram WHERE fk_id_usuario = $id_usuario  and tipoPublicacao = 'anuncio' ORDER BY id_publicInsta DESC";
$resultado = $conexao->query($sql);

while($registro = mysqli_fetch_array($resultado)){
    $id_publicInsta = $registro["id_publicInsta"];
	$imagem = $registro["imagem"];
	$data = $registro["dataPublicacao"];
	$descricao = $registro["descricao"];
    $fk_id_usuario = $registro["fk_id_usuario"];
    
    $data_format = explode('-', $data);
    $data_formatNova = $data_format[2].'/'.$data_format[1].'/'.$data_format[0];

    $lista.="
        <li>
            <div class='item-content'>
            <div class='item-media fotoPublic-atividade imgAnuncio' data='$id_publicInsta'><a href='/public/'><img src='https://www.limeiraweb.com.br/mateus/php/uploads/$imagem' id='imgPublic' width='44'/></a></div>
            <div class='item-inner'>
                <div class='item-title-row'>
                    <div class='item-title'>$data_formatNova</div>
                    <div class='item-title'>
                    <i class='f7-icons text-color-green repostarAnuncio' data-confirm='$id_publicInsta' onclick='repostarAnuncio();'>checkmark_alt_circle_fill</i>
                    <i class='f7-icons text-color-red excluirAnuncio' data-excluir='$id_publicInsta' onclick='excluirAnuncio();'>xmark_circle_fill</i>
                    </div>
                </div>
                <div class='item-subtitle'>$descricao</div>
            </div>
            </div>
        </li>
    ";

}

echo $lista;
?>
