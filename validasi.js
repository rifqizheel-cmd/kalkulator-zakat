const inputTinggi = document.getElementById("input-tinggi");
let tombolCek = document.getElementById("tombol-cek");

var hasilDiv = document.getElementById("hasil");

tombolCek.addEventListener("click", function () {
    const tinggi = parseFloat(inputTinggi.value); //number

    const tinggiMinimal = 160; //number

    //jika tinggi lebih kecil dari tinggiMinimal
    if (tinggi < tinggiMinimal) {
        // maka........
        hasilDiv.textContent = "Anda belum cukup tinggi";
        hasilDiv.className = "tampil tidak-layak";

        // selain itu.....
    } else {
        hasilDiv.textContent = "Selamat Anda memenuhi syarat";
        hasilDiv.className = "tampil layak";
    }

    console.log("tinginya", tinggi, "minimalnya", tinggiMinimal);
});