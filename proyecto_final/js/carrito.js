let buton = document.getElementById("pagarr");
buton.addEventListener("click", () => {
    const nombre = document.getElementById("campoTexto1").value;
    const tarjeta = document.getElementById("campoTexto2").value;
    const direccion = document.getElementById("campoTexto3").value;
    if (nombre == "" || tarjeta == "" || direccion == "") {
        alert("porfavor llenar todos los campos");
    } else {
        alert("¡Muchas gracias por su compra!" + "\n" + " te invitamos a seguir comprando");
        location.href = "index.html"
    }
})

let cancelar = document.getElementById("cancelar");
cancelar.addEventListener("click", () => {
    location.href = "index.html"
})

