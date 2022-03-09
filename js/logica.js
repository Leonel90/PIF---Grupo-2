document.querySelector('#btnEntrar').addEventListener('click', iniciarSesion)

function iniciarSesion() {
    var sCorreo = '';
    var sContrasena = '';
    var bAcceso = false;

    sCorreo = document.querySelector('#user').value
    sContrasena = document.querySelector('#pass').value

    bAcceso = verificarCredenciales(sCorreo, sContrasena);
    
    if (bAcceso == true) {
        ingresar();
    }
}

function ingresar(){
    var rol = sessionStorage.getItem('rolUsuarioActivo')
    switch (rol) {
        case '1':
            window.location.href = '/html/crearRutas.html'
            break;
            case '2':
                window.location.href = '/index.html'
                break;
        default:
            window.location.href = '/login.html'
            break;
    }
}