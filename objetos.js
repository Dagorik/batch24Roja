const objCarro = {
    color:'Rojo',
    motor:'V8',
    marca:'Nissan',
    modelo:2017,
    arranca: () => 'Arranco el caro',
    doblar: (direccion) => {
        if (direccion === 'izq'){
            return 'Giro a la izquierda'
        }else{
            return 'Giro a la derecha'
        }
    }
}
console.log(objCarro.doblar('der'))
