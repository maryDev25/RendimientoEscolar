const alumnos = [
    { nombre: "Juan", nota: 7 },
    { nombre: "Ana", nota: 9 },
    { nombre: "Luis", nota: 5 },
    { nombre: "Maria", nota: 8 },
    { nombre: "Pedro", nota: 6 },
    { nombre: "Sofia", nota: 10 },
    { nombre: "Carlos", nota: 4 },
    { nombre: "Lucia", nota: 9 },
    { nombre: "Miguel", nota: 6 },
    { nombre: "Elena", nota: 8 },
    { nombre: "Diego", nota: 7 },
    { nombre: "Valeria", nota: 9 }
];

document.addEventListener("DOMContentLoaded", render);

function promedio() {
    return (alumnos.reduce((a, b) => a + b.nota, 0) / alumnos.length).toFixed(2);
}

function mejor() {
    return alumnos.reduce((a, b) => (b.nota > a.nota ? b : a));
}

function peor() {
    return alumnos.reduce((a, b) => (b.nota < a.nota ? b : a));
}

function render() {

    document.getElementById("promedio").textContent = promedio();
    document.getElementById("mejor").textContent = mejor().nombre;
    document.getElementById("peor").textContent = peor().nombre;

    const lista = document.getElementById("listaAlumnos");
    const barras = document.getElementById("barras");

    lista.innerHTML = "";
    barras.innerHTML = "";

    const max = 10;

    alumnos.forEach(a => {

        lista.innerHTML += `<div>${a.nombre} - Nota: ${a.nota}</div>`;

        const altura = (a.nota / max) * 160;

        barras.innerHTML += `
            <div class="barra-container">
                <div class="barra" style="height:${altura}px"></div>
                <div class="label">${a.nombre}</div>
            </div>
        `;
    });
}

function imprimir() {
    window.print();
}