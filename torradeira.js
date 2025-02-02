//exercicio de fixação de aprendizado FUNÇÔES
//funções não devem começar com número, comece com letrar, evite nomes com espaço use camelCase
//funções são ações então coloque o mais preciso no nome, ações, verbos.


torrar()


function torrar(){
    console.log("torrando pão")
    injetarPao()
}



function injetarPao(){
    console.log("Preparando para injetar pão")
    console.log("finalizado") 
}

//EXEMPLO 2

//faça a função executar só uma coisa, e crie outras separados
//evita quebras desnecessárias em caso de falha

//função main
main()


function main(){
    getData()
    checkValues()
    sendToDataBase()
}


//função que pega todos os dados
function getData(){
    //lógica implementada aqui
    console.log("pegando dados do usuário")
    if (1 < 3) {
        console.log("numero encontrado")
    }
}

function checkValues(){
    console.log("validando dados")
}

function sendToDataBase(){
    console.log("enviando dados")
}