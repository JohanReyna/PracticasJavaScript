function GuardarInformacion(){
    
    var NombreUsuario = String(document.getElementById("usuario").value);
    var Email = String(document.getElementById("email").value);
    var Password1 = String(document.getElementById("contraseña").value);
    var Password2 = String(document.getElementById("contraseña2").value);

    //verifica que ningun campo este vacio
    if(NombreUsuario != "" && Email != "" && Password1 != "" && Password2 != ""){
        localStorage.setItem("Nombre de usuario", NombreUsuario);
        localStorage.setItem("Email", Email);

        if(Password1 == Password2){
            localStorage.setItem("Password", Password1);
            localStorage.setItem("Password2", Password2);
        }else{
            alert("Las contraseñas no coinciden");
        }
    }else{
        alert("Revisa la informacion, que no esta correcta");
    }
    alert("La informacion se guardo correctamente");
}

function ObtenerInformacion(){

    var ImprimirNombre = document.getElementById("ImprimirNombre");
    var ImprimirEmail = document.getElementById("ImprimirEmail");
    var ImprimirPassword = document.getElementById("ImprimirPassword");

    ImprimirNombre.innerText = "El nombre del usuario es: " + localStorage.getItem("Nombre de usuario");
    ImprimirEmail.innerText = "El Email del usuario es: " + localStorage.getItem("Email");
    ImprimirPassword.innerText = "El password del usuario es: " + localStorage.getItem("Password");

}