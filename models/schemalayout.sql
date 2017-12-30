CREATE DATABASE IF NOT EXISTS test;

-- CREATE TABLE IF NOT EXISTS Places(
--   id INT Primary Key AUTO_INCREMENT,
--   date DATE NOT NULL,
--   time TIME NOT NULL,
--   name VARCHAR(50) NOT NULL,
--   address VARCHAR(50) NOT NULL);

  CREATE TABLE IF NOT EXISTS Places(
    id INT Primary Key AUTO_INCREMENT,
    trip_id VARCHAR(50),
    date DATE NOT NULL,
    time TIME NOT NULL,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL);

  CREATE TABLE IF NOT EXISTS Users(
    id INT Primary Key AUTO_INCREMENT,
    Firstname VARCHAR(50),
    Lastname VARCHAR(50),
    Password VARCHAR(50),
    userid VARCHAR(50);

  CREATE TABLE IF NOT EXISTS Trips(
    id INT Primary Key AUTO_INCREMENT,
    trip_id VARCHAR(50),
    trip_name VARCHAR(50),
    date_start DATE NOT NULL,
    date_end DATE NOT NULL,
    creatoruserid VARCHAR(50),
    friend1userid VARCHAR(50),
    friend2userid VARCHAR(50),
    friend3userid VARCHAR(50),
    friend4userid VARCHAR(50));

  CREATE TABLE IF NOT EXISTS Destinations(
    id INT Primary KEY AUTO_INCREMENT,
    Name VARCHAR(50),
    Address VARCHAR (50),
    Activities VARCHAR(50);
  )
-- INSERT INTO Places (date, time, name, address) VALUES ('2017-12-15', '15:00:00', 'beer', 'Belltown')
-- {"date":"2017-12-15","time":"15:00:00","name":"beer","address":"Belltown"}
