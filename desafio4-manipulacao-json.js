// 4 - Crie um arquivo chamado animais.json, contendo informações fictícias em formato JSON. 
// O arquivo pode representar dados de animais, incluindo pelo menos três elementos no array.

// Crie um arquivo chamado manipulacaoJson.js. Dentro deste arquivo, realize as seguintes operações:

// a) Leia o conteúdo do arquivo animais.json.
// b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().
// c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.
// d) Modifique o habitat de um animal existente no array de animais.
// e) Remova um animal do array de animais.
// f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().
// g) Imprima no console o objeto JavaScript resultante das operações.

const animais = require('./desafio4-animais.json') // require ja converte pra objeto entao pode usar push
// console.log("typeof animais: ", typeof animais,"\n")
console.log("animais json: ", animais,"\n")

const novoAnimal = {
    id: "#00017",
    familia: "Psittacidae",
    genero: "Anodorhynchus",
    especie: "Arara-azul",
    habitat: "Florestas umidas",
};

// console.log("novo animal: ", novoAnimal, "\n")
// console.log("typeof animal: ", typeof novoAnimal, "\n")

animais.push(novoAnimal)

// const keys = Object.keys(...animais) //usa um spread pra achar as chaves
// console.log(keys)
//

const animalModify = animais.find(animal => animal.especie == 'Onça Pintada'); 
if (animalModify) {
    // console.log(animalModify.habitat)
    animalModify.habitat = animalModify.habitat.concat(" e Floresta Amazônica");
    // console.log(animalModify.habitat)
} // isso funciona porque em JS a atribuição a animalModify é por referência. quando altera um, altera o outro
console.log('animais att: ', animais, '\n')

// solução para remover animal através do índice e do nome.
const nomeAnimalRemover = "Leão"; 

const indiceAnimalRemover = animais.findIndex(animal => animal.especie === nomeAnimalRemover);
if (indiceAnimalRemover !== -1) { // findIndex() retorna -1 se o elemento não for encontrado.
    // Remova o animal usando splice
    animais.splice(indiceAnimalRemover, 1);
    console.log("Animal removido com sucesso!");
} else {
    console.log("Animal não encontrado para remoção.");
}
console.log('Animais att: ', animais, '\n')

const animaisString = JSON.stringify(animais)
console.log("stringfy: ", animaisString)


// obs: essas funções para atualizar, remover, inserir novo animal, 
// poderiam todas ser feitas como métodos a serem chamados com parâmetros?

