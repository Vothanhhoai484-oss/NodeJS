const { tinhDiemTrungBinh, xepLoai } = require('./xulyDiem');

// Dữ liệu 3 sinh viên
const sinhVien = [{
        hoten: "Nguyen Van An",
        toan: 9,
        ly: 8,
        hoa: 9
    },
    {
        hoten: "Tran Thi Binh",
        toan: 7,
        ly: 6,
        hoa: 7
    },
    {
        hoten: "Le Van Cuong",
        toan: 4,
        ly: 5,
        hoa: 4
    }
];

// Hiển thị kết quả
console.log("DANH SACH SINH VIEN");

sinhVien.forEach((sv) => {
    const dtb = tinhDiemTrungBinh(sv.toan, sv.ly, sv.hoa);
    const loai = xepLoai(dtb);

    console.log("--------------------------");
    console.log("Ho ten:", sv.hoten);
    console.log("Diem trung binh:", dtb.toFixed(2));
    console.log("Xep loai:", loai);
});