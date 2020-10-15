<?php
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");
 
$id_usuario = $_POST["id_usuario"];
$bug = $_POST["bug"];
$data = date("Y-m-d");

$SQL = "INSERT INTO reporte_bug (fk_id_usuario,bug,data) VALUES ($id_usuario,'$bug','$data') ";

if($conexao->query($SQL)){
    echo $SQL;
}else{
    //echo "Não foi possível realizar seu comentário. Tente novamente mais tarde!!";
    echo $SQL;
}

?>