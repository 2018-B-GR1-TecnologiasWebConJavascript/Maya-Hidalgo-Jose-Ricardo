arreglo = [
    1,
    "Ricardo",
    false,
    null,
    new Date(),
    {
        nombre: "Ricardo"
    },
    [1,2,false,true]

];
console.log(arreglo[1,2,3]);
var arregloNumeros = [1,2,3];
arregloNumeros.push(4);
console.log(arregloNumeros);
arregloNumeros.pop();
console.log(arregloNumeros);
arregloNumeros.splice(0,1);
console.log(arregloNumeros);
arregloNumeros.splice(0,0,4);//param start (indice),cuantos borro,poner
console.log(arregloNumeros);
arregloNumeros.splice(1,0,4,5,6,7,8,9,10);
console.log(arregloNumeros);

var indiceNumeroSeis = arregloNumeros.indexOf(6); //replicar indice
arregloNumeros.splice(indiceNumeroSeis,3);
console.log(arregloNumeros);
var arreglo1 = arregloNumeros.slice(0,3) //dividir arreglos parametros desde hasta la forma de dividir es {{
console.log(arreglo1);
var arreglo2 = arregloNumeros.slice(3,8)
console.log(arreglo2);
var indiceNumeroCuatro = arreglo1.indexOf(6); //Indice del primero en el arreglo
console.log(indiceNumeroCuatro);

var arregloUnoDos = [1,2];
var arregloSes = [6];

//DDestruturación de arreglos
console.log(...arregloUnoDos);//imprimir
var arregloTotal = [...arregloUnoDos]
console.log(arregloTotal);//Unir arreglos
var arregloTotal = [...arregloUnoDos,...arregloSes,...arreglo1,...arreglo2];
console.log(arregloTotal);
var arregloSiguientesNumeros=[11,12,13,14,15,16]
arregloTotal.splice(arregloTotal.length,0,...arregloSiguientesNumeros);//unir arreglos desde un inicio
console.log(arregloTotal);

var jose = {
    nombre: "Ricardo",
    apellido: "Maya"
}

var ricardo = {
    edad:20,
    casado:false,
    hijos:null,
    mascota:{
        nombre: "Peluche"
    }
};

var maya = {
    sueldo:1.10
}

var RicardoMaya = {
    ...jose,
    ...ricardo,
    ...maya
};

console.log(RicardoMaya);