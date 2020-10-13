<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$id_perfil= $_POST["id_perfil"];   
$id_usuario = $_POST["id_usuario"];
$feedback = $_POST["feedback"];
$hora = date("H:i:s", time());

$SQL = "INSERT INTO feedback_profissional (fk_id_usuario,fk_id_perfil,comentario,hora) VALUES ($id_usuario,$id_perfil,'$feedback','$hora') ";
$mensagem = "Comentário realizado com sucesso!!";

if($conexao->query($SQL)){
    echo $SQL;
}else{
    //echo "Não foi possível realizar seu comentário. Tente novamente mais tarde!!";
    echo $SQL;
}

?>