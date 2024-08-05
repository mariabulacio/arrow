//Carga de datos Perfil
let formperfil = document.querySelector('#formperfil');
let editarperfil = document.querySelector('#editarperfil');
let guardarperfil = document.querySelector('#guardarperfil');
let datosPersonales = document.querySelector('#datosPersonales');


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

function edicion(cargadatos) {
    formperfil.style.display = 'flex';
    editarperfil.style.display = 'none';
    guardarperfil.style.display = 'flex';

    Array.from(formperfil.querySelectorAll('input')).forEach(input => {
        input.disabled = false;
    });
    document.querySelector('#modalidad').disabled = false;
}

guardarperfil.addEventListener('click', function(event) {
    event.preventDefault();
    
    let nombre = formperfil.querySelector('input[type="text"]').value;
    let email = formperfil.querySelector('input[type="email"]').value;
    let dni = formperfil.querySelector('input[type="text"]').value;
    let modalidadSelect = document.querySelector('#modalidad');
    let modalidad = modalidadSelect.options[modalidadSelect.selectedIndex].text;
    
    datosPersonales.innerHTML = `
        <h3>Nombre:</h3>
        <p>${nombre}</p>
        <h3>Email:</h3>
        <p>${email}</p>
        <br>
        <h3>DNI:</h3>
        <p>${dni}</p>
        <h3>Modalidad:</h3>
        <p>${modalidad}</p>
    `;
    
    seteo();
});