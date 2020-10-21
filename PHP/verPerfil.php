<?php

header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");

$id_usuario = $_POST["id_usuario"];

$lista = "";
$bioUser = "";
$popPerfil = "";

$sql = "SELECT perfil_profissional.*,usuarios_instagram.*,COUNT(seguindo) as seguindo,cidades.cidade,cidades.uf FROM usuarios_instagram
LEFT JOIN seguidores
ON seguidores.fk_id_usuario = id_usuario
LEFT JOIN perfil_profissional
ON perfil_profissional.fk_id_usuario = id_usuario
LEFT JOIN cidades
ON perfil_profissional.cidade = codigo
WHERE id_usuario = $id_usuario;";
$resultado = $conexao->query($sql);

while($registro = mysqli_fetch_array($resultado)){
    $nome = $registro["nome"];
    $user = $registro["nomeUser"];
    $bio = $registro["bio"];
    $celular = $registro["celular"];
	$email = $registro["email"];
	$telefone = $registro["telefone"];
	$rv = $registro["rua_avenida"];
	$numero = $registro["numero"];
	$bairro = $registro["bairro"];
	$site = $registro["site"];
	$cidade = $registro["cidade"];
	$uf = $registro["uf"];
    $imagem = $registro["imagePerfil"];
    $seguindo = $registro["seguindo"];
	$categoria = $registro["categoria"];
	$tipoPerfil = $registro["tipoPerfil"];

	$verImage = "<img src='https://www.limeiraweb.com.br/mateus/php/uploads/$imagem'>";
	
	if($bio == "" and $user == ""){
		$bioUser = "";
	}else{
		$bioUser = "<div class='bioUser'>
						<span><strong>$user</strong></span>
						<br>
						<span>$bio</span>
					</div>";
	}
	
	if($tipoPerfil == "profissional"){
		$popPerfil = "<div class='popover popover-about'>
				<div class='popover-inner'>
				  <div class='block'>
					<p>Esse é um perfil profissional!!</p>
				  </div>
				</div>
			 </div>";
	}else if($tipoPerfil == "adm"){
		$popPerfil = "<div class='popover popover-about'>
				<div class='popover-inner'>
				  <div class='block'>
					<p>Esse perfil é de um ADM</p>
				  </div>
				</div>
			 </div>";
	}else{
		$popPerfil = "";
	}

    $lista.="
        <div class='block margin-0-perfil'>
            <div class='display-flex justify-content-space-between popover-perfil'>
			<p class='p-insta'><strong>$nome</strong>&nbsp;<img src='img/diamond.png' class='imgDiamond popover-open' data-popover='.popover-about' /><img src='img/tuxedo.png' class='imgTuxedo popover-open' data-popover='.popover-about' /><p>
			 $popPerfil
			<p class='p-insta bg-black'><a class='button panel-open' href='#' data-panel='.panel-right'><i class='f7-icons'>gear_alt_fill</i></a></p>
                      </div>
            <div class='display-flex'>
                <div class='col-25 imagemPerfil'>
                    $verImage
                </div>
                <div class='col-25 margin-perfil text-align-center'>
                <strong class='strongPerfil block' id='quantidadePublic'></strong>
                <span>Publicações</span>
                </div>
                <div class='col-25 margin-perfil text-align-center'>
                <strong class='strongPerfil block' id='numberSeguidores'></strong>
                <span class='bg-black'><a href='/seguidores/' id='verSeguidor'>Seguidores</a></span>
                </div>
                <div class='col-25 margin-perfil text-align-center'>
                <strong class='strongPerfil block'>$seguindo</strong>
                <span class='bg-black'><a href='/seguidores/'>Seguindo</a></span>
                </div>
            </div>
			<br>
            $bioUser
            <p>
                <a href='/update/'><button class='col button button-small button-outline button-noturno text-color-black color-black' id='editarPeril'>Editar perfil</button></a>
                <button class='col button button-small button-outline text-color-black color-black seguirP'>Seguir</button>
                <button class='col button button-small button-outline text-color-black color-black seguindo'>Seguindo</button>
            </p>
			<p class='row button-perfil-pro'>
                <button class='col-33 button button-small button-outline button-noturno text-color-black color-black info-perfil sheet-open' data-sheet='.my-sheet-push'>Informações</button>
				<a href='/avaliacao/' class='col-33'><button class='button button-small button-outline button-noturno text-color-black color-black' id='avaliacao'>Avaliação</button></a>
                <a href='/atividade/' class='col-33'><button class='button button-small button-outline button-noturno text-color-black color-black atividade-perfil'>Atividade</button></a>
            </p>
        </div>
		               <div class='sheet-modal sheet-modal-push my-sheet-push'>
					   <div class='toolbar'>
						  <div class='toolbar-inner'>
							<div class='left'></div>
							<div class='right'>
							  <a class='link sheet-close'><i class='f7-icons'>xmark_circle_fill</i></a>
							</div>
						  </div>
						</div>
                        <div class='sheet-modal-inner'>
                          <div class='page-content'>
                            <div class='list media-list'>
                                <ul>
                                  <h2 class='margin-left'>Informações de contato</h2>
								  <li>
                                    <div class='item-content'>
                                      <div class='item-media'><i class='f7-icons'>person_alt_circle_fill</i></div>
                                      <div class='item-inner'>
                                        <div class='item-title-row'>
                                          <div class='item-title'>Categoria</div>
                                        </div>
                                        <div class='item-subtitle'>$categoria</div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div class='item-content telefone'>
                                      <div class='item-media'><i class='f7-icons'>phone_fill</i></div>
                                      <div class='item-inner'>
                                        <div class='item-title-row'>
                                          <div class='item-title'>Telefone</div>
                                        </div>
                                        <div class='item-subtitle'>$telefone</div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div class='item-content celular'>
                                      <div class='item-media'><i class='f7-icons'>device_phone_portrait</i></div>
                                      <div class='item-inner'>
                                        <div class='item-title-row'>
                                          <div class='item-title'>Celular</div>
                                        </div>
                                        <div class='item-subtitle'>$celular</div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div class='item-content'>
                                      <div class='item-media'><i class='f7-icons'>envelope_fill</i></div>
                                      <div class='item-inner'>
                                        <div class='item-title-row'>
                                          <div class='item-title'>E-mail</div>
                                        </div>
                                        <div class='item-subtitle'>$email</div>
                                      </div>
                                    </div>
                                  </li>
                                  <li class='site'>
                                    <div class='item-content'>
                                      <div class='item-media'>
                                        <span class='material-icons'>
                                          public
                                        </span>
                                      </div>
                                      <div class='item-inner'>
                                        <div class='item-title-row'>
                                          <div class='item-title'>Site</div>
                                        </div>
                                        <div class='item-subtitle link-site'><a href='#'>$site</a></div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div class='item-content endereco'>
                                      <div class='item-media'>
                                        <i class='f7-icons'>house</i>
                                      </div>
                                      <div class='item-inner'>
                                        <div class='item-title-row'>
                                          <div class='item-title'>Endereço</div>
                                        </div>
                                        <div class='item-subtitle'>Rua/Avenida: $rv</div>
                                        <div class='item-subtitle'>Número: $numero</div>
                                        <div class='item-subtitle'>Bairro: $bairro</div>
                                        <div class='item-subtitle'>Cidade: $cidade/$uf</div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                          </div>
                        </div>
                    </div>
    ";

}

