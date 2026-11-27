# BÀI 10 – MODULE, FILE SYSTEM VÀ CƠ SỞ DỮ LIỆU

**Họ và tên:** Võ Thanh Hoài  
**Lớp:** CĐ-CNTT18A14

## 1. Mục tiêu bài thực hành

- Kết nối cơ sở dữ liệu MongoDB Atlas bằng Node.js.
- Tạo collection `departments` lưu thông tin các khoa.
- Tạo collection `students_join` lưu thông tin sinh viên.
- Sử dụng phương thức `insertMany()` để thêm dữ liệu.
- Sử dụng `aggregate()` kết hợp `$lookup` để liên kết hai collection thông qua trường `makhoa`.
- Hiển thị danh sách sinh viên kèm tên khoa tương ứng.

## 2. Công cụ sử dụng

- Visual Studio Code.
- Node.js.
- MongoDB Atlas.
- MongoDB Node.js Driver.
- PowerShell.

## 3. Cấu trúc thư mục

```text
BaiTapNodeJS/
└── Bai03/
    └── Bt10/
        ├── bai10.js
        └── README.md
```

## 4. Các bước thực hiện

**Bước 1:** Cài đặt thư viện MongoDB:

```powershell
npm install mongodb
```

**Bước 2:** Khai báo chuỗi kết nối MongoDB Atlas thông qua biến môi trường `MONGODB_URI`.

**Bước 3:** Tạo collection `departments` gồm 2 khoa:
- CNTT – Công nghệ thông tin.
- QTKD – Quản trị kinh doanh.

**Bước 4:** Tạo collection `students_join` gồm 4 sinh viên mẫu.


**Bước 5:** Sử dụng `aggregate()` và `$lookup` để liên kết dữ liệu giữa hai collection bằng trường `makhoa`.

**Bước 6:** Sử dụng `$unwind` và `$project` để hiển thị thông tin sinh viên cùng tên khoa.

**Bước 7:** Chạy chương trình:

```powershell
node bai10.js
```

## 5. Kết quả thực hiện

Chương trình kết nối MongoDB Atlas thành công.

- Thêm thành công 2 khoa.
- Thêm thành công 4 sinh viên.
- Liên kết dữ liệu giữa sinh viên và khoa bằng `$lookup`.
- Hiển thị đầy đủ mã sinh viên, họ tên, mã khoa và tên khoa.
- Tổng số sinh viên hiển thị: 4.

## 6. Kết luận

Qua bài thực hành, em đã biết cách kết nối MongoDB Atlas với Node.js, tạo và thêm dữ liệu vào các collection, đồng thời sử dụng `aggregate()` kết hợp `$lookup` để liên kết dữ liệu giữa hai collection và hiển thị thông tin tương ứng.
