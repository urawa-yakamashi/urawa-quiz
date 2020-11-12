CREATE TABLE `t_result_comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `correct_percentage_range_min` TINYINT(3) NOT NULL,
  `correct_percentage_range_max` TINYINT(3) NOT NULL,
  `result_comment` TEXT NOT NULL,
  `create_date` datetime NOT NULL,
  `update_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;