<?php
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");

$array1 = "";
$array2 = "";

$sql = "SELECT id_publicInsta,usuario_like FROM curtidas 
INNER JOIN publicacao_instagram
ON curtidas.fk_id_publicacao = id_publicInsta
WHERE curtidas.fk_id_usuario = 1";
$resultado = $conexao->query($sql);
while($linha = mysqli_fetch_array($resultado)){

    $id_publicInsta = $linha["id_publicInsta"];

    $array1."$id_publicInsta;";

    $carros = explode(";",$array1);

}

$sql2 = "SELECT id_publicInsta from publicacao_instagram";
$resultado2 = $conexao->query($sql2);
while($linha2 = mysqli_fetch_array($resultado2)){

    $id_publicInsta2 = $linha2["id_publicInsta"];

    $array2."$id_publicInsta2;";
    
}

echo $array1;


?>