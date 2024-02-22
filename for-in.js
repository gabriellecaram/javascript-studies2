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
    }]
  }
//   estudante.endereco.push({
//       rua: 'Rua Dona Clotilde',
//       numero: '71',
//       complemento: null
//   })

  
//   for (let chave in estudante){
//     const texto = `a chave ${chave} tem valor ${estudante[chave]}`
//     console.log(texto)
//   }

  // a chave enderecos tem valor [object Object]  
  // acontece quando tenta converter um objeto para string

  for (let chave in estudante){ // let chave é a var q vai receber todas as chaves do objeto
    const tipo = typeof estudante[chave];
    if (tipo !== 'object' && tipo !== 'function'){
        const texto = `a chave ${chave} tem valor ${estudante[chave]}`;
        console.log(texto);
    }
  }

  //obs: não existe typeof array