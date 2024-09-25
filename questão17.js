/* Questão 17:
 Receber um número do usuário e imprimir na tela se ele é igual a 5, a 200, a 400,
se está no intervalo entre 500 e 1000, inclusive, ou se ele está fora dos escopos
anteriores.
*/

// Solicitar um número ao usuário
let numero = parseFloat(prompt("Digite um número:"));

// Verificar as condições
if (numero === 5) {
    console.log("O número é igual a 5.");
    alert("O número é igual a 5.");
} else if (numero === 200) {
    console.log("O número é igual a 200.");
    alert("O número é igual a 200.");
} else if (numero === 400) {
    console.log("O número é igual a 400.");
    alert("O número é igual a 400.");
} else if (numero >= 500 && numero <= 1000) {
    console.log("O número está no intervalo entre 500 e 1000.");
    alert("O número está no intervalo entre 500 e 1000.");
} else {
    console.log("O número está fora dos escopos anteriores.");
    alert("O número está fora dos escopos anteriores.");
}
