function Calcular() {
  let quantidade = document.getElementById("numeroAcoes");
  let quantidadeAcao = quantidade.value;
  let quantidadeAcoesNumero = parseInt(quantidadeAcao);

  let preco = document.getElementById("valorAcoes");
  let valorprecoAcao = preco.value;
  let valorUnitario = parseFloat(valorprecoAcao);

  let lucro = document.getElementById("lucroAcoes");
  let valorLucroAcoes = lucro.value;
  let lucroDesejado = parseFloat(valorLucroAcoes);

  let valorTotal = quantidadeAcoesNumero * valorUnitario;

  let calcularPorcentagem = (valorTotal / 100) * lucroDesejado;

  let calcularLucroDesejado = valorTotal + calcularPorcentagem;

  let valorLucroSimulado = document.getElementById("lucroSimulado");
  let lucroSimulado = "Total a receber R$ " + calcularLucroDesejado;
  valorLucroSimulado.innerHTML = lucroSimulado;
}
