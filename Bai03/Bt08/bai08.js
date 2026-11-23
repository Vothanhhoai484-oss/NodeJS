const fs = require('fs');
const path = require('path');

// 1. Tạo thư mục data
const thuMuc = path.join(__dirname, 'data');

if (!fs.existsSync(thuMuc)) {
    fs.mkdirSync(thuMuc);
    console.log('Tạo thư mục data thành công!');
} else {
    console.log('Thư mục data đã tồn tại!');
}

// 2. Tạo và ghi nội dung vào ghichu.txt
const fileCu = path.join(thuMuc, 'ghichu.txt');

fs.writeFileSync(
    fileCu,
    'Dong 1: Hoc lap trinh Node.js\n' +
    'Dong 2: Tim hieu module fs\n' +
    'Dong 3: Thuc hanh doc va ghi file'
);

console.log('Ghi nội dung vào ghichu.txt thành công!');

// 3. Đổi tên ghichu.txt thành ghichu_moi.txt
const fileMoi = path.join(thuMuc, 'ghichu_moi.txt');

fs.renameSync(fileCu, fileMoi);
console.log('Đổi tên file thành ghichu_moi.txt thành công!');

// 4. Đọc và hiển thị nội dung file sau khi đổi tên
const noiDung = fs.readFileSync(fileMoi, 'utf8');

console.log('\nNội dung file ghichu_moi.txt:');
console.log(noiDung);

// 5. Tạo tập tin tam.txt
const fileTam = path.join(thuMuc, 'tam.txt');

fs.writeFileSync(fileTam, 'Day la tap tin tam.');
console.log('\nTạo tập tin tam.txt thành công!');

// 6. Xóa tập tin tam.txt
fs.unlinkSync(fileTam);
console.log('Xóa tập tin tam.txt thành công!');

console.log('\nHoàn thành tất cả các thao tác!');