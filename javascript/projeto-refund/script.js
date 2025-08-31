// selecionando valores do fórmulario
const Form = document.querySelector('Form')
const Amount = document.getElementById('amount');
const Expense = document.getElementById('expense');
const Category = document.getElementById('category');

// capturando evento de input para formatar o valor
Amount.oninput = () =>{
    // utilizando regex para remover letras do input
    let value = Amount.value.replace(/\D/g, '');

    // transformando o valor em centavos
    value = Number(value) / 100

    // repasando valor para a variável Amount, sem letras
    Amount.value = formatCurrencyBRL(value); 

    // console.log(valor)
}

function formatCurrencyBRL(value){
    value = value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

    return value

}

// captura o event de submit do formulario para obter os valores
Form.onsubmit = (event) =>{

    // previne que a página seja recarregada
    event.preventDefault()

    // objeto com detalhes da despesagit
    const newExpense = {
        id: new Date().getTime(),
        Expense: Expense.value,
        Category_id: Category.value,
        // pegando a opção selecionada no select do html
        Category_name: Category.options[Category.selectedIndex].text,
        Amount: Amount.value,
        Created_at: new Date(),
    }

    console.log(newExpense)
} 

