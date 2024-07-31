//section torneos
let crear = document.querySelector('#crear');
let editar = document.querySelector('#editar');
let anotarse = document.querySelector('#anotarse');
let resultados = document.querySelector('#resultados');
let torneo1 = document.querySelector('#torneo1');
let torneo2 = document.querySelector('#torneo2');
let navtorneos = document.querySelector('#navtorneos');
let btnCrear = document.querySelector('#btnCrear');
let btnEditar = document.querySelector('#btnEditar');
let btnAnotarse = document.querySelector('#btnAnotarse');
let btnResultados = document.querySelector('#btnResultados');
let crearSection = document.querySelector('#crearsection');
let editarSection = document.querySelector('#editarsection');
let anotarseSection = document.querySelector('#anotarsesection');
let resultadosSection = document.querySelector('#resultadossection');
let navflechas = document.querySelector('#navflechas')
let usuariostorneo = document.querySelector('#usuariostorneo')
let titulotorneo = document.querySelector('#titulotorneo')
let fechatorneo = document.querySelector('#fechatorneo')
let nuevotorneo = document.querySelector('#nuevotorneo')
let modo = document.querySelector('#modo');
let formtorneo = document.querySelector('#formtorneo');


function iniciar(){
    torneo1.style.display = 'none';
    torneo2.style.display = 'none';
    crear.style.display = 'flex';
    editar.style.display = 'flex';
    anotarse.style.display = 'flex';
    resultados.style.display = 'flex';
    navtorneos.style.display = 'flex';
    crearSection.style.display = 'flex';
    editarSection.style.display = 'flex';
    anotarseSection.style.display = 'flex';
    resultadosSection.style.display = 'flex';
    usuariostorneo.style.display= 'none';
    torneoscreados.style.display= 'none';
}

iniciar();

btnCrear.addEventListener('click', function(event) {
    event.preventDefault();
    creation('crear');
});
btnAnotarse.addEventListener('click', function(event) {
    event.preventDefault();
    creation('anotarse');
});
btnEditar.addEventListener('click', function(event) {
    event.preventDefault();
    creation('editar');
});
btnResultados.addEventListener('click', function(event) {
    event.preventDefault();
    creation('resultados');
});
crearSection.addEventListener('click', function(event) {
    event.preventDefault();
    creation('creacion');
});
editarSection.addEventListener('click', function(event) {
    event.preventDefault();
    creation('edicion');
});
anotarseSection.addEventListener('click', function(event) {
    event.preventDefault();
    creation('anotacion');
});
resultadosSection.addEventListener('click', function(event) {
    event.preventDefault();
    creation('result');
});
torneo1.addEventListener('click', function(event) {
    event.preventDefault();
    creation('modalidaduno');
});
torneo2.addEventListener('click', function(event) {
    event.preventDefault();
    creation('modalidadDos');
});


function creation (options){
    torneo1.style.display = 'none';
    torneo2.style.display = 'none';
    crear.style.display = 'none';
    editar.style.display = 'none';
    anotarse.style.display = 'none';
    resultados.style.display = 'none';
    navtorneos.style.display = 'none';
    crearSection.style.display = 'none';
    editarSection.style.display = 'none';
    anotarseSection.style.display = 'none';
    resultadosSection.style.display = 'none';
    usuariostorneo.style.display= 'none';
    torneoscreados.style.display= 'none';

    switch (options){
        case 'crear':
        case 'creacion':
            torneo1.style.display = 'flex';
            torneo2.style.display = 'flex';
            crear.style.display = 'none';
            editar.style.display = 'none';
            anotarse.style.display = 'none';
            resultados.style.display = 'none';
            navtorneos.style.display = 'flex';
            crearSection.style.display = 'flex';
            editarSection.style.display = 'flex';
            anotarseSection.style.display = 'flex';
            resultadosSection.style.display = 'flex';
            torneoscreados.style.display= 'none';
            usuariostorneo.style.display= 'none'; 
            Array.from(formtorneo.querySelectorAll('input')).forEach(input => {
                input.disabled = false;
            });
            break;

        case 'editar':
        case 'edicion':
            torneo1.style.display = 'none';
            torneo2.style.display = 'none';
            crear.style.display = 'none';
            editar.style.display = 'none';
            anotarse.style.display = 'none';
            resultados.style.display = 'none';
            navtorneos.style.display = 'flex';
            crearSection.style.display = 'flex';
            editarSection.style.display = 'flex';
            anotarseSection.style.display = 'flex';
            resultadosSection.style.display = 'flex';
            usuariostorneo.style.display= 'none';
            torneoscreados.style.display= 'flex';
            break;

        case 'anotarse':
        case 'anotacion':
            torneo1.style.display = 'none';
            torneo2.style.display = 'none';
            crear.style.display = 'none';
            editar.style.display = 'none';
            anotarse.style.display = 'none';
            resultados.style.display = 'none';
            navtorneos.style.display = 'flex';
            crearSection.style.display = 'flex';
            editarSection.style.display = 'flex';
            anotarseSection.style.display = 'flex';
            resultadosSection.style.display = 'flex';
            usuariostorneo.style.display= 'none';  
            break;

        case 'resultados':
        case 'result':
            torneo1.style.display = 'none';
            torneo2.style.display = 'none';
            crear.style.display = 'none';
            editar.style.display = 'none';
            anotarse.style.display = 'none';
            resultados.style.display = 'none';
            navtorneos.style.display = 'flex';
            crearSection.style.display = 'flex';
            editarSection.style.display = 'flex';
            anotarseSection.style.display = 'flex';
            resultadosSection.style.display = 'flex';
            usuariostorneo.style.display= 'none';  
            break;

        case 'modalidaduno':
        case 'modalidadDos':
            torneo1.style.display = 'none';
            torneo2.style.display = 'none';
            crear.style.display = 'none';
            editar.style.display = 'none';
            anotarse.style.display = 'none';
            resultados.style.display = 'none';
            navtorneos.style.display = 'flex';
            crearSection.style.display = 'flex';
            editarSection.style.display = 'flex';
            anotarseSection.style.display = 'flex';
            resultadosSection.style.display = 'flex';
            usuariostorneo.style.display= 'flex';    
            break;
        
        default:
            navtorneos.style.display = 'flex';
            usuariostorneo.style.display = 'none';
            break;
        }
}


