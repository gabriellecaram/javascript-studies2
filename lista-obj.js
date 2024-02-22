const aluno = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  aluno.enderecos = [
    {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
  ];
  
  aluno.enderecos.push({
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,
  });
  
  console.log(aluno.enderecos);

  const listaApenasApartamentos = aluno.enderecos.filter(
    (endereco) => endereco.apartamento === true
  );
  
  console.log("apenas apartamentos:", listaApenasApartamentos);