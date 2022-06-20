function Comprobar(){
    let user = document.getElementById("userNombre").value;
    let pasw = document.getElementById("userContraseña").value;
    if ((user == "santiago" || user == "santi") && (pasw == "123")) {
        location.href="administrador.html"
    } else {
        alert("contraseña o usuario incorrectos");
    }
}

// let nike = [
//     {
//         "nombre":"Nike Air Force One",
//         "precio":340000
//     },
//     {
//         "nombre":"Nike jordan 4 UNION",
//         "precio":600000  
//     },
//     {
//         "nombre":"Nike Air Max 270",
//         "precio":300000  
//     },
//     {
//         "nombre":"Nike Cortez",
//         "precio":350000  
//     },
//     {
//         "nombre":"Nike jordan 1 chicago",
//         "precio":740000  
//     },
//     {
//         "nombre":"Nike SB Dunk Parra",
//         "precio":380000  
//     }
// ]

// let adidas = [
//     {
//         "nombre":"Adidas Super Stars",
//         "precio":340000
//     },
//     {
//         "nombre":"Adidas Bad Bunny Forum Black",
//         "precio":600000  
//     },
//     {
//         "nombre":"Adidas Yezzy 350 V2",
//         "precio":300000  
//     },
//     {
//         "nombre":"Adidas Clasic",
//         "precio":350000  
//     },
//     {
//         "nombre":"Adidas",
//         "precio":740000  
//     },
//     {
//         "nombre":"Nike SB Dunk Parra",
//         "precio":380000  
//     }
// ]

