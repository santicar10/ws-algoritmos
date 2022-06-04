
class Animal{
    
   constructor(nombre){
    this.nombre = nombre === undefined ? 0 : nombre;
   }

   get nombre(){
       return this.nombre;
   }
   set nombre(nombre){
       this.nombre = nombre;
   }

}

const animal = new Animal("leon");
console.log(animal.nombre);


