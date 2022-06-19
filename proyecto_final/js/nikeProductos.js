const url = "https://62a4a1a347e6e40063960d7c.mockapi.io/api/v1/";
const getProducts = async() => {
    const response = await fetch(url+"tenisnike");
    return response.json();
}


async function arreglo(){
    products = await getProducts();
    showProducts();
}

arreglo();

const factura = document.getElementById("nike")
let products = [];



async function showProducts (){
    products = await getProducts();
    for (var i in products){
        let div = document.createElement("DIV");
        div.setAttribute("class","nikeCont");
        let boton = document.createElement("button");
        boton.addEventListener("click",()=>{
            anadirCarrito();
        })
        boton.setAttribute("class","botonCompra");
        boton.innerHTML="comprar";
        const name = document.createElement("p");
        const precio = document.createElement("p");
        const cantidadD = document.createElement("p");

        name.textContent = "NOMBRE: " + products[i].name;
        precio.textContent = "PRECIO: " + products[i].precio;
        cantidadD.textContent = "CANTIDAD: " + products[i].cantidad;

        div.appendChild(name);
        div.appendChild(precio);
        div.appendChild(cantidadD);
        div.appendChild(boton);
        factura.appendChild(div);
    }

    products.forEach(item => {
        console.log(item.cantidadD)
    });

    console.log(products);
}

contador = 0;

function anadirCarrito(){
    contador = contador + 1;
    console.log(contador);
    let span = document.getElementById("span");
    span.innerHTML=contador;
}

showProducts();

function carrito(){
    
}
