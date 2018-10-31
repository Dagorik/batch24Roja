const array = [12,4,23,53,98,34]
const arrayString = ['Hola','Que onda','Holi']
const arrayObj = [{id:"1",name:"Tijeras"},{id:"2",name:"Copias"},{id:"3",name:"Sacapuntas"}]
// for(let i = 0; i < array.length; i++ ){
//     console.log(array[i])
// }


let array2 = arrayObj.map((element,index) =>{
    return element.name
});
console.log('Array obj : ', arrayObj)
console.log('Array 2 : ', array2)