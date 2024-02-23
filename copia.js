// Em JavaScript, a simples atribuição de um objeto a uma nova variável cria 
// uma "referência", não uma cópia independente. Isso significa que alterações em uma 
// variável afetarão diretamente a outra.

const objetoOriginal = { chave: 'valor' };
const copiaReferencia = objetoOriginal;

copiaReferencia.chave = 'novoValor';
console.log(objetoOriginal.chave); // Saída: novoValor


// Uma abordagem comum para realizar cópias de objetos é através da técnica conhecida como "clonagem profunda".
// Essa técnica assegura que a cópia seja independente do objeto original, evitando referências compartilhadas e garantindo a integridade dos dados.
// Exemplo de clonagem profunda com JSON.stringify e JSON.parse:

objetoOriginal.chave = 'valor';
const copiaProfunda = JSON.parse(JSON.stringify(objetoOriginal));

copiaProfunda.chave = 'novoValor';
console.log(objetoOriginal.chave); // Saída: valor

// extra:
// implementar uma função de clonagem profunda com imutabilidade em JS
// https://www.alura.com.br/artigos/implementar-funcao-clonagem-profunda-imutabilidade-js?_gl=1*iyd1jf*_ga*MjAzMzYzNTYwMC4xNjUwNTYyODI0*_ga_1EPWSW3PCS*MTcwODYzMjM2OS4zMy4xLjE3MDg2MzMwODguMC4wLjA.*_fplc*Q2VzS3B5WTlVaWlmV0RVNXNBRkppempMamJNa2NMaElGNDEzdiUyQjUxc0RGVlBXcGNaWllLVCUyQnZ3OWFxeWE2QW1SVCUyRm9saWlLbnRObGhwcmJhemhva0dNMmFWVGdaVUk4aldtTVNONDVPamFDcHhBdWlNMUVUcDdTSkw5bE5BJTNEJTNE
