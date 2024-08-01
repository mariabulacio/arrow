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
let arqueros = document.querySelector('#arqueros');
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
nuevotorneo.addEventListener('click', function(event) {
    event.preventDefault();
    if (!titulotorneo.value || !fechatorneo.value || !modo.value || !arqueros.value) {
        alert('Por favor, ingrese todos los datos');
        return;
    }

    let titulo = titulotorneo.value;
    let fecha = fechatorneo.value;
    let modalidad = modo.value;

    let arquerosValue = arqueros.value.trim();
    let arquerosArray = arquerosValue.split(',').map(ar => ar.trim()).filter(ar => ar.length > 0);

    let nuevoTorneo = document.createElement('div');
    nuevoTorneo.className = 'torneo'; 
    nuevoTorneo.innerHTML = `
        <h3>${titulo}</h3>
        <p>${fecha}</p>
        <p>${modalidad}</p>
        <h4>Arqueros:${arquerosArray.map(ar => `<span>${ar}</span>`).join('')}</h4>
        <button class="editorn">Editar</button>
        <button class="newtorneo">Publicar</button>

    `;
    document.querySelector('#torneoscreados').insertAdjacentElement('beforeend', nuevoTorneo);

    nuevoTorneo.querySelector('.editorn').addEventListener('click', function() {
        formtorneo.style.display = 'flex';
        nuevotorneo.style.display = 'none';
        <button class="editorn">Guardar</button>
        <button class="newtorneo">Cncaelar</button>

    });
    nuevoTorneo.querySelector('.newtorneo').addEventListener('click', function() {
        document.querySelector('#torneospublicados').insertAdjacentElement('beforeend', nuevoTorneo);
    });

    alert('Datos guardados');
    formtorneo.reset();
    iniciar();
});

// //funciona paso siguiente
// nuevotorneo.addEventListener('click', function(event) {
//     event.preventDefault();
//     if (!titulotorneo.value || !fechatorneo.value || !modo.value) {
//         alert('Por favor, ingrese todos los datos');
//         return;
//     }

//     let titulo = titulotorneo.value;
//     let fecha = fechatorneo.value;
//     let modalidad = modo.value;

//     let arquerosValue = arqueros.value.trim();
//     let arquerosArray = arquerosValue.split(',').map(ar => ar.trim()).filter(ar => ar.length > 0);

//     let nuevoTorneo = document.createElement('div');
//     nuevoTorneo.className = 'torneo';
//     nuevoTorneo.dataset.id = Date.now(); // Utiliza un timestamp como ID único
//     nuevoTorneo.innerHTML = `
//         <h3>${titulo}</h3>
//         <p>${fecha}</p>
//         <p>${modalidad}</p>
//         <h4>Arqueros:</h4>
//         <div class="arqueros-list">
//             ${arquerosArray.map(ar => `<span>${ar}</span>`).join('')}
//         </div>
//         <button class="edit-button">Editar</button>
//         <button class="publish-button">Publicar</button>
//     `;

//     torneoscreados.insertAdjacentElement('beforeend', nuevoTorneo);

//     nuevoTorneo.querySelector('.edit-button').addEventListener('click', function() {
//         // Configura el torneo actual para edición
//         currentTorneo = nuevoTorneo;
//         titulotorneo.value = titulo;
//         fechatorneo.value = fecha;
//         modo.value = modalidad;
//         arqueros.value = arquerosArray.join(', ');

//         // Muestra el formulario de edición
//         formtorneo.style.display = 'block';
//         nuevotorneo.style.display = 'none';
//     });

//     nuevoTorneo.querySelector('.publish-button').addEventListener('click', function() {
//         alert(`Detalles del torneo:\nTítulo: ${titulo}\nFecha: ${fecha}\nModalidad: ${modalidad}`);
//     });

//     alert('Datos guardados');
//     formtorneo.reset();
//     iniciar();
// });

// // Agrega un botón de guardar cambios
// let saveChangesButton = document.createElement('button');
// saveChangesButton.textContent = 'Guardar Cambios';
// saveChangesButton.id = 'saveChanges';
// saveChangesButton.style.display = 'none'; // Oculto por defecto
// document.body.appendChild(saveChangesButton);

// saveChangesButton.addEventListener('click', function() {
//     if (currentTorneo) {
//         if (!titulotorneo.value || !fechatorneo.value || !modo.value) {
//             alert('Por favor, ingrese todos los datos');
//             return;
//         }

//         let titulo = titulotorneo.value;
//         let fecha = fechatorneo.value;
//         let modalidad = modo.value;

//         let arquerosValue = arqueros.value.trim();
//         let arquerosArray = arquerosValue.split(',').map(ar => ar.trim()).filter(ar => ar.length > 0);

//         // Actualiza el torneo existente
//         currentTorneo.innerHTML = `
//             <h3>${titulo}</h3>
//             <p>${fecha}</p>
//             <p>${modalidad}</p>
//             <h4>Arqueros:</h4>
//             <div class="arqueros-list">
//                 ${arquerosArray.map(ar => `<span>${ar}</span>`).join('')}
//             </div>
//             <button class="edit-button">Editar</button>
//             <button class="publish-button">Publicar</button>
//         `;

//         currentTorneo.querySelector('.edit-button').addEventListener('click', function() {
//             // Configura el torneo actual para edición
//             currentTorneo = nuevoTorneo;
//             titulotorneo.value = titulo;
//             fechatorneo.value = fecha;
//             modo.value = modalidad;
//             arqueros.value = arquerosArray.join(', ');

//             // Muestra el formulario de edición
//             formtorneo.style.display = 'block';
//             nuevotorneo.style.display = 'none';
//         });

//         currentTorneo.querySelector('.publish-button').addEventListener('click', function() {
//             alert(`Detalles del torneo:\nTítulo: ${titulo}\nFecha: ${fecha}\nModalidad: ${modalidad}`);
//         });

//         // Oculta el botón de guardar cambios
//         saveChangesButton.style.display = 'none';

//         alert('Cambios guardados');
//         formtorneo.reset();
//         iniciar();
//     }
// });

// // Mostrar el botón de guardar cambios cuando se edita un torneo
// function startEditing() {
//     saveChangesButton.style.display = 'block';
//     formtorneo.style.display = 'block';
//     nuevotorneo.style.display = 'none';
// }









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