<?php
header("Access-Control-Allow-Origin:*");

// Incluir conexao
include ("funcoes.php");

$lista = "";
$sql = "SELECT categoria FROM categorias";
$resultado = $conexao->query($sql);

while($registro = mysqli_fetch_array($resultado)){

    $categoria = $registro["categoria"];

    $lista.="<li>
                <label class='item-radio item-radio-icon-start item-content'>
                    <input type='radio' class='select_categoria' name='demo-radio-start' value='$categoria' data-categoria='$categoria'/>
                    <i class='icon icon-radio'></i>
                    <div class='item-inner'>
                        <div class='item-title'>$categoria</div>
                    </div>
                </label>
            </li>";

}

$lista2 = "";
$sql2 = "SELECT categoria FROM categorias";
$resultado2 = $conexao->query($sql2);

while($registro2 = mysqli_fetch_array($resultado2)){

    $categoria2 = $registro2["categoria"];

    $lista2.="<option class='categoriaPesquisar' data-perfil='$categoria2' value='$categoria2'>$categoria2</option>";

}

echo "$lista|$lista2";
?>