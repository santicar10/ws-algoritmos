let nombre = prompt ("ingrese su nombre");
let nota = parseInt (prompt ("ingrese su nota"));
console.log(nota);

let array = [nombre,nota, "andres",10,"samuel",9, "juanpablo",7, "sevastian",6];
console.log(array);

if (nota>10 && nota>9 && nota>7 && nota>6) {
    alert("su nota es LA MAYOR"+nombre+nota)
    
} else {
    alert("su nota no es la  la nota mayor es 9 de andres")

}

document.write(array);