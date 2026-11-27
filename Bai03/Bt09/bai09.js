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
        console.log('1. Ket noi MongoDB thanh cong!');

        const db = client.db('qlsinhvien');
        const students = db.collection('students_test');

        // Lam sach collection bai tap de chay lai
        await students.deleteMany({});

        const danhSach = [
            { masv: 'SV001', hoten: 'Nguyen Van An', tuoi: 20, diem: 8.5 },
            { masv: 'SV002', hoten: 'Tran Thi Binh', tuoi: 21, diem: 7 },
            { masv: 'SV003', hoten: 'Le Van Cuong', tuoi: 20, diem: 5 },
            { masv: 'SV004', hoten: 'Pham Thi Dung', tuoi: 22, diem: 9 },
            { masv: 'SV005', hoten: 'Hoang Van Em', tuoi: 19, diem: 4.5 }
        ];

        const them = await students.insertMany(danhSach);
        console.log('\n2. Them sinh vien:', them.insertedCount);

        const xoaMot = await students.deleteOne({ masv: 'SV002' });
        console.log('\n3. DELETE ONE:', xoaMot.deletedCount);

        const xoaNhieu = await students.deleteMany({
            diem: { $lt: 5 }
        });
        console.log('\n4. DELETE MANY:', xoaNhieu.deletedCount);

        const conLai = await students.find({}).toArray();

        console.log('\n5. DANH SACH SINH VIEN CON LAI');
        console.table(conLai);
        console.log('Tong so sinh vien con lai:', conLai.length);

    } catch (error) {
        console.log('Loi:', error.message);
    } finally {
        await client.close();
        console.log('Da dong ket noi MongoDB!');
    }
}

main();