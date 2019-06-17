-- Criando database

CREATE DATABASE php_ajax;

-- Criação da tabela
CREATE TABLE user(
    id int(11) auto_increment PRIMARY KEY,
    name varchar(50) not null,
    email varchar(80) not null,
    created_at timestamp default current_timestamp
);

-- Exibindo a estrutura da tabela
desc user

-- Apagando tabela
DROP TABLE user;

-- Indicando qual tabela usar
use php_ajax;

-- Populando com dados
INSERT INTO user (name, email) values('Vinicius Mattos', 'vinicius@gmail.com');
INSERT INTO user (name, email) values('Carlos Roberto', 'carlos@gmail.com');
INSERT INTO user (name, email) values('Thais Souza', 'thais@gmail.com');
INSERT INTO user (name, email) values('Jean Silva', 'jean@gmail.com');
INSERT INTO user (name, email) values('Monica Silva', 'monica@gmail.com');
-- Simples consulta database
SELECT * FROM user;