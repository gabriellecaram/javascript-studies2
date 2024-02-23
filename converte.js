const estudante = require('./estudante.json');
console.log("Importa de JSON para objeto:")
console.log(typeof estudante, '\n', estudante, )

// quando precisa exportar um JSON precisa converter tudo para string
console.log()
console.log("Transforma de Objeto para String:")
const stringEstudante = JSON.stringify(estudante);
console.log(stringEstudante);
console.log(typeof stringEstudante);

console.log(stringEstudante.nome) // undefined
// não existem mais propriedades, nao tem como acessar propriedades

// para re-converter para objeto:
console.log()
console.log("Transforma de String para Objeto")
const objEstudante = JSON.parse(stringEstudante);
console.log(typeof objEstudante)
console.log(objEstudante)
