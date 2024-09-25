/* Questão 6: 
Faça um programa que faça a leitura do nome e do ano de nascimento de uma
pessoa, calcule sua idade e exiba a idade calculada também indicando se a
pessoa é maior ou menor de idade.

*/

// Solicitar o nome e o ano de nascimento da pessoa
let nome = prompt("Digite o seu nome:");
let anoNascimento = parseInt(prompt("Digite o seu ano de nascimento:"));

// Obter o ano atual
let anoAtual = new Date().getFullYear();

// Calcular a idade
let idade = anoAtual - anoNascimento;

// Determinar se a pessoa é maior ou menor de idade
let status = (idade >= 18) ? "maior de idade" : "menor de idade";

// Exibir o resultado
console.log("Nome: " + nome);
console.log("Idade: " + idade + " anos");
console.log("Você é " + status);

// Mostrar a idade e status ao usuário
alert(nome + ", você tem " + idade + " anos e é " + status + ".");
