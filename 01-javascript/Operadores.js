

//Operadores

const arreglo = ['A','b','C'];

const respuesta=arreglo.forEach((valorActualDeLaFuncion, indice, arreglo)=>{
    console.log('Valor:',valorActualDeLaFuncion);
    console.log('Indice:',indice);
    console.log('Arreglo',arreglo)
});

console.log(respuesta);

arreglo.forEach(v=>console.log(v));

//
const respuestaMap=arreglo.map(valorActual=>valorActual.toUpperCase());

// map -> Muta el arreglo -> cambiar -> reasignar nuevo arreglo

const arregloNumeros = [9,2,4,3,6,8,5,1,10,7];
// Filter -> Filtrar el arreglo
cost respuestaFilter = arregloNumeros.filter(n=>n>5)//ara filtrar
const respuestasFindIndex = arregloNumeros.indexOf(v=>7);
console.log(arregloNumeros.indexOf(7));
console.log(respuestasFindIndex);

//some
//