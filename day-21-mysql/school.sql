create database school;

use school;

CREATE TABLE users (
  id int PRIMARY KEY AUTO_INCREMENT,
  name varchar(45),
  email varchar(45),
  birth_date date,
  exschool_id int,
  FOREIGN KEY (exschool_id) REFERENCES exschool (id)
);

CREATE TABLE exschool (
  id int PRIMARY KEY AUTO_INCREMENT,
  name varchar(45)
);

INSERT INTO users (name, email, birth_date, exschool_id) VALUES 
('Alpha','alpha@gmail.com','2000-12-12',1),
('Beta','beta@gmail.com','2000-11-11',3),
('Charlie','chalie@gmail.com','2000-11-11',4),
('Delta','delta@gmail.com','2000-11-11',2),
('Echo','echo@gmail.com','2000-11-11',6),
('Foxtrot','foxtrot@gmail.com','2000-11-11',6);


INSERT INTO exschool (name) VALUES 
(Kasti),
(Tenis),
(Futsal),
(Basket),
(Drama),
(Band);

select * from users;
select * from exschool;

select 
users.id,
users.name,
users.email,
users.birth_date,
exschool.name as exschool_name
from users join exschool 
on users.exschool_id = exschool.id;