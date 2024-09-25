/* Questão 15:
Receber do usuário uma sequência de números e imprimir na tela esse número
invertido. (formato CDU e imprimir invertido: UDC. (Exemplo:
123, sairá 321.) O número deverá ser armazenado em outra variável antes de ser
impresso.
*/
// Função para inverter um número
function inverterNumero(numero) {
    // Converte o número para string, inverte a ordem e armazena em outra variável
    let numeroInvertido = numero.toString().split('').reverse().join('');
    
    // Retorna o número invertido
    return numeroInvertido;
}

// Função principal
function main() {
    // Recebe o número do usuário
    let numero = prompt("Digite uma sequência de números: ");
    
    // Chama a função inverterNumero e armazena o resultado
    let resultadoInvertido = inverterNumero(numero);
    
    // Exibe o número invertido
    console.log(`O número invertido é: ${resultadoInvertido}`);
}

// Chama a função principal
main();
