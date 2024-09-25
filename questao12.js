/* Questão 12: 
Receba 5 números digitados pelo usuário, determine e exiba a quantidade de
números que são pares.
*/

// Inicializar a variável que vai contar os números pares
let quantidadePares = 0;

// Loop para receber 5 números do usuário
for (let i = 1; i <= 5; i++) {
    let numero = parseInt(prompt("Digite o " + i + "º número:"));

    // Verificar se o número é par
    if (numero % 2 === 0) {
        quantidadePares++;
    }
}

// Exibir a quantidade de números pares
console.log("A quantidade de números pares é: " + quantidadePares);
alert("A quantidade de números pares é: " + quantidadePares);
