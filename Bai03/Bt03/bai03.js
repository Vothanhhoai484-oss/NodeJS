const fs = require('fs');
const path = require('path');

// Đường dẫn đến tập tin thongtin.txt
const filePath = path.join(__dirname, 'thongtin.txt');

// 1. Tạo tập tin và ghi thông tin
fs.writeFile(filePath, 'Họ tên: Võ Thanh Hoài\nMã sinh viên: CĐ-CNTT18A14\n', 'utf8', (err) => {
    if (err) return console.log(err);

    console.log('1. Đã tạo tập tin thongtin.txt');

    // 2. Đọc và hiển thị nội dung
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return console.log(err);

        console.log('\n2. Nội dung tập tin ban đầu:');
        console.log(data);

        // 3. Ghi nối thêm tên lớp
        fs.appendFile(filePath, 'Tên lớp: CĐ-CNTT18A14\n', 'utf8', (err) => {
            if (err) return console.log(err);

            console.log('3. Đã ghi nối thêm tên lớp');

            // 4. Đọc lại tập tin sau cập nhật
            fs.readFile(filePath, 'utf8', (err, newData) => {
                if (err) return console.log(err);

                console.log('\n4. Nội dung tập tin sau cập nhật:');
                console.log(newData);
            });
        });
    });
});