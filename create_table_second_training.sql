CREATE TABLE `t_quiz` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question` TEXT NOT NULL,
  `question_img` TEXT NOT NULL,
  `question_type` TINYINT(2) NOT NULL,
  `choice1` TEXT NOT NULL,
  `choice2` TEXT NOT NULL,
  `choice3` TEXT,
  `choice4` TEXT,
  `choice5` TEXT,
  `choice6` TEXT,
  `choice7` TEXT,
  `choice8` TEXT,
  `choice9` TEXT,
  `choice10` TEXT,
  `answer_choice_no` TINYINT(2) NOT NULL,
  `create_date` datetime NOT NULL,
  `update_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into t_quiz values(null,1,'test1','yokohama','saitama','chiba','ibaraki',3,now(),now());
insert into t_quiz values(null,2,'test2','dena','seibu','lotte','kinchan',2,now(),now());
insert into t_quiz values(null,1,'test1','yokohama','saitama','chiba','ibaraki',3,now(),now());

CREATE TABLE `t_ranking` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(100) NOT NULL UNIQUE,
  `user_name` TEXT NOT NULL,
  `correct_score` TINYINT(3) NOT NULL default 0,
  `answer_clear_time` TINYINT(3) NOT NULL,
  `create_date` datetime NOT NULL,
  `update_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `t_result_comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `correct_percentage_range_min` TINYINT(3) NOT NULL,
  `correct_percentage_range_max` TINYINT(3) NOT NULL,
  `result_comment` TEXT NOT NULL,
  `create_date` datetime NOT NULL,
  `update_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `t_option` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `correct_image` TEXT NOT NULL,
  `incorrect_image` TEXT NOT NULL,
  `thanks_image` TEXT NOT NULL,
  `game_title_name` TEXT NOT NULL,
  `game_explain` TEXT NOT NULL,
  `create_date` datetime NOT NULL,
  `update_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
