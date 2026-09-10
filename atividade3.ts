class Aluno {
  
    nome: string;
    nota: number;

    constructor(nome: string, nota: number) {
        this.nome = nome;
        this.nota = nota;
    }

    aprovado(): boolean {
        return this.nota >= 6;
    }

}

const aluno = new Aluno("Daniel Pdhorodecki", 8);
console.log("Nome do aluno: ", aluno.nome, "\nAluno aprovado: ", aluno.aprovado());
