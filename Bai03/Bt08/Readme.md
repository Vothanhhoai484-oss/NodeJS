# BÀI 08 – MODULE, FILE SYSTEM VÀ CƠ SỞ DỮ LIỆU

## 1. Giới thiệu
Bài thực hành sử dụng module `fs` trong Node.js để thực hiện các thao tác quản lý tập tin và thư mục.

## 2. Nội dung thực hiện

- Sử dụng `require('fs')` để gọi module File System.
- Sử dụng `fs.mkdirSync()` để tạo thư mục `data`.
- Sử dụng `fs.writeFileSync()` để tạo tập tin `ghichu.txt` và ghi ít nhất 3 dòng nội dung.
- Sử dụng `fs.renameSync()` để đổi tên `ghichu.txt` thành `ghichu_moi.txt`.
- Sử dụng `fs.readFileSync()` để đọc và hiển thị nội dung tập tin sau khi đổi tên.
- Tạo tập tin `tam.txt`.
- Sử dụng `fs.unlinkSync()` để xóa tập tin `tam.txt`.
- Hiển thị thông báo sau mỗi thao tác.

## 3. Cách chạy chương trình

Mở Terminal tại thư mục Bt08 và chạy lệnh:

```bash
node bai08.js
```

## 4. Kết quả đạt được

- Tạo thành công thư mục `data`.
- Tạo và ghi nội dung vào tập tin `ghichu.txt`.
- Đổi tên thành công thành `ghichu_moi.txt`.
- Đọc và hiển thị được nội dung tập tin.
- Tạo và xóa thành công tập tin `tam.txt`.
- Chương trình chạy hoàn tất và hiển thị thông báo kết quả.

## 5. Hình ảnh minh chứng

Thêm ảnh chụp màn hình các nội dung sau:

1. Mã nguồn `bai08.js` trong VS Code.
2. Kết quả chạy lệnh `node bai08.js` trong Terminal.
3. Cấu trúc thư mục `Bt08` và thư mục `data` sau khi chạy.

## 6. Kết luận

Qua bài thực hành, em đã hiểu cách sử dụng module File System trong Node.js để tạo thư mục, ghi tập tin, đổi tên, đọc nội dung và xóa tập tin.
