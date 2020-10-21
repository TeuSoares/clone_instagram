<?php

header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");

$id_perfil = $_POST["id_perfil"];

$lista = "";
$perfilPro = "";
$sql = "SELECT * FROM usuarios_instagram
INNER JOIN seguidores
ON seguidores.fk_id_usuario = id_usuario
WHERE seguindo=$id_perfil";
$resultado = $conexao->query($sql);

while($registro = mysqli_fetch_array($resultado)){
    $nome = $registro["nome"];
    $user = $registro["nomeUser"];
    $imagem = $registro["imagePerfil"];
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
                    <div class='icon-chat'><img src='https://www.limeiraweb.com.br/mateus/php/uploads/$imagem'></div>
                    <div class='display-block  msg margin-left'>
                        <div class='font-chat'>$nome&nbsp;$perfilPro</div>
                        <div class='font-chat-msg'>
                            <div class='userName'>$user</div>
                        </div>
                    </div>
                </a>
                <!-- <div><button class='button button-small button-fill seguir' id='seguir'>SEGUIR</button></div> -->
                
                </div>
            </div>
        </li>
    ";

}

$lista2 = "";
$perfilPro2 = "";

$sql2 = "SELECT * FROM usuarios_instagram
INNER JOIN seguidores
ON seguidores.seguindo = id_usuario
WHERE fk_id_usuario=$id_perfil";
$resultado2 = $conexao->query($sql2);

while($registro2 = mysqli_fetch_array($resultado2)){
    $nome = $registro2["nome"];
    $user = $registro2["nomeUser"];
    $imagem = $registro2["imagePerfil"];
	$id_usuario = $registro2["id_usuario"];
	$tipoPerfil = $registro2["tipoPerfil"];
	
	if($tipoPerfil == "pessoal"){
		$perfilPro2 = "";
	}else if($tipoPerfil == "adm"){
		$perfilPro2 = "<img src='img/tuxedo.png' class='imgDiamond2' />";
	}else{
		$perfilPro2 = "<img src='img/diamond.png' class='imgDiamond2' />";
	}
	
    $lista2.="
        <li class='item-content'>
            <div class='item-title'>
                <div class='display-flex justify-content-space-between bg-black'>
                <a href='/perfil2/' class='item-inner tab-link' data='$id_usuario'>
                    <div class='icon-chat'><img src='https://www.limeiraweb.com.br/mateus/php/uploads/$imagem'></div>
                    <div class='display-block  msg margin-left'>
                        <div class='font-chat'>$nome&nbsp;$perfilPro2</div>
                        <div class='font-chat-msg'>
                            <div class='userName'>$user</div>
                        </div>
                    </div>
                </a>
                <!-- <div><button class='button button-small button-fill seguir' id='seguir'>SEGUIR</button></div> -->
                
                </div>
            </div>
        </li>
    ";

}

$sql3 = "SELECT * FROM usuarios_instagram WHERE id_usuario=$id_perfil";
$resultado3 = $conexao->query($sql3);

while($registro3 = mysqli_fetch_array($resultado3)){
    $nome = $registro3["nome"];
}

echo "$lista|$lista2|$nome";
?>