const url = "https://62a4a1a347e6e40063960d7c.mockapi.io/api/v1/tenisnike/"
const getProducts = async () => {
    const response = await fetch(url);
    return response.json();
}

async function arreglo() {
    products = await getProducts();
    showProducts();
}

arreglo();

const factura = document.getElementById("total");
let products = [];

async function showProducts() {
    if (factura.hasChildNodes) {
        let nodes = factura.childNodes;
        while (factura.firstChild) {
            factura.removeChild(factura.firstChild);
        }
    }
    products.forEach((item) => {

        const identificador = document.createElement("p");
        let div = document.createElement("DIV");
        div.setAttribute("class", "nikeCont");
        let boton = document.createElement("button");
        boton.setAttribute("id",item.id);
        let boton2 = document.createElement("button");
        boton2.setAttribute("id",item.id);
        let boton3 = document.createElement("button");
        boton3.setAttribute("id",item.id);
        boton.setAttribute("class", "botonCompra");
        boton.innerHTML = "Quitar";
        boton2.setAttribute("class", "botonCompra");
        boton2.innerHTML = "Añadir";
        boton3.setAttribute("class", "botonCompra");
        boton3.innerHTML = "Eliminar";
        anadirCarrito(boton);
        anadirCarritoS(boton2);
        elimiarP(boton3);
        const name = document.createElement("p");
        const precio = document.createElement("p");
        const cantidadD = document.createElement("p");

        identificador.textContent = "SNEAKER NIKE"
        name.textContent = "NOMBRE: " + item.name;
        precio.textContent = "PRECIO: " + item.precio;
        cantidadD.textContent = "CANTIDAD: " + item.cantidad;

        div.appendChild(name);
        div.appendChild(precio);
        div.appendChild(cantidadD);
        div.appendChild(boton);
        div.appendChild(boton2);
        div.appendChild(boton3);
        factura.appendChild(identificador);
        factura.appendChild(div);
    }); 
}

