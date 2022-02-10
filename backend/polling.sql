-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 10, 2022 at 11:35 AM
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
(2, 'Bài vote thứ 2', 2, '2022-02-10 15:59:02', '2022-02-10 16:20:10', 1),
(3, 'Bài vote thứ 3', 2, '2022-02-10 12:00:00', '2022-02-10 16:00:00', 1),
(4, 'Bài đăng số 4', 3, '2022-02-11 12:00:00', '2022-02-11 16:00:00', 1),
(5, 'Bài đăng số 5', 3, '2022-02-11 12:00:00', '2022-02-11 16:00:00', 1),
(10, 'Bài đăng số 5', 3, '2022-02-11 12:00:00', '2022-02-11 17:00:00', 1),
(11, 'Bài đăng số 10', 3, '2022-02-11 12:00:00', '2022-02-11 17:00:00', 1),
(12, 'Bài đăng số 12', 3, '2022-02-11 12:00:00', '2022-02-11 17:00:00', 1),
(13, 'Bài đăng số 13', 3, '2022-02-11 12:00:00', '2022-02-11 17:00:00', 1),
(14, 'Bài đăng số 14', 3, '2022-02-11 12:00:00', '2022-02-11 17:00:00', 1),
(15, 'Bài đăng số 15', 4, '2022-02-11 12:00:00', '2022-02-11 17:00:00', 1),
(16, 'Bài vote thứ 16', 2, '2022-02-10 17:18:32', '2022-02-10 11:18:13', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` tinyint(3) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`) VALUES
(1, 'admin@rabiloo.com', '123456');

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
(7, 'Lựa chọn 3', 10, 13),
(8, 'một', 0, 14),
(9, 'hai', 0, 14),
(10, 'ba', 0, 14),
(11, 'Lựa chọn một', 0, 15),
(12, 'Lựa chọn hai', 3, 15),
(13, 'Lựa chọn ba', 0, 15),
(14, 'Lựa chọn bốn', 0, 15);

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for table `poll`
--
ALTER TABLE `poll`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `vote`
--
ALTER TABLE `vote`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
