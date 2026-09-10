class Produto{
  nome: string;
  preco: GLfloat;
  estoque: number;

  constructor(nome: string, preco: GLfloat, estoque: number){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }
}

const produto1 = new Produto ("Mamão", 5.47, 1);
const produto2 = new Produto ("Sabão em pó", 20.99, 1);

console.log("Produto:", produto1.nome, ", Preço:", produto1.preco, ", Em estoque:", produto1.estoque);

console.log("Produto:", produto2.nome, ", Preço:", produto2.preco, ", Em estoque:", produto2.estoque);
