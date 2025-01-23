//variabel tahun int
//variabel harga int

//logic hitung harga
//kondisi harga ++ 10% per tahun

//hitung harga mobil 

//misal tahun 2000, ppn 10%, sekarang ppn 11%



int tahun = 0;
int harga = 0;


function hitungHarga (harga, tahun){
	if (harga <= 0 || tahun < 0) {
		return
	}

	let hargaBaru = harga * Math.pow(1.1, tahun);

	return {
		Harga: harga;
		Tahun: tahun;
		HargaBaru: Math.round(hargaBaru);
	}
}

// function hitungHargaMobil