function processarXML(xmlString) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");
    
    // Verifica erro de parsing
    if (xmlDoc.getElementsByTagName("parsererror").length > 0) {
        throw new Error("Erro ao fazer parsing do XML");
    }
    
    const livros = xmlDoc.getElementsByTagName("livro");
    const container = document.getElementById("cards-container");
    container.innerHTML = "";
    
    // Percorre cada elemento <livro>
    for (let i = 0; i < livros.length; i++) {
        const livro = livros[i];
        
        // Acessando ATRIBUTOS do elemento livro (id e disponivel)
        const id = livro.getAttribute("id");
        const disponivel = livro.getAttribute("disponivel");
        
        // Acessando elementos FILHO (texto interno)
        const titulo = livro.getElementsByTagName("titulo")[0].textContent;
        const autor = livro.getElementsByTagName("autor")[0].textContent;
        const ano = livro.getElementsByTagName("ano")[0].textContent;
        const genero = livro.getElementsByTagName("genero")[0].textContent;
        const capa = livro.getElementsByTagName("capa")[0].textContent;
        
        // Cria o card (igual ao exemplo anterior)
        const card = document.createElement("div");
        card.classList.add("card");
        
        const img = document.createElement("img");
        img.src = capa;
        img.alt = titulo;
        img.classList.add("card-img");
        
        const contentDiv = document.createElement("div");
        contentDiv.classList.add("card-content");
        
        const disponivelSpan = document.createElement("span");
        disponivelSpan.classList.add("disponivel");
        disponivelSpan.textContent = disponivel === "sim" ? "✅ Disponível" : "❌ Indisponível";
        if (disponivel === "sim") {
            disponivelSpan.style.backgroundColor = "#dcfce7";
            disponivelSpan.style.color = "#166534";
        } else {
            disponivelSpan.style.backgroundColor = "#fee2e2";
            disponivelSpan.style.color = "#991b1b";
        }
        
        const tituloH3 = document.createElement("h3");
        tituloH3.textContent = titulo;
        
        const autorP = document.createElement("p");
        autorP.innerHTML = `<strong>Autor:</strong> ${autor}`;
        
        const detalhesP = document.createElement("p");
        detalhesP.innerHTML = `<strong>Ano:</strong> ${ano} | <strong>Gênero:</strong> ${genero}`;
        
        const idDiv = document.createElement("div");
        idDiv.classList.add("card-id");
        idDiv.textContent = `ID: ${id}`;
        
        contentDiv.appendChild(disponivelSpan);
        contentDiv.appendChild(tituloH3);
        contentDiv.appendChild(autorP);
        contentDiv.appendChild(detalhesP);
        contentDiv.appendChild(idDiv);
        
        card.appendChild(img);
        card.appendChild(contentDiv);
        container.appendChild(card);
    }
}

// Carrega o arquivo XML via fetch
fetch("livros.xml")
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao carregar XML: " + response.status);
        }
        return response.text();   // diferente do JSON, usamos .text() para pegar string XML
    })
    .then(xmlString => {
        processarXML(xmlString);
    })
    .catch(error => {
        console.error(error);
        const container = document.getElementById("cards-container");
        container.innerHTML = `<p style="color:red;">❌ Erro ao carregar XML: ${error.message}</p>`;
    });