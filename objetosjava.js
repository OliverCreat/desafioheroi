//vantagem na padronização do formato.
//caracteristicas proprias e propriedades diferentes.
//as classes seriam como as formas ou formatos da estruturas de dados
//o objeto criado é apartir desta mesma estrutura com valores diferente.
//possuindo metodos inteligentes ou (funções próprias)
//instanciar um objeto
//class é a forma
class formaDeBolo{
    //classe guarda dados e funções (json não guarda funções)
    //constructor é a função principal
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
    //dispensa o uso da palavra function neste caso dentro da class
    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com ${this.saborRecheio}`)
    }

    assar(){
        console.log("Bolo assando a 180 graus com " +this.saborRecheio)
    }
}
//objeto é o produto do let
let boloFesta  = new formaDeBolo("massa de chocolate", "recheio de nutella")
let boloPremium = new formaDeBolo("massa branca", "recheio de laranja")

boloFesta.escrever()
boloPremium.escrever()
boloPremium.assar()


//construindo métodos dentro da classe
//console.log(boloFesta.saborDaMassa) um exemplo
//estudar programação orientada a objeto