-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 04-12-2018 a las 06:10:03
-- Versión del servidor: 5.6.12
-- Versión de PHP: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `elviro_pc`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `elviro_pc`
--

CREATE TABLE IF NOT EXISTS `elviro_pc` (
  `id_accesorio` varchar(10) NOT NULL,
  `accesorio` varchar(30) NOT NULL,
  `cantidad` int(5) NOT NULL,
  `precio` float NOT NULL,
  `existencia` int(5) NOT NULL,
  PRIMARY KEY (`id_accesorio`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `elviro_pc`
--

INSERT INTO `elviro_pc` (`id_accesorio`, `accesorio`, `cantidad`, `precio`, `existencia`) VALUES
('A-123', 'Audifonos', 5, 500, 50),
('B-456', 'USB', 1, 120, 150),
('C-300', 'Bocinas', 10, 500, 1),
('E-888', 'Tecladogamer', 1, 285, 15);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
