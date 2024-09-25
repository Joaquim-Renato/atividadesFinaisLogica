/* Questão 5  : 
A Lei de Ohm define que a resistência (R) de um condutor é obtida pela divisão da
tensão aplicada (V) dividida pela intensidade de corrente elétrica (A). Desta forma,
a partir de uma tensão e corrente, digitadas pelo usuário, calcule e mostre o valor
da resistência.

*/
// Solicitar a tensão (V) e a corrente (A) ao usuário
let tensao = parseFloat(prompt("Digite a tensão (em Volts):"));
let corrente = parseFloat(prompt("Digite a corrente (em Amperes):"));

// Calcular a resistência (R = V / A)
let resistencia = tensao / corrente;

// Exibir o resultado
console.log("Tensão (V): " + tensao + "V");
console.log("Corrente (A): " + corrente + "A");
console.log("Resistência (R): " + resistencia.toFixed(2) + " Ohms");

// Mostrar a resistência calculada ao usuário
alert("A resistência do condutor é: " + resistencia.toFixed(2) + " Ohms");
