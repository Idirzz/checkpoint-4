create table monsters (
  id int unsigned primary key auto_increment not null,
  picture_name varchar(50) not null,
  name varchar(50) not null UNIQUE,
  family varchar(50) not null,
  health int unsigned not null,
  action_points int unsigned not null,
  movement_points int unsigned not null,
  res_neu int not null,
  res_fo int not null,
  res_ine int not null,
  res_cha int not null,
  res_age int not null
);

insert into monsters(name, picture_name, family, health, action_points, movement_points, res_neu, res_fo, res_ine, res_cha, res_age)
values
  ("Bouftou", "bouftou.png", "Bouftous", 170, 5, 4, 1, 11, -14, -9, -16),
  ("Piou Rouge", "piou_rouge.png", "Pious", 49, 3, 3, 0, 0, 25, 0, 0),
  ("Bouftou2", "bouftou.png", "Bouftous", 170, 5, 4, 1, 11, -14, -9, -16),
  ("Bouftou3", "bouftou.png", "Bouftous", 170, 5, 4, 1, 11, -14, -9, -16);
