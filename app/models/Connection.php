<?php

namespace app\models;

use PDO;

class Connection
{

    public static function connect()
    {
        $config = require __DIR__ . '../../config/config.php';
        $pdo    = new PDO("mysql:host={$config['db']['host']}; dbname={$config['db']['dbname']}; charset={$config['db']['charset']}", $config['db']['username'], $config['db']['password']);

        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

        return $pdo;
    }
}
