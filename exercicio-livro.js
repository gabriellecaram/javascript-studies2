// 1 - Crie um arquivo chamado livro.js. 
// Nesse arquivo, crie um objeto livro que represente as informações de um livro. 
// O objeto deve conter as seguintes propriedades:

// titulo (string): título do livro.
// autor (string): nome do autor do livro.
// anoPublicacao (number): ano de publicação do livro.
// genero (string): gênero do livro.
// No final do arquivo livro.js, instancie o objeto livro com dados de 
// // algum livro que você goste e imprima os detalhes do livro no console.


// 2 - Crie uma nova variável chamada anoAtual 
// e atribua a ela o ano atual (utilize new Date().getFullYear()). 
// Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.

// Adicione a propriedade idadePublicacao diretamente ao objeto livro, 
// representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.

// Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, 
// incluindo a informação da idade de publicação.

// Exiba a string mostrarDetalhes no console para verificar se as informações, 
// incluindo a idade de publicação, são exibidas corretamente.

// 3- utilize colchetes para acessar diretamente as propriedades do objeto 
// livro e imprimir no console os detalhes do livro.

const anoAtual = new Date ().getFullYear();

const livro = {
    titulo: "A Study in Scarlet",
    autor: "Sir. Arthur Conan Doyle",
    anoPublicacao: 1887,
    gereno: "Detective novel"
}

livro.idadePublicacao = anoAtual - livro.anoPublicacao;

livro.mostrarDetalhes = "Detalhes do Livro:\n" +
                        "Título: " + livro.titulo + "\n" +
                        "Autor: " + livro.autor + "\n" +
                        "Ano de Publicação: " + livro.anoDePublicacao + "\n" +
                        "Gênero: " + livro.genero + "\n" +
                        "Idade de Publicação: " + livro.idadePublicacao + " anos";

console.log(livro.mostrarDetalhes)