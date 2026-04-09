function validarCadastro() {
    // Pegando os valores digitados
    const nome = document.getElementById('nome').value.trim();
    const dataNascimento = document.getElementById('dataNascimento').value;
    const senha = document.getElementById('senha').value;
    const confirmacaoSenha = document.getElementById('confirmacaoSenha').value;
    const animais = document.getElementById('animais').value;
    let texto_sobre = '';

    // Validação do nome
    if (nome.length <= 3) {
        alert("Cadastro inválido!\n\nO nome deve ter mais de 3 caracteres.");
        return;
    }
    // Validação da data de nascimento
    if (!dataNascimento) {
        alert("Cadastro inválido!\n\nPor favor, informe a data de nascimento.");
        return;
    }

    const dataDigitada = new Date(dataNascimento);
    const dataMinima = new Date("1900-01-01");
    const hoje = new Date();

    // Remove horas, minutos e segundos para comparar só a data
    hoje.setHours(0, 0, 0, 0);

    if (dataDigitada < dataMinima) {
        alert("Cadastro inválido!\n\nA data de nascimento não pode ser anterior a 01/01/1900.");
        return;
    }

    if (dataDigitada > hoje) {
        alert("Cadastro inválido!\n\nA data de nascimento não pode ser no futuro.");
        return;
    }

    // Validação da senha
    if (senha.length < 4) {
        alert("Cadastro inválido!\n\nA senha deve ter pelo menos 4 caracteres.");
        return;
    }

    // Validação da confirmação de senha
    if (senha !== confirmacaoSenha) {
        alert("Cadastro inválido!\n\nAs senhas não coincidem.");
        return;
    }

    // Se chegou até aqui, está tudo certo
    document.getElementById('formCadastro').style.display = 'none';
    document.getElementById('titulo').innerHTML = `Bem-vindo(a), ${nome}!`;
    
    if (animais>3){
        texto_sobre = 'Você ama animais.'
    } else if(animais>0){
        texto_sobre = 'Você gosta de animais.'
    } else{
        texto_sobre = 'Você não é muito fã de animais.'
    }
    document.getElementById('sobre').innerHTML = `${texto_sobre}`;

    
}

function limparFormulario() {
    document.getElementById('formCadastro').reset();
}