//pilih elemen
var input = document.getElementById("input-tugas");
var tombol = document.getElementById("tombol-tambah");
var daftar = document.getElementById("daftar-tugas");

//array tugas
var tugas = [];

//Fungsi: Tampilkan tugas
function tampilkan() {
    daftar.innerHTML = "";  //kosongkan dahulu

    for (var i = 0; i < tugas.length; i++){
        var li =document.createElement("li");
        li.className = "item-tugas";
        li.innerHTML = 
        "<span>"+
        tugas[i]+
        '</span><button onclick="hapus('+
        i +
        ')">Hapus</button>';
        daftar.appendChild(li);
    }
}

//Fungsi:Tambah tugas
function tambah() {
    var teks = input.value.trim();

    if (teks === "") {
        alert("Tugas kosong!");
        return;
    }
    tugas.push(teks);//masukkan ke array
    localStorage.setItem("tugas",JSON.stringify(tugas)); //simpan ke localStorage

    input.value = ""; //kosongkan input
    tampilkan(); //tampilakn  ulang
}

//Fungsi:Hapus tugas
function hapus(index) {
    tugas.splice(index, 1); //Hapus dari array
    localStorage.setItem("tugas",JSON.stringify(tugas)); //simpan perubahan
    tampilkan(); //tampilkan ulang
}

//Fungsi: Muat data dari localStorage
function muat() {
    var data = localStorage.getItem("tugas");
    if (data !== null) {
        tugas = JSON.parse(data);
    }
    tampilkan();
}

//Event tombol
tombol.addEventListener("click",tambah);

//Jalankan tombol
muat();