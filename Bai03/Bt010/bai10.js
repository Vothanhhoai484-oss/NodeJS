const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;

if (!uri) {
    console.log('Chua khai bao MONGODB_URI!');
    process.exit(1);
}

const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();
        console.log('1. Ket noi MongoDB Atlas thanh cong!');

        const db = client.db('qlsinhvien');
        const departments = db.collection('departments');
        const students = db.collection('students_join');

        await departments.deleteMany({});
        await students.deleteMany({});

        await departments.insertMany([
            { makhoa: 'CNTT', tenkhoa: 'Cong nghe thong tin' },
            { makhoa: 'QTKD', tenkhoa: 'Quan tri kinh doanh' }
        ]);
        console.log('2. Da them 2 khoa');

        await students.insertMany([
            { masv: 'SV001', hoten: 'Nguyen Van An', makhoa: 'CNTT' },
            { masv: 'SV002', hoten: 'Tran Thi Binh', makhoa: 'QTKD' },
            { masv: 'SV003', hoten: 'Le Van Cuong', makhoa: 'CNTT' },
            { masv: 'SV004', hoten: 'Pham Thi Dung', makhoa: 'QTKD' }
        ]);
        console.log('3. Da them 4 sinh vien');

        const ketQua = await students.aggregate([{
                $lookup: {
                    from: 'departments',
                    localField: 'makhoa',
                    foreignField: 'makhoa',
                    as: 'thongTinKhoa'
                }
            },
            { $unwind: '$thongTinKhoa' },
            {
                $project: {
                    _id: 0,
                    masv: 1,
                    hoten: 1,
                    makhoa: 1,
                    tenkhoa: '$thongTinKhoa.tenkhoa'
                }
            }
        ]).toArray();

        console.log('\n4. DANH SACH SINH VIEN KEM TEN KHOA');
        console.table(ketQua);
        console.log('5. Tong so sinh vien:', ketQua.length);

    } catch (error) {
        console.log('Loi:', error.message);
    } finally {
        await client.close();
        console.log('Da dong ket noi MongoDB!');
    }
}

main();