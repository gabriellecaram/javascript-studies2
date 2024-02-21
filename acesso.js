const cliente = {
    nome: 'Gabrielle Caram',
    cpf: '47483395869',
    idade: 24,
    email: 'gabriellecaram@estudante.ufscar.br'
};

console.log(cliente);

//acesso por ponto
console.log(`nome do cliente: ${cliente.nome}`)
console.log(`os 3 primeiros dígitos do cpf sao: ${cliente.cpf.substring(0,3)}`)


//acesso por colchetes
const chaves = ["nome", "idade", "cpf", "email", "altura"];
chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
  });

