/* Questão 4:
Calcular a média final de um aluno considerando eu o mesmo irá realizar duas
provas (P1 e P2), sendo que a P1 deverá ter peso 4 e a P2 peso 6. Os dados serão
fornecidos pelo usuário.
*/

// Solicitar as notas das provas P1 e P2 ao usuário
let P1 = parseFloat(prompt("Digite a nota da P1 (peso 4):"));
let P2 = parseFloat(prompt("Digite a nota da P2 (peso 6):"));

// Calcular a média final (Média = (P1 * 4 + P2 * 6) / 10)
let mediaFinal = (P1 * 4 + P2 * 6) / 10;

// Exibir a média final
console.log("Nota da P1: " + P1);
console.log("Nota da P2: " + P2);
console.log("Média final: " + mediaFinal.toFixed(2));

// Mostrar a média final ao usuário
alert("A média final do aluno é: " + mediaFinal.toFixed(2));
