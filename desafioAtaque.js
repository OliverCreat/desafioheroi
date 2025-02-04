//Desafio proposto em sala de aula usando classes e objetos
class ataque{   
    constructor(heroi, ataque){
        this.heroi = heroi
        this.ataque = ataque
    }    
    escrever(){
        console.log(`O ${this.heroi} atacou usando ${this.ataque}.`)
    }    
}

let mago  = new ataque("Mago", "magia")
let guerreiro = new ataque("Guerreiro", "espada")
let monge = new ataque("Monge", "artes marciais")
let ninja = new ataque("Ninja", "shuriken")

mago.escrever()
guerreiro.escrever()
monge.escrever()
ninja.escrever()