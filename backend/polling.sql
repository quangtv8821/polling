-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 22, 2022 at 06:04 AM
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
-- Table structure for table `is_votes`
--

CREATE TABLE `is_votes` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `vote_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `is_votes`
--

INSERT INTO `is_votes` (`id`, `user_id`, `vote_id`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 2, 1, 0, '2022-02-22 04:20:53', '2022-02-22 04:25:48'),
(3, 2, 2, 0, '2022-02-22 03:24:40', '2022-02-22 04:43:53'),
(4, 2, 3, 1, '2022-02-22 03:39:11', '2022-02-22 04:44:32'),
(5, 2, 4, 0, '2022-02-22 04:43:30', '2022-02-22 04:43:30'),
(6, 3, 1, 0, '2022-02-22 04:47:39', '2022-02-22 05:02:22'),
(7, 3, 2, 1, '2022-02-22 04:47:39', '2022-02-22 04:55:53'),
(8, 3, 3, 1, '2022-02-22 04:49:24', '2022-02-22 05:02:20'),
(9, 3, 4, 1, '2022-02-22 04:49:24', '2022-02-22 05:02:10'),
(10, 7, 1, 0, '2022-02-22 05:03:36', '2022-02-22 05:03:36'),
(11, 7, 2, 0, '2022-02-22 05:03:36', '2022-02-22 05:03:36'),
(12, 7, 4, 0, '2022-02-22 05:03:36', '2022-02-22 05:03:36');

-- --------------------------------------------------------

--
-- Table structure for table `polls`
--

CREATE TABLE `polls` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `total_vote` int(11) DEFAULT NULL,
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `polls`
--

INSERT INTO `polls` (`id`, `title`, `total_vote`, `start`, `end`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Bài đăng số 1', 4, '2022-02-22 15:00:00', '2022-02-26 10:00:00', 1, '2022-02-22 02:41:01', '2022-02-22 02:41:01'),
(2, 'Bài đăng số 2', 4, '2022-02-22 15:00:00', '2022-02-26 10:00:00', 2, '2022-02-22 02:41:28', '2022-02-22 02:41:28'),
(3, 'Bài đăng số 3', 3, '2022-02-22 15:00:00', '2022-02-27 10:00:00', 3, '2022-02-22 02:41:47', '2022-02-22 02:41:47');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(2, 'admin@rabiloo.com', '$2b$10$P3kaiyBZIYvg/0Ynl3TDTuZnngfJwnichLe6mjNeSHj3hH0TcZb46', 'admin', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'quangtv@rabiloo.com', '$2b$10$5SrU/V9kI7k0JTu6bGg/EuluKgjs55XhG7C0I2yDF5Gbfe0p01mbq', 'user', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'haily@rabiloo.com', '$2b$10$dcyRtTmhCMm4avktzPj2jef/b3eVbR4p.BmGaNlauKEI.ul6l/a0i', 'user', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'hoaden@rabiloo.com', '$2b$10$Q0WQDzy11pDto6lGfnkqOOkY0E9UUfsihuALBelsSz/dJwhrxbTy.', 'user', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'admin2@rabiloo.com', '$2b$10$1R8dECK0GjPjWQVFYqSNpOQN.3WWZyk9nTbvab6Qg3b6qDJeIB1UW', 'user', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'nebano@rabiloo.com', '$2b$10$PPHsreCcAVnR0MErYbtWCO/LYJGB1MIDEUn6xraFTmqKJ2DNDMWKe', 'user', '2022-02-22 01:28:40', '2022-02-22 01:28:40');

-- --------------------------------------------------------

--
-- Table structure for table `votes`
--

CREATE TABLE `votes` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `poll_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `votes`
--

INSERT INTO `votes` (`id`, `title`, `total`, `poll_id`, `createdAt`, `updatedAt`) VALUES
(1, 'Lựa chọn một', 0, 1, '2022-02-22 02:41:01', '2022-02-22 05:02:22'),
(2, 'Lựa chọn hai', 2, 1, '2022-02-22 02:41:01', '2022-02-22 04:55:53'),
(3, 'Lựa chọn ba', 2, 1, '2022-02-22 02:41:01', '2022-02-22 05:02:20'),
(4, 'Lựa chọn bốn', 1, 1, '2022-02-22 02:41:01', '2022-02-22 05:02:10'),
(5, 'Lựa chọn một', 0, 2, '2022-02-22 02:41:28', '2022-02-22 02:41:28'),
(6, 'Lựa chọn hai', 0, 2, '2022-02-22 02:41:28', '2022-02-22 02:41:28'),
(7, 'Lựa chọn ba', 0, 2, '2022-02-22 02:41:28', '2022-02-22 02:41:28'),
(8, 'Lựa chọn bốn', 0, 2, '2022-02-22 02:41:28', '2022-02-22 02:41:28'),
(9, 'Lựa chọn một', 0, 3, '2022-02-22 02:41:47', '2022-02-22 02:41:47'),
(10, 'Lựa chọn hai', 1, 3, '2022-02-22 02:41:47', '2022-02-22 03:07:01'),
(11, 'Lựa chọn ba', 0, 3, '2022-02-22 02:41:47', '2022-02-22 02:41:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `is_votes`
--
ALTER TABLE `is_votes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `polls`
--
ALTER TABLE `polls`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `votes`
--
ALTER TABLE `votes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `is_votes`
--
ALTER TABLE `is_votes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `polls`
--
ALTER TABLE `polls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `votes`
--
ALTER TABLE `votes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
