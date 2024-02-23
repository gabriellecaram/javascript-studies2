//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#sorting_array_of_objects

const estudantes = require('./estudantes.json')

function ordenacao(lista, propriedade){
    return lista.sort((a, b) => {
        if(a[propriedade] < b[propriedade]) return -1;
        if(a[propriedade] > b[propriedade]) return 1;
        return 0;
    })
}

const listaOrdenada = ordenacao(estudantes, 'nome');
console.log(listaOrdenada)