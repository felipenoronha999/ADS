function soma(numero1, numero2){
    return numero1 + numero2;
}

function subtracao(numero1, numero2){
    return numero1 - numero2;
}

let n1 = parseFloat(prompt("Insira o primeiro número: "));
let n2 = parseFloat(prompt("Insira o primeiro número: "));
let operacao = prompt("Escolha a operação: \n digite 1 para soma \n digite 2 para subtração \n ");

if (operacao === "1"){
    alert(soma(n1,n2));
} else if (operacao === "2"){
    alert(subtracao(n1,n2));
} else{
    alert("Não foi digitada uma operação válida!")
}