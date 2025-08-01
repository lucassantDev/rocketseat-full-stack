const USD = 5.52;
const EUR = 6.49;
const GBP = 7.45;

// Capturando elementos do forumlário
const form = document.querySelector('form');
const currency = document.getElementById('currency');
const amountHTML = document.getElementById('amount');
const footer = document.querySelector("main footer");
const footerDescricao = document.getElementById('description');
const resultado = document.getElementById('result')


// ° Recuperando valor do input amount, aceitando apenas números  e removendo letras
amountHTML.addEventListener('input', ()=> {
    const hasCaractersRegex = /\D+/g; 
    amountHTML.value = amountHTML.value.replace(hasCaractersRegex, ""); // removendo letras do input de números
})

form.onsubmit = (event) => {
    event.preventDefault() // event.preventDefault faz com que não ocorra o carregamento quando clicar no botão do fórmulario
    
    switch (currency.value){
        case 'USD':
            convertendoMoeda(amountHTML.value, USD, "US$")
            break
        case 'EUR':
            convertendoMoeda(amountHTML.value, EUR, "€")
            break
        case 'GBP':
            convertendoMoeda(amountHTML.value, GBP, '£')
            break
    }
}


// funcao para identificar a moeda 
function convertendoMoeda(amount, preco, simbolo){
try{
    footerDescricao.textContent = `${simbolo} 1 = ${formatandoMoeda(preco)}`; // alterando conteudo de texto

    // utilizando a propriedade replace para trocar o ponto pela virgula
    let total = String(amount * preco).replace('.', ',');

    // exibe o resultado total formatado
    resultado.textContent = `R$ ${total} Reais`;

    footer.classList.add('show-result');  // exibindo o footer na tela

}catch(error){
    console.log(error)
    // removendo o footer na tela
    footer.classList.remove('show-result')
    console.log("Não foi possível converter. Tente novamente mais tarde.")
}
}

// função para formatar moeda em real brasileiro
function formatandoMoeda(valor){
    return Number(valor).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })
}