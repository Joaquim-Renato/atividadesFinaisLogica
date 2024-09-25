/* Questão 13:
Faça um programa que, a partir de 4 números inteiros digitados pelo usuário,
determine e mostre o maior número par.
*/

// Inicializar a variável para armazenar o maior número par
let maiorPar = null;

// Loop para receber 4 números do usuário
for (let i = 1; i <= 4; i++) {
    let numero = parseInt(prompt("Digite o " + i + "º número inteiro:"));

    // Verificar se o número é par
    if (numero % 2 === 0) {
        // Se for par e maior que o maiorPar atual, atualiza maiorPar
        if (maiorPar === null || numero > maiorPar) {
            maiorPar = numero;
        }
    }
}

// Verificar se algum número par foi encontrado e exibir o resultado
if (maiorPar !== null) {
    console.log("O maior número par digitado é: " + maiorPar);
    alert("O maior número par digitado é: " + maiorPar);
} else {
    console.log("Nenhum número par foi digitado.");
    alert("Nenhum número par foi digitado.");
}
