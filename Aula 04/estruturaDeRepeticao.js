for (let i = 0;  i<10; i++){
    console.log(i);
}












// // A estrutura for é uma das formas mais usadas 
// // para repetir um bloco de código várias vezes 
// // no JavaScript (e na maioria das linguagens). 
// // Ela é especialmente útil quando você já sabe 
// // quantas vezes quer repetir algo (ou quando 
// // quer percorrer uma lista, array, string, etc.).


// // for (inicialização;   condição;   atualização) {
// //     // código que será repetido
// // }

// // Inicialização: Executa uma vez no começo
// // Condição: Verifica antes de cada repetição
// // Atualização: Executa depois de cada repetição

let notas = [2,5,10,20,50,100,200,5,10,20,20,50,100,2,2,5,10];
let total = 0;

for (let repeticoes = 0; repeticoes < notas.length; repeticoes++){
    total = total + notas[repeticoes];
}

console.log(`O total do seu dinheiro é ${total}`);

