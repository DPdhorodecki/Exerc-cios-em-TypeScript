class Retangulo{
  altura: number;
  largura: number;

  constructor (altura: number, largura: number){
    this.altura = altura;
    this.largura = largura;
    
  }

  calcularPerimetro(): number{
    return this.largura*2 + this.altura*2;
  }
}

const retangulo = new Retangulo (5,7);

console.log(retangulo.calcularPerimetro());
