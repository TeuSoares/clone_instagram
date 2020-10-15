<?php
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");
 
$id_usuario = $_POST["id_usuario"];
$suporte = $_POST["suporte"];
$data = date("Y-m-d");

$SQL = "INSERT INTO suporte (fk_id_usuario,problema,data) VALUES ($id_usuario,'$suporte','$data') ";

if($conexao->query($SQL)){
    echo $SQL;
}else{
    //echo "Não foi possível realizar seu comentário. Tente novamente mais tarde!!";
    echo $SQL;
}

?>