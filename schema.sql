DROP DATABASE IF EXISTS nationlParks_db;
CREATE DATABASE nationlParks_db;
USE nationlParks_db;

CREATE TABLE parks
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	state VARCHAR(255) NOT NULL,
  park_name VARCHAR(255) NOT NULL,
  seasonWeather VARCHAR(255) NOT NULL,
  latitude INTEGER(255) NOT NULL,
  longitude INTEGER(255) NOT NULL,
	visited BOOLEAN DEFAULT false,
  wishList BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);