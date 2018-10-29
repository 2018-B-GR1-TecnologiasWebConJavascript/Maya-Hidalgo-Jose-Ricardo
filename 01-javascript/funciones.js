

function holaMundo(){
    console.log("Hola mundo");
}
holaMundo();

console.log(holaMundo());

function sumarDosNumeros(numeroUno, numeroDos) {
    var numeroUnoesValido = typeof  numero == 'number';
    var numeroDosesValido = typeof  numero == 'number';
    if(numeroUnoesValido && numeroDosesValido) {
        return numeroUno + numeroDos;
    }else{
        console.error('Parametros no son numeros')
        return 0;
    }
}

console.log(sumarDosNumeros(1,2));//3

function sumarNNumeros(...numeros) {
    var resultado = calcularResultadoDeNumeros(numeros);
    if(resultado.esValido){
        return resultado.suma;
    }else{
        return 0;
    }

}
function calcularResultadoDeNumeros(numeros) {

var suma=0;
var todoslosNumerossonValidos=true;
for(var i=0; i<numeros.length;i++){
    var numeroesValido = typeof  numeros[i] == 'number'
    if(numeroesValido){
        suma=suma+numeros[i];
    }else{
        todoslosNumerossonValidos = false;
        break;
    }
}
var resultado ={
    suma:suma,
    esValido: todoslosNumerossonValidos;
}
return resultado;
}
console.log(sumarNNumeros(1,2,3));

function restar() {}
    console.log(restar());//
    console.log(typeof restar());//La funcion es de tipo funtion
    console.log(restar);//Definicion de la funcion

//Funciones anonimas
function nombre() {

}
var ejemplo = function () {//Funcion anonima cuando carece de nombre se puede guardar en una variable

}

var adrian = {
    trabajo:function () {

    }
};
ricardo.trabajo();

//tipos de variables
var variable;//nunca mas
let variableDos=2;//var da problemas en compilacion let no
const edad=29;// SIempre usar const
variableDos=3;

const ricardo={
    nombre:'Ricardo'
}
//Fat arrow function
const elevarAlCuadrado = (numero) => [

]
const  elevarAlCuadradoV2 = (numero) => numero*numero;
const elevarAlCuadradoV3 = numero => numero*numero;



