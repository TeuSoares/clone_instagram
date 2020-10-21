<?php

header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");

$sql = "SELECT * FROM usuarios_instagram";
$resultado = $conexao->query($sql);

$lista = "";
$perfilPro = "";
while($registro = mysqli_fetch_array($resultado)){
	$id_usuario = $registro["id_usuario"];
    $nomeUser = $registro["nomeUser"];
    $nome = $registro["nome"];
	$imagePerfil = $registro["imagePerfil"];
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
                <div class='display-flex justify-content-space-between'>
                <a href='/perfil2/' class='text-color-black item-inner tab-link pesquisaPerfil' data='$id_usuario'>
                    <div class='icon-chat'><img src='https://www.limeiraweb.com.br/mateus/php/uploads/$imagePerfil'></div>
                    <div class='display-block  msg margin-left'>
                        <div class='font-chat white'>$nome&nbsp;$perfilPro</div>
                        <div class='font-chat-msg'>
                            <div class='userName'>$nomeUser</div>
                        </div>
                    </div>
                </a>
                
                </div>
            </div>
        </li>
    ";

}

echo $lista;

?>
