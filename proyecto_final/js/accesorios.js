const url = "https://62a4a1a347e6e40063960d7c.mockapi.io/api/v1/Accesorios/";
const getProducts = async () => {
    const response = await fetch(url);
    return response.json();
}

async function arreglo() {
    products = await getProducts();
    showProducts();
}

arreglo();
const factura = document.getElementById("accesorios");
let products = [];

async function showProducts() {
    if (factura.hasChildNodes) {
        let nodes = factura.childNodes;
        while (factura.firstChild) {
            factura.removeChild(factura.firstChild);
        }
    }
    let cont = 0;
    products = await getProducts();
    products.forEach(item => {
        
        let div = document.createElement("DIV");
        div.setAttribute("class", "nikeCont");
        let boton = document.createElement("button");
        boton.setAttribute("id", cont);
        anadirCarrito(boton);
        boton.setAttribute("class", "botonCompra");
        boton.innerHTML = "comprar";
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
        factura.appendChild(div);
        cont++;
    }); 
}

showProducts();

contador = 0;
let cantidadesPrecio = [];

function redireccionar(id, nuevaCantidad) {
    if (nuevaCantidad > 0) {
        fetch(url + id, {
            method: 'PUT',
            body: JSON.stringify({
                cantidad: nuevaCantidad,
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
    } else {
        alert("el rpoducto está agotado");
    }
}

function anadirCarrito(boton) {
    boton.addEventListener("click", () => {
        arreglo();
        let idB = parseInt(boton.id);
        cantidadesPrecio.push(products[idB].precio);
        let cantidaddd = products[idB].cantidad - 1;
        let acumx = 0;
        for (let i = 0; i < cantidadesPrecio.length; i++) {
            acumx = acumx + cantidadesPrecio[i];
        }
        let span2 = document.getElementById("span2");
        span2.innerHTML = acumx;
        contador = contador + 1;
        let span = document.getElementById("span");
        span.innerHTML = contador;
        redireccionar(idB + 1, cantidaddd);
    });
}

function vaciar() {
    contador = 0;
    let span = document.getElementById("span");
    span.innerHTML = contador;
    cantidadesPrecio = [0];
    let span2 = document.getElementById("span2");
    span2.innerHTML = contador;
}

let confirmar = document.getElementById("confirmar");
confirmar.addEventListener("click",()=>{
    location.href="carrito.html"
})