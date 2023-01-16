 <?php

 include_once "conexao.php";

 $data = filter_input_array(INPUT_POST, FILTER_DEFAULT);

 $retorna = ['status' => true, 'nome' => $data['nome']];
 echo json_encode($retorna);

?>