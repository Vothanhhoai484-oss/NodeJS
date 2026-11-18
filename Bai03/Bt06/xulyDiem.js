// Hàm tính điểm trung bình 3 môn
function tinhDiemTrungBinh(toan, ly, hoa) {
    return (toan + ly + hoa) / 3;
}

// Hàm xếp loại học tập
function xepLoai(dtb) {
    if (dtb >= 8) {
        return "Giỏi";
    } else if (dtb >= 6.5) {
        return "Khá";
    } else if (dtb >= 5) {
        return "Trung bình";
    } else {
        return "Yếu";
    }
}

// Xuất các hàm ra module
module.exports = {
    tinhDiemTrungBinh,
    xepLoai
};