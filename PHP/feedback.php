<?php
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");

$id_usuario = $_POST["id_usuario"];
$id_perfil = $_POST["id_perfil"];

$lista = "";
$fk_id_usuario = "";
$fk_id_perfil = "";
$sql = "SELECT * FROM feedback_estrelas WHERE fk_id_usuario=$id_usuario and fk_id_perfil=$id_perfil";
$resultado = $conexao->query($sql);
while($linha = mysqli_fetch_array($resultado)){
    $fk_id_usuario = $linha["fk_id_usuario"];
    $fk_id_perfil = $linha["fk_id_perfil"];
}

$quantidade_pessoas = "";
$quantidade_estrelas = "";
$sql2 = "";
$resultNota = "";
$sql2 = "SELECT SUM(estrelas) as quantidade_estrelas,COUNT(fk_id_usuario) as quantidade_pessoas FROM feedback_estrelas 
WHERE fk_id_perfil = $id_perfil ";
$resultado2 = $conexao->query($sql2);
while($linha2 = mysqli_fetch_array($resultado2)){
    $quantidade_estrelas = $linha2["quantidade_estrelas"];
    $quantidade_pessoas = $linha2["quantidade_pessoas"];

    $resultNota = ($quantidade_estrelas / $quantidade_pessoas);
	$resultNota = number_format($resultNota, 1, '.', ',');
	$resultNota = str_replace(".",",",$resultNota);
}

$quantidade_5 = "";
$sql4 = "";
$sql4 = "SELECT COUNT(estrelas) as quantidade_5 FROM feedback_estrelas 
WHERE fk_id_perfil = $id_perfil and estrelas = 5 ";
$resultado4 = $conexao->query($sql4);
while($linha4 = mysqli_fetch_array($resultado4)){
    $quantidade_5 = $linha4["quantidade_5"];
}

$quantidade_4 = "";
$quantidade_pessoas4 = "";
$$porceHTML = "";
$sql3 = "SELECT COUNT(estrelas) as quantidade_4,COUNT(fk_id_usuario) as quantidade_pessoas4 FROM feedback_estrelas 
WHERE fk_id_perfil = $id_perfil and estrelas = 4 ";
$resultado3 = $conexao->query($sql3);
while($linha3 = mysqli_fetch_array($resultado3)){
    $quantidade_4 = $linha3["quantidade_4"];
	$quantidade_pessoas4 = $linha3["quantidade_pessoas4"];
	
}

$quantidade_3 = "";
$sql5 = "";
$sql5 = "SELECT COUNT(estrelas) as quantidade_3 FROM feedback_estrelas 
WHERE fk_id_perfil = $id_perfil and estrelas = 3 ";
$resultado5 = $conexao->query($sql5);
while($linha5 = mysqli_fetch_array($resultado5)){
    $quantidade_3 = $linha5["quantidade_3"];
}

$quantidade_2 = "";
$sql6 = "SELECT COUNT(estrelas) as quantidade_2 FROM feedback_estrelas 
WHERE fk_id_perfil = $id_perfil and estrelas = 2 ";
$resultado6 = $conexao->query($sql6);
while($linha6 = mysqli_fetch_array($resultado6)){
    $quantidade_2 = $linha6["quantidade_2"];
}

$quantidade_1 = "";
$sql7 = "SELECT COUNT(estrelas) as quantidade_1 FROM feedback_estrelas 
WHERE fk_id_perfil = $id_perfil and estrelas = 1 ";
$resultado7 = $conexao->query($sql7);
while($linha7 = mysqli_fetch_array($resultado7)){
    $quantidade_1 = $linha7["quantidade_1"];
}

echo "$fk_id_usuario|$fk_id_perfil|$resultNota|$quantidade_pessoas|$quantidade_4|$quantidade_pessoas4|$quantidade_1|$quantidade_2|$quantidade_3|$quantidade_5|$sql4|$sql5";

?>