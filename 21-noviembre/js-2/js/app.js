function guardarUsuario(){
    let nombres = document.getElementById('nombres').value;
    let apellidos = document.getElementById('apellidos').value;
    let correo = document.getElementById('correo').value;

    let persona = {
        nombres : nombres,
        apellidos : apellidos,
        correo : correo
    }
    allPersons = [persona];
    console.log(allPersons);
}





