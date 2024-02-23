// função para filtrar estudantes a partir de uma propriedade específica
// neste caso, para estudantes que não tem o cep cadastrado

const estudantes = require('./estudantes.json');

function filtraPorPropriedade(lista, propriedade) {
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);
    })
}

const listaEndImcompletos = filtraPorPropriedade(estudantes, 'cep')
console.log(listaEndImcompletos)