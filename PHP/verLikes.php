<?php

header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");

$id_public = $_POST["id_public"];

$lista = "";
$number_likes = "";
$verLikes = "";
$perfilPro = "";

$sql = "SELECT publicacao_instagram.id_publicInsta,usuarios_instagram.tipoPerfil,usuarios_instagram.nome,curtidas.curtida,usuarios_instagram.nomeUser,usuarios_instagram.imagePerfil,usuarios_instagram.id_usuario 
FROM publicacao_instagram
INNER JOIN curtidas
ON curtidas.fk_id_publicacao = id_publicInsta
INNER JOIN usuarios_instagram
ON curtidas.fk_id_usuario = id_usuario
WHERE id_publicInsta=$id_public";
$resultado = $conexao->query($sql);

while($registro = mysqli_fetch_array($resultado)){
    $apelido = $registro["nomeUser"];
    $nome = $registro["nome"];
    $likes = $registro["curtida"];
	$imagePerfil = $registro["imagePerfil"];
	$id_usuario = $registro["id_usuario"];
	$tipoPerfil = $registro["tipoPerfil"];
	
	if($tipoPerfil == "pessoal"){
		$perfilPro = "";
	}else if($tipoPerfil == "adm"){
		$perfilPro = "<img src='img/tuxedo.png' class='imgDiamond2' />";
	}else{
		$perfilPro = "<img src='img/diamond.png' class='imgDiamond2' />";
	}

    $lista.="
        <li class='item-content'>
            <div class='item-title'>
                <div class='display-flex justify-content-space-between bg-black'>
                <a href='/perfil2/' class='item-inner tab-link' data='$id_usuario'>
                    <div class='icon-chat'><img src='https://www.limeiraweb.com.br/mateus/php/uploads/$imagePerfil'></div>
                    <div class='display-block  msg margin-left'>
                        <div class='font-chat'>$nome&nbsp;$perfilPro</div>
                        <div class='font-chat-msg'>
                            <div class='userName'>$apelido</div>
                        </div>
                    </div>
                </a>
                
                </div>
            </div>
        </li>
    ";

}

$sql2 = $conexao->query("SELECT COUNT(curtida) FROM curtidas WHERE fk_id_publicacao = $id_public");

$row = $sql2->fetch_row();
$count = 0 + $row[0];

echo "$lista|$count";