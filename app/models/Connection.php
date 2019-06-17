<?php

namespace app\models;

use PDO;

class Connection{

    public static function connect(){

        $pdo = new PDO("mysql:host=10.11.0.6;dbname=users", "root", "A123456");

        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

        return $pdo;
    }
}