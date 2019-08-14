DROP DATABASE IF EXISTS nodelogin;

CREATE DATABASE nodelogin;

USE nodelogin;

CREATE TABLE accounts(
id INT(11) NOT NULL AUTO_INCREMENT,
username VARCHAR(50) NOT NULL,
password VARCHAR(250) NOT NULL,
email VARCHAR(300) NOT NULL,
PRIMARY KEY(id)
);

INSERT INTO accounts(username, password, email) VALUES ("testing", "test123", "testing123@test.com");

