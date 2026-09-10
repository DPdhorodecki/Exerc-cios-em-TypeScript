class Pessoa {

    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    
    }

}

const pessoa = new Pessoa("Pdhorodecki", 16);
console.log("Nome: ", pessoa.nome, "\nIdade: ", pessoa.idade);
