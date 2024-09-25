/* Questão 11:
Criar um algoritmo que, dado um número de conta corrente com três dígitos,
retorne o seu dígito verificador, o qual é calculado da seguinte maneira:
Exemplo: número da conta: 235
• Somar o número da conta com o seu inverso: 235+ 532 = 767
• multiplicar cada dígito pela sua ordem posicional e somar estes
resultados: 7 6 7
*/

// Função para inverter o número
function inverterNumero(numero) {
    return parseInt(numero.toString().split('').reverse().join(''));
}

// Função para calcular o dígito verificador
function calcularDigitoVerificador(numeroConta) {
    // Obter o inverso do número da conta
    let numeroInverso = inverterNumero(numeroConta);

    // Somar o número da conta com o seu inverso
    let soma = numeroConta + numeroInverso;

    // Converter a soma para string e separar os dígitos
    let digitos = soma.toString().split('').map(Number);

    // Multiplicar cada dígito pela sua ordem posicional
    let resultado = (digitos[0] * 1) + (digitos[1] * 2) + (digitos[2] * 3);

    // Retornar o resultado final (dígito verificador)
    return resultado;
}

// Função principal para receber entrada do usuário e calcular o dígito verificador
function main() {
    let numeroConta = parseInt(prompt("Digite o número da conta corrente (3 dígitos): "));

    if (numeroConta >= 100 && numeroConta <= 999) {
        let digitoVerificador = calcularDigitoVerificador(numeroConta);
        console.log(`O dígito verificador da conta ${numeroConta} é: ${digitoVerificador}`);
    } else {
        console.log("Número de conta inválido. Digite um número de 3 dígitos.");
    }
}

// Chamar a função principal
main();
