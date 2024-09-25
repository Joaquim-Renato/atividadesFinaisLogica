/* Questão 16:
Crie um programa que o usuário irá digitar dois números, após a entrada dos
dados apresentar na tela o quadrado do menor número e a raiz quadrada do maior
número, se for possível.
*/

// Solicitar dois números ao usuário
let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

// Determinar o menor e o maior número
let menorNumero = Math.min(numero1, numero2);
let maiorNumero = Math.max(numero1, numero2);

// Calcular o quadrado do menor número
let quadradoMenor = menorNumero ** 2;

// Calcular a raiz quadrada do maior número (se for possível)
let raizQuadradaMaior = maiorNumero >= 0 ? Math.sqrt(maiorNumero) : "Não é possível calcular a raiz quadrada de um número negativo.";

// Exibir os resultados
console.log("O quadrado do menor número (" + menorNumero + ") é: " + quadradoMenor);
alert("O quadrado do menor número (" + menorNumero + ") é: " + quadradoMenor);

if (typeof raizQuadradaMaior === "string") {
    console.log(raizQuadradaMaior);
    alert(raizQuadradaMaior);
} else {
    console.log("A raiz quadrada do maior número (" + maiorNumero + ") é: " + raizQuadradaMaior);
    alert("A raiz quadrada do maior número (" + maiorNumero + ") é: " + raizQuadradaMaior);
}

