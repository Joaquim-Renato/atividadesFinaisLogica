/* Questão 18: 
18. A turma de Programação I, por ter muitos alunos, será dividida em dias de provas.
Após um estudo feito pelo coordenador, decidiu-se dividi-la em três grupos.
Fazer um algoritmo que leia o nome do aluno e indicar a sala em que ele deverá
fazer as provas, tendo em vista a tabela a seguir e sabendo-se que todas as salas

se encontram no bloco F:
A - K : sala 7 O 7
L - N : sala 102
O-Z: sala 103
*/

// Solicitar o nome do aluno
let nomeAluno = prompt("Digite o nome do aluno:");

// Converter o nome para letra maiúscula para facilitar a comparação
let letraInicial = nomeAluno.charAt(0).toUpperCase();

// Verificar a sala com base na letra inicial do nome
let sala;

if (letraInicial >= 'A' && letraInicial <= 'K') {
    sala = "sala 7";
} else if (letraInicial >= 'L' && letraInicial <= 'N') {
    sala = "sala 102";
} else if (letraInicial >= 'O' && letraInicial <= 'Z') {
    sala = "sala 103";
} else {
    sala = "informe um nome válido.";
}

// Exibir a sala onde o aluno fará a prova
alert(`O aluno ${nomeAluno} deverá fazer a prova na ${sala}.`);
console.log(`O aluno ${nomeAluno} deverá fazer a prova na ${sala}.`);
