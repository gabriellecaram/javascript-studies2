const estudantes = require('./estudantes.json')

// criar uma função para percorrer os estudantes e encontrar algumas informações
function buscaInfo(lista, chave, valor){
    // .find() retorna sempre a 1ª ocorrência encontrada
    return lista.find((estudante) => estudante[chave].includes(valor)); 
    // return lista.find((estudante) => estudante[chave] === valor);
    // quando usa o includes, pode percorrer os arrays tb, por exemplo o de telefones
}

const estudanteEncontrado = buscaInfo(estudantes, 'nome', 'Juliet')
console.log(estudanteEncontrado)

const telefoneEncontrado = buscaInfo(estudantes, 'telefone', '7919437785')
console.log(telefoneEncontrado)