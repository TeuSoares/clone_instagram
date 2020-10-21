<?php
header("Access-Control-Allow-Origin:*");
date_default_timezone_set('America/Sao_Paulo');

// Incluir conexao
include ("funcoes.php");

$id_trabalho = $_POST["id_trabalho"]; 

$SQL = "UPDATE orcamento_realizado SET situacao='Interesse' WHERE id_orcamento = $id_trabalho and situacao = 'Aguardando' "; 

if($conexao->query($SQL)){
    echo $SQL;
}else{
    //echo "Não foi possível realizar seu comentário. Tente novamente mais tarde!!";
    echo $SQL;
}

?>