<?php
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");

$id_usuario = $_POST["id_usuario"];
$id_perfil = $_POST["id_perfil"];

$lista = "";
$sql = "SELECT * FROM feedback_estrelas WHERE fk_id_usuario=$id_usuario and fk_id_perfil=$id_perfil";
$resultado = $conexao->query($sql);
while($linha = mysqli_fetch_array($resultado)){
    $fk_id_usuario = $linha["fk_id_usuario"];
    $fk_id_perfil = $linha["fk_id_perfil"];

    $lista = "$fk_id_usuario|$fk_id_perfil";
}

$resultNota = "";
$quantidade_pessoas = "";
$sql2 = "SELECT SUM(estrelas) as quantidade_estrelas,COUNT(fk_id_usuario) as quantidade_pessoas FROM feedback_estrelas 
WHERE fk_id_perfil = $id_perfil ";
$resultado2 = $conexao->query($sql2);
while($linha2 = mysqli_fetch_array($resultado2)){
    $quantidade_estrelas = $linha2["quantidade_estrelas"];
    $quantidade_pessoas = $linha2["quantidade_pessoas"];

    $resultNota = ($quantidade_estrelas / $quantidade_pessoas);

    $resultNota = str_replace(".",",",$resultNota);
}

$porceHTML = "";
$sql3 = "SELECT COUNT(estrelas) as quantidade_4 FROM feedback_estrelas 
WHERE fk_id_perfil = $id_perfil and estrelas = 4 ";
$resultado3 = $conexao->query($sql3);
while($linha2 = mysqli_fetch_array($resultado3)){
    $quantidade_4 = $linha3["quantidade_4"];

    $conta1 = (100 * $quantidade_4);
    $result_star4 = ($conta1 / $quantidade_pessoas);

    $porceHTML = "<span class='number_star'>5</span>&nbsp;&nbsp;
    <div class='progressbar color-blue' data-progress='$result_star4'></div>
    &nbsp;&nbsp;<span class='number_star'>$result_star4%</span>";
}

echo "$lista|$resultNota|$quantidade_pessoas|$porceHTML";

?>