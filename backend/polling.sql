-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 17, 2022 at 11:37 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `polling`
--

-- --------------------------------------------------------

--
-- Table structure for table `is_voted`
--

CREATE TABLE `is_voted` (
  `id` tinyint(3) NOT NULL,
  `id_user` tinyint(3) NOT NULL,
  `id_vote` tinyint(3) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `is_voted`
--

INSERT INTO `is_voted` (`id`, `id_user`, `id_vote`, `status`) VALUES
(1, 6, 8, 1),
(2, 6, 31, 1),
(3, 6, 32, 1),
(4, 7, 31, 1),
(5, 7, 32, 1),
(8, 8, 31, 0),
(9, 8, 32, 0),
(16, 9, 31, 0),
(17, 9, 32, 0),
(18, 17, 31, 1),
(19, 17, 32, 0);

-- --------------------------------------------------------

--
-- Table structure for table `poll`
--

CREATE TABLE `poll` (
  `id` tinyint(3) NOT NULL,
  `title` varchar(30) NOT NULL,
  `total_vote` int(11) NOT NULL,
  `start` datetime NOT NULL DEFAULT current_timestamp(),
  `end` datetime NOT NULL,
  `status` tinyint(3) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `poll`
--

INSERT INTO `poll` (`id`, `title`, `total_vote`, `start`, `end`, `status`) VALUES
(14, 'Bài đăng số 14', 3, '2022-02-11 12:00:00', '2022-02-11 17:00:00', 2),
(15, 'Bài đăng số 15', 4, '2022-02-11 12:00:00', '2022-02-11 17:00:00', 2),
(20, 'Bài đăng số 20', 4, '2022-02-11 12:00:00', '2022-02-11 17:00:00', 2),
(21, 'Bài đăng số 21', 2, '2022-02-11 12:00:00', '2022-02-11 17:00:00', 2),
(22, 'Bài đăng số 22', 4, '2022-02-11 12:00:00', '2022-02-11 17:00:00', 2),
(23, 'Bài đăng số 23', 4, '2022-02-11 12:00:00', '2022-02-11 17:00:00', 2),
(24, 'Bài đăng số 33', 2, '2022-02-17 13:07:00', '2022-02-18 13:07:00', 1),
(25, 'Bài vote thứ 34', 2, '2022-02-18 13:00:00', '2022-02-20 14:00:00', 3),
(27, 'Bài đăng số 35', 2, '2022-02-18 13:00:00', '2022-02-20 14:00:00', 3),
(28, 'Bài đăng số 36', 4, '2022-02-17 14:00:00', '2022-02-17 14:03:00', 2),
(35, 'Bài đăng 37', 2, '2022-02-20 15:19:00', '2022-02-22 15:19:00', 3),
(36, 'Bài đăng 38', 2, '2022-02-20 15:19:00', '2022-02-22 15:19:00', 3),
(37, 'Bài đăng 39', 2, '2022-02-20 15:19:00', '2022-02-22 15:19:00', 3);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` tinyint(3) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(80) NOT NULL,
  `role` varchar(10) NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `role`) VALUES
(6, 'admin@rabiloo.com', '$2b$10$P3kaiyBZIYvg/0Ynl3TDTuZnngfJwnichLe6mjNeSHj3hH0TcZb46', 'admin'),
(7, 'quangtv@rabiloo.com', '$2b$10$5SrU/V9kI7k0JTu6bGg/EuluKgjs55XhG7C0I2yDF5Gbfe0p01mbq', 'user'),
(8, 'haily@rabiloo.com', '$2b$10$dcyRtTmhCMm4avktzPj2jef/b3eVbR4p.BmGaNlauKEI.ul6l/a0i', 'user'),
(9, 'hoaden@rabiloo.com', '$2b$10$Q0WQDzy11pDto6lGfnkqOOkY0E9UUfsihuALBelsSz/dJwhrxbTy.', 'user'),
(17, 'admin2@rabiloo.com', '$2b$10$1R8dECK0GjPjWQVFYqSNpOQN.3WWZyk9nTbvab6Qg3b6qDJeIB1UW', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `vote`
--

CREATE TABLE `vote` (
  `id` tinyint(3) NOT NULL,
  `title` varchar(30) NOT NULL,
  `total` int(11) NOT NULL DEFAULT 0,
  `id_poll` tinyint(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vote`
--

INSERT INTO `vote` (`id`, `title`, `total`, `id_poll`) VALUES
(8, 'một', 0, 14),
(9, 'hai', 2, 14),
(10, 'ba', 0, 14),
(11, 'Lựa chọn một', 0, 15),
(12, 'Lựa chọn hai', 5, 15),
(13, 'Lựa chọn ba', 1, 15),
(14, 'Lựa chọn bốn', 6, 15),
(17, 'Lựa chọn một', 1, 20),
(18, 'Lựa chọn hai', 1, 20),
(19, 'Lựa chọn ba', 1, 20),
(20, 'Lựa chọn bốn 4.1', 0, 20),
(21, 'Lựa chọn một', 1, 21),
(22, 'Lựa chọn hai', 0, 21),
(23, 'Lựa chọn một', 3, 22),
(24, 'Lựa chọn hai', 2, 22),
(25, 'Lựa chọn ba', 3, 22),
(26, 'Lựa chọn bốn', 0, 22),
(27, 'Lựa chọn một', 0, 23),
(28, 'Lựa chọn hai', 0, 23),
(29, 'Lựa chọn ba', 0, 23),
(30, 'Lựa chọn bốn', 0, 23),
(31, 'Lựa chọn 1', 4, 24),
(32, 'Lựa chọn 2', 12, 24),
(33, 'Lựa chọn 1', 0, 25),
(34, 'Lựa chọn 2', 0, 25),
(35, 'Lựa chọn 1', 0, 26),
(36, 'Lựa chọn 2', 0, 26),
(37, 'một', 0, 27),
(38, 'hai', 0, 27),
(39, 'Lựa chọn 1', 1, 28),
(40, 'Lựa chọn 2', 1, 28),
(41, 'Lựa chọn 3', 5, 28),
(42, 'Lựa chọn 4', 1, 28),
(43, 'Lựa chọn 1', 0, 29),
(44, 'Lựa chọn 2', 0, 29),
(45, 'Lựa chọn 1', 0, 30),
(46, 'Lựa chọn 2', 0, 30),
(47, 'Lựa chọn 1', 0, 31),
(48, 'Lựa chọn 2', 0, 31),
(49, 'Lựa chọn 1', 0, 32),
(50, 'Lựa chọn 2', 0, 32),
(51, 'Lựa chọn 1', 0, 33),
(52, 'Lựa chọn 2', 0, 33),
(53, 'Lựa chọn 1', 0, 34),
(54, 'Lựa chọn 2', 0, 34),
(55, 'một', 0, 35),
(56, 'hai', 0, 35),
(57, 'một', 0, 36),
(58, 'hai', 0, 36),
(59, 'một', 0, 37),
(60, 'hai', 0, 37);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `is_voted`
--
ALTER TABLE `is_voted`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `poll`
--
ALTER TABLE `poll`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vote`
--
ALTER TABLE `vote`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `is_voted`
--
ALTER TABLE `is_voted`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `poll`
--
ALTER TABLE `poll`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `vote`
--
ALTER TABLE `vote`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

DELIMITER $$
--
-- Events
--
CREATE DEFINER=`root`@`localhost` EVENT `change_status_end` ON SCHEDULE EVERY 1 SECOND STARTS '2022-02-17 13:27:28' ON COMPLETION NOT PRESERVE ENABLE DO UPDATE poll SET status = 2 WHERE NOW() > end$$

CREATE DEFINER=`root`@`localhost` EVENT `change_status_recent` ON SCHEDULE EVERY 1 SECOND STARTS '2022-02-17 13:56:12' ON COMPLETION NOT PRESERVE ENABLE DO UPDATE poll set status = 1 WHERE NOW() <= end AND NOW() >= start$$

DELIMITER ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
