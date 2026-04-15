// Função que recebe os dados do JSON e cria os cards
function gerarCards(dados) {
    const container = document.getElementById('cards-container');
    container.innerHTML = ''; // limpa mensagem de carregamento

    dados.forEach(item => {
        // Cria os elementos do card
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = item.imagem;
        img.alt = item.titulo;
        img.classList.add('card-img');

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('card-content');

        const categoriaSpan = document.createElement('span');
        categoriaSpan.classList.add('card-categoria');
        categoriaSpan.textContent = item.categoria;

        const tituloH3 = document.createElement('h3');
        tituloH3.classList.add('card-titulo');
        tituloH3.textContent = item.titulo;

        const descricaoP = document.createElement('p');
        descricaoP.classList.add('card-descricao');
        descricaoP.textContent = item.descricao;

        const idDiv = document.createElement('div');
        idDiv.classList.add('card-id');
        idDiv.textContent = `ID: ${item.id}`;

        // Monta a estrutura
        contentDiv.appendChild(categoriaSpan);
        contentDiv.appendChild(tituloH3);
        contentDiv.appendChild(descricaoP);
        contentDiv.appendChild(idDiv);

        card.appendChild(img);
        card.appendChild(contentDiv);

        container.appendChild(card);
    });
}

// Carrega o arquivo JSON usando fetch
fetch('dados.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao carregar o JSON: ' + response.status);
        }
        return response.json();
    })
    .then(dados => {
        gerarCards(dados);
    })
    .catch(error => {
        console.error('Erro:', error);
        const container = document.getElementById('cards-container');
        container.innerHTML = `<p style="color: red; text-align: center;">❌ Não foi possível carregar os dados. Verifique se o arquivo dados.json está no mesmo diretório e se você está usando um servidor local (ex: Live Server).</p>`;
    });