$public = "";
$sql2 = "SELECT * FROM publicacao_instagram WHERE fk_id_usuario=$id_usuario and tipoPublicacao = 'normal'";
$resultado2 = $conexao->query($sql2);

while($registro2 = mysqli_fetch_array($resultado2)){
	$id_public = $registro2["id_publicInsta"];
    $fk_id_usuario = $registro2["fk_id_usuario"];
    $imagem = $registro2["imagem"];

    $verImage = "<img src='https://www.limeiraweb.com.br/mateus/php/uploads/$imagem' width='100%' height='auto'>";

    $public.="
        <div class='img-publiP'><a href='/public/' class='setPublic' data='$id_public'>$verImage</a></div>
    ";

}

$sql3 = "SELECT *,COUNT(seguindo) as seguidores FROM usuarios_instagram
INNER JOIN seguidores
ON seguidores.seguindo = id_usuario
WHERE seguindo = $id_usuario;";
$resultado3 = $conexao->query($sql3);

while($registro3 = mysqli_fetch_array($resultado3)){

    $seguidores = $registro3["seguidores"];

}

$sql4 = "SELECT COUNT(publicacao_instagram.fk_id_usuario) as quantidadePublic FROM usuarios_instagram
INNER JOIN publicacao_instagram
ON publicacao_instagram.fk_id_usuario = id_usuario
WHERE id_usuario = $id_usuario";
$resultado4 = $conexao->query($sql4);

while($registro4 = mysqli_fetch_array($resultado4)){

    $quantidade = $registro4["quantidadePublic"];

}

$fk_user = "";
$sql5 = "SELECT fk_id_usuario FROM perfil_profissional
WHERE fk_id_usuario = $id_usuario";
$resultado5 = $conexao->query($sql5);

while($registro5 = mysqli_fetch_array($resultado5)){

    $fk_user = $registro5["fk_id_usuario"];

}

$id_adm = "";
$sql6 = "SELECT id_usuario FROM usuarios_instagram
WHERE id_usuario = 1";
$resultado6 = $conexao->query($sql6);

while($registro6 = mysqli_fetch_array($resultado6)){

    $id_adm = $registro6["id_usuario"];

}

echo "$lista|$public|$seguidores|$quantidade|$fk_user|$site|$telefone|$celular|$rv|$cidade|$id_adm";

?>