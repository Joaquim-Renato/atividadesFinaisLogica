# Explicação do Comando `toFixed(2)` em JavaScript

O comando `toFixed(2)` é utilizado em JavaScript para formatar um número, limitando o número de casas decimais que ele exibe. Ele é especialmente útil quando se deseja trabalhar com valores monetários ou exibir resultados numéricos de forma mais legível.

## Como Funciona o `toFixed()`

O método `toFixed()` converte um número em uma string, mantendo um número específico de casas decimais. O número dentro dos parênteses determina quantas casas decimais o número exibido terá.

### Sintaxe

```javascript
numero.toFixed(dígitos);

let numero = 5.6789;
let numeroFormatado = numero.toFixed(2); // Retorna "5.68"
console.log(numeroFormatado);

```
No exemplo acima, o número 5.6789 foi arredondado para duas casas decimais, resultando em 5.68.

# Explicação do Operador `typeof` em JavaScript

O operador `typeof` em JavaScript é usado para determinar o tipo de uma variável ou expressão. Ele retorna uma string que representa o tipo da variável.

Dessa forma, o typeof ajuda a garantir que o código se comporta conforme esperado, dependendo do tipo de dado que está lidando.


## Tipos Retornados pelo `typeof`

1. **`"undefined"`**: O valor é `undefined`.
2. **`"boolean"`**: O valor é um booleano (`true` ou `false`).
3. **`"number"`**: O valor é um número (inteiro ou decimal).
4. **`"bigint"`**: O valor é um número inteiro grande, que pode ser maior do que o limite de números em JavaScript.
5. **`"string"`**: O valor é uma string de texto.
6. **`"symbol"`**: O valor é um símbolo, que é um tipo de dado usado para identificar propriedades de forma única.
7. **`"object"`**: O valor é um objeto (incluindo arrays e funções).
8. **`"function"`**: O valor é uma função (um tipo especial de objeto).

## Exemplos

```javascript
let x; // undefined
console.log(typeof x); // "undefined"

let y = 42; // number
console.log(typeof y); // "number"

let z = "Hello"; // string
console.log(typeof z); // "string"

let isTrue = true; // boolean
console.log(typeof isTrue); // "boolean"

let arr = [1, 2, 3]; // object (arrays são objetos em JavaScript)
console.log(typeof arr); // "object"

let obj = { name: "Alice" }; // object
console.log(typeof obj); // "object"

function myFunction() {} // function
console.log(typeof myFunction); // "function"
```
--- 

Uso do typeof em Código:
<br>
No meu código, o typeof é usado para verificar se uma variável contém uma string ou um número. Isso permite que o programa decida como proceder, exibindo a mensagem apropriada ao usuário.

--- 

# Explicação do Comando `charAt(0).toUpperCase()`

O comando `charAt(0).toUpperCase()` é utilizado em JavaScript para manipular strings. Ele é frequentemente empregado para extrair e formatar a primeira letra de uma string.

## Componentes do Comando

1. **`charAt(index)`**:
   - O método `charAt()` retorna o caractere na posição especificada de uma string.
   - O índice é baseado em zero, ou seja, `0` representa o primeiro caractere.
   - **Exemplo**:
     ```javascript
     let nome = "Alice";
     let primeiraLetra = nome.charAt(0); // Retorna "A"
     ```

2. **`toUpperCase()`**:
   - O método `toUpperCase()` transforma todos os caracteres de uma string em letras maiúsculas.
   - Ele é aplicado à string que `charAt()` retorna.
   - **Exemplo**:
     ```javascript
     let letra = "a";
     let letraMaiuscula = letra.toUpperCase(); // Retorna "A"
     ```

## Juntando os Componentes

Quando utilizados juntos como `charAt(0).toUpperCase()`, esses métodos permitem que você extraia a primeira letra de uma string e a converta para maiúscula, independentemente de como o usuário a digitou.

### Exemplo Completo

```javascript
let nome = "alice";
let primeiraLetraMaiuscula = nome.charAt(0).toUpperCase(); // Retorna "A"
console.log(primeiraLetraMaiuscula);
```
--- 

# Explicação da Função `Math.sqrt()` em JavaScript

A função `Math.sqrt()` em JavaScript é utilizada para calcular a **raiz quadrada** de um número. Ela faz parte do objeto `Math`, que contém diversas funções matemáticas úteis.

## Sintaxe

```javascript
Math.sqrt(x)

```
# Exemplo de Uso 

````` javascript
let numero = 16;
let raizQuadrada = Math.sqrt(numero); // Retorna 4
console.log(raizQuadrada);
// Neste exemplo, a raiz quadrada de 16 é 4, e esse valor é retornado pela função.

`````
# Exemplo numero negativo :

````` javascript
let numero = -9;
let raizQuadrada = Math.sqrt(numero); // Retorna NaN
console.log(raizQuadrada);
// A raiz quadrada de um número negativo não é um número real, então a função retorna NaN (Not-a-Number).
`````
---
# Explicação do Comando toString().split('').reverse().join('')

## Descrição

O comando toString().split('').reverse().join('') é uma sequência de métodos utilizados para inverter uma string em JavaScript. Este conjunto de métodos é comumente usado quando você tem um número ou uma string e deseja inverter a ordem dos caracteres.

# Passo a Passo
toString(): Converte um valor (geralmente um número) para uma string.

split(''): Divide a string em um array de caracteres, separando cada caractere da string.

reverse(): Inverte a ordem dos elementos dentro do array.

join(''): Junta todos os elementos do array em uma nova string, sem separadores.

# Exemplo de Funcionamento
# Exemplo 1: Inverter um número
Suponha que você tenha o número 12345 e deseja invertê-lo.

```` javascript
Copiar código
let numero = 12345;
let numeroInvertido = numero.toString().split('').reverse().join('');
console.log(numeroInvertido); // Saída: "54321"
````
```` javascript
let palavra = "JavaScript";
let palavraInvertida = palavra.split('').reverse().join('');
console.log(palavraInvertida); // Saída: "tpircSavaJ"
````