//Continuação do módulo de funções e exemplos de aplicações
//funções com parâmentos, mantenha o nome dos parametros simples e fácil de entender

torrar("pão de forma")
torrar("pão integral")

//variavel pao só existe dentro deste escopo das {}
function torrar(pao){
    console.log("torrada feita com " + pao)
}

//console.log(pao) aqui não funciona pois não há definição

//Exemplo 2
//variavel let só existe dentro do escopo
//o var existe de maneira global, pode dar problema pois ela pode ser executada posteriormente, cuidado ao usar

var nome
nome = "Oliveira"
console.log(nome)


//Exemplo 3

torrada("paozinho" , "Paulo" , 52)
torrada("baguete" , "Tais")

//Ele vai puxar o valor default caso o paramentro não seja informado, neste caso o deafult é Cliente
function torrada(paes, nomes = "Cliente", valor = "Grátis"){
    console.log("Torrada feita com " + paes)
    console.log("É um pedido de " + nomes)
    console.log("O valor total é " + valor)
}

//EXEMPLO 4
//Interpolação de strings
//Para que funicione em JS não pode esquecer de colocar entre crases
createStringConnection("db_products", "felipe", 1234)

function createStringConnection(dataBaseName, user, pass){
    console.log(`conect:DBCONNECT;user=${user};pass=${pass};initial_database=${dataBaseName}`)
}