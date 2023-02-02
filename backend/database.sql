CREATE TABLE item (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

mysql> CREATE TABLE `planete` (
     `id` INT NOT NULL AUTO_INCREMENT,
     `nom` VARCHAR(100) NOT NULL,
     `distance` INT NOT NULL,
     `temp` INT NOT NULL,
     `prix` INT NOT NULL,
     `image` VARCHAR(255) NOT NULL,
     PRIMARY KEY (`id`)
     );


mysql> CREATE TABLE `transport` (
     `id` INT NOT NULL AUTO_INCREMENT,
     `nom` VARCHAR(50),
     `image` VARCHAR(255),
     PRIMARY KEY (`id`)
     );