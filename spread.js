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


function exibirTelefones(telefone1, telefone2) {
    console.log(`ligar para ${telefone1}`);
    console.log(`ligar para ${telefone2}`);
  }
  
//   exibirTelefones(estudante.telefones[0], estudante.telefones[1]);
//   exibirTelefones(...estudante.telefones);
  
  const dadosEnvio = {
    destinatario: estudante.nome,
    // endereco: estudante.enderecos[0],
    rua: estudante.enderecos[0].rua,
    numero: estudante.enderecos[0].numero,
  }
  console.log(dadosEnvio)

  // UTILIZANDO SPREAD!
  const dadosEnvioSpread = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0], // ...
  }
// usamos o Spread Operator para extrair dados de um objeto 
// e montar outros objetos a partir disso.
  console.log('SPREAD: ',dadosEnvioSpread)