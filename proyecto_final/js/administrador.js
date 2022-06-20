const url = "https://62a4a1a347e6e40063960d7c.mockapi.io/api/v1/tenisnike/";
const getProducts = async () => {
    const response = await fetch(url);
    return response.json();
}

let products = [];

async function arreglo() {
    products = await getProducts();
    showProducts();
}

arreglo();

const factura = document.getElementById("total");

async function showProducts() {
    let cont = 0;
    products.forEach(item => {
        
        const identificador = document.createElement("p");
        let div = document.createElement("DIV");
        div.setAttribute("class", "nikeCont");
        let boton = document.createElement("button");
        boton.setAttribute("id", cont);
        boton.setAttribute("class", "botonCompra");
        boton.innerHTML = "eliminar";
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
        factura.appendChild(identificador)
        factura.appendChild(div);
        cont++;
    }); 
}

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
        
        const identificador = document.createElement("p");
        let div = document.createElement("DIV");
        div.setAttribute("class", "nikeCont");
        let boton = document.createElement("button");
        boton.setAttribute("id", cont);
        boton.setAttribute("class", "botonCompra");
        boton.innerHTML = "eliminar";
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
        factura2.appendChild(identificador)
        factura2.appendChild(div);
        cont++;
    }); 
}

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
        
        const identificador = document.createElement("p");
        let div = document.createElement("DIV");
        div.setAttribute("class", "nikeCont");
        let boton = document.createElement("button");
        boton.setAttribute("id", cont);
        boton.setAttribute("class", "botonCompra");
        boton.innerHTML = "eliminar";
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
        factura3.appendChild(identificador)
        factura3.appendChild(div);
        cont++;
    }); 
}

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
        
        const identificador = document.createElement("p");
        let div = document.createElement("DIV");
        div.setAttribute("class", "nikeCont");
        let boton = document.createElement("button");
        boton.setAttribute("id", cont);
        boton.setAttribute("class", "botonCompra");
        boton.innerHTML = "eliminar";
        const name = document.createElement("p");
        const precio = document.createElement("p");
        const cantidadD = document.createElement("p");

        identificador.textContent = "ACCESORIO"
        name.textContent = "NOMBRE: " + item.name;
        precio.textContent = "PRECIO: " + item.precio;
        cantidadD.textContent = "CANTIDAD: " + item.cantidad;

        div.appendChild(name);
        div.appendChild(precio);
        div.appendChild(cantidadD);
        div.appendChild(boton);
        factura4.appendChild(identificador)
        factura4.appendChild(div);
        cont++;
    }); 
}

