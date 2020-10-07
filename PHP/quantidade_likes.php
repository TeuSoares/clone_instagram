<?php

header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");

$quantLikes = "";
$namesLikes = "";
$sql = "SELECT publicacao_instagram.*,COUNT(curtida) as Likes,usuarios_instagram.nome FROM publicacao_instagram
LEFT JOIN curtidas
ON curtidas.fk_id_publicacao = id_publicInsta
INNER JOIN usuarios_instagram
ON curtidas.fk_id_usuario = id_usuario
GROUP BY id_publicInsta;";
$resultado = $conexao->query($sql);

while($registro = mysqli_fetch_array($resultado)){
    $id_publicInsta = $registro["id_publicInsta"];
    $likes = $registro["Likes"];
    $nome = $registro["nome"];

    if($likes == 1){
        $quantLikes.= "Curtido por <strong class='black red'><a href='/perfil/'>$nome</a></strong>
       <br>";
    }else{
        $quantLikes.= "Curtido por <strong class='black red'><a href='/perfil/'>$nome</a></strong>
        e <strong class='black red'><a href='/curtidas/' onclick=setPublic($id_publicInsta);>outras pessoas</a></strong>
       <br>";
    }
}

echo "$quantLikes|$namesLikes";

?>