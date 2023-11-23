CREATE DATABASE inventory_services;
use inventory_services;

CREATE TABLE `products` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `title` varchar(100) NOT NULL,
  `price` double NOT NULL,
  `stock` bigint(20) unsigned NOT NULL,
  `status` varchar(10) NOT NULL
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;