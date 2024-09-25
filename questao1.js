/* Questão 1: 
Uma determinada loja precisa calcular o preço de venda de um produto. O cálculo
deverá ser efetuado através desse programa crido por você não esquecendo que
terá que aplicar o desconto também. Considerar todas as variáveis do tipo real e
que elas serão digitadas pelo usuário. 
tudo em java script por favor
*/

// Solicitar o preço original do produto e a porcentagem de desconto
let precoOriginal = parseFloat(prompt("Digite o preço original do produto:"));
let percentualDesconto = parseFloat(
  prompt("Digite o percentual de desconto (em %):")
);

// Calcular o valor do desconto
let valorDesconto = (precoOriginal * percentualDesconto) / 100;

// Calcular o preço final do produto
let precoFinal = precoOriginal - valorDesconto;

// Exibir os resultados
console.log("Preço original do produto: R$ " + precoOriginal.toFixed(2));
console.log("Desconto aplicado: R$ " + valorDesconto.toFixed(2));
console.log("Preço final do produto: R$ " + precoFinal.toFixed(2));

// Mostrar o preço final ao usuário
alert("O preço final do produto com desconto é: R$ " + precoFinal.toFixed(2));
