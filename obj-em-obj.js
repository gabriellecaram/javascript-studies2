const aluno = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
    bolsista: true,
  };
  
  aluno.endereco = [{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  }];

  aluno.endereco.push({
    rua: 'Rua Dona Clotilde',
    numero: '71',
    complemento: ''
  })

  console.log(aluno)
  console.log(aluno["endereco"][0].rua); // acesso por colchetes
  console.log(aluno.endereco[1].rua) // acesso por ponto

  const listaApartamentos = aluno.endereco.filter((endereco) => endereco.apartamento)

  console.log(listaApartamentos)