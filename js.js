function tinhDiem() {

    document.getElementById("img").style.transform = "translateX(100%)";
    document.getElementById("rs").style.transform = "translateY(-280%)";
    document.getElementById("img").style.clipPath = "polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)";
    document.getElementById("img").style.transition = " all 0.9s"
    document.getElementById("rs").style.transition = " all 0.9s"
    var thunhap = document.getElementById('thunhap').value;
    var tienvay = document.getElementById('tienvay').value;
    var laixuat = document.getElementById('laixuat').value;
    var thoihan = document.getElementById('thoihan').value;
    tn = Number(thunhap)
    tv = Number(tienvay)
    lx = Number(laixuat)
    th = Number(thoihan)

    var lai = tn * 0.6;

    var tientra = (tv * (1 + lx)) / th
    document.getElementById('kq').style.display = " block"
    document.getElementById('kq2').style.display = " block"
    document.getElementById('kq').textContent = (" Tiền có thể trả là: " + lai.toFixed(0))
    document.getElementById('kq2').textContent = (" Tiền phải trả là: " + tientra.toFixed(0))

    document.getElementById('rs').style.opacity = "1"

    if (lai > tientra) {
        document.getElementById('rs').textContent = (" Đủ điều kiện òi nhe ")
        document.getElementById('rs').textContent = (" Đủ điều kiện òi nhe ")
        document.getElementById('rs').style.backgroundColor = " green"

    }
    else {
        document.getElementById('rs').textContent = (" Hok đủ điều kiện òi nhe ")
        document.getElementById('rs').style.backgroundColor = " red"

    }

    if ((tn || tv || lx || th) < 0) {
        document.getElementById('rs').textContent = (" Nhập số âm ăn cc hả")

    }

    if ((tn || tv || lx || th) == "") {
        document.getElementById('rs').textContent = (" Bỏ trống ăn cc hả")
        document.getElementById('kq').style.display = " none"
        document.getElementById('kq2').style.display = " none"
    }


}
function reset() {
    document.getElementById('kq').style.display = " none"
    document.getElementById('kq2').style.display = " none"
    document.getElementById("img").style.transform = "translateX(0)";
    document.getElementById("rs").style.transform = "translateY(-180px)";
    document.getElementById("img").style.clipPath = "none";

    document.getElementById('rs').textContent = ""

    var thunhap = document.getElementById('thunhap').value = "";
    var tienvay = document.getElementById('tienvay').value = "";
    var laixuat = document.getElementById('laixuat').value = "";
    var thoihan = document.getElementById('thoihan').value = "";
    document.getElementById('rs').style.opacity = "0"

}