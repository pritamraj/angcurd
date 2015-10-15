-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               5.5.44-0ubuntu0.14.04.1 - (Ubuntu)
-- Server OS:                    debian-linux-gnu
-- HeidiSQL Version:             8.3.0.4694
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table test.angularcode_customers
CREATE TABLE IF NOT EXISTS `angularcode_customers` (
  `customerNumber` int(11) NOT NULL AUTO_INCREMENT,
  `customerName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) DEFAULT NULL,
  `postalCode` varchar(15) DEFAULT NULL,
  `country` varchar(50) NOT NULL,
  PRIMARY KEY (`customerNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=119 DEFAULT CHARSET=latin1;

-- Dumping data for table test.angularcode_customers: ~5 rows (approximately)
/*!40000 ALTER TABLE `angularcode_customers` DISABLE KEYS */;
INSERT INTO `angularcode_customers` (`customerNumber`, `customerName`, `email`, `address`, `city`, `state`, `postalCode`, `country`) VALUES
	(103, 'Atelier graphique', 'Nantes@gmail.com', '54, rue Royale', 'Nantes', NULL, '44000', 'France'),
	(112, 'Signal Gift Stores', 'LasVegas@gmail.com', '8489 Strong St.', 'Las Vegas', 'NV', '83030', 'USA'),
	(114, 'Australian Collectors, Co.', 'Melbourne@gmail.com', '636 St Kilda Road', 'Melbourne', 'Victoria', '3004', 'Australia'),
	(117, 'akbar khan', 'akbar@f1soft.com', 'tetwetw', 'wqrrr', NULL, NULL, 'twqtqt'),
	(118, 'akbar khan', 'Melbourne@gmail.com', '636 St Kilda Road', 'Melbourne', NULL, NULL, 'Australia');
/*!40000 ALTER TABLE `angularcode_customers` ENABLE KEYS */;


-- Dumping structure for table test.customers_auth
CREATE TABLE IF NOT EXISTS `customers_auth` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `address` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=172 DEFAULT CHARSET=latin1;

-- Dumping data for table test.customers_auth: ~3 rows (approximately)
/*!40000 ALTER TABLE `customers_auth` DISABLE KEYS */;
INSERT INTO `customers_auth` (`uid`, `name`, `email`, `phone`, `password`, `address`, `city`, `created`) VALUES
	(169, 'Swadesh Behera', 'swadesh@gmail.com', '1234567890', '$2a$10$251b3c3d020155f7553c1ugKfEH04BD6nbCbo78AIDVOqS3GVYQ46', '4092 Furth Circle', 'Singapore', '2014-08-31 18:21:20'),
	(170, 'pritam', 'pritam.rajbanshi@gmail.com', '9874545749', '$2a$10$8d9ad50041251ac83f036upm6ul92zf00rWXAmxUExSN434CqSUZS', 'kathmandu', '', '2015-10-11 12:36:05'),
	(171, 'test', 'pritam.rajbansi@gmail.com', '9841454857', '$2a$10$05548c50d4525e618677fuIwUw1Mimn/.wVGTVXnkfrZPRkoz1B8u', 'kathmandui', '', '2015-10-14 15:35:25');
/*!40000 ALTER TABLE `customers_auth` ENABLE KEYS */;


-- Dumping structure for table test.f1_groups
CREATE TABLE IF NOT EXISTS `f1_groups` (
  `id` int(11) DEFAULT NULL,
  `group_name` varchar(50) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table test.f1_groups: ~1 rows (approximately)
/*!40000 ALTER TABLE `f1_groups` DISABLE KEYS */;
INSERT INTO `f1_groups` (`id`, `group_name`, `status`) VALUES
	(1, 'superadmin', 1);
/*!40000 ALTER TABLE `f1_groups` ENABLE KEYS */;


-- Dumping structure for table test.f1_options
CREATE TABLE IF NOT EXISTS `f1_options` (
  `id` int(9) NOT NULL AUTO_INCREMENT,
  `option_name` varchar(100) NOT NULL,
  `option_value` text NOT NULL,
  `autoload` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`,`option_name`),
  UNIQUE KEY `IDX_option_name` (`option_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table test.f1_options: ~0 rows (approximately)
/*!40000 ALTER TABLE `f1_options` DISABLE KEYS */;
/*!40000 ALTER TABLE `f1_options` ENABLE KEYS */;


-- Dumping structure for table test.f1_reports
CREATE TABLE IF NOT EXISTS `f1_reports` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` tinytext,
  `sqlquery` longtext NOT NULL,
  `usrgroups` tinytext NOT NULL COMMENT '(DC2Type:array)',
  `reportgroup_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_E64C5181989D9B62` (`slug`),
  KEY `IDX_E64C5181EA85453A` (`reportgroup_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table test.f1_reports: ~0 rows (approximately)
/*!40000 ALTER TABLE `f1_reports` DISABLE KEYS */;
/*!40000 ALTER TABLE `f1_reports` ENABLE KEYS */;


-- Dumping structure for table test.f1_report_groups
CREATE TABLE IF NOT EXISTS `f1_report_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_54420009989D9B62` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table test.f1_report_groups: ~0 rows (approximately)
/*!40000 ALTER TABLE `f1_report_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `f1_report_groups` ENABLE KEYS */;


-- Dumping structure for table test.f1_sessions
CREATE TABLE IF NOT EXISTS `f1_sessions` (
  `session_id` varchar(40) NOT NULL DEFAULT '0',
  `ip_address` varchar(16) NOT NULL DEFAULT '0',
  `user_agent` varchar(255) NOT NULL,
  `last_activity` int(10) unsigned NOT NULL DEFAULT '0',
  `user_data` text NOT NULL,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table test.f1_sessions: ~0 rows (approximately)
/*!40000 ALTER TABLE `f1_sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `f1_sessions` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
