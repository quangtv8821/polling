-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th3 01, 2022 lúc 04:53 AM
-- Phiên bản máy phục vụ: 10.4.22-MariaDB
-- Phiên bản PHP: 8.1.2

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
  `userId` int(11) DEFAULT NULL,
  `voteId` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `is_votes`
--

INSERT INTO `is_votes` (`id`, `userId`, `voteId`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 2, 2, 1, '2022-02-28 12:33:39', '2022-02-28 12:33:41'),
(2, 2, 1, 1, '2022-02-28 12:33:39', '2022-02-28 12:33:40'),
(3, 2, 3, 1, '2022-02-28 12:33:39', '2022-02-28 12:33:41'),
(4, 2, 4, 0, '2022-02-28 12:33:39', '2022-03-01 02:43:27'),
(5, 2, 5, 0, '2022-02-28 12:33:44', '2022-02-28 12:33:44'),
(6, 2, 6, 1, '2022-02-28 12:33:44', '2022-02-28 12:33:46'),
(7, 2, 7, 1, '2022-02-28 12:33:44', '2022-02-28 12:33:45'),
(8, 3, 7, 0, '2022-02-28 12:33:56', '2022-02-28 12:33:56'),
(9, 3, 5, 1, '2022-02-28 12:33:56', '2022-02-28 12:33:57'),
(10, 3, 6, 1, '2022-02-28 12:33:56', '2022-02-28 12:33:57'),
(11, 3, 1, 0, '2022-02-28 12:34:01', '2022-02-28 13:15:41'),
(12, 3, 2, 1, '2022-02-28 12:34:01', '2022-02-28 12:34:03'),
(13, 3, 4, 1, '2022-02-28 12:34:01', '2022-02-28 13:02:23'),
(14, 3, 3, 1, '2022-02-28 12:34:01', '2022-02-28 12:34:02');

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
(1, 'Bài đăng số 1', 4, '2022-02-11 05:00:00', '2022-03-11 10:00:00', 1, '2022-02-28 11:41:32', '2022-02-28 11:41:32'),
(2, 'Bài đăng số 2', 3, '2022-02-11 05:00:00', '2022-03-12 10:00:00', 1, '2022-02-28 11:41:47', '2022-02-28 11:41:47'),
(3, 'Bài vote số 3', 3, '2022-02-28 03:45:00', '2022-03-01 04:30:00', 2, '2022-03-01 03:46:23', '2022-03-01 03:46:23'),
(4, 'Bài đăng số 4', 4, '2022-03-04 03:47:00', '2022-03-26 03:47:00', 3, '2022-03-01 03:47:39', '2022-03-01 03:47:39'),
(5, 'Bài đăng số 5', 3, '2022-04-10 03:57:00', '2022-04-23 03:52:00', 3, '2022-03-01 03:53:17', '2022-03-01 03:53:17');

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
(5, 'hoaden@rabiloo.com', '$2b$10$Q0WQDzy11pDto6lGfnkqOOkY0E9UUfsihuALBelsSz/dJwhrxbTy.', 'user', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `votes`
--

CREATE TABLE `votes` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `pollId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `votes`
--

INSERT INTO `votes` (`id`, `title`, `total`, `pollId`, `createdAt`, `updatedAt`) VALUES
(1, 'Lựa chọn một', 2, 1, '2022-02-28 11:41:32', '2022-02-28 13:15:41'),
(2, 'Lựa chọn hai', 4, 1, '2022-02-28 11:41:32', '2022-02-28 12:34:03'),
(3, 'Lựa chọn ba', 3, 1, '2022-02-28 11:41:32', '2022-02-28 12:34:02'),
(4, 'Lựa chọn bốn', 1, 1, '2022-02-28 11:41:32', '2022-03-01 02:43:27'),
(5, 'Lựa chọn một', 1, 2, '2022-02-28 11:41:47', '2022-02-28 12:33:57'),
(6, 'Lựa chọn hai', 2, 2, '2022-02-28 11:41:47', '2022-02-28 12:33:57'),
(7, 'Lựa chọn ba', 1, 2, '2022-02-28 11:41:47', '2022-02-28 12:33:45'),
(8, 'Lựa chọn 1', 0, 3, '2022-03-01 03:46:23', '2022-03-01 03:46:23'),
(9, 'Lựa chọn 2', 0, 3, '2022-03-01 03:46:23', '2022-03-01 03:46:23'),
(10, 'Lựa chọn 3', 0, 3, '2022-03-01 03:46:23', '2022-03-01 03:46:23'),
(11, 'Lựa chọn 1', 0, 4, '2022-03-01 03:47:39', '2022-03-01 03:47:39'),
(12, 'Lựa chọn 2', 0, 4, '2022-03-01 03:47:39', '2022-03-01 03:47:39'),
(13, 'Lựa chọn 3', 0, 4, '2022-03-01 03:47:39', '2022-03-01 03:47:39'),
(14, 'Lựa chọn 4', 0, 4, '2022-03-01 03:47:39', '2022-03-01 03:47:39'),
(15, 'Lựa chọn 1', 0, 5, '2022-03-01 03:53:17', '2022-03-01 03:53:17'),
(16, 'Lựa chọn 2', 0, 5, '2022-03-01 03:53:17', '2022-03-01 03:53:17'),
(17, 'Lựa chọn 3', 0, 5, '2022-03-01 03:53:17', '2022-03-01 03:53:17');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `is_votes`
--
ALTER TABLE `is_votes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `voteId` (`voteId`);

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
  ADD PRIMARY KEY (`id`),
  ADD KEY `pollId` (`pollId`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `is_votes`
--
ALTER TABLE `is_votes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `polls`
--
ALTER TABLE `polls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `votes`
--
ALTER TABLE `votes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `is_votes`
--
ALTER TABLE `is_votes`
  ADD CONSTRAINT `is_votes_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `is_votes_ibfk_2` FOREIGN KEY (`voteId`) REFERENCES `votes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `votes`
--
ALTER TABLE `votes`
  ADD CONSTRAINT `votes_ibfk_1` FOREIGN KEY (`pollId`) REFERENCES `polls` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

DELIMITER $$
--
-- Sự kiện
--
CREATE DEFINER=`root`@`localhost` EVENT `change_status_end` ON SCHEDULE EVERY 1 SECOND STARTS '2022-02-24 16:29:12' ON COMPLETION NOT PRESERVE ENABLE COMMENT 'change_status_end' DO UPDATE polls SET polls.status = '2' WHERE polls.end < NOW()$$

CREATE DEFINER=`root`@`localhost` EVENT `change_status_recent` ON SCHEDULE EVERY 1 SECOND STARTS '2022-02-24 16:32:50' ON COMPLETION NOT PRESERVE ENABLE COMMENT 'change_status_recent' DO UPDATE polls SET polls.status = '1' WHERE NOW() > polls.start AND NOW() < polls.end$$

CREATE DEFINER=`root`@`localhost` EVENT `change_status_upcoming` ON SCHEDULE EVERY 1 SECOND STARTS '2022-02-24 16:35:12' ON COMPLETION NOT PRESERVE ENABLE COMMENT 'change_status_upcoming' DO UPDATE polls SET polls.status = '3' WHERE NOW() < polls.start$$

DELIMITER ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
