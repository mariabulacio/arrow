//section series
window.addEventListener('load', function() {
    const torneoAlumnos = document.getElementById('torneoAlumnos');
    const torneo = JSON.parse(localStorage.getItem('torneo'));

    if (torneo) {
        const div = document.createElement('div');
        div.className = 'torneo';
        div.innerHTML = `
            <h3>${torneo.title}</h3>
            <p>${torneo.date}</p>
            <p>${torneo.mode}</p>
        `;
        
        div.addEventListener('click', function() {
            mostrarFormulario();
        });

        torneoAlumnos.appendChild(div);
    }
});

let practicasection = document.querySelector('#practicasection');
let alumnosection = document.querySelector('#alumnosection');
let practica = document.querySelector('#practica');
let btnPractica = document.querySelector('#btnPractica');
let torneoAlumno = document.querySelector('#torneoAlumno');
let btnAlumno = document.querySelector('#btnAlumno');
let practicaAlumnos = document.querySelector('#practicaAlumnos');
const torneoAlumnos = document.querySelector('#torneoAlumnos');
let fiscalizar = document.querySelector('#fiscalizar');
let fiscalizandoCompa = document.querySelector('#fiscalizandoCompa');
let fiscalPropio = document.querySelector('#fiscalPropio');
let formpropio = document.querySelector('.formpropio');
let fiscalPropioTorneo = document.querySelector('#fiscalPropioTorneo');
let guardandoArquero = document.querySelector('#guardandoArquero');
let general = document.querySelector('#general');
let agrega = document.querySelector('#agrega');
let anotaciones = document.querySelector('#anotaciones');
let sumatoria = document.querySelector('#sumatoria');


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
    anotando.appendChild(newRow.cloneNode(true));
});
guardandoArquero.addEventListener('click', function(event) {
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
    suma.textContent = `${sum}`;
    suma.style.display='flex';
});
function mostrarFormulario() {
    practicasection.style.display = 'flex';
    alumnosection.style.display = 'flex';
    practica.style.display = 'none';
    torneoAlumno.style.display = 'none';
    practicaAlumnos.style.display = 'none';
    torneoAlumnos.style.display = 'none';
    fiscalizar.style.display = 'none';
    fiscalizandoCompa.style.display = 'none';
    fiscalPropio.style.display = 'flex';
    fiscalPropioTorneo.style.display = 'flex';
    formpropio.style.display = 'flex';
    
}
mostrarFormulario();

function seteo(){
    practicasection.style.display = 'flex';
    alumnosection.style.display = 'flex';
    practica.style.display = 'flex';
    torneoAlumno.style.display = 'flex';
    practicaAlumnos.style.display = 'none';
    torneoAlumnos.style.display = 'none';
    fiscalizar.style.display = 'none';
    fiscalizandoCompa.style.display = 'none';
    fiscalPropio.style.display = 'none';
    formpropio.style.display = 'none';
    fiscalPropioTorneo.style.display = 'none';
    general.style.display = 'flex';
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
btnFiscal.addEventListener('click', function(event) {
    event.preventDefault();
    seccion('fiscalizando');
});

function seccion(arco){
    practicasection.style.display = 'none';
    alumnosection.style.display = 'none';
    practica.style.display = 'none';
    torneoAlumno.style.display = 'none';
    practicaAlumnos.style.display = 'none';
    torneoAlumnos.style.display = 'none';
    fiscalizar.style.display = 'none';
    fiscalizandoCompa.style.display = 'none';
    fiscalPropio.style.display = 'none';
    formpropio.style.display = 'none';
    general.style.display = 'flex';


    switch(arco){
        case 'practicando':
        case 'practica':
            practicasection.style.display = 'flex';
            alumnosection.style.display = 'flex';
            practica.style.display = 'none';
            torneoAlumno.style.display = 'none';
            practicaAlumnos.style.display = 'flex';
            torneoAlumnos.style.display = 'none';
            fiscalizar.style.display = 'none';
            fiscalizandoCompa.style.display = 'none';
            fiscalPropio.style.display = 'none';
            formpropio.style.display = 'flex';
            fiscalPropioTorneo.style.display = 'none';
            general.style.display = 'none';
            break;
        case 'cursando':
        case 'cursa':
            practicasection.style.display = 'flex';
            alumnosection.style.display = 'flex';
            practica.style.display = 'none';
            torneoAlumno.style.display = 'none';
            practicaAlumnos.style.display = 'none';
            torneoAlumnos.style.display = 'flex';
            fiscalizar.style.display = 'flex';
            fiscalizandoCompa.style.display = 'none';
            fiscalPropio.style.display = 'none';
            formpropio.style.display = 'none';
            fiscalPropioTorneo.style.display = 'none';
            general.style.display = 'flex';
            break;
        case 'fiscalizando':
            practicasection.style.display = 'flex';
            alumnosection.style.display = 'flex';
            practica.style.display = 'none';
            torneoAlumno.style.display = 'none';
            practicaAlumnos.style.display = 'none';
            torneoAlumnos.style.display = 'none';
            fiscalizar.style.display = 'none';
            fiscalizandoCompa.style.display = 'flex';
            fiscalPropio.style.display = 'none';
            formpropio.style.display = 'flex';
            fiscalPropioTorneo.style.display = 'none';
            general.style.display = 'flex';
            break;
            default:
                break;
    }
}



