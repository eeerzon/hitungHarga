//variabel tahun int
//variabel harga int

//logic hitung harga
//kondisi harga ++ 10% per tahun

//hitung harga mobil 

//misal tahun 2000, ppn 10%, sekarang ppn 11%



// int tahun = 0;
// int harga = 0;


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk menghitung harga akhir mobil
function hitungHarga(harga, tahunAwal, tahunTujuan) {
  const naikTahunan = 0.1;  // Kenaikan 10% per tahun
  const ppn = 0.11;         // PPN 11%

  if (harga <= 0 || tahunAwal < 0 || tahunTujuan < 0) {
    return "Harga atau tahun tidak valid.";
  }

  // Hitung selisih tahun antara tahun tujuan dan tahun awal
  const selisihTahun = tahunTujuan - tahunAwal;
  
  // Jika tahun tujuan lebih kecil dari tahun awal, return error
  if (selisihTahun < 0) {
    return "Tahun tujuan harus lebih besar dari tahun awal.";
  }

  let hargaBaru = harga;
  // Loop untuk menghitung kenaikan harga per tahun
  for (let i = 0; i < selisihTahun; i++) {
    hargaBaru += hargaBaru * naikTahunan;  // Menambah harga setiap tahunnya
  }

  // Hitung harga akhir termasuk PPN
  const hargaAkhir = hargaBaru + (hargaBaru * ppn);
  return hargaAkhir;
}

// Ambil input harga awal mobil
rl.question('Masukkan harga awal Mobil: ', (hargaAwal) => {
  hargaAwal = parseFloat(hargaAwal);

  // Ambil input tahun awal mobil
  rl.question('Masukkan tahun awal mobil: ', (tahunAwal) => {
    tahunAwal = parseInt(tahunAwal);

    // Ambil input tahun tujuan (tahun yang diminta untuk dihitung harga mobil)
    rl.question('Masukkan tahun yang diinginkan untuk menghitung harga mobil: ', (tahunTujuan) => {
      tahunTujuan = parseInt(tahunTujuan);

      // Hitung harga akhir mobil pada tahun tujuan setelah kenaikan dan PPN
      const hargaAkhir = hitungHarga(hargaAwal, tahunAwal, tahunTujuan);
      
      // Tampilkan hasil
      if (typeof hargaAkhir === 'string') {
        console.log(hargaAkhir); // Menampilkan pesan kesalahan jika ada
      } else {
        console.log(`Harga mobil pada tahun ${tahunTujuan} (termasuk PPN 11%) adalah Rp. ${hargaAkhir.toFixed(2)}`);
      }

      rl.close();  // Tutup input setelah selesai
    });
  });
});

