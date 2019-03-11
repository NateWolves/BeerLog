
CREATE DATABASE beers_db;
USE beers_db;

CREATE TABLE beers 
(
    id int NOT NULL AUTO_INCREMENT,
    beer_name VARCHAR(140) NOT NULL,
    beer_type VARCHAR(140) NOT NULL,
    brewery VARCHAR(140),
    notes VARCHAR(280),
    drank BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY(id)
);