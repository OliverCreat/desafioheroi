//EXEMPLO 1
soma(5, 5)

function soma(numA, numB){
    let somatorio = numA + numB
    console.log(somatorio)
}

//EXEMPLO 2 
//atribui para uma variavel o resultado de uma função
let resultado = soma(5, 10)

console.log("O resultado dessa função é " + resultado)
function soma(numA, numB){
    //é uma variavel por isso o let na frente
    let somatorio = numA + numB
    return somatorio
}

//EXEMPLO 3 
//atribui para uma variavel o resultado de uma função, menos legível, menos organizado

console.log("O resultado dessa função é " + soma(5, 5))

function soma(numA, numB){
    //é uma variavel por isso o let na frente
    let somatorio = numA + numB
    return somatorio
}

//EXEMPLO 4 
//atribui para uma variavel o resultado de uma função
let resultados = soma(5, 15)

console.log("O resultado dessa função é " + resultados)
function soma(numA, numB){
    return numA + numB
}
//A função só pode retornar um valor ou um objeto (return numA, numB esta errado)

//EXEMPLO 5
//função para buscar o primeiro nome
let userName = getFirstName("Felipe Amaral Silveira Cantos")
console.log("Seja bem vindo " + userName)

function getFirstName(name){
    let firstName = name.split(" ")[0]
    return firstName
}

//EXEMPLO 6
//função para buscar o primeiro nome
//Uso do S neste exemplo para diferenciar
//inclusão do splitChar
let userNames = getFirstNames("Felipe-Amaral-Silveira-Cantos", "-")
console.log("Seja bem vindo " + userNames)

userNames = getFirstNames("João Augusto Souza", " ")
console.log("Seja bem vindo " + userNames)
function getFirstNames(name, splitChar){
    let firstNames = name.split(splitChar)[0]
    return firstNames
}
