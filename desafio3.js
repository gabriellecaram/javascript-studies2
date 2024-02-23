// 3 - Crie um objeto JavaScript representando informações de um produto. 
// O objeto deve conter pelo menos as seguintes propriedades:

// id (number): identificador do produto.
// nome (string): nome do produto.
// preco (number): preço do produto.


const product = {
    id: "#00001",
    nome: "Case iPhone 13 branca",
    preco: 25,
}

// Converta o objeto produto para uma string utilizando JSON.stringify() e imprima no console a string resultante.

const productString = JSON.stringify(product)
console.log(productString)