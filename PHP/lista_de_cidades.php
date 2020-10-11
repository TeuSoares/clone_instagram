<?php
header("Access-Control-Allow-Origin:*");
include("funcoes.php");

$lista = "";
$sql = "SELECT cidade,uf FROM cidades";
$resultado = $conexao->query($sql);

while($linha = mysqli_fetch_array($resultado)){
    $uf = $linha["uf"];
    $cidade = $linha["cidade"];

    $lista.="$cidade/$uf,";
}

echo $lista;
?>