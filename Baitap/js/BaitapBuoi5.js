/** Quản lý tuyển sinh **/

function tinhDiemUuTien() {
    var khuVuc = document.getElementById("khuVuc").value;
    var doiTuong = document.getElementById("doiTuong").value;

    var diemKhuVuc = 0;
    var diemDoiTuong = 0;
    var diemUuTien = 0;

    switch (khuVuc) {
        case "A":
            diemKhuVuc = 2;
            break;
        case "B":
            diemKhuVuc = 1;
            break;
        case "C":
            diemKhuVuc = 0.5;
            break;
        default:
            diemKhuVuc = 0;
    }

    switch (doiTuong) {
        case "1":
            diemDoiTuong = 2.5;
            break;
        case "2":
            diemDoiTuong = 1.5;
            break;
        case "3":
            diemDoiTuong = 1;
            break;
        default:
            diemDoiTuong = 0;
    }

    diemUuTien = diemDoiTuong + diemKhuVuc;
    return diemUuTien;
};

function tinhDiemTongKet() {
    var diem1 = +document.getElementById("diemMonThu1").value;
    var diem2 = +document.getElementById("diemMonThu2").value;
    var diem3 = +document.getElementById("diemMonThu3").value;
    var diemUuTien = tinhDiemUuTien();
    var diemTongKet = 0;
    var diemChuan = +document.getElementById("diemChuan").value;
    
    var diemTongKet = diem1 + diem2 + diem3 + diemUuTien;

    if (diem1 === 0 || diem2 === 0 || diem3 === 0) {
        document.getElementById("ketQuaTuyenSinh").textContent = "Bạn đã rớt vì có môn điểm 0";
    } else if (diemTongKet >= diemChuan) {
        document.getElementById("ketQuaTuyenSinh").textContent = `Điểm tổng kết là ${diemTongKet}. Bạn đã đậu!`;
    } else {
        document.getElementById("ketQuaTuyenSinh").textContent = `Điểm tổng kết là ${diemTongKet}. Bạn đã rớt`;
    }
}

