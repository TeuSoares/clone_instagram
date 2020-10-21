<?php
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");

$codigo = 0;

$cidade_autocomplete = explode("/",$_POST["cidade_autocomplete"]);

$cidade = $cidade_autocomplete[0];
$uf = $cidade_autocomplete[1];

$sql = "SELECT * FROM cidades WHERE cidade='$cidade' && uf='$uf' ";
$resultado = $conexao->query($sql);

while($linha = mysqli_fetch_array($resultado)){
    $codigo = $linha["codigo"];
}

// $cidade_autocomplete = $_POST["cidade_autocomplete"];
$id_usuario = $_POST["id_usuario"];
$telefone_u = $_POST["telefone_u"];
$bairro = $_POST["bairro"];
$rv = $_POST["rv"];
$numero_casa = $_POST["numero_casa"];
$site = $_POST["site"];

$operacao = "UPDATE perfil_profissional SET telefone='$telefone_u',rua_avenida='$rv',numero=$numero_casa,bairro='$bairro',site='$site',cidade=$codigo WHERE fk_id_usuario=$id_usuario"; 

if($conexao->query($operacao)){
    echo $operacao;
}else{
    echo $sql;
}
?>