nuevotorneo.addEventListener('click', function(event) {
    event.preventDefault();
    if (!titulotorneo.value || !fechatorneo.value || !modo.value) {
        alert('Por favor, ingrese todos los datos');
        return;
    }

    let titulo = titulotorneo.value;
    let fecha = fechatorneo.value;
    let modalidad = modo.value;

    let nuevoTorneo = document.createElement('div');
    nuevoTorneo.className = 'torneo'; 
    nuevoTorneo.innerHTML = `
        <h3>${titulo}</h3>
        <p>${fecha}</p>
        <p>${modalidad}</p>
        <button class="newtorneo">Editar</button>

    `;
    document.querySelector('#torneoscreados').insertAdjacentElement('beforeend', nuevoTorneo);
    nuevoTorneo.querySelector('.newtorneo').addEventListener('click', function() {
        alert(`Detalles del torneo:\nTítulo: ${titulo}\nFecha: ${fecha}\nModalidad: ${modalidad}`);
    });

    alert('Datos guardados');
    formtorneo.reset();
    iniciar();
});

// let formEditar = document.getElementById('form-editar');
//     let editTitulo = document.getElementById('edit-titulo');
//     let editFecha = document.getElementById('edit-fecha');
//     let editModo = document.getElementById('edit-modo');
//     let guardarEdiciones = document.getElementById('guardar-ediciones');
//     let cancelarEdiciones = document.getElementById('cancelar-ediciones');
//     let torneoscreados = document.getElementById('torneoscreados');
//     let divEditando = null;

//     // Crear un nuevo torneo
//     document.getElementById('nuevotorneo').addEventListener('click', function(event) {
//         event.preventDefault();
//         if (!titulotorneo.value || !fechatorneo.value || !modo.value) {
//             alert('Por favor, ingrese todos los datos');
//             return;
//         }

//         let titulo = titulotorneo.value;
//         let fecha = fechatorneo.value;
//         let modalidad = modo.value;

//         let nuevoTorneo = document.createElement('div');
//         nuevoTorneo.className = 'torneo';
//         nuevoTorneo.innerHTML = `
//             <h3>${titulo}</h3>
//             <p>${fecha}</p>
//             <p>${modalidad}</p>
//             <button class="editar-btn">Editar</button>
//         `;
//         torneoscreados.appendChild(nuevoTorneo);

//         // Limpiar el formulario y ocultar el formulario de edición
//         formtorneo.reset();
//         formEditar.style.display = 'none';
//     });

//     // Mostrar el formulario de edición cuando se hace clic en el botón de editar
//     torneoscreados.addEventListener('click', function(event) {
//         if (event.target.classList.contains('editar-btn')) {
//             divEditando = event.target.parentElement;
//             let titulo = divEditando.querySelector('h3').textContent;
//             let fecha = divEditando.querySelector('p').textContent.split(' - ')[0];
//             let modalidad = divEditando.querySelector('p').textContent.split(' - ')[1];

//             editTitulo.value = titulo;
//             editFecha.value = fecha;
//             editModo.value = modalidad;

//             formEditar.style.display = 'block';
//         }
//     });

//     // Guardar las ediciones
//     guardarEdiciones.addEventListener('click', function() {
//         if (!editTitulo.value || !editFecha.value || !editModo.value) {
//             alert('Por favor, ingrese todos los datos');
//             return;
//         }

//         if (divEditando) {
//             divEditando.querySelector('h3').textContent = editTitulo.value;
//             divEditando.querySelector('p').textContent = `${editFecha.value} - ${editModo.value}`;
//             formEditar.style.display = 'none';
//         }
//     });

//     // Cancelar ediciones
//     cancelarEdiciones.addEventListener('click', function() {
//         formEditar.style.display = 'none';
//     });