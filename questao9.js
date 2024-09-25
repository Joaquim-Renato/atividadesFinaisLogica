/* Questão 09:
Elabore um programa que realize a resolução de uma equação do 2o grau
utilizando, para isso, a Fórmula de Bháskara.
*/

// Solicitar os coeficientes a, b e c ao usuário
let a = parseFloat(prompt("Digite o valor de a (coeficiente de x²):"));
let b = parseFloat(prompt("Digite o valor de b (coeficiente de x):"));
let c = parseFloat(prompt("Digite o valor de c (termo constante):"));

// Calcular o discriminante (delta)
let delta = (b * b) - (4 * a * c);

// Verificar se o delta é negativo, zero ou positivo
if (delta < 0) {
    console.log("A equação não possui raízes reais.");
} else if (delta === 0) {
    // Se delta for zero, existe apenas uma raiz real (raiz dupla)
    let x = -b / (2 * a);
    console.log(`A equação possui uma única raiz real: x = ${x}`);
} else {
    // Se delta for positivo, existem duas raízes reais distintas
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`As raízes da equação são: x1 = ${x1} e x2 = ${x2}`);
}
