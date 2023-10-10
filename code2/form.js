const form = document.getElementById('myForm');
const btnDaftar = document.getElementById('btn-daftar');

function daftar() {
  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const alamat = document.getElementById('alamat').value;

  if (!nama || !email || !alamat) {
    alert('Anda Harus Mengisi Data Dengan Lengkap');
  } else {
    alert('Terima Kasih');
  }
}

btnDaftar.addEventListener('click', daftar);
