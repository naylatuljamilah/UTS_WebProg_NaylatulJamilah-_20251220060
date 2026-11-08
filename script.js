const form = document.getElementById("form");
const tabel = document.getElementById("table");
let nomorUrutan = 1;

form.addEventListener("submit", function(e){
    e.preventDefault();
    const nama = document.getElementById("nama").value;
    const asal = document.getElementById("asal").value;
    const tujuan = document.getElementById("TK").value;
    const catatan = document.getElementById("catatan").value;

    const barisanbaru = document.createElement("tr");
    const nomor = document.createElement("td"); 
    const datanama = document.createElement("td");
    const dataasal = document.createElement("td");
    const datatujuan = document.createElement("td");
    const datacatatan = document.createElement("td")

    nomor.textContent = nomorUrutan;
    barisanbaru.appendChild(nomor)

    datanama.textContent = nama;
    barisanbaru.appendChild(datanama);

    dataasal.textContent = asal;  
    barisanbaru.appendChild(dataasal);

    datatujuan.textContent = tujuan;
    barisanbaru.appendChild(datatujuan);

    datacatatan.textContent = catatan;
    barisanbaru.appendChild(datacatatan);

    table.appendChild(barisanbaru);

    nomorUrutan++;

    form.reset();
});