// <!-- Calculadora de IMC
// Crie uma função calcularIMC(peso, altura) que calcula o Índice de Massa Corporal.
// Fórmula: imc = peso / (altura * altura)
// Depois mostre uma mensagem:

// Abaixo de 18.5 → "Abaixo do peso"
// Entre 18.5 e 24.9 → "Peso normal"
// Entre 25 e 29.9 → "Sobrepeso"
// 30 ou mais → "Obesidade" -->


function calcularIMC(peso,altura){
    return peso/(altura*altura);
}

let primeirocalculo = calcularIMC(85, 1.80);

let segundocalculo = calcularIMC(90, 1.88);

classificacao = ''
if (primeirocalculo>=30){
    //obesidade
    classificacao = 'obesidade';
}else if(primeirocalculo>=25){
    //sobrepeso
    classificacao = 'sobrepeso';
}else if(primeirocalculo >= 18.5){
    //pesonormal
    classificacao = 'peso normal';
}else{
    //abaixo do peso
    classificacao = 'abaixo do peso';
}


document.getElementById('meuID').innerHTML = `imc do primeiro: ${primeirocalculo}`;
document.getElementById('class').innerHTML = `a classificação é: ${classificacao}`;


