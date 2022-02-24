-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th2 24, 2022 lúc 11:03 AM
-- Phiên bản máy phục vụ: 10.4.22-MariaDB
-- Phiên bản PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `polling`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `is_votes`
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
-- Đang đổ dữ liệu cho bảng `is_votes`
--

INSERT INTO `is_votes` (`id`, `user_id`, `vote_id`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 2, 1, 1, '2022-02-22 04:20:53', '2022-02-24 08:06:17'),
(3, 2, 2, 0, '2022-02-22 03:24:40', '2022-02-24 08:09:55'),
(4, 2, 3, 1, '2022-02-22 03:39:11', '2022-02-24 08:10:46'),
(5, 2, 4, 1, '2022-02-22 04:43:30', '2022-02-24 08:02:30'),
(6, 3, 1, 0, '2022-02-22 04:47:39', '2022-02-24 08:12:25'),
(7, 3, 2, 1, '2022-02-22 04:47:39', '2022-02-24 08:16:48'),
(8, 3, 3, 1, '2022-02-22 04:49:24', '2022-02-24 08:16:49'),
(9, 3, 4, 1, '2022-02-22 04:49:24', '2022-02-24 07:53:30'),
(22, 7, 1, 0, '2022-02-22 12:15:29', '2022-02-22 12:15:29'),
(23, 7, 3, 0, '2022-02-22 12:15:29', '2022-02-22 12:15:29'),
(24, 7, 4, 0, '2022-02-22 12:15:29', '2022-02-22 12:15:29'),
(25, 7, 2, 0, '2022-02-22 12:15:29', '2022-02-22 12:15:29'),
(53, 4, 1, 0, '2022-02-22 13:33:14', '2022-02-22 13:33:14'),
(54, 4, 2, 0, '2022-02-22 13:33:14', '2022-02-22 13:33:14'),
(55, 4, 3, 0, '2022-02-22 13:33:14', '2022-02-22 13:33:14'),
(56, 4, 4, 0, '2022-02-22 13:33:14', '2022-02-22 13:33:14'),
(57, 5, 1, 0, '2022-02-22 13:34:03', '2022-02-22 13:34:03'),
(58, 5, 2, 0, '2022-02-22 13:34:03', '2022-02-22 13:34:03'),
(59, 5, 3, 0, '2022-02-22 13:34:03', '2022-02-22 13:34:03'),
(60, 5, 4, 0, '2022-02-22 13:34:03', '2022-02-22 13:34:03'),
(61, 3, 0, 0, '2022-02-23 14:53:15', '2022-02-23 14:53:15'),
(62, 3, 0, 0, '2022-02-23 14:53:15', '2022-02-23 14:53:15'),
(63, 3, 0, 0, '2022-02-23 14:53:15', '2022-02-23 14:53:15'),
(64, 2, 28, 1, '2022-02-24 09:42:58', '2022-02-24 09:50:54'),
(65, 2, 27, 0, '2022-02-24 09:43:16', '2022-02-24 09:43:16'),
(66, 2, 29, 1, '2022-02-24 09:43:16', '2022-02-24 09:50:53'),
(69, 3, 27, 1, '2022-02-24 09:51:07', '2022-02-24 09:52:56'),
(70, 3, 29, 1, '2022-02-24 09:51:07', '2022-02-24 10:00:24'),
(71, 3, 28, 1, '2022-02-24 09:51:07', '2022-02-24 10:01:04'),
(72, 7, 5, 0, '2022-02-24 09:54:35', '2022-02-24 09:54:35'),
(73, 7, 6, 0, '2022-02-24 09:55:12', '2022-02-24 09:55:12'),
(74, 7, 7, 0, '2022-02-24 09:55:18', '2022-02-24 09:55:18'),
(77, 5, 27, 0, '2022-02-24 09:59:22', '2022-02-24 09:59:22'),
(78, 5, 28, 1, '2022-02-24 09:59:22', '2022-02-24 10:01:21'),
(79, 5, 29, 1, '2022-02-24 09:59:22', '2022-02-24 10:01:24');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `polls`
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
-- Đang đổ dữ liệu cho bảng `polls`
--

