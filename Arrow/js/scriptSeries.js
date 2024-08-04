//section series
// window.addEventListener('load', function() {
//     const torneoAlumnos = document.getElementById('torneoAlumnos');
//     const torneo = JSON.parse(localStorage.getItem('torneo'));

//     if (torneo) {
//         const div = document.createElement('div');
//         div.className = 'torneo';
//         div.innerHTML = `
//             <h3>${torneo.title}</h3>
//             <p>${torneo.date}</p>
//             <p>${torneo.mode}</p>
//         `;
        
//         div.addEventListener('click', function() {
//             mostrarFormulario();
//         });

//         torneoAlumnos.appendChild(div);
//     }
// });

let practicasection = document.querySelector('#practicasection');
let alumnosection = document.querySelector('#alumnosection');
let practica = document.querySelector('#practica');
let btnPractica = document.querySelector('#btnPractica');
let torneoAlumno = document.querySelector('#torneoAlumno');
let btnAlumno = document.querySelector('#btnAlumno');
let practicaAlumnos = document.querySelector('#practicaAlumnos');
let formpropio = document.querySelector('.formpropio');
let guardandoArquero = document.querySelector('#guardandoArquero');
let agrega = document.querySelector('#agrega');
let anotaciones = document.querySelector('#anotaciones');
let sumatoria = document.querySelector('#sumatoria');
let estadisticas = document.querySelector('#estadisticas');
let resultadoserie = document.querySelector('#resultadoserie');
let mood = document.querySelector('#mood');


agrega.addEventListener('click', function(event) {
    event.preventDefault(); 

    const newRow = document.createElement('div');
    newRow.style.display = 'flex';
    newRow.style.flexDirection = 'column';
    newRow.style.gap = '10px'; 
    for (let i = 1; i <= 3; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Flecha ${anotaciones.children.length + i}:`; 
        input.className = 'flechas'; 
        newRow.appendChild(input); 
    }

    anotaciones.appendChild(newRow);
});
resultadoserie.addEventListener('click', function(event) {
    event.preventDefault();

    let sum = 0;
    const inputs = anotaciones.querySelectorAll('input.flechas');
    inputs.forEach(input => {
        const value = parseFloat(input.value);
        if (!isNaN(value)) {
            sum += value;
        }
    });
    sumatoria.textContent = `${sum}`;
    sumatoria.style.display='flex';
});
guardandoArquero.addEventListener('click', function(event) {
    event.preventDefault();
    const nombreseries = nombreserie.value.trim();
    if (nombreseries === '') {
        alert('Por favor, ingresa un nombre para la serie.');
        return;
    }

    let sum = 0;
    const inputs = anotaciones.querySelectorAll('input.flechas');
    let flechasInfo = '';
    inputs.forEach((input, index) => {
        const value = parseFloat(input.value);
        if (!isNaN(value)) {
            sum += value;
            flechasInfo += `Flecha ${index + 1}: ${value}, `;
        }
    });
    flechasInfo = flechasInfo.slice(0, -2);

    const modo = mood.value;
    const nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'estadistica-item';

    nuevoDiv.innerHTML = `
        <h3>${nombreseries}</h3>
        <h4>Modo: ${modo}</h4>
        <p>${flechasInfo}</p>
        <h4>Sumatoria: ${sum}</h4>
    `;

    estadisticas.appendChild(nuevoDiv);

    anotaciones.innerHTML = '';
});
function mostrarFormulario() {
    practicasection.style.display = 'flex';
    alumnosection.style.display = 'flex';
    practica.style.display = 'none';
    torneoAlumno.style.display = 'none';
    practicaAlumnos.style.display = 'none';
    formpropio.style.display = 'flex';
}
mostrarFormulario();

function seteo(){
    practicasection.style.display = 'flex';
    alumnosection.style.display = 'flex';
    practica.style.display = 'flex';
    torneoAlumno.style.display = 'flex';
    practicaAlumnos.style.display = 'none';
    formpropio.style.display = 'none';
    estadisticas.style.display = 'none';
}
seteo();

btnPractica.addEventListener('click', function(event) {
    event.preventDefault();
    seccion('practicando');
});
btnAlumno.addEventListener('click', function(event) {
    event.preventDefault();
    seccion('cursando');
});
practicasection.addEventListener('click', function(event) {
    event.preventDefault();
    seccion('practica');
});
alumnosection.addEventListener('click', function(event) {
    event.preventDefault();
    seccion('cursa');
});


function seccion(arco){
    practicasection.style.display = 'none';
    alumnosection.style.display = 'none';
    practica.style.display = 'none';
    torneoAlumno.style.display = 'none';
    practicaAlumnos.style.display = 'none';
    formpropio.style.display = 'none';
    estadisticas.style.display = 'none';


    switch(arco){
        case 'practicando':
        case 'practica':
            practicasection.style.display = 'flex';
            alumnosection.style.display = 'flex';
            practica.style.display = 'none';
            torneoAlumno.style.display = 'none';
            practicaAlumnos.style.display = 'flex';
            formpropio.style.display = 'flex';
            estadisticas.style.display = 'none';
            break;
        case 'cursando':
        case 'cursa':
            practicasection.style.display = 'flex';
            alumnosection.style.display = 'flex';
            practica.style.display = 'none';
            torneoAlumno.style.display = 'none';
            practicaAlumnos.style.display = 'none';
            formpropio.style.display = 'none';
            estadisticas.style.display = 'flex';
            break;
            default:
                break;
    }
}



