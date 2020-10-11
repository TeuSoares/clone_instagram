<?php
header("Content-type: application/json; charset=utf-8");


// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$telefone = $_POST["telefone_u"];
$rv = $_POST["rv"];
$id_usuario = $_POST["id_usuario"];
$bairro = $_POST["bairro"];
$site = $_POST["site"];
$numero = $_POST["numero_casa"];

$item = explode("/",$_POST["cidade_autocomplete"]);

$cidade = $item[0];
$uf = $item[1];

$sql = "SELECT * FROM cidades WHERE cidade='$cidade' && uf='$uf' ";
$resultado = $conexao->query($sql);

while($linha = mysqli_fetch_array($resultado)){
    $codigo = $linha["codigo"];
}

$operacao = $conexao->prepare("UPDATE perfil_profissional SET telefone='$telefone',numero=$numero,bairro='$bairro',rua_avenida='$rv',site='$site',cidade=$codigo WHERE fk_id_usuario=$id_usuario "); 
$operacao->execute();
$inserir = $operacao->execute(array($categoria));
?>