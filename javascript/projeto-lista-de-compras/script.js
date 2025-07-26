
// capturando dados do html
const botaoNovoItem = document.getElementById('adicionar-item');

// eventos

// capturando o item depois do clique no botão adicionar item
botaoNovoItem.addEventListener('click', (event) => {
    event.preventDefault();
    let item = document.getElementById('novo-item');
    console.log(item.value);
})
