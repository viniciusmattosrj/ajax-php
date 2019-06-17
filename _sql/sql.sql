-- Criando database

CREATE DATABASE php_ajax;

-- Criação da tabela
CREATE TABLE users(
    id int(11) auto_increment PRIMARY KEY,
    name varchar(50) not null,
    created_at timestamp default current_timestamp
);

-- Exibindo a estrutura da tabela
desc users

-- Apagando tabela
DROP TABLE users;