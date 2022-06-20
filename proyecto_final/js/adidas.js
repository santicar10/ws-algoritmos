const url2 = "https://62a4a1a347e6e40063960d7c.mockapi.io/api/v1/tenisAdidas/";
const getProducts2 = async () => {
    const response = await fetch(url2);
    return response.json();
}

let products2 = [];

async function arreglo2() {
    products2 = await getProducts2();
    showProducts2();
}

arreglo2();

const factura2 = document.getElementById("total2");

async function showProducts2() {
    let cont = 0;
    products2.forEach(item => {
        
        let div = document.createElement("DIV");
        div.setAttribute("class", "nikeCont");
        let boton = document.createElement("button");
        boton.setAttribute("id", cont);
        boton.setAttribute("class", "botonCompra");
        boton.innerHTML = "agregar";
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
        factura2.appendChild(div);
        cont++;
    }); 
}