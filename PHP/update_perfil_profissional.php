<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("conf/conexao.php");
$conexao = con_mysql();

$item = explode("/",$_POST["value10"]);

$cidade = $item[0];
$uf = $item[1];

$sql = "SELECT * FROM cidades WHERE cidade='$cidade' && uf='$uf' ";
$resultado = $conexao->query($sql);

while($linha = mysqli_fetch_array($resultado)){
    $codigo = $linha["codigo"];
}

$nomeFoto = urldecode($_FILES["file"]["name"]);
$nome_c = $_POST["value1"];
$user = $_POST["value2"];
$email_c = $_POST["value3"];
$bio = $_POST["value4"];
$id_usuario = $_POST["value5"];
$celular = $_POST["value6"];
$telefone = $_POST["value7"];
$bairro = $_POST["value8"];
$rv = $_POST["value9"];
$numero = $_POST["value11"];
$site = $_POST["value12"];

move_uploaded_file($_FILES["file"]["tmp_name"],"../php/uploads/".$nomeFoto);

$operacao = $conexao->prepare("UPDATE usuarios_instagram SET nome='$nome_c',email='$email_c',celular='$celular',bio='$bio',imagePerfil='$nomeFoto',nomeUser='$user' WHERE id_usuario=$id_usuario "); 
$operacao->execute();

$operacao2 = $conexao->prepare("UPDATE curtidas SET usuario_like='$nome_c' WHERE fk_id_usuario=$id_usuario "); 
$operacao2->execute();

$operacao = $conexao->prepare("UPDATE perfil_profissional SET telefone='$telefone',rua_avenida='$rv',numero=$numero,bairro='$bairro',site='$site',cidade=$codigo WHERE fk_id_usuario=$id_usuario "); 
$operacao->execute();

?>

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