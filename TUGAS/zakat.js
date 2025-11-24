 // TODO: Isi variabel di bawah dengan fungsi getElementById sesuai id
 var inputGram = document.getElementById("emas-gram"); // input jumlah emas
 var tombol = document.getElementById("hitung"); // tombol hitung
 var hasil = document.getElementById("hasil"); // area output hasil
 var historyList = document.getElementById("history"); // daftar riwayat

 // TODO: Isi dengan nilai harga emas/gram rumahan (misal: 1100000)
 var hargaEmasRupiah = 1000000;

 function muatHistory() {
   var data = localStorage.getItem("zakatHistory");
   var list = data ? JSON.parse(data):[];
    historyList.innerHTML = "";
    list.forEach(function(item) {
      var li = document.createElement("li");
      li.textContent = item;
      historyList.appendChild(li);
    });
 }

 function simpanHistory() {

 }

 tombol.addEventListener("click", function() {
    var emas = ;
    var nisab = ;

    if () {
        return;
    }
 })