const aluno = {
    nome: 'Gabrielle Caram',
    cpf: '47483395869',
    idade: 24,
    email: 'gabriellecaram@estudante.ufscar.br'
};

console.log(aluno);

//acesso por ponto
console.log(`nome do cliente: ${aluno.nome}`)
console.log(`os 3 primeiros dígitos do cpf sao: ${aluno.cpf.substring(0,3)}`)


//acesso por colchetes
const chaves = ["nome", "idade", "cpf", "email", "altura"];
chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${aluno[chave]}`);
  });


const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
  }
  
  estudante.nome //josé
  
  function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
  }
  
  console.log(estudante.pet);
  console.log(estudante['pet']);

  
  console.log(estudante['nome']);
  console.log(estudante['cpf']);
  
  console.log(exibeInfoEstudante(estudante, 'nome'));
  console.log(exibeInfoEstudante(estudante, 'cpf'));
  

