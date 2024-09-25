/* Questão 14:
A partir do salário e categoria, digitados pelo usuário, calcular o reajuste salarial
de determinado funcionário baseando-se na tabela abaixo, sendo que o programa
deverá aceitar tanto letras maiúsculas como minúsculas para determinar a
categoria do funcionário.

Reajuste Categoria
10% A, C
15% B, D, E
25% F, L
35% G, H
50% I, J
*/

// Função para calcular o reajuste com base na categoria
function calcularReajuste(salario, categoria) {
    // Converter a categoria para maiúscula para evitar erros com letras minúsculas
    categoria = categoria.toUpperCase();
    
    // Definir o percentual de reajuste com base na categoria
    let reajuste = 0;
    switch (categoria) {
        case 'A':
        case 'C':
            reajuste = 0.10; // 10% de reajuste
            break;
        case 'B':
        case 'D':
        case 'E':
            reajuste = 0.15; // 15% de reajuste
            break;
        case 'F':
        case 'L':
            reajuste = 0.25; // 25% de reajuste
            break;
        case 'G':
        case 'H':
            reajuste = 0.35; // 35% de reajuste
            break;
        case 'I':
        case 'J':
            reajuste = 0.50; // 50% de reajuste
            break;
        default:
            console.log("Categoria inválida.");
            return null;
    }
    
    // Calcular o novo salário após o reajuste
    let novoSalario = salario + (salario * reajuste);
    return novoSalario;
}

// Função principal para receber entrada do usuário e calcular o novo salário
function main() {
    // Receber o salário e a categoria do funcionário
    let salario = parseFloat(prompt("Digite o salário atual do funcionário: "));
    let categoria = prompt("Digite a categoria do funcionário (A, B, C, D, etc.): ");
    
    // Calcular o reajuste
    let salarioReajustado = calcularReajuste(salario, categoria);
    
    // Exibir o resultado
    if (salarioReajustado !== null) {
        console.log(`O novo salário reajustado do funcionário é: R$ ${salarioReajustado.toFixed(2)}`);
    }
}

// Chamar a função principal
main();
