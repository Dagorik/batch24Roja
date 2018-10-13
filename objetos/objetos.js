class Carro{    
    constructor(marca,color,motor,modelo){
        this.marca = marca
        this.color = color
        this.motor = motor
        this.modelo = modelo
    }
    getColor(){
        return this.color
    }

    setColor(newColor){
        this.color = newColor
    }

    arrancar(){
        return `Arranco el carro color ${this.color}`
    }
    frenar(){
        return 'Freno el carro'
    }
}

const bmw = new Carro('bmw','blanco','v6','2019')
const bochito = new Carro('bocho','Amarillo','1600','2000')

console.log(bmw)
bmw.setColor('Naranja')
console.log(bmw)
