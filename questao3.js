/* Questão 3:
Ler dois valores para as variáveis A e B, efetuar a troca dos valores de forma que a
variável A passe a ter o valor da variável B e que a variável B passe a ter o valor da
variável A. Apresentar os valores trocados.

*/

// Solicitar os valores das variáveis A e B
let A = parseFloat(prompt("Digite o valor de A:"));
let B = parseFloat(prompt("Digite o valor de B:"));

// Exibir os valores originais
console.log("Valores originais: A = " + A + ", B = " + B);

// Efetuar a troca de valores
let temp = A;
A = B;
B = temp;

// Exibir os valores trocados
console.log("Valores trocados: A = " + A + ", B = " + B);

// Mostrar os valores trocados ao usuário
alert("Após a troca: A = " + A + " e B = " + B);
