/* Questão 2: 
A potência (P) consumida por determinado aparelho eletroeletrônico é definida
pela tensão (V) multiplicada pela corrente (A). Elabore um programa que, a partir
da tensão e corrente fornecidas pelo usuário, calcule e apresente a potência.
*/

// Solicitar a tensão (V) e a corrente (A) ao usuário
let tensao = parseFloat(prompt("Digite a tensão (em Volts):"));
let corrente = parseFloat(prompt("Digite a corrente (em Amperes):"));

// Calcular a potência (P = V * A)
let potencia = tensao * corrente;

// Exibir o resultado
console.log("Tensão (V): " + tensao + "V");
console.log("Corrente (A): " + corrente + "A");
console.log("Potência consumida (P): " + potencia + " Watts");

// Mostrar a potência calculada ao usuário
alert("A potência consumida pelo aparelho é: " + potencia + " Watts");
