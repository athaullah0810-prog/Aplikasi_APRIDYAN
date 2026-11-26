LANDING PAGE KELUARGA
=====================

Cara membuka:
  Klik dua kali index.html (terbuka di browser). Tidak perlu install apa pun.

Isi folder:
  index.html   -> isi tulisan & susunan halaman
  style.css    -> warna, ukuran, tampilan (warna ada di bagian paling atas)
  script.js    -> logo berjalan + buku ucapan
  foto/        -> semua foto

CARA GANTI FOTO ANGGOTA KELUARGA
--------------------------------
Di folder foto/ ada foto contoh (gambar siluet):
  keluarga.svg  -> foto utama di bagian paling atas (foto keluarga lengkap)
  ayah.svg  ibu.svg  kakak.svg  adik.svg

1. Siapkan fotomu (.jpg), taruh di folder foto/
   Contoh: foto/ayah.jpg
2. Buka index.html, cari  foto/ayah.svg  lalu ubah jadi  foto/ayah.jpg
   (cari teks "foto/" dengan Ctrl+F, ada 6 tempat)
Tips: foto portrait (tegak) paling pas untuk kartu anggota.

FOTO GALERI
-----------
Galeri berupa 3 baris foto yang berjalan terus dari kanan ke kiri (berhenti
saat disentuh/di-hover). Kecepatan: di style.css cari "jalan-kiri 90s", makin
kecil angkanya makin cepat.
Ada 30 kotak foto (10 per baris). Taruh foto dengan nama galeri-1.jpg ...
galeri-30.jpg di folder foto/. Tidak perlu ubah kode, otomatis tampil.
Kalau belum ada, kotak warna yang tampil.
Mau lebih dari 30? Di index.html salin satu baris <div class="tile t30">,
ganti jadi t31, lalu di style.css salin baris .t30 dan ganti angkanya.
Foto galeri tampil polos tanpa tulisan.

ULANG TAHUN ANAK-ANAK
---------------------
Ada 4 kartu: 3 anak (masing-masing 1 kartu) dan 1 kartu ORANG TUA (Ayah dan Ibu).
Tiap kartu punya 3 foto (1 besar + 2 kecil). Taruh di folder foto/ dengan nama:
  ultah-kakak-1.jpg  ultah-kakak-2.jpg  ultah-kakak-3.jpg   (anak 1)
  ultah-adik-1.jpg   ultah-adik-2.jpg   ultah-adik-3.jpg    (anak 2)
  ultah-kecil-1.jpg  ultah-kecil-2.jpg  ultah-kecil-3.jpg   (anak 3)
  ultah-ortu-1.jpg   ultah-ortu-2.jpg   ultah-ortu-3.jpg    (orang tua)
Otomatis tampil, tidak perlu ubah kode. Belum ada foto = kotak warna.
Di index.html cari "Kakak", "Adik", "Si Kecil" lalu ganti dengan nama anakmu,
dan isi [TGL], [BLN], [UMUR]. Nama fotonya tidak perlu ikut diganti.
Mau tambah anak ke-4? Salin satu blok <article class="bday"> milik anak.

EFEK MUNCUL DARI KIRI
---------------------
Galeri, kartu ulang tahun, dan foto anggota muncul meluncur dari kiri saat
di-scroll. Atur jaraknya di style.css cari "translateX(-90px)", kecepatannya
di "transition: opacity .8s".

GANTI TULISAN
-------------
Buka index.html di Notepad / VS Code, ubah tulisan di antara tanda > dan <.
Yang perlu diisi: "Keluarga Kita" (nama keluarga), [TGL] [BLN] (tanggal acara),
[ALAMAT EMAIL KELUARGA].

TAMPILAN HP
-----------
Sudah menyesuaikan layar HP otomatis (menu, foto, kartu, form). Aturannya ada di
style.css bagian "@media (max-width: 760px)" kalau mau diatur lagi.
Di HP galeri tetap berjalan sendiri, tidak berhenti saat disentuh.

GANTI WARNA
-----------
Buka style.css, ubah kode warna di bagian :root paling atas.

MENAMBAH ANGGOTA
----------------
Di index.html, salin satu blok <figure class="member"> ... </figure>, tempel
di bawahnya, lalu ubah foto dan tulisannya.

LOGO BERJALAN
-------------
Di index.html cari data-marquee. Tambah/ubah baris <span>Tulisan</span>.
Logo rumah-hati otomatis muncul di antara tulisan.

Buku ucapan menyimpan pesan di browser masing-masing (belum dikirim ke server).
