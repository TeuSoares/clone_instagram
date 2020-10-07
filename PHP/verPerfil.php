<?php

header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("conf/conexao.php");
$resultado = mysqli_query($conexao,$sql);

$id_usuario = $_POST["id_usuario"];

$lista = "";

$sql = "SELECT *,COUNT(seguindo) as seguindo FROM usuarios_instagram
INNER JOIN seguidores
ON seguidores.fk_id_usuario = id_usuario
WHERE id_usuario = $id_usuario;";
$resultado = $conexao->query($sql);

while($registro = mysqli_fetch_array($resultado)){
    $nome = $registro["nome"];
    $user = $registro["nomeUser"];
    $bio = $registro["bio"];
    $bio = $registro["bio"];
    $imagem = $registro["imagePerfil"];
    $seguindo = $registro["seguindo"];

    if($imagem !=""){
        $verImage = "<img src='https://www.limeiraweb.com.br/mateus/php/uploads/$imagem'>";
    }else{
        $verImage = "<img src='img/user.png'>";
    }

    $lista.="
        <div class='block margin-0-perfil'>
            <p class='p-insta'><strong>$nome</strong></p>
            <div class='display-flex'>
                <div class='imagemPerfil'>
                    $verImage
                </div>
                <div class='block text-align-center'>
                <strong class='strongPerfil' id='quantidadePublic'></strong>
                <span>Publicações</span>
                </div>
                <div class='block text-align-center'>
                <strong class='strongPerfil numberSeguidores'>247</strong>
                <span><a href='/seguidores/' class='text-color-black' id='verSeguidor'>Seguidores</a></span>
                </div>
                <div class='block text-align-center'>
                <strong class='strongPerfil'>$seguindo</strong>
                <span><a href='/seguidores/' class='text-color-black' id='verSeguindo'>Seguindo</a></span>
                </div>
            </div>
            <br>
            <span><strong>Mateus Santos</strong></span>
            <br>
            <span>$bio</span>
            <br>
            <p>
                <a href='/update/'><button class='col button button-small button-outline text-color-black color-black' id='editarPeril'>Editar perfil</button></a>
                <button class='col button button-small button-outline text-color-black color-black seguirP'>Seguir</button>
                <button class='col button button-small button-outline text-color-black color-black seguindo'>Seguindo</button>
            </p>
        </div>
    ";

}

$sql2 = "SELECT * FROM publicacao_instagram WHERE fk_id_usuario=$id_usuario";
$resultado2 = $conexao->query($sql2);

while($registro2 = mysqli_fetch_array($resultado2)){
    $id_public = $registro2["id_publicInsta"];
    $fk_id_usuario = $registro2["fk_id_usuario"];
    $imagem = $registro2["imagePerfil"];

    $verImage = "<img src='https://www.limeiraweb.com.br/mateus/php/uploads/$imagem'>";

    $public.="
        <div class='photos-col wrap'>
        <div class='img-publiP'><a href='/public/' class='setPublic' data='$id_public'>$verImage</a></div>
        </div>
    ";

    $photoGalery.="<div class='photo-browser-swiper-container swiper-container swiper-container-virtual swiper-container-initialized swiper-container-horizontal swiper-container-ios'>
        <div class='photo-browser-swiper-wrapper swiper-wrapper'>
        
        <div class='photo-browser-slide photo-browser-object-slide swiper-slide swiper-slide-active' data-swiper-slide-index='0' style='left: 0px; width: 414px; margin-right: 20px;'>
            <img src='https://www.limeiraweb.com.br/mateus/php/uploads/$imagem' width='100%' height='auto'>
        </div>
        </div>
        <span class='swiper-notification' aria-live='assertive' aria-atomic='true'></span>
    </div>";

}

$sql3 = "SELECT *,COUNT(seguindo) as seguidores FROM usuarios_instagram
INNER JOIN seguidores
ON seguidores.seguindo = id_usuario
WHERE seguindo = $id_usuario;";
$resultado3 = $conexao->query($sql3);

while($registro3 = mysqli_fetch_array($resultado3)){

    $seguidores = $registro3["seguidores"];

}

$sql4 = "SELECT COUNT(publicacao_instagram.fk_id_usuario) as quantidadePublic FROM usuarios_instagram
INNER JOIN publicacao_instagram
ON publicacao_instagram.fk_id_usuario = id_usuario
WHERE id_usuario = $id_usuario";
$resultado4 = $conexao->query($sql4);

while($registro4 = mysqli_fetch_array($resultado4)){

    $quantidade = $registro4["quantidadePublic"];

}

mysqli_close($conexao);
echo "$lista|$public|$seguidores|$quantidade|$photoGalery";

?>