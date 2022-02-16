-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th2 16, 2022 lúc 03:49 PM
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
-- Cấu trúc bảng cho bảng `poll`
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
-- Đang đổ dữ liệu cho bảng `poll`
--

INSERT INTO `poll` (`id`, `title`, `total_vote`, `start`, `end`, `status`) VALUES
(20, 'Bài đăng số 24', 4, '2022-02-16 12:00:00', '2022-02-18 17:00:00', 1),
(21, 'Bài đăng số 25', 3, '2022-02-16 12:00:00', '2022-02-18 17:00:00', 1),
(22, 'Bài đăng số 26', 4, '2022-02-16 12:00:00', '2022-02-18 17:00:00', 1),
(23, 'Bài đăng số 27', 2, '2022-02-11 12:00:00', '2022-02-12 17:00:00', 2),
(24, 'Bài đăng số 28', 3, '2022-02-11 12:00:00', '2022-02-13 17:00:00', 2),
(25, 'Bài đăng số 29', 2, '2022-02-11 12:00:00', '2022-02-14 17:00:00', 2),
(26, 'Bài đăng số 30', 3, '2022-02-22 12:00:00', '2022-02-23 17:00:00', 3),
(27, 'Bài đăng số 31', 2, '2022-02-22 12:00:00', '2022-02-23 17:00:00', 3),
(28, 'Bài đăng số 32', 2, '2022-02-22 12:00:00', '2022-02-23 17:00:00', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` tinyint(3) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(80) NOT NULL,
  `role` varchar(10) NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `role`) VALUES
(6, 'admin@rabiloo.com', '$2b$10$P3kaiyBZIYvg/0Ynl3TDTuZnngfJwnichLe6mjNeSHj3hH0TcZb46', 'admin'),
(7, 'quangtv@rabiloo.com', '$2b$10$5SrU/V9kI7k0JTu6bGg/EuluKgjs55XhG7C0I2yDF5Gbfe0p01mbq', 'user'),
(8, 'haily@rabiloo.com', '$2b$10$dcyRtTmhCMm4avktzPj2jef/b3eVbR4p.BmGaNlauKEI.ul6l/a0i', 'user'),
(9, 'hoaden@rabiloo.com', '$2b$10$Q0WQDzy11pDto6lGfnkqOOkY0E9UUfsihuALBelsSz/dJwhrxbTy.', 'user');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `vote`
--

CREATE TABLE `vote` (
  `id` tinyint(3) NOT NULL,
  `title` varchar(30) NOT NULL,
  `total` int(11) NOT NULL DEFAULT 0,
  `id_poll` tinyint(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `vote`
--

INSERT INTO `vote` (`id`, `title`, `total`, `id_poll`) VALUES
(17, 'Lựa chọn một', 0, 20),
(18, 'Lựa chọn hai', 2, 20),
(19, 'Lựa chọn ba', 2, 20),
(20, 'Lựa chọn bốn', 1, 20),
(21, 'Lựa chọn một', 0, 21),
(22, 'Lựa chọn hai', 0, 21),
(23, 'Lựa chọn ba', 0, 21),
(24, 'Lựa chọn một', 1, 22),
(25, 'Lựa chọn hai', 0, 22),
(26, 'Lựa chọn ba', 0, 22),
(27, 'Lựa chọn bốn', 0, 22),
(28, 'Lựa chọn một', 0, 23),
(29, 'Lựa chọn hai', 0, 23),
(30, 'Lựa chọn một', 0, 24),
(31, 'Lựa chọn hai', 2, 24),
(32, 'Lựa chọn ba', 0, 24),
(33, 'Lựa chọn một', 0, 25),
(34, 'Lựa chọn hai', 0, 25),
(35, 'Lựa chọn một', 0, 26),
(36, 'Lựa chọn hai', 0, 26),
(37, 'Lựa chọn ba', 0, 26),
(38, 'Lựa chọn một', 0, 27),
(39, 'Lựa chọn hai', 0, 27),
(40, 'Lựa chọn một', 0, 28),
(41, 'Lựa chọn hai', 0, 28);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `poll`
--
ALTER TABLE `poll`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `vote`
--
ALTER TABLE `vote`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `poll`
--
ALTER TABLE `poll`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `vote`
--
ALTER TABLE `vote`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
