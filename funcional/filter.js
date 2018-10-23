const array = [12,4,23,53,98,34]
const arrayString = ['Hola','Que onda','Holi']
const arrayObj = [{id:"1",name:"Tijeras",costo:30},{id:"2",name:"Copias",costo:1},{id:"3",name:"Sacapuntas",costo:10}]

// const arrayFor = []
// for(let i = 0; i< arrayObj.length; i++){
//     if(arrayObj[i].costo > 5){
//         arrayFor.push(arrayObj[i])
//     }
// }

let array2 = arrayObj.filter((element,index,arreglo)=>{
    return element.costo > 5
});
console.log(array2)