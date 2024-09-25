/* Questão 7 :
Receba um número digitado pelo usuário e apresente na tela se o número é par ou
ímpar. 
*/

// Solicitar um número ao usuário
let numero = parseInt(prompt("Digite um número:"));

// Verificar se o número é par ou ímpar
if (numero % 2 === 0) {
    console.log("O número " + numero + " é par.");
    alert("O número " + numero + " é par.");
} else {
    console.log("O número " + numero + " é ímpar.");
    alert("O número " + numero + " é ímpar.");
}
