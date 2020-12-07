function Enviarclick(){
    var correo = String (document.getElementById("correo").value);

    if(correo != ""){
        localStorage.setItem("Correo", correo);
        alert("Se han enviado instrucciones correctamente");
    }else{
        alert("No se ha podido enviar instrucciones, verifique sus datos");
    }
}