// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects

const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
     enderecos: [{
       rua: 'Rua Joseph Climber',
       numero: '45',
       complemento: 'apto 43'
     },
     {
       rua: 'Rua Dona Clotilde',
       numero: '71',
       complemento: null
    }]
  }


//   Object.keys() e Object.values(): são usados para extrair informações específicas de um objeto. 
//   Esses métodos fornecem, respectivamente, as chaves e os valores presentes em um objeto. 
//   São úteis para iterar ou fazer operações específicas em conjuntos de dados de um objeto.
  
  const chavesObjeto = Object.keys(estudante);
  console.log(chavesObjeto);

  
  if (!chavesObjeto.includes('enderecos')) {
    console.error('é necessário ter um endereço cadastrado')
  }else(console.log(estudante.enderecos))


  const valoresObjeto = Object.values(estudante);
  console.log('valores do objeto ', valoresObjeto)


//   Object.entries(): este método retorna um array de arrays que representam pares chave-valor. 
//   É útil em situações que demandam iterações mais complexas ou manipulação mais minuciosa dos dados.

  const entriesObjeto = Object.entries(estudante);
  console.log("\n\nentries Object", entriesObjeto)


//   Object.assign(): usado para fusão e cópia de objetos. 
//   Este método permite combinar propriedades de diferentes objetos em um único objeto.

const objetoOriginal = { a: 1, b: 2 };
const objetoParaCopiar = { b: 3, c: 4 };

const objetoFusionado = Object.assign({}, objetoOriginal, objetoParaCopiar);

console.log(objetoFusionado);
// Saída: { a: 1, b: 3, c: 4 }

