//section series
let practicasection = document.querySelector('#practicasection');
let alumnosection = document.querySelector('#alumnosection');
let practica = document.querySelector('#practica');
let btnPractica = document.querySelector('#btnPractica');
let torneoAlumno = document.querySelector('#torneoAlumno');
let btnAlumno = document.querySelector('#btnAlumno');
let practicaAlumnos = document.querySelector('#practicaAlumnos');
let torneoAlumnos = document.querySelector('#torneoAlumnos');

function seteo(){
    practicasection.style.display = 'flex';
    alumnosection.style.display = 'flex';
    practica.style.display = 'flex';
    torneoAlumno.style.display = 'flex';
    practicaAlumnos.style.display = 'none';
    torneoAlumnos.style.display = 'none';
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

function seccion(arco){
    practicasection.style.display = 'none';
    alumnosection.style.display = 'none';
    practica.style.display = 'none';
    torneoAlumno.style.display = 'none';
    practicaAlumnos.style.display = 'none';
    torneoAlumnos.style.display = 'none';

    switch(arco){
        case 'practicando':
            practicasection.style.display = 'flex';
            alumnosection.style.display = 'flex';
            practica.style.display = 'none';
            torneoAlumno.style.display = 'none';
            practicaAlumnos.style.display = 'flex';
            torneoAlumnos.style.display = 'none';
            break;
        case 'cursando':
            practicasection.style.display = 'flex';
            alumnosection.style.display = 'flex';
            practica.style.display = 'none';
            torneoAlumno.style.display = 'none';
            practicaAlumnos.style.display = 'none';
            torneoAlumnos.style.display = 'flex';
            break;
            default:
            break;
    }
}