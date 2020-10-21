<?php
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");


$sql2 = "SELECT publicacao_instagram.id_publicInsta,usuarios_instagram.nome,curtidas.curtida,curtidas.fk_id_publicacao
FROM publicacao_instagram
INNER JOIN curtidas
ON curtidas.fk_id_publicacao = id_publicInsta
INNER JOIN usuarios_instagram
ON curtidas.fk_id_usuario = id_usuario";
$resultado2 = $conexao->query($sql2);

while($registro2 = mysqli_fetch_array($resultado2)){
    $likes = $registro2["curtida"];
    $nome = $registro2["nome"];
	$fk_id_public = $registro2["fk_id_publicacao"];

    $nameLike = $nome;
    $like = $likes;
}

$lista = "";
$verLike = "";
$sql = "SELECT
publicacao_instagram.*,usuarios_instagram.*,
COUNT(comentario) AS quantidade
FROM publicacao_instagram 
LEFT JOIN comentarios
ON comentarios.fk_id_publicacao = id_publicInsta
INNER JOIN usuarios_instagram
ON publicacao_instagram.fk_id_usuario = id_usuario
GROUP BY id_publicInsta";
$resultado = $conexao->query($sql);

while($registro = mysqli_fetch_array($resultado)){
    $id_usuario = $registro["id_usuario"];
    $id_publicInsta = $registro["id_publicInsta"];
    $nome = $registro["nome"];
    $quantidade = $registro["quantidade"];
    $image = $registro["imagem"];
    $descricao = $registro["descricao"];
    $fk_id_usuario = $registro["fk_id_usuario"];
    $imagePerfil = $registro["imagePerfil"];
    $data = $registro["dataPublicacao"];

    if($fk_id_public == $id_publicInsta){
        $verLike = "<div class='likeUser margin-left'>
        Curtido por <strong class='black red'><a href='/perfil/'>$nameLike</a></strong>
         e <strong class='black red'><a href='/curtidas/' onclick=setPublic($id_publicInsta);>outras pessoas</a></strong>
        </div>";
    }else{
        $verLike = "";
    }

    $lista.="<div class='card demo-facebook-card'>
    <div class='display-flex justify-content-space-between'>
      <div class='card-header'>
        <div class='demo-facebook-avatar'><img src='https://www.limeiraweb.com.br/mateus/php/uploads/$imagePerfil' width='100%'/></div>
        <div class='demo-facebook-name bg-black'><a href='/perfil2/' onclick=setIDP($fk_id_usuario)>$nome</a></div>
        <div class='demo-facebook-date'>$data</div>
      </div>

    </div>
    </div>
    <div class='card-content'> <img src='https://www.limeiraweb.com.br/mateus/php/uploads/$image' width='100%'/></div>

      <p class='likes margin-left clicouL bg-black'><i class='f7-icons like text-color-red heart_fill'>heart_fill</i><i class='f7-icons like heart btn-curtida' id='btn-curtida' onclick=curtida($id_publicInsta);>heart</i> &nbsp;&nbsp; <a href='/comentarios/' onclick=setPublic($id_publicInsta); class='btn-comentario'><i class='f7-icons comentario'>bubble_left</i></a></p> 

      $verLike
      
        <div class='margin-left margin-right'><strong class='black red'><a href='#' class='tab-link'>$nome</a></strong> $descricao</div>
     
      </p>
      <p class='margin-left'></p>

        
    <p class='margin-left'><span class='bg-black'><a href='/comentarios/' class='btn-comentario comment' onclick=setPublic($id_publicInsta);>Ver todos os $quantidade comentários</a></span></p>
        
      
      </div>";
}


echo $lista;
 //print_r($resposta);
?>
        <!-- if(cod_usuario == resultado[i].fk_id_usuario){
          id2 = resultado[i].id_publicInsta;
            dados+='<div class='margin-right card-header font-icon list'>
              dados+='<i class='f7-icons 'id='excluir' onclick=excluir(''+id2+'');>xmark_circle_fill</i>
            dados+='</div>
        } -->
