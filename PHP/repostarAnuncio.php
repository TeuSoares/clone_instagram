<?php
header("Access-Control-Allow-Origin:*");
date_default_timezone_set('America/Sao_Paulo');

// Incluir conexao
include ("funcoes.php");

$id_anuncio = $_POST["id_anuncio"]; 
$data = date("Y-m-d");

$SQL = "UPDATE publicacao_instagram SET dataPublicacao='$data' WHERE id_publicInsta = $id_anuncio"; 

if($conexao->query($SQL)){
    echo $SQL;
}else{
    //echo "Não foi possível realizar seu comentário. Tente novamente mais tarde!!";
    echo $SQL;
}

?>