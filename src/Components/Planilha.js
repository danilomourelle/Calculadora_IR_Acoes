function valorTotal (valorUnitario, quantidade) {
  return valorUnitario * quantidade
}
function liquidacao (valorTotal){
  return valorTotal * 0.000275
}
function negociacao (valorTotal){
  return valorTotal * 0.00003248
}
function emolumentos (liquidacao, negociacao){
  return liquidacao + negociacao
}
function totalOperacao (valorTotal, emolumentos, tipo){
  if (tipo==="compra"){
   return  valorTotal + emolumentos
  } else if (tipo === "venda"){
    return valorTotal - emolumentos
  }
}
function precoMedio (totalOperacao, quantidade){
  return totalOperacao / quantidade
}

class Operacao {
  constructor(ticker, tipo, valorUnitario, quantidade, valorTotal, liquidacao, negociacao, emolumentos, totalOperacao, precoMedio) {
    this.ticker = ticker
    this.tipo = tipo
    this.valorUnitario = valorUnitario
    this.quantidade = quantidade
    this.valorTotal = valorTotal
    this.liquidacao = liquidacao
    this.negociacao = negociacao
    this.emolumentos = emolumentos
    this.totalOperacao = totalOperacao
    this.precoMedio = precoMedio
  }
}

export function crianOperacao (ticker, tipo, valorUnitario, quantidade){
  let novoValorTotal = valorTotal(valorUnitario, quantidade)
  let novoLiquidacao = liquidacao(novoValorTotal)
  let novoNegociacao = negociacao(novoValorTotal)
  let novoEmolumentos = emolumentos(novoLiquidacao, novoNegociacao)
  let novoTtlOperacao = totalOperacao(novoValorTotal, novoEmolumentos, tipo)
  let novoPrecoMedio = precoMedio(novoTtlOperacao, quantidade)

  let novaOperacao = new Operacao (
    ticker, 
    tipo, 
    valorUnitario, 
    quantidade, 
    novoValorTotal, 
    novoLiquidacao, 
    novoNegociacao, 
    novoEmolumentos, 
    novoTtlOperacao, 
    novoPrecoMedio
  )

  return novaOperacao
}





