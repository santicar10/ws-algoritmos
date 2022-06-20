function nikeChange(nombre){
    location.href="nikeProductos.html"
    let nombreCategoria = document.getElementById("nombreCategoria").value;
    console.log(nombreCategoria);
}



































































































// const url = "https://62a4a1a347e6e40063960d7c.mockapi.io/api/v1/";

// function agregarProducto(producto,categoria){
//     fetch (url+categoria,{
//         method:"POST",
//         body:JSON.stringify(producto),
//         headers:{
//             "Contenet-type":"application/json"
//         }
//     } ).then(response=>response.json())
//     .then(data=>console.log(data))
// }

// const getProducts = async(resource) => {
//     const response = await fetch(url+resource);
//     return response.json();
// }

// console.log(getProducts("articulo_tenis"))