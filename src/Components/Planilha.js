class Operacao {
  constructor(ticker, tipo, valorUnitario, quantidade) {
    this.ticker = ticker
    this.tipo = tipo
    this.valorUnitario = valorUnitario
    this.quantidade = quantidade
    this.valorTotal = valorUnitario * quantidade
    this.liquidacao = this.valorTotal * 0.000275
    this.negociacao = this.valorTotal * 0.00003248 // usar ternário
    this.emolumentos = this.liquidacao + this.negociacao
    this.totalOperacao = this.emolumentos + this.valorTotal
    this.precoMedio = this.totalOperacao / this.quantidade
  }
  set calculosEmolumentos (valorTotal) {
    this.liquidacao = 
    }

}

let bla
function teste (novObjeto) {
  novObjeto = new Operacao('BPAN', 'C', 9.98, 100)
  novObjeto.calculosEmolumentos(novObjeto.valorTotal)
}

teste(bla)
console.log(bla)

/* class Person {
  constructor(name) {
    this._name = name;
  }
  
  get bla() {
    return this._name.toUpperCase();
  }

  set name(name) {
    this._name = name + name; // validation could be checked here such as only allowing non numerical values
  }

  walk() {
    console.log(this._name + ' is walking.');
  }
}

let bob = new Person('Bob');
console.log(bob.bla); // Outputs 'BOB'
console.log(bob._name); // Outputs 'BOB'

console.log(bob.bla); // Outputs 'BOB'
console.log(bob._name); // Outputs 'BOB'
 // Outputs 'BOB'
 */
