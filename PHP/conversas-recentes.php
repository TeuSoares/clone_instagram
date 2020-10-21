<?php
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");

$id_usuario = $_POST["id_usuario"];
$imageChat = "";
$nome = "";
$lista = "";
$lista2 = "";
$sql = "SELECT DISTINCT usuarios_instagram.nome,imagePerfil,chat.* FROM chat
INNER JOIN usuarios_instagram
ON chat.fk_id_perfil = id_usuario
WHERE fk_id_usuario = $id_usuario
GROUP BY nome
ORDER BY id_conversa DESC"; 
$resultado = $conexao->query($sql);

while($registro = mysqli_fetch_array($resultado)){

    $nome = $registro["nome"];
    $imagePerfil = $registro["imagePerfil"];
    $conversa = $registro["conversa"];
    $data = $registro["data"];
    $hora = $registro["hora"];
    $fk_id_usuario = $registro["fk_id_usuario"];
    $fk_id_perfil = $registro["fk_id_perfil"];
    $enviou = $registro["enviou"];
    $recebeu = $registro["recebeu"];

	$horamensagem = date('H:i', strtotime($hora));
    $imageChat = "https://www.limeiraweb.com.br/mateus/php/uploads/$imagePerfil";
	$conversa = substr($conversa, 0, 25);

    $lista.="<li class='item-content bg-black'>
                <a href='/chat/' class='item-inner setPerfil' data='$fk_id_perfil'>
                    <div class='item-title'>
                        <div class='display-flex'>
                            <div class='icon-chat'><img src='$imageChat'></div>&nbsp;&nbsp;
                            <div class='display-block  msg'>
                                <div class='font-chat'><strong>$nome</strong></div>
                                <div class='font-chat-msg display-flex'>
                                    $conversa...
                                    - $horamensagem
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>";

}

$sql2 = "SELECT DISTINCT usuarios_instagram.nome,imagePerfil,chat.* FROM chat
INNER JOIN usuarios_instagram
ON chat.fk_id_usuario = id_usuario
WHERE fk_id_perfil = $id_usuario
GROUP BY nome
ORDER BY id_conversa DESC"; 
$resultado2 = $conexao->query($sql2);

while($registro2 = mysqli_fetch_array($resultado2)){

    $nome = $registro2["nome"];
    $imagePerfil = $registro2["imagePerfil"];
    $conversa = $registro2["conversa"];
    $data = $registro2["data"];
    $hora = $registro2["hora"];
    $fk_id_usuario = $registro2["fk_id_usuario"];
    $fk_id_perfil = $registro2["fk_id_perfil"];
    $enviou = $registro2["enviou"];
    $recebeu = $registro2["recebeu"];

    $horamensagem = date('H:i', strtotime($hora));
    $imageChat = "https://www.limeiraweb.com.br/mateus/php/uploads/$imagePerfil";
	$conversa = substr($conversa, 0, 25);

    $lista2.="<li class='item-content bg-black'>
                <a href='/chat/' class='item-inner setPerfil' data='$fk_id_usuario'>
                    <div class='item-title'>
                        <div class='display-flex'>
                            <div class='icon-chat'><img src='$imageChat'></div>&nbsp;&nbsp;
                            <div class='display-block  msg'>
                                <div class='font-chat'><strong>$nome</strong></div>
                                <div class='font-chat-msg display-flex'>
                                    $conversa...
                                    - $horamensagem
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>";

}

echo "$lista|$nome|$imageChat|$lista2";
?>