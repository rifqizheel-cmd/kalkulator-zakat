// TODO: Isi variabel di bawah dengan fungsi getElementById sesuai id 
var inputGram = document.getElementById("emas-gram");     // input jumlah emas
var tombol = document.getElementById("hitung");           // tombol hitung
var hasil = document.getElementById("hasil");             // area output hasil
var historyList = document.getElementById("history");     // daftar riwayat

// TODO: Isi dengan nilai harga emas/gram rumahan (misal: 1100000)
var hargaEmasRupiah = 1100000;

// Fungsi untuk memuat riwayat dari localStorage
function muatHistory() {
    // TODO: Ambil data dari localStorage key 'zakatHistory'
    var data = localStorage.getItem('zakatHistory');

    // Parsing ke array, atau buat array kosong jika belum ada
    var list = data ? JSON.parse(data) : [];

    // Tampilkan list ke historyList.innerHTML
    historyList.innerHTML = "";
    list.forEach(function(item) {
        var li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    });
}

// Fungsi untuk menyimpan riwayat baru ke localStorage
function simpanHistory(text) {
    // TODO: Ambil daftar lama dari localStorage
    var data = localStorage.getItem('zakatHistory');
    var list = data ? JSON.parse(data) : [];

    // Tambah item baru di awal (biar yang terbaru di atas)
    list.unshift(text);

    // Batasi max 10 data terakhir
    if (list.length > 10) {
        list = list.slice(0, 10);
    }

    // Simpan ulang ke localStorage
    localStorage.setItem('zakatHistory', JSON.stringify(list));

    // Tampilkan ulang riwayat
    muatHistory();
}

// Event ketika tombol "Hitung Zakat" diklik
tombol.addEventListener('click', function() {
    // TODO: ambil nilai input emas, parsing ke number, nisab = 85
    var emas = parseFloat(inputGram.value);
    var nisab = 85;

    // TODO: Jika input tidak valid, tampilkan pesan error dan return
    if (isNaN(emas) || emas <= 0) {
        hasil.textContent = "Coba cek kembali emas yang dimasukkan!";
        hasil.style.color = "red";
        return;
    }

    // TODO: Jika emas < nisab, tampilkan "Belum wajib zakat" dan simpan ke riwayat
    if (emas < nisab) {
        hasil.textContent = "Belum wajib zakat, karena belum mencapai nisab (85 gram).";
        hasil.style.color = "#22558a";
        simpanHistory(emas + " gram → Belum wajib zakat");
    } else {
        // TODO: Hitung zakat = emas * 0.025, rupiah = zakat * hargaEmasRupiah
        var zakat = emas * 0.025;
        var rupiah = zakat * hargaEmasRupiah;

        hasil.textContent =
            "Zakat: " + zakat.toFixed(2) + " gram (" +
            rupiah.toLocaleString("id-ID", { style: "currency", currency: "IDR" }) + ")";
        hasil.style.color = "#22558a";

        simpanHistory(
            emas + " gram → " + zakat.toFixed(2) + " gr (" +
            rupiah.toLocaleString("id-ID", { style: "currency", currency: "IDR" }) + ")"
        );
    }

    // TODO: Kosongkan inputGram setelah proses
    inputGram.value = "";
});

// TODO: Panggil muatHistory() agar riwayat langsung tampil
muatHistory();
