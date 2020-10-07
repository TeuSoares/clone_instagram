<?php

header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");

$sql = "SELECT * FROM usuarios_instagram";
$resultado = $conexao->query($sql);

$lista = "";
while($registro = mysqli_fetch_array($resultado)){
    $id_usuario = $registro["id_usuario"];
    $nomeUser = $registro["nomeUser"];
    $nome = $registro["nome"];

    $lista.="
        <li class='item-content'>
            <div class='item-title'>
                <div class='display-flex justify-content-space-between'>
                <a href='/perfil/' class='text-color-black item-inner tab-link item-link' data='$id_usuario'>
                    <div class='icon-chat'><img src='img/icon-chat.png'></div>
                    <div class='display-block  msg margin-left'>
                        <div class='font-chat'>$nome</div>
                        <div class='font-chat-msg'>
                            <div class='userName'>$nomeUser</div>
                        </div>
                    </div>
                </a>
                <div><button class='button button-small button-fill seguirP' data='$id_usuario'>SEGUIR</button></div>
                
                </div>
            </div>
        </li>
    ";

}

echo $lista;

?>
