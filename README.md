# Form Input Data Siswa dengan Capture Foto

Aplikasi Node.js ini memungkinkan pengguna untuk menginput data siswa melalui formulir dan mengambil foto langsung dari kamera perangkat. Data siswa yang diinput, beserta foto yang diambil, akan disimpan di Google Sheets untuk pencatatan dan Google Drive untuk penyimpanan file.

## Fitur
- Formulir input data siswa.
- Fungsi untuk menangkap foto menggunakan kamera perangkat.
- Penyimpanan data siswa di Google Sheets.
- Penyimpanan file foto di Google Drive.

## Teknologi yang Digunakan
- **Node.js**: Backend aplikasi.
- **Express.js**: Framework web.
- **Google Sheets API**: Untuk integrasi dengan Google Sheets.
- **Google Drive API**: Untuk penyimpanan foto.
- **HTML5 & JavaScript**: Untuk formulir input dan pengambilan foto.

## Prasyarat
Sebelum memulai, pastikan Anda memiliki:
1. Akun Google.
2. Proyek di [Google Cloud Console](https://console.cloud.google.com/).
3. Kredensial API untuk Google Sheets dan Google Drive (file `credentials.json`).
4. Node.js diinstal di komputer Anda.

## Instalasi
1. Clone repositori ini:
   ```bash
   git clone https://github.com/ichwandroid/form-with-camera.git
   ```
2. Masuk ke direktori proyek:
   ```bash
   cd form-with-camera
   ```
3. Instal dependensi:
   ```bash
   npm install
   ```
4. Salin file kredensial Google API (`credentials.json`) ke direktori proyek.
5. Jalankan aplikasi:
   ```bash
   node index.js
   ```

## Konfigurasi Google API
1. Aktifkan **Google Sheets API** dan **Google Drive API** di [Google Cloud Console](https://console.cloud.google.com/).
2. Buat kredensial OAuth 2.0 dan unduh file `credentials.json`.
3. Bagikan Google Sheet target dengan email layanan Anda yang tercantum di file `credentials.json`.

## Cara Menggunakan
1. Jalankan aplikasi di server lokal:
   ```bash
   node index.js
   ```
2. Buka browser dan akses `http://localhost:3000`.
3. Isi formulir dengan data siswa dan ambil foto.
4. Klik **Submit** untuk menyimpan data ke Google Sheets dan foto ke Google Drive.

## Struktur Proyek
```
project-name/
├── cache
├── config
    └── credentials.json  # File kredensial Google API
├── index.js          # File utama aplikasi Node.js
├── public/           # File statis (HTML, CSS, JavaScript)
├── views/           
    └── index.ejs     # File statis
├── package.json      # File konfigurasi npm
└── README.md         # Dokumentasi proyek
```

## Dependensi Utama
- [express](https://www.npmjs.com/package/express)
- [googleapis](https://www.npmjs.com/package/googleapis)
- [multer](https://www.npmjs.com/package/multer)
- [body-parser](https://www.npmjs.com/package/body-parser)

## Lisensi
Aplikasi ini dilisensikan di bawah [MIT License](LICENSE).

---

Terima kasih telah menggunakan aplikasi ini! Jika Anda memiliki saran atau menemukan masalah, jangan ragu untuk mengirimkan *issue* atau *pull request*. 😊

