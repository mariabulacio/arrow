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
let fiscalizandoCompa = document.querySelector('#fiscalizandoCompa');
let agregando = document.querySelector('#agregando');
let resultadoArquero = document.querySelector('#resultadoArquero');
let fiscal = document.querySelector('#fiscal');
let btnfiscal = document.querySelector('#btnfiscal');
let fiscalsesection = document.querySelector('#fiscalsesection');
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
    fiscal.style.display= 'flex';
    fiscalizandoCompa.style.display= 'none';
    fiscalsesection.style.display= 'flex';
}

iniciar();

btnfiscal.addEventListener('click', function(event) {
    event.preventDefault();
    creation('fiscalizar');
});
fiscalsesection.addEventListener('click', function(event) {
    event.preventDefault();
    creation('fiscalizando');
});
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
agregando.addEventListener('click', function(event) {
    event.preventDefault(); 

    const newRow = document.createElement('div');
    newRow.style.display = 'flex';
    newRow.style.flexDirection = 'column';
    newRow.style.gap = '10px'; 
    for (let i = 1; i <= 3; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Flecha ${anotando.children.length + i}:`; 
        input.className = 'flechas'; 
        newRow.appendChild(input); 
    }

    anotando.appendChild(newRow);
});
resultadoArquero.addEventListener('click', function(event) {
    event.preventDefault();

    let sum = 0;
    const inputs = anotando.querySelectorAll('input.flechas');
    inputs.forEach(input => {
        const value = parseFloat(input.value);
        if (!isNaN(value)) {
            sum += value;
        }
    });
    sumatoria.textContent = `${sum}`;
    sumatoria.style.display='flex';
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
    fiscal.style.display= 'flex';
    fiscalizandoCompa.style.display= 'none';
    fiscalsesection.style.display= 'flex';

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
            fiscal.style.display= 'none';
            fiscalizandoCompa.style.display= 'none';
            fiscalsesection.style.display= 'flex';
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
            fiscal.style.display= 'none';
            fiscalizandoCompa.style.display= 'none';
            fiscalsesection.style.display= 'flex';
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
            fiscal.style.display= 'none';
            fiscalizandoCompa.style.display= 'none';
            fiscalsesection.style.display= 'flex';
            break;
        case 'fiscalizar':
        case 'fiscalizando':
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
            torneospublicados.style.display= 'none'; 
            fiscal.style.display= 'none';
            fiscalizandoCompa.style.display= 'flex';
            fiscalsesection.style.display= 'flex';
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
            fiscal.style.display= 'none';
            fiscalizandoCompa.style.display= 'none';
            fiscalsesection.style.display= 'flex'; 
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
            fiscal.style.display= 'none';
            fiscalizandoCompa.style.display= 'none';
            fiscalsesection.style.display= 'flex';   
            break;
        
        default:
            navtorneos.style.display = 'flex';
            usuariostorneo.style.display = 'none';
            break;
        }
}


let divEditando = null;
let guardar = document.createElement('button');
guardar.type = 'submit';
guardar.textContent = 'Guardar';
guardar.className = 'btnguardar';
let cupo = document.createElement('button');
cupo.type = 'submit';
cupo.textContent = 'Inscribirse';
cupo.className = 'btncupo';

function manejarEstado(accion) {
    switch (accion) {
        case 'guardar':
            if (!titulotorneo.value || !fechatorneo.value || !modo.value) {
                alert('Por favor, ingrese todos los datos');
                return;
            }

            let titu = titulotorneo.value;
            let fech = fechatorneo.value;
            let modali = modo.value;

            if (divEditando) {
                divEditando.querySelector('h3').textContent = titu;
                divEditando.querySelector('p:nth-of-type(1)').textContent = fech;
                divEditando.querySelector('p:nth-of-type(2)').textContent = modali;

                let botonCupo = divEditando.querySelector('.btncupo');
                if (botonCupo) {
                    botonCupo.remove();
                }

                divEditando.style.display = 'block';
                divEditando = null;
                formtorneo.reset();
                usuariostorneo.style.display = 'none';
                torneoscreados.style.display = 'flex';
                return;
            }

            let nuevoTorn = document.createElement('div');
            nuevoTorn.className = 'torn';
            nuevoTorn.innerHTML = `
                <h3>${titu}</h3>
                <p>${fech}</p>
                <p>${modali}</p>
                <button class="ditorn">Editar</button>
                <button class="nwtorn">Publicar</button>
            `;

            nuevoTorn.querySelector('.ditorn').addEventListener('click', function() {
                divEditando = nuevoTorn;
                usuariostorneo.style.display = 'flex';
                nuevotorneo.style.display = 'none';
                formtorneo.appendChild(guardar);
                nuevoTorn.style.display = 'block';
                torneoscreados.style.display = 'none';
            });

            nuevoTorn.querySelector('.nwtorn').addEventListener('click', function() {
                let contenedorPublicados = document.querySelector('#torneospublicados');
                let botonEditar = nuevoTorn.querySelector('.ditorn');
                let botonPublicar = nuevoTorn.querySelector('.nwtorn');
                if (botonEditar) botonEditar.remove();
                if (botonPublicar) botonPublicar.remove();

                let nuevoCupo = document.createElement('button');
                nuevoCupo.type = 'submit';
                nuevoCupo.textContent = 'Inscribirse';
                nuevoCupo.className = 'btncupo';

                nuevoTorn.appendChild(nuevoCupo);

                document.querySelector('#torneoscreados').removeChild(nuevoTorn);
                contenedorPublicados.appendChild(nuevoTorn);
            });

            document.querySelector('#torneoscreados').appendChild(nuevoTorn);
            usuariostorneo.style.display = 'none';
            torneoscreados.style.display = 'flex';
            break;

        case 'nuevotorneo':
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
                divEditando = nuevoTorneo;
                usuariostorneo.style.display = 'flex';
                nuevotorneo.style.display = 'none';
                formtorneo.appendChild(guardar);
                nuevoTorneo.style.display = 'block';
                torneoscreados.style.display = 'none';
            });

            nuevoTorneo.querySelector('.newtorneo').addEventListener('click', function() {
                localStorage.setItem('torneo',JSON.stringify(
                    {
                        title:titulo,
                        date:fecha,
                        mode:modalidad
                    }
                ));
                let contenedorPublicados = document.querySelector('#torneospublicados');
                let botonEditar = nuevoTorneo.querySelector('.editorn');
                let botonPublicar = nuevoTorneo.querySelector('.newtorneo');
                if (botonEditar) botonEditar.remove();
                if (botonPublicar) botonPublicar.remove();

                let nuevoCupo = document.createElement('button');
                nuevoCupo.type = 'submit';
                nuevoCupo.textContent = 'Inscribirse';
                nuevoCupo.className = 'btncupo';

                nuevoTorneo.appendChild(nuevoCupo);

                document.querySelector('#torneoscreados').removeChild(nuevoTorneo);
                contenedorPublicados.appendChild(nuevoTorneo);
            });

            document.querySelector('#torneoscreados').appendChild(nuevoTorneo);
            
            alert('Datos guardados');
            formtorneo.reset();
            iniciar();
            break;
            default:
                break;
    }
}


guardar.addEventListener('click', function(event) {
    event.preventDefault();
    manejarEstado('guardar');
});

nuevotorneo.addEventListener('click', function(event) {
    event.preventDefault();
    manejarEstado('nuevotorneo');
});

