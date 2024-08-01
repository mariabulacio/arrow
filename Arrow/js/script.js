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
let torneoscreados = document.querySelector('#torneoscreados');
let torneospublicados = document.querySelector('#torneospublicados');
let currentTorneo = null;



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
    torneospublicados.style.display= 'none';
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
    torneospublicados.style.display= 'none';

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
            torneospublicados.style.display= 'none';
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
            torneospublicados.style.display= 'none';
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
            torneospublicados.style.display= 'flex'; 
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

//funciona paso anterior
// nuevotorneo.addEventListener('click', function(event) {
//     event.preventDefault();
//     if (!titulotorneo.value || !fechatorneo.value || !modo.value) {
//         alert('Por favor, ingrese todos los datos');
//         return;
//     }

//     let titulo = titulotorneo.value;
//     let fecha = fechatorneo.value;
//     let modalidad = modo.value;

//     let nuevoTorneo = document.createElement('div');
//     nuevoTorneo.className = 'torneo'; 
//     nuevoTorneo.innerHTML = `
//         <h3>${titulo}</h3>
//         <p>${fecha}</p>
//         <p>${modalidad}</p>
//         <button class="editorn">Editar</button>
//         <button class="newtorneo">Publicar</button>

//     `;

//     nuevoTorneo.querySelector('.editorn').addEventListener('click', function() {
//         usuariostorneo.style.display= 'flex';
//         nuevotorneo.style.display= 'none';
        
//     });
//     nuevoTorneo.querySelector('.newtorneo').addEventListener('click', function() {
//         document.querySelector('#torneospublicados').insertAdjacentElement('beforeend', nuevoTorneo);
//     });
//     document.querySelector('#torneoscreados').insertAdjacentElement('beforeend', nuevoTorneo);

//     alert('Datos guardados');
//     formtorneo.reset();
//     iniciar();
// });

let guardar=document.createElement('button');
guardar.type='submit';
guardar.textContent='Guardar';
guardar.className = 'btnguardar';
let cancelar=document.createElement('button');
cancelar.type='submit';
cancelar.textContent='Cancelar';
cancelar.className = 'btn-cancelar'; 
guardar.addEventListener('click', function(event) {
    event.preventDefault();
    if (!titulotorneo.value || !fechatorneo.value || !modo.value) {
        alert('Por favor, ingrese todos los datos');
        return;
    }

    let titu = titulotorneo.value;
    let fech= fechatorneo.value;
    let modali = modo.value;

    let nuevoTorn = document.createElement('div');
    nuevoTorn.className = 'torn'; 
    nuevoTorn.innerHTML = `
        <h3>${titu}</h3>
        <p>${fech}</p>
        <p>${modali}</p>

    `;
        document.querySelector('#torneoscreados').insertAdjacentElement('beforeend', nuevoTorn);
        usuariostorneo.style.display= 'none';
});
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
        <button class="editorn">Editar</button>
        <button class="newtorneo">Publicar</button>

    `;

    nuevoTorneo.querySelector('.editorn').addEventListener('click', function() {
        usuariostorneo.style.display= 'flex';
        nuevotorneo.style.display= 'none';
        formtorneo.appendChild(guardar);
        formtorneo.appendChild(cancelar);
    });

    

    nuevoTorneo.querySelector('.newtorneo').addEventListener('click', function() {
        document.querySelector('#torneospublicados').insertAdjacentElement('beforeend', nuevoTorneo);
    });
    document.querySelector('#torneoscreados').insertAdjacentElement('beforeend', nuevoTorneo);

    alert('Datos guardados');
    formtorneo.reset();
    iniciar();
});
