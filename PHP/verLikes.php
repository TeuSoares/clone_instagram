<?php

header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("conf/conexao.php");

$id_public = $_POST["id_public"];

$lista = "";
$number_likes = "";
$verLikes = "";

$sql = "SELECT publicacao_instagram.id_publicInsta,usuarios_instagram.nome,curtidas.curtida,usuarios_instagram.apelido 
FROM publicacao_instagram
INNER JOIN curtidas
ON curtidas.fk_id_publicacao = id_publicInsta
INNER JOIN usuarios_instagram
ON curtidas.fk_id_usuario = id_usuario
WHERE id_publicInsta=10";
$resultado = $conexao->query($sql);

while($registro = mysqli_fetch_array($resultado)){
    $apelido = $registro["apelido"];
    $nome = $registro["nome"];
    $likes = $registro["curtida"];

    $number_likes = (2 + $likes);

    $lista.="
        <li class='item-content'>
            <div class='item-title'>
                <div class='display-flex justify-content-space-between'>
                <a href='/perfil/' class='text-color-black item-inner tab-link'>
                    <div class='icon-chat'><img src='img/icon-chat.png'></div>
                    <div class='display-block  msg margin-left'>
                        <div class='font-chat'>$nome</div>
                        <div class='font-chat-msg'>
                            <div class='userName'>$apelido</div>
                        </div>
                    </div>
                </a>
                <div><button class='button button-small button-fill seguir' id='seguir'>SEGUIR</button></div>
                
                </div>
            </div>
        </li>
    ";

}

$sql2 = $conexao->query("SELECT COUNT(curtida) FROM curtidas WHERE fk_id_publicacao = 10");

 $row = $sql2->fetch_row();
 $count = 2 + $row[0];

 echo $count;


?>
