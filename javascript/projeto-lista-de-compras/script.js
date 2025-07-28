// capturando dados do html
const botaoNovoItem = document.getElementById('adicionar-item');
const secaoItens = document.querySelector('#secao-03');

// eventos e funções

function limparCampo(elemento){
    return elemento.value = '';
}

// capturando o item depois do clique no botão adicionar item
botaoNovoItem.addEventListener('click', (event) => {
    event.preventDefault();
    
    // capturando o valor do input de item
    let item = document.getElementById('novo-item');

    // criando div que irá conter o elemento e posteriormente irá aparecer no html
    let espacoItem = document.createElement('div');

    // criando o paragráfo, o checkbox e o icone de lixeira
    let paragrafo = document.createElement('p');
    // let checkboxHTML = document.createElement('');
    let spanIconeLixeira = document.createElement('span')

    // informando o item informado, criando um texto e armazenando na variavel valorItem
    let valorItem = document.createTextNode(`${item.value}`);
    let iconeLixeira = document.createTextNode('🗑️');

    // adicionando o elemento filho no elemento pai
    paragrafo.appendChild(valorItem);
    spanIconeLixeira.appendChild(iconeLixeira);
    spanIconeLixeira.classList.add('remover-item')

    espacoItem.appendChild(paragrafo);
    espacoItem.appendChild(spanIconeLixeira)

    console.log(espacoItem)

    // adicionando o estilo na div criada
    espacoItem.classList.add('item-informado')


    // adicionando a div no html!!!!
    secaoItens.appendChild(espacoItem);
    limparCampo(item);
})
