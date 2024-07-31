//Carga de datos Perfil
let formperfil = document.querySelector('#formperfil')
let editarperfil = document.querySelector('#editarperfil')
let guardarperfil = document.querySelector('#guardarperfil')

function seteo(){
    formperfil.style.display = 'none';
    editarperfil.style.display = 'flex';
    guardarperfil.style.display = 'none';
}
seteo();
editarperfil.addEventListener('click', function(event) {
    event.preventDefault();
    edicion('edicionperfil');
});

function edicion (cargadatos){
    formperfil.style.display = 'none';
    editarperfil.style.display = 'flex';
    guardarperfil.style.display = 'none';

    switch(cargadatos){
        case 'edicionperfil':
            formperfil.style.display = 'flex';
            editarperfil.style.display = 'flex';
            guardarperfil.style.display = 'flex';
            Array.from(formperfil.querySelectorAll('input')).forEach(input => {
                input.disabled = false;
            });
            break;
        default:
            formperfil.style.display = 'none';
            guardarperfil.style.display = 'none';
            editarperfil.style.display = 'flex';  
    }
}
guardarperfil.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Datos guardados'); 
    seteo();
});