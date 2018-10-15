// Int edad = 10;

var edad = 10;
var edadString = "10";
var sueldo = 1.234;
var casado = false;
var hijos = null;
var dato;
var fechaNacimiento = new Date();


console.log("edad", typeof edad);
console.log("edadString", typeof edadString);
console.log("sueldo", typeof sueldo);
console.log("casado", typeof casado); // boolean
console.log("hijos", typeof hijos); // object
console.log("dato valor", dato); // undefined
console.log("dato tipo", typeof dato); // undefined
console.log("fechaNacimiento", typeof fechaNacimiento); // undefined

var ricardo = {
    "nombre": "Ricardo",
    'segundoNombre': 'Jose',
    apellidoPaterno: "Maya",
    apellidoMaterno: "Hidalgo",
    edad: 24,
    casado: false,
    hijo: null

}//objeto js

console.log(ricardo.apellidoMaterno);
console.log(ricardo);
delete ricardo.hijo;
console.log(ricardo);
ricardo.hija = {nombre: "Mayara"};
console.log(ricardo);

