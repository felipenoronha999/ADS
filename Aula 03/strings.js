//declarando uma variável do tipo string
let string = "texto";

//concatenar strings
let mensagem = "Olá! ";
let mensagem2 = "Seja bem-vindo(a).";
let concatenar = mensagem + mensagem2
let pessoa = 'David';
let mensagem3 = pessoa + ", seja bem-vindo."
//outra forma de concatenar: com aspas invertidas = crase
let mensagem4 = `${pessoa}, e aí, beleza?`

//exemplo de método

//console.log serve para visualizar o que tem dentro de uma variável no console do navegador
console.log(mensagem4);


//exercício
let usuario = prompt("Qual é o seu nome?");
console.log(usuario);

alert(`Bem-vindo(a), ${pessoa}.`)