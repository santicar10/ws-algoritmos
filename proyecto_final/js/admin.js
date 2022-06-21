function Comprobar(){
    let user = document.getElementById("userNombre").value;
    let pasw = document.getElementById("userContraseña").value;
    if ((user == "santiago" || user == "santi") && (pasw == "123")) {
        location.href="administrador.html"
    } else {
        alert("contraseña o usuario incorrectos");
    }
}