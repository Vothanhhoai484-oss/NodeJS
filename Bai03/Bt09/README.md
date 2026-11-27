# BÀI 09 – MODULE, FILE SYSTEM VÀ CƠ SỞ DỮ LIỆU

**Họ và tên:** Võ Thanh Hoài  
**Lớp:** CĐ-CNTT18A14  
**Môn học:** Xây dựng ứng dụng React Native – Node.js

## 1. Mục tiêu bài thực hành

Xây dựng chương trình Node.js kết nối với MongoDB Atlas, sử dụng database `qlsinhvien` và collection `students_test` để thực hiện các thao tác quản lý sinh viên.

Các yêu cầu:
- Kết nối cơ sở dữ liệu MongoDB.
- Thêm ít nhất 5 sinh viên mẫu gồm mã sinh viên, họ tên, tuổi và điểm.
- Sử dụng `deleteOne()` để xóa một sinh viên theo mã sinh viên.
- Sử dụng `deleteMany()` để xóa các sinh viên có điểm dưới 5.
- Hiển thị số lượng bản ghi đã xóa.
- Sử dụng `find()` để hiển thị danh sách sinh viên còn lại.

## 2. Công cụ sử dụng

- Node.js
- Visual Studio Code
- MongoDB Atlas
- MongoDB Node.js Driver
- PowerShell

## 3. Cấu trúc thư mục

```text
NodeJS/
└── Bai03/
    └── Bt09/
        ├── bai09.js
        └── README.md
```

## 4. Các bước thực hiện

### Bước 1: Cài đặt thư viện MongoDB

```powershell
npm install mongodb
```

### Bước 2: Tạo cơ sở dữ liệu trên MongoDB Atlas

- Sử dụng Cluster0.
- Tạo Database User để xác thực kết nối.
- Lấy chuỗi kết nối trong mục Connect → Drivers.
- Sử dụng database `qlsinhvien`.
- Sử dụng collection `students_test`.

### Bước 3: Khai báo chuỗi kết nối

Sử dụng biến môi trường trong PowerShell:

```powershell
$env:MONGODB_URI="mongodb+srv://TEN_USER:MAT_KHAU@HOST_ATLAS/qlsinhvien?retryWrites=true&w=majority"
```

Không đưa mật khẩu thật vào mã nguồn hoặc GitHub.

### Bước 4: Thực hiện các thao tác trong bai09.js

- Kết nối MongoDB Atlas bằng `MongoClient`.
- Thêm 5 sinh viên mẫu bằng `insertMany()`.
- Xóa sinh viên có mã `SV002` bằng `deleteOne()`.
- Xóa sinh viên có điểm nhỏ hơn 5 bằng `deleteMany()`.
- Truy vấn danh sách sinh viên còn lại bằng `find()`.
- Hiển thị dữ liệu bằng `console.table()`.

### Bước 5: Chạy chương trình

```powershell
node bai09.js
```

## 5. Kết quả thực hiện

Chương trình kết nối MongoDB Atlas thành công.

Kết quả:
- Số sinh viên đã thêm: 5.
- Số sinh viên xóa bằng `deleteOne()`: 1.
- Số sinh viên xóa bằng `deleteMany()`: 1.
- Tổng số sinh viên còn lại: 3.

### Danh sách sinh viên còn lại

| Mã sinh viên | Họ tên | Tuổi | Điểm |
|---|---|---:|---:|
| SV001 | Nguyen Van An | 20 | 8.5 |
| SV003 | Le Van Cuong | 20 | 5 |
| SV004 | Pham Thi Dung | 22 | 9 |

## 6. Hình ảnh minh chứng

- Ảnh 1: Giao diện kết nối MongoDB Atlas – Connect to Cluster0.
- Ảnh 2: Code chương trình `bai09.js`.
- Ảnh 3: Kết quả chạy chương trình trên PowerShell.
- Ảnh 4: Danh sách dữ liệu trong collection `students_test` trên MongoDB Atlas.

## 7. Kết luận

Qua bài thực hành, em đã biết cách kết nối Node.js với MongoDB Atlas, thêm dữ liệu sinh viên, xóa dữ liệu bằng `deleteOne()` và `deleteMany()`, truy vấn dữ liệu bằng `find()` và hiển thị kết quả trên Terminal.

Bài thực hành giúp em củng cố kiến thức về Node.js và thao tác với cơ sở dữ liệu MongoDB.
