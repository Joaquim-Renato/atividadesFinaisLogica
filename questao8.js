/* Questão 8:
Receba um número real digitado pelo usuário e apresente na tela seu valor
absoluto

*/


// Solicitar um número real ao usuário
let numero = parseFloat(prompt("Digite um número real:"));

// Calcular o valor absoluto usando a função Math.abs()
let valorAbsoluto = Math.abs(numero);

// Exibir o valor absoluto
console.log("O valor absoluto de " + numero + " é " + valorAbsoluto);
alert("O valor absoluto de " + numero + " é " + valorAbsoluto);