INSERT INTO `polls` (`id`, `title`, `total_vote`, `start`, `end`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Bài đăng số 1', 4, '2022-02-22 15:00:00', '2022-02-23 10:00:00', 2, '2022-02-22 02:41:01', '2022-02-22 13:37:07'),
(2, 'Bài đăng số 2', 4, '2022-02-22 15:00:00', '2022-02-25 10:00:00', 1, '2022-02-22 02:41:28', '2022-02-22 02:41:28'),
(3, 'Bài đăng số 3', 3, '2022-02-22 15:00:00', '2022-02-27 10:00:00', 1, '2022-02-22 02:41:47', '2022-02-22 14:03:37'),
(7, 'Bài đăng số 4', 2, '2022-02-25 14:06:00', '2022-03-03 14:06:00', 3, '2022-02-22 14:07:12', '2022-02-22 14:07:12'),
(8, 'Bài đăng số 5', 2, '2022-02-27 14:06:00', '2022-03-03 14:06:00', 3, '2022-02-22 14:07:38', '2022-02-22 14:07:38'),
(10, 'Bài đăng số 6', 2, '2022-02-25 09:19:00', '2022-03-12 09:47:00', 3, '2022-02-24 09:41:48', '2022-02-24 09:41:48'),
(11, 'Bài đăng số 7', 3, '2022-02-24 09:00:00', '2022-03-12 09:30:00', 1, '2022-02-24 09:42:55', '2022-02-24 09:42:55');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
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
-- Đang đổ dữ liệu cho bảng `users`
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
-- Cấu trúc bảng cho bảng `votes`
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
-- Đang đổ dữ liệu cho bảng `votes`
--

INSERT INTO `votes` (`id`, `title`, `total`, `poll_id`, `createdAt`, `updatedAt`) VALUES
(1, 'Lựa chọn một', 3, 1, '2022-02-22 02:41:01', '2022-02-24 08:12:25'),
(2, 'Lựa chọn hai', 2, 1, '2022-02-22 02:41:01', '2022-02-24 08:16:48'),
(3, 'Lựa chọn ba', 6, 1, '2022-02-22 02:41:01', '2022-02-24 08:16:49'),
(4, 'Lựa chọn bốn', 4, 1, '2022-02-22 02:41:01', '2022-02-24 08:02:30'),
(5, 'Lựa chọn một', 0, 2, '2022-02-22 02:41:28', '2022-02-22 02:41:28'),
(6, 'Lựa chọn hai', 0, 2, '2022-02-22 02:41:28', '2022-02-22 02:41:28'),
(7, 'Lựa chọn ba', 0, 2, '2022-02-22 02:41:28', '2022-02-22 02:41:28'),
(8, 'Lựa chọn bốn', 0, 2, '2022-02-22 02:41:28', '2022-02-22 02:41:28'),
(9, 'Lựa chọn một', 0, 3, '2022-02-22 02:41:47', '2022-02-22 02:41:47'),
(10, 'Lựa chọn hai', 1, 3, '2022-02-22 02:41:47', '2022-02-22 03:07:01'),
(11, 'Lựa chọn ba', 0, 3, '2022-02-22 02:41:47', '2022-02-22 02:41:47'),
(25, 'Lựa chọn 1', 0, 10, '2022-02-24 09:41:48', '2022-02-24 09:41:48'),
(26, 'Lựa chọn 2', 0, 10, '2022-02-24 09:41:48', '2022-02-24 09:41:48'),
(27, 'Lựa chọn 1', 1, 11, '2022-02-24 09:42:55', '2022-02-24 09:52:56'),
(28, 'Lựa chọn 2', 3, 11, '2022-02-24 09:42:55', '2022-02-24 10:01:21'),
(29, 'Lựa chọn 3', 3, 11, '2022-02-24 09:42:55', '2022-02-24 10:01:24');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `is_votes`
--
ALTER TABLE `is_votes`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `polls`
--
ALTER TABLE `polls`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `votes`
--
ALTER TABLE `votes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `is_votes`
--
ALTER TABLE `is_votes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- AUTO_INCREMENT cho bảng `polls`
--
ALTER TABLE `polls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `votes`
--
ALTER TABLE `votes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

DELIMITER $$
--
-- Sự kiện
--
CREATE DEFINER=`root`@`localhost` EVENT `change_status_end` ON SCHEDULE EVERY 1 SECOND STARTS '2022-02-24 16:29:12' ON COMPLETION NOT PRESERVE ENABLE COMMENT 'change_status_end' DO UPDATE polls SET polls.status = '2' WHERE polls.end < NOW()$$

CREATE DEFINER=`root`@`localhost` EVENT `change_status_recent` ON SCHEDULE EVERY 1 SECOND STARTS '2022-02-24 16:32:50' ON COMPLETION NOT PRESERVE ENABLE COMMENT 'change_status_recent.' DO UPDATE polls SET polls.status = '1' WHERE NOW() > polls.start AND NOW() < polls.end$$

CREATE DEFINER=`root`@`localhost` EVENT `change_status_upcoming` ON SCHEDULE EVERY 1 SECOND STARTS '2022-02-24 16:35:12' ON COMPLETION NOT PRESERVE ENABLE COMMENT 'change_status_upcoming' DO UPDATE polls SET polls.status = '3' WHERE NOW() < polls.start$$

DELIMITER ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
