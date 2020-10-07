<?php

header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");

$id_usuario = $_POST["id_usuario"];

$lista = "";

$sql = "SELECT * FROM usuarios_instagram
INNER JOIN seguidores
ON seguidores.fk_id_usuario = id_usuario
WHERE seguindo=$id_usuario";
$resultado = $conexao->query($sql);

while($registro = mysqli_fetch_array($resultado)){
    $nome = $registro["nome"];
    $user = $registro["nomeUser"];
    $imagem = $registro["imagePerfil"];

    $lista.="
        <li class='item-content'>
            <div class='item-title'>
                <div class='display-flex justify-content-space-between'>
                <a href='#perfil' class='text-color-black item-inner tab-link'>
                    <div class='icon-chat'><img src='https://www.limeiraweb.com.br/mateus/php/uploads/$imagem'></div>
                    <div class='display-block  msg margin-left'>
                        <div class='font-chat'>$nome</div>
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

$sql2 = "SELECT * FROM usuarios_instagram
INNER JOIN seguidores
ON seguidores.seguindo = id_usuario
WHERE fk_id_usuario=$id_usuario";
$resultado2 = $conexao->query($sql2);

while($registro2 = mysqli_fetch_array($resultado2)){
    $nome = $registro2["nome"];
    $user = $registro2["nomeUser"];
    $imagem = $registro2["imagePerfil"];

    $lista2.="
        <li class='item-content'>
            <div class='item-title'>
                <div class='display-flex justify-content-space-between'>
                <a href='#perfil' class='text-color-black item-inner tab-link'>
                    <div class='icon-chat'><img src='https://www.limeiraweb.com.br/mateus/php/uploads/$imagem'></div>
                    <div class='display-block  msg margin-left'>
                        <div class='font-chat'>$nome</div>
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

echo "$lista|$lista2";
?>