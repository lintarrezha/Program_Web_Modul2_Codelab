const btnJumlahkan = document.getElementById('btn-jumlahkan');
const btnUlang = document.getElementById('btn-ulang');

function jumlahkan() {
  let input1 = parseInt(document.getElementById('input1').value);
  let input2 = parseInt(document.getElementById('input2').value);

  let hitung = input1 + input2;
  alert(hitung);

  function ulang() {
    document.getElementById(input1).value;
  }

  btnJumlahkan.addEventListener('click', jumlahkan);
  btnUlang.addEventListener('click', ulang);
}
