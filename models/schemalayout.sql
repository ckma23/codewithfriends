CREATE DATABASE IF NOT EXISTS test;

CREATE TABLE IF NOT EXISTS Places(
  id INT Primary Key AUTO_INCREMENT,
  date DATE NOT NULL,
  time TIME NOT NULL,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(50) NOT NULL);


  CREATE TABLE IF NOT EXISTS Users(
    id INT Primary Key AUTO_INCREMENT,
    Firstname VARCHAR(50),
    Lastname VARCHAR(50));


-- INSERT INTO Places (date, time, name, address) VALUES ('2017-12-15', '15:00:00', 'beer', 'Belltown')
-- {"date":"2017-12-15","time":"15:00:00","name":"beer","address":"Belltown"}