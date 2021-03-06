# polling

# Use:
- Backend: Express
- rontend: Nuxtjs/Vuetify
- Database: MySQL

# Chức năng chính:
- Đăng nhập, đăng kí với role user
- Tạo poll với role admin, ẩn upcoming poll với role admin
- User và admin có thể vote và unvote
- Khi hết thời gian thì có ended vote sẽ hiện ra danh sách những vote cao nhất

# Mô tả:
- Backend:
    + Xây dựng route xử lý data poll, vote
    + Với route register: mã hóa password qua bcrypt và route login giải mã
    + Khi user lần đầu vào vote sẽ tạo n row trong bảng is_voted -> mỗi row chứa id_user, id_vote trong poll và status = 0
- Frontend:
    + Validate form
    + Hiện danh sách poll (ended, recent, upcoming)
    + Tạo dynamic input để admin add số lượng vote tùy ý (min 1, max 4)
- MySQL:
    + Bảng user: id, email, password, role
    + Bảng poll: id, title, start, end, total_vote, status (status = 1 -> recent poll, 2 -> ended poll, 3 -> upcoming poll, 4 -> poll hide by admin)
    + Bảng vote: id, title, total (tổng số vote), id_poll
    + Bảng is_voted: id, id_user, id_vote, status (status = 1 -> user dã vote, 0 -> user unvote hoặc chưa vote)

# Vấn đề:
- Chưa thực hiện realtime qua socket.io
- Chưa xử lý được khi có thay đổi vote, unvote thì total_vote hiện frontend thay đổi -> phải reset
- Xử lý event schedule để thay đổi status poll khi thời gian thay đổi ở mysql chưa được -> phải reset thủ công database và chạy lệnh update
- Khi xóa poll chưa load được data mới -> chuyển về màn hình login

# Event mysql
SET GLOBAL event_scheduler = ON; -> run global event