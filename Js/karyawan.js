let frm = document.getElementById('karyawan');

let pilihanjabatan = ["Manager","Asisten Manager","Staff"];
let pilihjabatan =`<option value=""> Pilih jabatan ------</option>`;
for (let j in pilihanjabatan){
    pilihjabatan += `<option value="${pilihanjabatan[j]}">${pilihanjabatan[j]}</option>`;
}

let pilihanstatus = ["Menikah","Belum Menikah"];
let pilihstatus =`<option value=""> Pilih Status ------</option>`;
for (let s in pilihanstatus){
    pilihstatus += `<option value="${pilihanstatus[s]}">${pilihanstatus[s]}</option>`;
}

frm.status.innerHTML= pilihstatus;
frm.jabatan.innerHTML = pilihjabatan;

function Input(){
    let nama = frm.nama.value;
    let jabatan = frm.jabatan.value;
    let status = frm.status.value;

    let gajipokok;
    let tunjanganstatus;

    switch(jabatan){
        case 'Manager': gajipokok = 15000000; break;
        case 'Asisten Manager': gajipokok = 10000000; break;
        case 'Staff': gajipokok = 5000000; break;
        default: gajipokok = 0;
    }

    switch(status){
        case 'Menikah': tunjanganstatus = gajipokok * 0.20; break;
        case 'Belum Menikah': tunjanganstatus = 0; break;
    }

    let tunjangan = gajipokok * 0.15;
    let bpjs = gajipokok * 0.10;
    let gajiTotal = gajipokok + tunjanganstatus + tunjangan + bpjs;


    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const tfoot = document.createElement('tfoot');

    const headerRow = document.createElement('tr');
    const columns = ['Nama Pegawai', 'Jabatan', 'Status', 'Total Gaji'];
    columns.forEach(column => {
      const th = document.createElement('th');
      th.textContent = column;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    const row = document.createElement('tr');
    const rowData = [nama, jabatan, status, gajiTotal.toLocaleString()];
    rowData.forEach(data => {
      const cell = document.createElement('td');
      cell.textContent = data;
      row.appendChild(cell);
    });
    tbody.appendChild(row);

    const totalRow = document.createElement('tr');
    const totalCell = document.createElement('td');
    totalCell.textContent = 'Total Gaji:';
    totalCell.colSpan = 3;
    totalRow.appendChild(totalCell);

    const totalGajiCell = document.createElement('td');
    totalGajiCell.textContent = gajiTotal.toLocaleString();
    totalRow.appendChild(totalGajiCell);

    tfoot.appendChild(totalRow);

    table.appendChild(thead);
    table.appendChild(tbody);
    table.appendChild(tfoot);

    swal({
      title: 'Data Pegawai',
      content: table,
      buttons: {
        confirm: 'Close'
      }
    });
  }