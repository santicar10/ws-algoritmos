const factura = document.getElementById("factura");
let productos = [
    {
        canti: 10,
        precio: 3500,
        nombreProducto: "Chaqueta Bomber",
        catego: "Ropa"
    },
    {
        canti: 12,
        precio: 3500,
        nombreProducto: "Muebles",
        catego: "Hogar"
    },
    {
        canti: 5,
        precio: 3500,
        nombreProducto: "Iphone XS",
        catego: "Tecnologia"
    }
];

pintarArray();
mostrar();

const inicio = document.getElementById("radioStart");
const final = document.getElementById("radioEnd");

function addProductos() {
    if (inicio.checked == false && final.checked == false) {
        alert("Por favor seleccione una opcion")
    }
    else
    {
        if (inicio.checked == true) {
            agregarInicio();
        }
        if (final.checked == true) {
            agregar();
        }
    }
}


//punto 1

function agregar() {
    const nombreProducto = document.getElementById("nombreProducto").value;
    const categoria = document.getElementById("catego").value;    
    const cantidad = parseInt(document.getElementById("canti").value);
    const precio = parseInt(document.getElementById("precio").value);
    const producto = {
        "nombreProducto": nombreProducto,
        "catego": categoria,
        "canti" : cantidad,
        "precio": precio
    }
    productos.push(producto);  
    mostrar();  
    pintarArray();
}

function mostrar() {
    const name1 = document.createElement("p");
    const name2 = document.createElement("p");
    const name3 = document.createElement("p");
    const name4 = document.createElement("p");
    const separate = document.createElement("hr");
    productos.forEach(item => {

        name1.textContent = "NOMBRE: " + item.nombreProducto;
        name2.textContent = "CATEGORIA: " + item.catego;
        name3.textContent = "CANTIDAD: " + item.canti;
        name4.textContent = "PRECIO: " + item.precio;

        factura.appendChild(name1);
        factura.appendChild(name2);
        factura.appendChild(name3);
        factura.appendChild(name4);
        factura.appendChild(separate);
    })
}

//punto 2

function agregarInicio() {
    const nombreProducto = document.getElementById("nombreProducto").value;
    const categoria = document.getElementById("catego").value;
    const cantidad = parseInt(document.getElementById("canti").value)
    const precio = parseInt(document.getElementById("precio").value);
    const producto = {
        "nombreProducto": nombreProducto,
        "catego": categoria,
        "canti" : cantidad,
        "precio": precio
    }
    productos.unshift(producto);
    mostrar();
    pintarArray();
}

//punto 3

let cont1 = 0;
let cont2 = 0;
let cont3 = 0;

function productoCatego(){
    productos.forEach(item => {
        if (item.catego == "Tecnologia") {
            cont1 = cont1 + 1;
        } else {
            if (item.catego == "Hogar") {
                cont2 = cont2 + 1;
            } else {
                cont3 = cont3 + 1;
            }
        }
    });
    alert("de la categoria tecnologia hay: "+ cont1 +" productos" + "\n" + "de la categoria hogar hay: "+ cont2 +" productos" + "\n" + "de la categoria Ropa hay: "+ cont3 +" productos" + "\n" )
}

//punto 4

function TotalCatego() {
    let total = 0;
    total = cont1 + cont2 + cont3;
    alert("el total de productos es de: "+total);
    
}

//punto 5

function TotalPrecio(){
    let total = 0;
    productos.forEach(item => {
        total = total + item.precio; 
    });
    alert("el valor total de los productos es de: "+total);
}

//punto 8

function BuscarPro(){
    let namee = document.getElementById("nombreProduc").value;
    console.log(namee)
        const objectoEncontrado = productos.find(item => item.nombreProducto === namee);
        if (objectoEncontrado != null) {
            alert( "Producto encontrado" + JSON.stringify(objectoEncontrado));  
        } else {
            alert("No hay un producto con el nombre");
        }
}

//punto 9

const eliminar = document.getElementById("eliminar");

function borrar(name) {
    console.log(name);
    let n = 0;
    
    productos.forEach((producto)=>{
        console.log("Entreeeee")
        if (producto.nombreProducto == name) {
            console.log(producto.nombreProducto);
            n = producto.nombreProducto;
        }
    });
    const nuevaLista = productos.filter(producto => producto.nombreProducto !== n);
    productos = nuevaLista;
    console.log("---------")
    pintarArray();
    console.log("---------")
}

eliminar.addEventListener("click", () => {
    const name = document.getElementById("nombreProduc").value;
    borrar(name);    
})

//punto10 

function ordenarAZ(){
    productos.sort((nombre1, nombre2) => {
        if (nombre1.nombreProducto < nombre2.nombreProducto) {
            return -1;
        } else {
            if (nombre2.nombreProducto > nombre1.nombreProducto) {
                return 1;
            } else {
                return 0;
            }
        }
    });
    let mensaje = "";
    productos.forEach(producto => {
        mensaje = mensaje + "Nombre: " + producto.nombreProducto + "\n" +
        "Categoria: " + producto.catego + "\n" +
        "Cantidad: " + producto.canti + "\n" +
        "Precio: " +producto.precio  + "\n" +
        "==========================================" + "\n" ;
    });
    alert(mensaje);
}

function pintarArray() {
    productos.forEach(producto => {
        console.log("Nombre: " + producto.nombreProducto);
        console.log("Categoria: " + producto.catego);
        console.log("Cantidad: " + producto.canti);
        console.log("Precio: " + producto.precio);
    })
}











