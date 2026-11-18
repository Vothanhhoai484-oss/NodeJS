
const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {

    // Trang chủ
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        res.end(`
            <h1>Xin chào!</h1>
            <h2>Chào mừng đến với Web Server Node.js</h2>
            <p>Mã sinh viên: SV001</p>
        `);
    }

    // Trang giới thiệu
    else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        res.end(`
            <h1>GIỚI THIỆU BẢN THÂN</h1>
            <p>Họ và tên: Võ Thanh Hoài</p>
            <p>Lớp: CNTT18A14</p>
            <p>Ngành: Công nghệ thông tin</p>
            <p>Tôi đang học lập trình Node.js.</p>
        `);
    }

    // Đường dẫn không tồn tại
    else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        res.end(`
            <h1>404 - Không tìm thấy trang!</h1>
            <p>Đường dẫn bạn truy cập không tồn tại.</p>
        `);
    }

});

// Khởi động Web Server
server.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
