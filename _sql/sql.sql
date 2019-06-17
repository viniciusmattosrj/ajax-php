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

-- Indicando qual tabela usar
use php_ajax;

-- Populando com dados
INSERT INTO users (name) values('Vinicius Mattos');
INSERT INTO users (name) values('Carlos Roberto');
INSERT INTO users (name) values('Thais Souza');
INSERT INTO users (name) values('Jean Silva');
INSERT INTO users (name) values('Monica Silva');

-- Simples consulta database
SELECT * FROM users;