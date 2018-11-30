//01-tpo-variable

let edad:number | string = 13;
let variableLoca:any='';
let nombre:string = 'Adrian';
let casado:boolean = false;
let adrian:{//Interface
    nombre:string;
    apellido?:string;
} = {//JSON
    nombre:'Adrian'
};

let  fechaNacimiento:Date = new Date();

/*
let promesa:Promise<number>=()=>{
    return new Promise(
    executor:(resolve,reject)=> {
        resolve(1);

    }
});

*/


let numeros: number[] = [1,2,3,4];
function  saludar(
    nombre:string,
    apellido?: string,
    ...otrosNombres:string[]):void{//mandar infinitos nombres y devoler solo como void
    return
}

let respuestaSaludar = saludar('Vicente');

const saludo = (nombre:string):number =>{
    return 1;
}

class USuario{
    public edad:string;
    nombre;
    constructor(){
        
    }
    saludar(nombre:string):string{
        return nombre;
    }
}

const ricardoInstancia = new USuario();

interface Interface {
    
}