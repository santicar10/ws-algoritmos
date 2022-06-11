function autenticarAdmimnistrador(){
    const usuario = (document.getElementById("precio"));
    const pasword = (document.getElementById("precio"));
    if (usuario.value === "santiago" && pasword.value === "1234") {

        window.location.assign("http://127.0.0.1:5500/proyecto_final/index.html")
    } else {
        alert("usuario no existente, por favor verifique los datos")
    }
}

const url = "https://62a4a1a347e6e40063960d7c.mockapi.io/api/v1/";

function agregarProducto(producto,categoria){
    fetch (url+categoria,{
        method:"POST",
        body:JSON.stringify(producto),
        headers:{
            "Contenet-type":"application/json"
        }
    } ).then(response=>response.json())
    .then(data=>console.log(data))
}

const getProducts = async(resource) => {
    const response = await fetch(url+resource);
    return response.json();
}

console.log(getProducts("articulo_tenis"))