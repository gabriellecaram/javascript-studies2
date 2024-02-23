const novoLivro = {
    "titulo": "Node.js: Guia Prático",
    "autor": "Alice Coder",
    "genero": "Tecnologia",
    "ano_publicacao": 2022
  };
  
  const biblioteca = require("./biblioteca.json");
  biblioteca.push(novoLivro);
  
  const bibliotecaString = JSON.stringify(biblioteca);

console.log(biblioteca)
console.log(bibliotecaString)