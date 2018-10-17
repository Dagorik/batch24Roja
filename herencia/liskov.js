class Cine{
    constructor(sala,personas){
        this.sala = sala
        this.personas = personas
    }
    
    reproducir(largometraje){
        return `Reproduciendo... ${largometraje.getTitulo()}`
    }
}
class Largometraje{
    constructor(duracion,titulo){
        this.duracion = duracion
        this.titulo = titulo
    }    
    getTitulo(){
        return this.titulo
    }
}

class Pelicula extends Largometraje{
    constructor(duracion,titulo,genero){
        super(duracion,titulo);
        this.genero = genero
    }
    getGenero(){
        return this.genero
    }
}

class Documental extends Largometraje{
    constructor(duracion,titulo,tema){
        super(duracion,titulo);
        this.tema = tema
    }
    getTema(){
        return this.tema
    }
}

class PartidosDeFut extends Largometraje {
    constructor(duracion,titulo,deporte){
        super(duracion,titulo)
        this.deporte = deporte
    }
}

const avengers = new Pelicula(120,'Avangers','Accion')
const presuntoCulpable = new Documental(60,'Presunto culpable','Investigación')
const champions = new PartidosDeFut(90,'Bayern vs Barca','Futbol')
const cinex = new Cine('Sala 7',100)

console.log(cinex.reproducir(champions))