// transforma um json em objeto
const estudante = require ('./estudante.json'); // require é nativo do node

console.log(estudante);
console.log(typeof estudante)


const chaves = Object.keys(estudante);
console.log(chaves)


// diferença entre require e import

// require:
// Esta função nos permitiu passar o caminho de um arquivo 
// terminado em .json para obter o conteúdo do arquivo já convertido para objeto JavaScript.
// A conversão automática de um objeto JSON em um objeto JavaScript é uma das propriedades 
// específicas da função require(), conforme estabelecido na documentação do Node.js.

// Para que um módulo seja importável, é necessário exportá-lo corretamente.
// A exportação pode ser feita atribuindo o que se deseja exportar à propriedade module.exports.

// Exemplo de exportação de um módulo em Node.js
function minhaFuncao() {
  console.log('Executando minha função...');
}

module.exports = minhaFuncao;