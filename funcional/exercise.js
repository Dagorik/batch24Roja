const entrada = ['Hola como','Estan todos yo muy bien','yei']

function exercise(list){
    const salida = []
    list.map(element => {
        const aux = element.split(' ');
        const sublist = aux.map((element,index) => index % 2 === 0 ? element.toUpperCase() : element.toLowerCase());
        salida.push(sublist.join(' '))
    });
    return salida
}

const salida = exercise(entrada);
console.log(salida)