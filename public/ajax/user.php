<?php

require "../../config.php";

use app\models\User;

/* Função que retarda o retorno do que estiver abaixo */
sleep(5);

$user = new User;

echo json_encode($user->all());