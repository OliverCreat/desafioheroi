//JSON - JavaScript Object Notation
// chave(nome) e valor com objetivo de transferir dados
//pares de cave-valor delimitados por ":" e separados por ","
{
let name = "Felipe"
let age = 28
let products = ["mouse 2xwm", "Teclado mecânico", "Monitor"]
let productsValues = [29.90, 129.99, 899.99]

generateInvoice(name, products, productsValues, age)
//o que esta sendo concatenado é o name por isso ele esta dentro do parenteses
function generateInvoice(name, products, productsValues, age){
    console.log("O comprador é " + name)
    console.log("A idade é " + age)
    console.log("-------")
    console.log("O produto é " + products[0])
    console.log("O valor é " + productsValues[0])
    console.log("------------------")
}
}
//aqui começa o JSON
//agrupa todos os dados

let invoice = {
    name: "Pablo",
    age: 35,
    products: {
        0: ["mouse 2xwm", 29.90],
        1: ["Teclado alpha", 139.99],
        2: ["Tela", 35.99]
    },
    taxes: "98.90" 
}

generat(invoice)

function generat(invoice){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("---------")
//aqui complica
//for in não precisa indicar a posição (ver aula de loop)
//for percorre todos os dados que estão agrupados
    for (let index in invoice.products){
        let [productName, productPrice] =invoice.products[index]
        console.log(` - ${productName}: R$ ${productPrice}`)   
    }
}
