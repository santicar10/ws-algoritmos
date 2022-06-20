const url3 = "https://62a4a1a347e6e40063960d7c.mockapi.io/api/v1/teniPuma/";
const getProducts3 = async () => {
    const response = await fetch(url3);
    return response.json();
}

let products3 = [];

async function arreglo3() {
    products3 = await getProducts3();
    showProducts3();
}

arreglo3();

const factura3 = document.getElementById("total3");

async function showProducts3() {
    let cont = 0;
    products3.forEach(item => {
        
        let div = document.createElement("DIV");
        div.setAttribute("class", "nikeCont");
        let boton = document.createElement("button");
        boton.setAttribute("id", cont);
        boton.setAttribute("class", "botonCompra");
        boton.innerHTML = "eliminar";
        const name = document.createElement("p");
        const precio = document.createElement("p");
        const cantidadD = document.createElement("p");

        name.textContent = "NOMBRE: " + item.name;
        precio.textContent = "PRECIO: " + item.precio;
        cantidadD.textContent = "CANTIDAD: " + item.cantidad;

        div.appendChild(name);
        div.appendChild(precio);
        div.appendChild(cantidadD);
        div.appendChild(boton);
        factura3.appendChild(div);
        cont++;
    }); 
}