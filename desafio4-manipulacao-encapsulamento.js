// encapsulando métodos
// estudar mais pra frente

const fs = require('fs'); // Módulo 'fs' para manipulação de arquivos

class ManipuladorAnimais {
    constructor(arquivo) {
        this.arquivo = arquivo;
        this.animais = this.carregarAnimais();
    }

    carregarAnimais() {
        try {
            const dados = fs.readFileSync(this.arquivo, 'utf8');
            return JSON.parse(dados);
        } catch (erro) {
            console.error('Erro ao carregar animais:', erro);
            return [];
        }
    }

    salvarAnimais() {
        try {
            const dados = JSON.stringify(this.animais, null, 2);
            fs.writeFileSync(this.arquivo, dados);
            console.log('Animais salvos com sucesso!');
        } catch (erro) {
            console.error('Erro ao salvar animais:', erro);
        }
    }

    adicionarAnimal(novoAnimal) {
        this.animais.push(novoAnimal);
        this.salvarAnimais();
    }

    modificarHabitat(nomeAnimal, novoHabitat) {
        const animal = this.animais.find(animal => animal.especie === nomeAnimal);
        if (animal) {
            animal.habitat = novoHabitat;
            this.salvarAnimais();
            console.log('Habitat do animal modificado com sucesso!');
        } else {
            console.log('Animal não encontrado.');
        }
    }

    removerAnimal(nomeAnimal) {
        const indiceAnimal = this.animais.findIndex(animal => animal.especie === nomeAnimal);
        if (indiceAnimal !== -1) {
            this.animais.splice(indiceAnimal, 1);
            this.salvarAnimais();
            console.log('Animal removido com sucesso!');
        } else {
            console.log('Animal não encontrado para remoção.');
        }
    }
}

// Exemplo de uso:
const manipulador = new ManipuladorAnimais('animais.json');
manipulador.adicionarAnimal({
    id: "#00017",
    familia: "Psittacidae",
    genero: "Anodorhynchus",
    especie: "Arara-azul",
    habitat: "Florestas umidas",
});
manipulador.modificarHabitat('Onça Pintada', 'Oceano Antártico');
manipulador.removerAnimal('Leão');
