let siswa =[
    {name: 'Andi', class: 'A', score:90},
    {name: 'Ahmad', class: 'A', score: 70},
    {name: 'Hashim', class: 'B', score: 65},
    { name: 'Samar', class: 'A', score: 69 },
    { name: 'Roni', class: 'B', score: 71 },
    { name: 'Hamdan', class: 'B', score: 87 },
    { name: 'Soro', class: 'B', score: 93 },
]


function renderTable(data){
    const container = document.getElementById('data-container')
    container.innerHTML = ''
    const rows = data.map((item, i) =>
        `
        <tr>
           <td>${i+1}</td>
           <td>${item.name}</td>
           <td>${item.class}</td>
           <td>${item.score}</td>
        </tr>
        `
    );
    container.innerHTML = rows.join('');
    document.getElementById('Rata-Rata').innerText = `   ${(data.reduce((acc, item) => acc + item.score, 0) / data.length).toFixed(1)}   `

}
renderTable(siswa);


document.getElementById('cari-nama').addEventListener('input', function (){
    const keyword = this.value;
    const filtered = siswa.filter((item) => 
        item.name.includes(keyword)
    );
    renderTable(filtered);
})
document.getElementById('button1').addEventListener('click', function (e) {
    e.preventDefault();
});