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
                    <input type='radio' name='demo-radio-start' value='$categoria'/>
                    <i class='icon icon-radio'></i>
                    <div class='item-inner'>
                        <div class='item-title'>$categoria</div>
                    </div>
                </label>
            </li>";

}

echo $lista;
?>