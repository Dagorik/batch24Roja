class Mascota{
    constructor(patas,pelaje){
        this.patas = patas
        this.pelaje = pelaje
        console.log('Se creo mascota');
    }
    comer(){
        return 'El animal está comiendo'
    }
    respirar(){
        return 'El animal está respirando'
    }
}

class Perro extends Mascota{
    constructor(patas,pelaje,raza,tamano){
        super(patas,pelaje);
        this.raza = raza
        this.tamano = this.tamano
        console.log('Se creo perro')
    }
    ladrar(){
        return 'Waaau'
    }
}

class Gato extends Mascota{
    constructor(patas,pelaje,vidas){
        super(patas,pelaje);
        this.vidas = vidas
        console.log('Se creo gato')
    }
    maullar(){
        return 'miiiau'
    }

    comer(){
        return 'El gato esta comiendo'
    }
}

const fido = new Perro(4,'Negro','Labrador','Grande');
const garfield = new Gato(4,'Blanco',7);

console.log(fido.comer())
console.log(garfield.comer())