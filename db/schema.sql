DROP DATABASE IF EXISTS nationalparks;
CREATE DATABASE nationalparks;
USE nationalparks;

CREATE TABLE parks
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	state VARCHAR(255) NOT NULL,
	park_name VARCHAR(255) NOT NULL,
	seasonWeather VARCHAR(255) NOT NULL,
	latitude DECIMAL(8,2) NOT NULL,
	longitude DECIMAL(8,2) NOT NULL,
	ranking INTEGER (255) NOT NULL,
	visited BOOLEAN DEFAULT false,
	wishList BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

SELECT * FROM parks