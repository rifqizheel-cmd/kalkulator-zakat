//const lampuMerah = document.getElementById("lampu-merah");
//const lampuKuning = document.getElementById("lampu-kuning");
//const lampuHijau = document.getElementById("lampu-hijau");
//const tombolMulai = document.getElementById("mulai");
//const tombolBerhenti = document.getElementById("berhenti");
//const btnMerah = document.getElementById("btn-merah");
//const btnKuning = document.getElementById("btn-kuning");
//const btnHijau = document.getElementById ("btn-hijau");
//const textStatus = document.getElementById("status");


//let intervaLOtomatis;//jarak waktu otomatis
//let indexLampu  = 0;
//const urutan = ["merah","kuning","hijau"];


//Fungsi nyalakan lampu sesuai warna 
//function matikanSemua(){
  //  lampuMerah.classList.remove("nyala");
    //lampuKuning.classList.remove("nyala");
    //lampuHijau.classList.remove("nyala");
//}

//Fungsi nyalakan lampu sesuai warna
//function nyalakanLampu(warna){
  //  matikanSemua();


//switch/pilih ketika (warna)...
//switch(warna) {
    //jika warna adalah merah
  //  case "merah":
    //maka ...lakukan hla berikut ini
    //lampuMerah.classList.add("nyala");
    //textStatus.textContent = "Status: Merah - BERHENTI";
    //selesai
    //break;
    //case"kuning":
    //lampuKuning.classList.add("nyala");
    //textStatus.textContent = "Status: Kuning - HATI-HATI";
    //break;
    //case "hijau":
    //lampuHijau.classList.add("nyala");
    //textStatus.textContent = "Status: Hijau - JALAN";
    //break;
//} }

//event tombol berhenti
//tombolBerhenti.addEventListener("click",function(){
  //  matikanSemua();
    //textStatus.textContent = "Status: Mati";
//});

//event tombol manual
//btnMerah.addEventListener("click",function(){
  //  nyalakanLampu("merah")
//});

//btnKuning.addEventListener("click",function(){
  //  nyalakanLampu("kuning")
//});

//btnHijau.addEventListener("click",function(){
  //  nyalakanLampu("hijau")
//});




//yang baru
// pilih element
const lampuMerah = document.getElementById("lampu-merah");
const lampuKuning = document.getElementById("lampu-kuning");
const lampuHijau = document.getElementById("lampu-hijau");
const tombolMulai = document.getElementById("mulai");
const TombolBerhenti = document.getElementById("berhenti");
const btnMerah = document.getElementById("btn-merah");
const btnKuning = document.getElementById("btn-kuning");
const btnHijau = document.getElementById("btn-hijau");
const textStatus = document.getElementById("status");

let intervalOtomatis;
let indexLampu = 0;
const urutan = ["merah", "kuning", "hijau"];

//event tombol mulai
tombolMulai.addEventListener("click",function(){
    clearInterval(intervalOtomatis);//bersihkan interval sebelumnya
    indexLampu = 0;
    jalanOtomatis();
    intervalOtomatis = setInterval(jalanOtomatis, 2000); //berganti setiap 2 detik
})

//fungsi mode otomatis
function jalanOtomatis(){
    const warna = urutan[indexLampu]
    console.log(warna)
    nyalakanLampu(warna);
    indexLampu++;
    if (indexLampu >= urutan.length){
        indexLampu = 0;
    }
}

// Fungsi matikan semua lampu
function matikanSemua() {
    lampuMerah.classList.remove("nyala");
    lampuKuning.classList.remove("nyala");
    lampuHijau.classList.remove("nyala");
}

// Fungsi menyalakan lampu sesuai warna
function nyalakanLampu(warna) {
    matikanSemua();

    // switch/pilih ketika (warna)
    switch (warna) {
        // jika warna adalah merah
        case "merah" :
            // maka... lakukan hal berikut ini
            lampuMerah.classList.add("nyala");
            textStatus.textContent = "Status: merah - BERHENTI";
            // selesai
            break;
        case "kuning" :
            lampuKuning.classList.add("nyala");
            textStatus.textContent = "Status: kuning - HATI-HATI";
            break;
        case "hijau" :
            lampuHijau.classList.add("nyala");
            textStatus.textContent = "Status: Hijau - Jalan";
            break;
    };

};

    // event tombol berhenti
    TombolBerhenti.addEventListener("click", function () {
        matikanSemua();
        textStatus.textContent = "Status: Mati";

    });

    // event tombol manual
    btnMerah.addEventListener("click", function () {
        console.log("bla")
        nyalakanLampu("merah");
    });

    btnKuning.addEventListener("click", function () {
        nyalakanLampu("kuning");
    });

     btnHijau.addEventListener("click", function () {
        nyalakanLampu("hijau");
    });