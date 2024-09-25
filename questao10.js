/* Questão 10:
Elaborar um programa que realize a conversão entre metros, pés, polegadas e
milhas adotando, como referência que 1 polegada = 25.4 milímetros, 1 pé = 30.48
centímetros e 1 milha = 1609.344 metros.
*/

// Funções de conversão

// Converter metros para pés
function metrosParaPes(metros) {
    return metros / 0.3048;
}

// Converter metros para polegadas
function metrosParaPolegadas(metros) {
    return metros / 0.0254;
}

// Converter metros para milhas
function metrosParaMilhas(metros) {
    return metros / 1609.344;
}

// Função principal para solicitar a entrada do usuário e realizar as conversões
function conversaoMetros() {
    let metros = parseFloat(prompt("Digite o valor em metros: "));

    // Realizar as conversões
    let pes = metrosParaPes(metros);
    let polegadas = metrosParaPolegadas(metros);
    let milhas = metrosParaMilhas(metros);

    // Exibir os resultados
    console.log(`Valor em metros: ${metros} m`);
    console.log(`${metros} metros equivalem a:`);
    console.log(`${pes.toFixed(2)} pés`);
    console.log(`${polegadas.toFixed(2)} polegadas`);
    console.log(`${milhas.toFixed(6)} milhas`);
}

// Chamar a função principal
conversaoMetros();
