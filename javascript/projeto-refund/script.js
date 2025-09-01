
// selecionando valores do fórmulario
const Form = document.querySelector('form')
const Amount = document.getElementById('amount');
const Expense = document.getElementById('expense');
const Category = document.getElementById('category');

// seleciona os elementos da lista
const expenseList = document.querySelector('ul')

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

    // objeto com detalhes da despesa
    const newExpense = {
        id: new Date().getTime(),
        Expense: Expense.value,
        Category_id: Category.value,
        // pegando a opção selecionada no select do html
        Category_name: Category.options[Category.selectedIndex].text,
        Amount: Amount.value,
        Created_at: new Date(),
    }

    // console.log(newExpense)

    // chama a função que irá adicionar o item na lista 
    expenseAdd(newExpense);
} 


function expenseAdd(newExpense){
    try {
        // criando o elemento para adicionar o item na lista (ul)
         const expenseItem = document.createElement('li');
         expenseItem.classList.add('expense');

        // criando o icone da categoria
        const expenseIcon = document.createElement('img');

        // pegando dinamicamente a categoria atribuida pelo usuario e atribui no js para poder pegar o icone 
        expenseIcon.setAttribute('src', `img/${newExpense.Category_id}.svg`)
        expenseIcon.setAttribute('alt', newExpense.Category_name)

        // adiciona as informações no item na li
        expenseItem.append(expenseIcon)

        // adicionando a li dentro da ul
        // expenseList.append(expenseItem)


        // criando div de infomacao da despesa
        const expenseInfo = document.createElement('div')
        expenseInfo.classList.add('expense-info');

        // criando o nome da dispesa
        const expenseName = document.createElement('strong')
        expenseName.textContent = newExpense.Expense // passando o nome da dispesa através do objeto

        // criando a categoria da despesa
        const expenseCategory = document.createElement('span')
        expenseCategory.textContent = newExpense.Category_name; // passando a categoria da dispesa através do objeto

        // adicionando nome e categoria da despesa dentro da div criada dinamicamente
        expenseInfo.append(expenseName, expenseCategory)


        // criando o valor da despesa
        const expenseAmount = document.createElement('span')
        expenseAmount.classList.add('expense-amount')
        expenseAmount.innerHTML = 
        `
            <small>R$</small>${newExpense.Amount.toUpperCase().replace('R$', '')}

        `
        // criando o icone de remover
        const removeIcon = document.createElement('img')
        removeIcon.classList.add('remove-icon')
        removeIcon.setAttribute('src', 'img/remove.svg')
        removeIcon.setAttribute('alt', 'remover')

        // adicionando, por fim, o item dentro da li e da ul
        expenseItem.append(expenseInfo, expenseAmount, removeIcon);

        expenseList.append(expenseItem)


    } catch (error) {
        alert('Não foi possível atualizar a lista de despesas');
        console.log(error)
    }
}

