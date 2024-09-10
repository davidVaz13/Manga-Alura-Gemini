function buscar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    campoPesquisa = campoPesquisa.toLowerCase();

    if (!campoPesquisa) {
        section.innerHTML = "Nada foi encontrado";
        return
    }

    let resultados = "";
    let titulo = "";
    let genero = "";

    for (let dado of mangasList) {
        titulo = dado.titulo.toLowerCase();
        genero = dado.genero.toLowerCase();
        if (titulo.includes(campoPesquisa) || genero.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <h3>
                    ${dado.escritor}
                </h3>
                <h3>
                    ${dado.genero}
                </h3>
                <p class="descricao-meta">${dado.descricao}</p>
            </div>
        `
        } 
    } 

    section.innerHTML = resultados;

    if (!resultados) {
        section.innerHTML = "Não encontrei algum mangá com este nome ou deste gênero";
    }

    
}