function redireccionar(id, nuevaCantidad) {
    fetch(url + id, {
        method: 'PUT',
        body: JSON.stringify({
            cantidad: nuevaCantidad,
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    arreglo();
}

function anadirCarrito(boton) {
    boton.addEventListener("click", () => {
        let idB = parseInt(boton.id);
        let cantidaddd = products[idB - 1].cantidad - 1;
        redireccionar(idB, cantidaddd);
    });
}

function anadirCarritoS(boton2) {
    boton2.addEventListener("click", () => {
        let idB = parseInt(boton2.id);
        let cantidaddd = products[idB - 1].cantidad + 1;
        redireccionar(idB, cantidaddd);
    });
}

function elimiarP(boton3) {
    boton3.addEventListener("click", () => {
        let idB = parseInt(boton3.id);
        redireccionarE(idB);
    });
}

function redireccionarE(id) {
    fetch(url+id,{
        method:'DELETE',
    })
    .then(response=>response.json());
    arreglo();
}

const url2 = "https://62a4a1a347e6e40063960d7c.mockapi.io/api/v1/tenisAdidas/";
const getProducts2 = async () => {
    const response = await fetch(url2);
    return response.json();
}

async function arreglo2() {
    products2 = await getProducts2();
    showProducts2();
}

arreglo2();

const factura2 = document.getElementById("total2");
let products2 = [];

async function showProducts2() {
    if (factura2.hasChildNodes) {
        let nodes = factura2.childNodes;
        while (factura2.firstChild) {
            factura2.removeChild(factura2.firstChild);
        }
    }

    products2.forEach(item => {

        const identificador = document.createElement("p");
        let div = document.createElement("DIV");
        div.setAttribute("class", "nikeCont");
        let boton = document.createElement("button");
        boton.setAttribute("id",item.id);
        let boton2 = document.createElement("button");
        boton2.setAttribute("id",item.id);
        let boton3 = document.createElement("button");
        boton3.setAttribute("id",item.id);
        boton.setAttribute("class", "botonCompra");
        boton.innerHTML = "Quitar";
        boton2.setAttribute("class", "botonCompra");
        boton2.innerHTML = "Añadir";
        boton3.setAttribute("class", "botonCompra");
        boton3.innerHTML = "Eliminar";
        anadirCarrito2(boton);
        anadirCarritoS2(boton2);
        elimiarP2(boton3);
        const name = document.createElement("p");
        const precio = document.createElement("p");
        const cantidadD = document.createElement("p");

        identificador.textContent = "SNEAKER ADIDAS"
        name.textContent = "NOMBRE: " + item.name;
        precio.textContent = "PRECIO: " + item.precio;
        cantidadD.textContent = "CANTIDAD: " + item.cantidad;

        div.appendChild(name);
        div.appendChild(precio);
        div.appendChild(cantidadD);
        div.appendChild(boton);
        div.appendChild(boton2);
        div.appendChild(boton3);
        factura2.appendChild(identificador);
        factura2.appendChild(div);
    }); 
}

function redireccionar2(id, nuevaCantidad) {
    fetch(url2 + id, {
        method: 'PUT',
        body: JSON.stringify({
            cantidad: nuevaCantidad,
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    arreglo2();
}

function anadirCarrito2(boton) {
    boton.addEventListener("click", () => {
        let idB = parseInt(boton.id);
        let cantidaddd = products2[idB - 1].cantidad - 1;
        redireccionar2(idB, cantidaddd);
    });
}

function anadirCarritoS2(boton2) {
    boton2.addEventListener("click", () => {
        let idB = parseInt(boton2.id);
        let cantidaddd = products2[idB - 1].cantidad + 1;
        redireccionar2(idB, cantidaddd);
    });
}

function elimiarP2(boton3) {
    boton3.addEventListener("click", () => {
        let idB = parseInt(boton3.id);
        redireccionarE2(idB);
    });
}

function redireccionarE2(id) {
    fetch(url2+id,{
        method:'DELETE',
    })
    .then(response=>response.json());
    arreglo2();
}

const url3 = "https://62a4a1a347e6e40063960d7c.mockapi.io/api/v1/teniPuma/";
const getProducts3 = async () => {
    const response = await fetch(url3);
    return response.json();
}

async function arreglo3() {
    products3 = await getProducts3();
    showProducts3();
}

arreglo3();
const factura3 = document.getElementById("total3");
let products3 = [];

async function showProducts3() {
    if (factura3.hasChildNodes) {
        let nodes = factura3.childNodes;
        while (factura3.firstChild) {
            factura3.removeChild(factura3.firstChild);
        }
    }
    products3.forEach(item => {

        const identificador = document.createElement("p");
        let div = document.createElement("DIV");
        div.setAttribute("class", "nikeCont");
        let boton = document.createElement("button");
        boton.setAttribute("id",item.id);
        let boton2 = document.createElement("button");
        boton2.setAttribute("id",item.id);
        let boton3 = document.createElement("button");
        boton3.setAttribute("id",item.id);
        boton.setAttribute("class", "botonCompra");
        boton.innerHTML = "Quitar";
        boton2.setAttribute("class", "botonCompra");
        boton2.innerHTML = "Añadir";
        boton3.setAttribute("class", "botonCompra");
        boton3.innerHTML = "Eliminar";
        anadirCarrito3(boton);
        anadirCarritoS3(boton2);
        elimiarP3(boton3);
        const name = document.createElement("p");
        const precio = document.createElement("p");
        const cantidadD = document.createElement("p");

        identificador.textContent = "SNEAKER PUMA"
        name.textContent = "NOMBRE: " + item.name;
        precio.textContent = "PRECIO: " + item.precio;
        cantidadD.textContent = "CANTIDAD: " + item.cantidad;

        div.appendChild(name);
        div.appendChild(precio);
        div.appendChild(cantidadD);
        div.appendChild(boton);
        div.appendChild(boton2);
        div.appendChild(boton3);
        factura3.appendChild(identificador);
        factura3.appendChild(div);
    }); 
}

function redireccionar3(id, nuevaCantidad) {
    fetch(url3 + id, {
        method: 'PUT',
        body: JSON.stringify({
            cantidad: nuevaCantidad,
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    arreglo3();
}

function anadirCarrito3(boton) {
    boton.addEventListener("click", () => {
        let idB = parseInt(boton.id);
        let cantidaddd = products3[idB - 1].cantidad - 1;
        redireccionar3(idB, cantidaddd);
    });
}

function anadirCarritoS3(boton2) {
    boton2.addEventListener("click", () => {
        let idB = parseInt(boton2.id);
        let cantidaddd = products3[idB - 1].cantidad + 1;
        redireccionar3(idB, cantidaddd);
    });
}

function elimiarP3(boton3) {
    boton3.addEventListener("click", () => {
        let idB = parseInt(boton3.id);
        redireccionarE3(idB);
    });
}

function redireccionarE3(id) {
    fetch(url3+id,{
        method:'DELETE',
    })
    .then(response=>response.json());
    arreglo3();
}

const url4 = "https://62a4a1a347e6e40063960d7c.mockapi.io/api/v1/Accesorios/";
const getProducts4 = async () => {
    const response = await fetch(url4);
    return response.json();
}

async function arreglo4() {
    products4 = await getProducts4();
    showProducts4();
}

arreglo4();
const factura4 = document.getElementById("total4");
let products4 = [];

async function showProducts4() {
    if (factura4.hasChildNodes) {
        let nodes = factura4.childNodes;
        while (factura4.firstChild) {
            factura4.removeChild(factura4.firstChild);
        }
    }
    products4.forEach(item => {

        const identificador = document.createElement("p");
        let div = document.createElement("DIV");
        div.setAttribute("class", "nikeCont");
        let boton = document.createElement("button");
        boton.setAttribute("id",item.id);
        let boton2 = document.createElement("button");
        boton2.setAttribute("id",item.id);
        let boton3 = document.createElement("button");
        boton3.setAttribute("id",item.id);
        boton.setAttribute("class", "botonCompra");
        boton.innerHTML = "Quitar";
        boton2.setAttribute("class", "botonCompra");
        boton2.innerHTML = "Añadir";
        boton3.setAttribute("class", "botonCompra");
        boton3.innerHTML = "Eliminar";
        anadirCarrito4(boton);
        anadirCarritoS4(boton2);
        elimiarP4(boton3);
        const name = document.createElement("p");
        const precio = document.createElement("p");
        const cantidadD = document.createElement("p");

        identificador.textContent = "ACCESORIOS"
        name.textContent = "NOMBRE: " + item.name;
        precio.textContent = "PRECIO: " + item.precio;
        cantidadD.textContent = "CANTIDAD: " + item.cantidad;

        div.appendChild(name);
        div.appendChild(precio);
        div.appendChild(cantidadD);
        div.appendChild(boton);
        div.appendChild(boton2);
        div.appendChild(boton3);
        factura4.appendChild(identificador);
        factura4.appendChild(div);
    }); 
}

function redireccionar4(id, nuevaCantidad) {
    fetch(url4 + id, {
        method: 'PUT',
        body: JSON.stringify({
            cantidad: nuevaCantidad,
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    arreglo4();
}

function anadirCarrito4(boton) {
    boton.addEventListener("click", () => {
        let idB = parseInt(boton.id);
        let cantidaddd = products4[idB - 1].cantidad - 1;
        redireccionar4(idB, cantidaddd);
    });
}

function anadirCarritoS4(boton2) {
    boton2.addEventListener("click", () => {
        let idB = parseInt(boton2.id);
        let cantidaddd = products4[idB - 1].cantidad + 1;
        redireccionar4(idB, cantidaddd);
    });
}

function elimiarP4(boton3) {
    boton3.addEventListener("click", () => {
        let idB = parseInt(boton3.id);
        redireccionarE4(idB);
    });
}

function redireccionarE4(id) {
    fetch(url4+id,{
        method:'DELETE',
    })
    .then(response=>response.json());
    arreglo4();
}