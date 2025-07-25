const USD = 5.52;
const EUR = 6.49;
const GBP = 7.45;

// Capturando elementos do forumlário
const form = document.querySelector('form');
const currency = document.getElementById('currency');
const amountHTML = document.getElementById('amount');

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
    console.log(amount, preco, simbolo);
}