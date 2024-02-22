const pessoa = {
    nome: "Gabrielle",
    profissao: "Dev Back-end Senior",
};

console.log(pessoa.nome);
console.log(pessoa.telefone);

pessoa.telefone = "(19) 98422-8581" // cria uma nova chave em pessoa
console.log(pessoa.telefone)

// pode alterar valores dentro do objeto
pessoa.nome = "Gabrielle Caram";
console.log(pessoa)

// NAO PODE atribuir um objeto novo ao objeto ja existente
// const novaPessoa = {
//     nome: "Danielle"
// }
// pessoa = novaPessoa; // TypeError: Assignment to constant variable.

delete pessoa.profissao
console.log(pessoa)