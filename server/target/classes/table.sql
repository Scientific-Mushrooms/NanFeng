CREATE TABLE `user` (
  `id` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `follower` int(11) DEFAULT NULL,
  `following` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `post` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE `squad_member` (
  `id` varchar(255) NOT NULL,
  `contribution` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `squad_id` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE `squad` (
  `id` varchar(255) NOT NULL,
  `bug_num` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `finished_num` int(11) DEFAULT NULL,
  `member_num` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `pending_num` int(11) DEFAULT NULL,
  `progressing_num` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;