// =========================================================
// script.js — JavaScript sederhana untuk landing page keluarga
// =========================================================

// 1) Logo berjalan: bungkus tiap tulisan dengan logo rumah-hati,
//    lalu gandakan isinya supaya geraknya mulus tanpa putus.
var logoSvg =
  '<svg viewBox="0 0 32 32" width="34" height="34" fill="none" stroke="currentColor" ' +
  'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
  '<path d="M4 15 16 4l12 11"/><path d="M7 13v15h18V13"/>' +
  '<path d="M16 24.5s-5-3.2-5-6.6a2.9 2.9 0 0 1 5-1.9 2.9 2.9 0 0 1 5 1.9c0 3.4-5 6.6-5 6.6z"/></svg>';

document.querySelectorAll('[data-marquee]').forEach(function (track) {
  var teks = Array.from(track.querySelectorAll('span')).map(function (s) {
    return s.textContent;
  });
  var html = teks.map(function (t) {
    return '<div class="item">' + logoSvg + '<span>' + t + '</span></div>';
  }).join('');
  track.innerHTML = html + html; // dua kali = loop tanpa putus
  track.setAttribute('aria-hidden', 'true');
});

// 1a) Galeri foto berjalan: gandakan isinya supaya loop tanpa putus
document.querySelectorAll('[data-strip]').forEach(function (track) {
  track.innerHTML = track.innerHTML + track.innerHTML;
});

// 1b) Efek muncul dari kiri saat di-scroll (ulang tahun, anggota).
(function () {
  if (!('IntersectionObserver' in window)) return;

  document.documentElement.classList.add('js');

  var pengamat = new IntersectionObserver(function (daftar) {
    daftar.forEach(function (d) {
      if (!d.isIntersecting) return;
      var el = d.target;
      pengamat.unobserve(el);
      el.classList.add('in');
      // Setelah selesai muncul, lepas efeknya supaya efek hover tetap jalan
      setTimeout(function () {
        el.classList.remove('reveal', 'in');
        el.style.transitionDelay = '';
      }, 1500);
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.bday, .member').forEach(function (el, i) {
    el.classList.add('reveal');
    el.style.transitionDelay = (i % 4) * 90 + 'ms'; // muncul berurutan
    pengamat.observe(el);
  });
})();

// 2) Tahun otomatis di footer
document.getElementById('tahun').textContent = new Date().getFullYear();

// 3) Buku ucapan: simpan di browser (localStorage) dan tampilkan di bawah form
var form = document.getElementById('form-ucapan');
var daftar = document.getElementById('daftar-ucapan');
var KUNCI = 'ucapan-keluarga';

function ambil() {
  try { return JSON.parse(localStorage.getItem(KUNCI)) || []; }
  catch (e) { return []; }
}

function tampilkan() {
  daftar.innerHTML = '';
  ambil().forEach(function (u) {
    var li = document.createElement('li');
    var nama = document.createElement('b');
    var pesan = document.createElement('p');
    nama.textContent = u.nama;     // textContent = aman dari kode berbahaya
    pesan.textContent = u.pesan;
    li.appendChild(nama);
    li.appendChild(pesan);
    daftar.appendChild(li);
  });
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  var data = ambil();
  data.unshift({
    nama: document.getElementById('nama').value.trim(),
    pesan: document.getElementById('pesan').value.trim()
  });
  try { localStorage.setItem(KUNCI, JSON.stringify(data)); } catch (err) {}
  form.reset();
  tampilkan();
});

tampilkan();
