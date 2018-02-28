-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-02-2018 a las 20:11:42
-- Versión del servidor: 5.6.26
-- Versión de PHP: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hospital`
--
DROP DATABASE IF EXISTS HOSPITAL;
CREATE DATABASE HOSPITAL;
USE HOSPITAL;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ambulancia`
--

CREATE TABLE IF NOT EXISTS `ambulancia` (
  `matricula` varchar(7) NOT NULL,
  `capacidad` int(4) NOT NULL,
  `marca` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ambulancia`
--

INSERT INTO `ambulancia` (`matricula`, `capacidad`, `marca`) VALUES
('2703JGG', 4522, 'Hyundai'),
('2703JPH', 4522, 'OPEL'),
('4544HHH', 5151, 'DFABVDF');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cita`
--

CREATE TABLE IF NOT EXISTS `cita` (
  `id` varchar(5) NOT NULL,
  `fecha` date NOT NULL,
  `num_colegiado` int(8) NOT NULL,
  `dni_paciente` varchar(9) NOT NULL,
  `hora` time NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `anulada` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cita`
--

INSERT INTO `cita` (`id`, `fecha`, `num_colegiado`, `dni_paciente`, `hora`, `descripcion`, `anulada`) VALUES
('0002', '2018-02-28', 9999, '12345678A', '12:00:00', 'Prueba2', 'NO'),
('005', '2018-02-28', 2125125, '512152', '13:00:00', 'FBDGHMFD', 'SÍ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicamento`
--

CREATE TABLE IF NOT EXISTS `medicamento` (
  `id` varchar(4) NOT NULL,
  `nombre` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `medicamento`
--

INSERT INTO `medicamento` (`id`, `nombre`) VALUES
('m1', 'Gelocatil'),
('m2', 'Nolotil'),
('m3', 'Dalcy'),
('m4', 'Paracetamol');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medico`
--

CREATE TABLE IF NOT EXISTS `medico` (
  `dni` varchar(9) NOT NULL,
  `nombre` varchar(25) NOT NULL,
  `apellidos` varchar(90) NOT NULL,
  `direccion` varchar(80) NOT NULL,
  `correo` varchar(70) NOT NULL,
  `telefono` int(9) NOT NULL,
  `num_colegiado` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `medico`
--

INSERT INTO `medico` (`dni`, `nombre`, `apellidos`, `direccion`, `correo`, `telefono`, `num_colegiado`) VALUES
('11111111S', 'Marina', 'Dominguez', 'calle lista', 'marina@dd.com', 654321987, 9999),
('99988877k', 'Antonio', 'Perez', 'calle serrano', 'ant@perez.com', 564213987, 1010101014);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE IF NOT EXISTS `paciente` (
  `dni` varchar(9) NOT NULL,
  `nombre` varchar(25) NOT NULL,
  `apellidos` varchar(90) NOT NULL,
  `direccion` varchar(80) NOT NULL,
  `correo` varchar(70) NOT NULL,
  `telefono` int(9) NOT NULL,
  `num_ss` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `paciente`
--

INSERT INTO `paciente` (`dni`, `nombre`, `apellidos`, `direccion`, `correo`, `telefono`, `num_ss`) VALUES
('12312312Q', 'Iván', 'García', 'calle corta', 'ivan@gmail.net', 876543219, 98765),
('12345678A', 'Valme', 'Serrano', 'calle nueva', 'valme@hml.com', 987654321, 1234),
('49091374J', 'Pepa', 'Pig', 'calle dibujos', 'pepa@cerda.com', 987456321, 2147483647);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prueba`
--

CREATE TABLE IF NOT EXISTS `prueba` (
  `id` varchar(3) NOT NULL,
  `hora` time NOT NULL,
  `fecha` date NOT NULL,
  `tipo` varchar(15) NOT NULL,
  `descripcion` varchar(145) NOT NULL,
  `num_colegiado` int(8) NOT NULL,
  `dni_paciente` varchar(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `prueba`
--

INSERT INTO `prueba` (`id`, `hora`, `fecha`, `tipo`, `descripcion`, `num_colegiado`, `dni_paciente`) VALUES
('000', '09:00:00', '2018-02-27', 'Análisis', 'Sangre a tope', 1010101014, '49091374J'),
('001', '14:00:00', '2018-03-01', 'Trombo', 'dcsgvbf v', 9999, '12345678A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tratamiento`
--

CREATE TABLE IF NOT EXISTS `tratamiento` (
  `id` varchar(3) NOT NULL,
  `posologia` varchar(40) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL,
  `paciente` varchar(9) NOT NULL,
  `medico` int(8) NOT NULL,
  `medicamento` varchar(4) NOT NULL,
  `instrucciones` varchar(140) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tratamiento`
--

INSERT INTO `tratamiento` (`id`, `posologia`, `fecha_inicio`, `fecha_fin`, `paciente`, `medico`, `medicamento`, `instrucciones`) VALUES
('002', 'gfbgnfx', '2018-02-26', '2018-03-05', '12312312Q', 9999, '0', 'dfbzgnagzdn'),
('008', 'prueba2', '2018-02-27', '2018-03-06', '12345678A', 1010101014, 'm2', 'f,vhkbjgfdsdf');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ambulancia`
--
ALTER TABLE `ambulancia`
  ADD PRIMARY KEY (`matricula`);

--
-- Indices de la tabla `cita`
--
ALTER TABLE `cita`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `medicamento`
--
ALTER TABLE `medicamento`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `medico`
--
ALTER TABLE `medico`
  ADD PRIMARY KEY (`dni`);

--
-- Indices de la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`dni`);

--
-- Indices de la tabla `prueba`
--
ALTER TABLE `prueba`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tratamiento`
--
ALTER TABLE `tratamiento`
  ADD KEY `fk_paciente_id` (`paciente`),
  ADD KEY `fk_medico_id` (`medico`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tratamiento`
--
ALTER TABLE `tratamiento`
  ADD CONSTRAINT `fk_paciente_id` FOREIGN KEY (`paciente`) REFERENCES `paciente` (`dni`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
