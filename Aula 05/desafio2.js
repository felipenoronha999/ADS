// 2. Localizador de "Maior e Menor"
// Este foca em iteração (for) e comparação.

// O problema: Escreva uma função que receba um array de números inteiros e retorne um novo array contendo apenas dois elementos: o maior e o menor número encontrados.

// Desafio extra: Tente resolver sem usar funções prontas como Math.max(), apenas percorrendo o array com um for e usando uma variável temporária para comparar os valores.

let numeros = [59,44,12,72,58,20,40,50];

let maior = numeros[0];
let menor = numeros[0];

for (let i=1; i<numeros.length; i++){
    if (numeros[i] > maior){
        maior = numeros[i];
    }
    if (numeros[i] < menor){
        menor = numeros[i];
    }
}

let texto = `na lista ${numeros} o maior número é ${maior} e o menor número é ${menor}`;

document.getElementById('conteudo').innerHTML = texto;