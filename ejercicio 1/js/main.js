
let productos = [];

//punto 1

function agregar() {
    const nombreProducto = document.getElementById("nombreProducto").value;
    console.log(nombreProducto)
    const categoria = document.getElementById("catego").value;
    console.log(categoria)
    const cantidad = parseInt(document.getElementById("canti").value);
    console.log(cantidad)
    const precio = parseInt(document.getElementById("precio").value);
    const producto = {
        "nombreProducto": nombreProducto,
        "catego": categoria,
        "canti" : cantidad,
        "precio": precio
    }
    productos.push(producto);
    
    mostrar();
}

function mostrar() {
    const listaSinOrden = document.createElement("ul");
    document.body.appendChild(listaSinOrden);
    const ite = document.createElement("li");
    productos.forEach(item => {
        ite.textContent = "nombre = " + item.nombreProducto + "  Categoria = " + item.catego + "  precio = "+ item.precio +"  Cantidad = " + item.canti;
        listaSinOrden.appendChild(ite);
    })
}

//punto 2

function agregarInicio() {
    const nombreProducto = document.getElementById("nombreProducto").value;
    console.log(nombreProducto)
    const categoria = document.getElementById("catego").value;
    console.log(categoria)
    const cantidad = parseInt(document.getElementById("canti").value);
    console.log(cantidad)
    const precio = parseInt(document.getElementById("precio").value);
    const producto = {
        "nombreProducto": nombreProducto,
        "catego": categoria,
        "canti" : cantidad,
        "precio": precio
    }
    productos.unshift(producto);

    mostrar();
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
            alert(objectoEncontrado);  
        } else {
            alert("No hay un producto con el nombre");
        }
}

//ordenar 

function ordenarAZ(){
    productos.forEach(item => {
        
        
    });
}










