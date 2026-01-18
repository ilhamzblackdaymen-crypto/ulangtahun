document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('studentForm');
    const tableBody = document.getElementById('tableBody');
    let students = [];

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form untuk refresh halaman

        const nama = document.getElementById('nama').value;
        const kelas = document.getElementById('kelas').value;
        const jurusan = document.getElementById('jurusan').value;
        // Menggunakan parseInt untuk memastikan nilai adalah angka, seperti di C++
        const nilaiDp = parseInt(document.getElementById('nilaiDp').value);
        const nilaiInf = parseInt(document.getElementById('nilaiInf').value);
        const nilaiBindo = parseInt(document.getElementById('nilaiBindo').value);

        const newStudent = {
            nama,
            kelas,
            jurusan,
            nilaiDp,
            nilaiInf,
            nilaiBindo,
            rataRata: (nilaiDp + nilaiInf + nilaiBindo) / 3
        };

        students.push(newStudent);
        renderTable();
        form.reset(); // Mengosongkan form setelah submit
    });

    function renderTable() {
        tableBody.innerHTML = ''; // Mengosongkan tabel sebelum render ulang
        students.forEach((student, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${student.nama}</td>
                <td>${student.kelas}</td>
                <td>${student.jurusan}</td>
                <td>${student.nilaiDp}</td>
                <td>${student.nilaiInf}</td>
                <td>${student.nilaiBindo}</td>
                <td>${student.rataRata.toFixed(2)}</td>
            `;
            tableBody.appendChild(row);
        });
    }
});
