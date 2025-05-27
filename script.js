function kirimData() {
    // Mengambil nilai dari input field Nama [cite: 19]
    var name = document.getElementById("nama").value;

    // Mengambil nilai dari input field NIM [cite: 19]
    var nim = document.getElementById("nim").value;

    // Mengambil nilai dari radio button Peminatan yang dipilih [cite: 19]
    var peminatan = document.querySelector("input[name='peminatan']:checked");

    // Mengambil nilai dari select dropdown Angkatan [cite: 21]
    var angkatan = document.getElementById("angkatan").value;

    // Mengambil nilai dari input field Tanggal [cite: 21]
    var tanggal = document.getElementById("tanggal").value;

    // Mengambil nilai dari textarea Alamat [cite: 19]
    var alamat = document.getElementById("alamat").value;

    // Validasi sederhana untuk memastikan semua field diisi
    if (!name) {
        alert("Nama tidak boleh kosong!");
        return;
    }
    if (!nim) {
        alert("NIM tidak boleh kosong!");
        return;
    }
    if (!peminatan) {
        alert("Pilih salah satu Peminatan!");
        return;
    }
    if (!angkatan) {
        alert("Pilih Angkatan!");
        return;
    }
    if (!tanggal) {
        alert("Tanggal Pendaftaran tidak boleh kosong!");
        return;
    }
    if (!alamat) {
        alert("Alamat tidak boleh kosong!");
        return;
    }

    // Mendapatkan value dari peminatan yang dipilih
    var peminatanValue = peminatan.value;

    // Membuat pesan untuk ditampilkan di alert [cite: 22]
    var message = "Data Pendaftaran Berhasil Dikirim!\n\n" +
                  "Nama : " + name + "\n" +
                  "NIM : " + nim + "\n" +
                  "Peminatan : " + peminatanValue + "\n" +
                  "Angkatan : " + angkatan + "\n" + // Menampilkan data Angkatan
                  "Tanggal Pendaftaran : " + tanggal + "\n" + // Menampilkan data Tanggal
                  "Alamat : " + alamat;

    // Menampilkan data menggunakan alert [cite: 19]
    alert(message);

    // (Opsional) Mengosongkan form setelah submit
    document.getElementById("peminatanForm").reset();
}