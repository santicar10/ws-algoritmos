const url4 = "https://62a4a1a347e6e40063960d7c.mockapi.io/api/v1/Accesorios/";
const getProducts4 = async () => {
    const response = await fetch(url4);
    return response.json();
}

let products4 = [];

async function arreglo4() {
    products4 = await getProducts4();
    showProducts4();
}

arreglo4();

const factura4 = document.getElementById("total4");

async function showProducts4() {
    let cont = 0;
    products4.forEach(item => {
        
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
        factura4.appendChild(div);
        cont++;
    }); 
}
