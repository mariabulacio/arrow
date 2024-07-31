//section torneos
let crear = document.querySelector('#crear');
let editar = document.querySelector('#editar');
let anotarse = document.querySelector('#anotarse');
let resultados = document.querySelector('#resultados');
let torneo1 = document.querySelector('#torneo1');
let torneo2 = document.querySelector('#torneo2');
let torneo3 = document.querySelector('#torneo3');
let torneo4 = document.querySelector('#torneo4');
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
let docerasosesenta = document.querySelector('#docerasosesenta')
let docerasocuarenta = document.querySelector('#docerasocuarenta')
let dieciochorasocuarenta = document.querySelector('#dieciochorasocuarenta')
let dieciocholibrecuarenta = document.querySelector('#dieciocholibrecuarenta')
let usuariostorneo = document.querySelector('#usuariostorneo')
let formatotorneo = document.querySelector('#formatotorneo')
let titulotorneo = document.querySelector('#titulotorneo')
let fechatorneo = document.querySelector('#fechatorneo')
let nuevotorneo = document.querySelector('#nuevotorneo')


function iniciar(){
    torneo1.style.display = 'none';
    torneo2.style.display = 'none';
    torneo3.style.display = 'none';
    torneo4.style.display = 'none';
    crear.style.display = 'flex';
    editar.style.display = 'flex';
    anotarse.style.display = 'flex';
    resultados.style.display = 'flex';
    navtorneos.style.display = 'flex';
    crearSection.style.display = 'flex';
    editarSection.style.display = 'flex';
    anotarseSection.style.display = 'flex';
    resultadosSection.style.display = 'flex';
    navflechas.style.display= 'none';
    docerasosesenta.style.display= 'none';
    docerasocuarenta.style.display= 'none';
    dieciochorasocuarenta.style.display= 'none';
    dieciocholibrecuarenta.style.display= 'none';
    usuariostorneo.style.display= 'none';
    formatotorneo.style.display= 'none';
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
docerasosesenta.addEventListener('click', function(event) {
    event.preventDefault();
    creation('modouno');
});
docerasocuarenta.addEventListener('click', function(event) {
    event.preventDefault();
    creation('mododos');
});
dieciochorasocuarenta.addEventListener('click', function(event) {
    event.preventDefault();
    creation('modotres');
});
dieciocholibrecuarenta.addEventListener('click', function(event) {
    event.preventDefault();
    creation('modocuatro');
});

function creation (options){
    torneo1.style.display = 'none';
    torneo2.style.display = 'none';
    torneo3.style.display = 'none';
    torneo4.style.display = 'none';
    crear.style.display = 'none';
    editar.style.display = 'none';
    anotarse.style.display = 'none';
    resultados.style.display = 'none';
    navtorneos.style.display = 'none';
    crearSection.style.display = 'none';
    editarSection.style.display = 'none';
    anotarseSection.style.display = 'none';
    resultadosSection.style.display = 'none';
    navflechas.style.display= 'none';
    docerasosesenta.style.display= 'none';
    docerasocuarenta.style.display= 'none';
    dieciochorasocuarenta.style.display= 'none';
    dieciocholibrecuarenta.style.display= 'none';
    usuariostorneo.style.display= 'none';
    formatotorneo.style.display= 'none';  

    switch (options){
        case 'crear':
        case 'creacion':
            torneo1.style.display = 'flex';
            torneo2.style.display = 'flex';
            torneo3.style.display = 'none';
            torneo4.style.display = 'none';
            crear.style.display = 'none';
            editar.style.display = 'none';
            anotarse.style.display = 'none';
            resultados.style.display = 'none';
            navtorneos.style.display = 'flex';
            crearSection.style.display = 'flex';
            editarSection.style.display = 'flex';
            anotarseSection.style.display = 'flex';
            resultadosSection.style.display = 'flex';
            navflechas.style.display = 'none';
            docerasosesenta.style.display= 'none';
            docerasocuarenta.style.display= 'none';
            dieciochorasocuarenta.style.display= 'none';
            dieciocholibrecuarenta.style.display= 'none';
            usuariostorneo.style.display= 'none'; 
            break;

        case 'editar':
        case 'edicion':
            torneo1.style.display = 'none';
            torneo2.style.display = 'none';
            torneo3.style.display = 'flex';
            torneo4.style.display = 'flex';
            crear.style.display = 'none';
            editar.style.display = 'none';
            anotarse.style.display = 'none';
            resultados.style.display = 'none';
            navtorneos.style.display = 'flex';
            crearSection.style.display = 'flex';
            editarSection.style.display = 'flex';
            anotarseSection.style.display = 'flex';
            resultadosSection.style.display = 'flex';
            navflechas.style.display = 'none';
            docerasosesenta.style.display= 'none';
            docerasocuarenta.style.display= 'none';
            dieciochorasocuarenta.style.display= 'none';
            dieciocholibrecuarenta.style.display= 'none'; 
            usuariostorneo.style.display= 'none';
            break;

        case 'anotarse':
        case 'anotacion':
            torneo1.style.display = 'none';
            torneo2.style.display = 'none';
            torneo3.style.display = 'flex';
            torneo4.style.display = 'flex';
            crear.style.display = 'none';
            editar.style.display = 'none';
            anotarse.style.display = 'none';
            resultados.style.display = 'none';
            navtorneos.style.display = 'flex';
            crearSection.style.display = 'flex';
            editarSection.style.display = 'flex';
            anotarseSection.style.display = 'flex';
            resultadosSection.style.display = 'flex';
            navflechas.style.display = 'none';
            docerasosesenta.style.display= 'none';
            docerasocuarenta.style.display= 'none';
            dieciochorasocuarenta.style.display= 'none';
            dieciocholibrecuarenta.style.display= 'none'; 
            usuariostorneo.style.display= 'none';  
            break;

        case 'resultados':
        case 'result':
            torneo1.style.display = 'none';
            torneo2.style.display = 'none';
            torneo3.style.display = 'flex';
            torneo4.style.display = 'flex';
            crear.style.display = 'none';
            editar.style.display = 'none';
            anotarse.style.display = 'none';
            resultados.style.display = 'none';
            navtorneos.style.display = 'flex';
            crearSection.style.display = 'flex';
            editarSection.style.display = 'flex';
            anotarseSection.style.display = 'flex';
            resultadosSection.style.display = 'flex';
            navflechas.style.display = 'none';
            docerasosesenta.style.display= 'none';
            docerasocuarenta.style.display= 'none';
            dieciochorasocuarenta.style.display= 'none';
            dieciocholibrecuarenta.style.display= 'none'; 
            usuariostorneo.style.display= 'none';  
            break;

        case 'modalidaduno':
        case 'modalidadDos':
            torneo1.style.display = 'none';
            torneo2.style.display = 'none';
            torneo3.style.display = 'none';
            torneo4.style.display = 'none';
            crear.style.display = 'none';
            editar.style.display = 'none';
            anotarse.style.display = 'none';
            resultados.style.display = 'none';
            navtorneos.style.display = 'flex';
            crearSection.style.display = 'flex';
            editarSection.style.display = 'flex';
            anotarseSection.style.display = 'flex';
            resultadosSection.style.display = 'flex';
            navflechas.style.display = 'flex';
            docerasosesenta.style.display= 'flex';
            docerasocuarenta.style.display= 'flex';
            dieciochorasocuarenta.style.display= 'flex';
            dieciocholibrecuarenta.style.display= 'flex';
            usuariostorneo.style.display= 'flex';    
            break;
        case 'modouno':
        case 'mododos':
        case 'modotres':
        case 'modocuatro':
            torneo1.style.display = 'none';
            torneo2.style.display = 'none';
            torneo3.style.display = 'none';
            torneo4.style.display = 'none';
            crear.style.display = 'none';
            editar.style.display = 'none';
            anotarse.style.display = 'none';
            resultados.style.display = 'none';
            navtorneos.style.display = 'flex';
            crearSection.style.display = 'flex';
            editarSection.style.display = 'flex';
            anotarseSection.style.display = 'flex';
            resultadosSection.style.display = 'flex';
            navflechas.style.display = 'flex';
            docerasosesenta.style.display= 'flex';
            docerasocuarenta.style.display= 'flex';
            dieciochorasocuarenta.style.display= 'flex';
            dieciocholibrecuarenta.style.display= 'flex';
            usuariostorneo.style.display= 'flex'; 
            break;
        case 'creaciontorneo':
            torneo1.style.display = 'none';
            torneo2.style.display = 'none';
            torneo3.style.display = 'flex';  
            torneo4.style.display = 'none';
            crear.style.display = 'none';
            editar.style.display = 'none';
            anotarse.style.display = 'none';
            resultados.style.display = 'none';
            navtorneos.style.display = 'flex';
            crearSection.style.display = 'none';
            editarSection.style.display = 'none';
            anotarseSection.style.display = 'none';
            resultadosSection.style.display = 'none';
            navflechas.style.display = 'none';
            docerasosesenta.style.display = 'none';
            docerasocuarenta.style.display = 'none';
            dieciochorasocuarenta.style.display = 'none';
            dieciocholibrecuarenta.style.display = 'none'; 
            usuariostorneo.style.display = 'none'; 
            break;
    
        
        default:
            navtorneos.style.display = 'flex';
            navflechas.style.display = 'none';
            docerasosesenta.style.display = 'none';
            docerasocuarenta.style.display = 'none';
            dieciochorasocuarenta.style.display = 'none';
            dieciocholibrecuarenta.style.display = 'none';
            usuariostorneo.style.display = 'none';
            break;
        }
}



