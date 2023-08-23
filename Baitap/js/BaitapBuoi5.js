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

/*********Tính Tiền Điện */

function tinhTienDien() {
    var soKw = +document.querySelector('#kW').value;

    var tienDien = 0;

    if (soKw < 0) {
        alert('Mời nhập số kW hợp lệ')
    } else if (soKw === 0) {
        alert('So kW không thể bằng 0')
    } else if (soKw > 0 && soKw <= 50) {
        tienDien = 50 * 500;
    } else if (soKw > 50 && soKw <= 100) {
        tienDien = 50 * 500 + ((soKw - 50) * 650);
    } else if (soKw > 100 && soKw <= 200) {
        tienDien = 50 * 500 + 50 * 650 + ((soKw - 100) * 850);
    } else if (soKw > 200 && soKw <= 350) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + ((soKw - 200) * 1100);
    } else {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + ((soKw - 350) * 1300);
    }

    document.querySelector('#tienDien').textContent = tienDien;
}

/*********Tính Tiền Cáp***********/

// 

// const LOAI_KHACH_HANG = document.querySelector('#loaiKH').value;
// const SO_KET_NOI = +document.querySelector('#soKetNoi').value;
// const SO_KENH_CAO_CAP = +document.querySelector('#soKenhCaoCap').value;

// function tinhTienCaNhan() {
//     var phiHoaDon = 4.5;
//     var basicServices = 20.5;
//     var kenhCaoCap = 7.5;
//     var tienCaNhan = 0;

//     tienCaNhan = phiHoaDon + basicServices + kenhCaoCap * SO_KENH_CAO_CAP;
//     return tienCaNhan;
// }

// function tinhTienDoanhNghiep() {
//     var phiHoaDon = 15;
//     var basicServices = 0;
//     var kenhCaoCap = 50;

//     var tienDoanhNghiep = 0;

//     if (SO_KET_NOI <= 10) {
//         basicServices = 75 * 10;
//     } else if (SO_KET_NOI > 10) {
//         basicServices = 75 * 10 + (SO_KET_NOI - 10) * 5;
//     }

//     tienDoanhNghiep = phiHoaDon + basicServices + kenhCaoCap * SO_KENH_CAO_CAP;
//     return tienDoanhNghiep;
// }

// function tinhTienCap() {
//     var tien = 0;
//     switch (LOAI_KHACH_HANG) {
//         case 'caNhan':
//             tien = tinhTienCaNhan();
//             break;
//         case 'doanhNghiep':
//             tien = tinhTienDoanhNghiep();
//             break;
//     }

//     document.querySelector('#cableCost').textContent = tien;
// }
