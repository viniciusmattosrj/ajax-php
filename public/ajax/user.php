<?php

require "../../index.php";

use app\models\User;

/* Função que retarda o retorno do que estiver abaixo */
sleep(5);

$user = new User;

$id = $_GET['id'];

echo json_encode($user->find('id', $id));
