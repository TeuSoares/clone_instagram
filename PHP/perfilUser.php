<?php
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");

$id_usuario = $_POST["id_usuario"];

$lista = "";
$sql = "SELECT * FROM usuarios_instagram WHERE id_usuario=$id_usuario";
$resultado = $conexao->query($sql);
while($linha = mysqli_fetch_array($resultado)){
    $nome = $linha["nome"];
    $user = $linha["nomeUser"];
    $bio = $linha["bio"];
    $email = $linha["email"];
    $imagem = $linha["imagePerfil"];
	$celular = $linha["celular"];
	
	$verImage = "https://www.limeiraweb.com.br/mateus/php/uploads/$imagem";
	
	$bio = str_replace("<br>", "\n", $bio);

    $lista = "$nome|$user|$email|$bio|$verImage|$imagem|$celular";
}

$lista2 = "";
$cityUf = "";
$sql2 = "SELECT fk_id_usuario,categoria,telefone,numero,bairro,rua_avenida,site,cidades.cidade,cidades.uf FROM perfil_profissional 
LEFT JOIN cidades
ON perfil_profissional.cidade = codigo
WHERE fk_id_usuario=$id_usuario";
$resultado2 = $conexao->query($sql2);
while($linha2 = mysqli_fetch_array($resultado2)){
    $telefone = $linha2["telefone"];
	$rv = $linha2["rua_avenida"];
	$bairro = $linha2["bairro"];
	$numero = $linha2["numero"];
	$cidade = $linha2["cidade"];
	$uf = $linha2["uf"];
	$site = $linha2["site"];
	
	$cityUf = "$cidade/$uf";

    $lista2 = "$telefone|$rv|$bairro|$numero|$cityUf|$site";
}

$lista3 = "";
$sql3 = "SELECT fk_id_usuario FROM perfil_profissional
WHERE fk_id_usuario=$id_usuario";
$resultado3 = $conexao->query($sql3);
while($linha3 = mysqli_fetch_array($resultado3)){
    $fk_user = $linha3["fk_id_usuario"];
	
	$lista3 = "$fk_user";
}

echo "$lista|$lista2|$lista3";

?>