
// selecionando valores do fórmulario
const Form = document.querySelector('form')
const Amount = document.getElementById('amount');
const Expense = document.getElementById('expense');
const Category = document.getElementById('category');

// seleciona os elementos da lista
const expenseList = document.querySelector('ul')
const expenseQuantity = document.querySelector('aside header p span') // navegando entre as tags

const expenseTotal = document.querySelector('aside header h2')


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

// adiciona um item na lista
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

        // adiciona o item na lista(ul)
        expenseList.append(expenseItem)

        // limpa o formulario para adicionar um novo item
        formClear()

        // adicionando os totais
        updateTotals()


    } catch (error) {
        alert('Não foi possível atualizar a lista de despesas');
        console.log(error)
    }
}

// atualiza os totais
function updateTotals(){
    try {
        // recupera todos os itens de li na lista ul
        const items = expenseList.children
        
        // atualizando quantidade de itens na lista
        expenseQuantity.textContent = `${items.length} 
        ${ // interpolação para sair como texto no front
            items.length > 1 ? 'despesas' : 'despesa'

        }`

        // variável para incrementar e calcular o total
        let total = 0

        // percorre cada item da lista (li) dentro da ul
        for(let item = 0; item < items.length; item++){
            // querySelector em um elemento especifico dentro do for
            const itemAmount = items[item].querySelector('.expense-amount') 


            // remover caracteres não numéricos e substitui a vírgula por ponto
            let value = itemAmount.textContent.replace(/[^\d,]/g, '').replace(',', '.')

            // convertento o valor para float
            value = parseFloat(value)

            // verificando se é número válido
            if(isNaN(value)){
                return alert('Naõ foi possível calcular o total. O valor não parece ser um número')
            }

            // incrementando valor total
            total += Number(value) 
        }

        // criando a small para adicionar o R$ formatado
        const symbolBRL = document.createElement('small')
        symbolBRL.textContent = 'R$'

        // formata o valor e remove o R$ que será exibido pela small customizado
        total = formatCurrencyBRL(total).toUpperCase().replace('R$', '')

        // limpa o conteúdo do elemento
        expenseTotal.innerHTML = ''

        // adiciona o simbolo da moeda e o valor formatado
        expenseTotal.append(symbolBRL, total)
        
    } catch (error) {
        alert('Não foi possivel atualiazar os totais')
        console.log(error)
    }
}


// evento que captura clique nos itens da lista
expenseList.addEventListener('click', function(event) {

    if(event.target.classList.contains('remove-icon')){
        // obter a li pai do elemento clicado

        const item = event.target.closest('.expense')

        // remove o item da lista
        item.remove ()
    }

    // atualiza os totais
    updateTotals()

})


// função para limpar os campos depois de informar a despesa
function formClear(){

    // limpa os campos
    Expense.value = '';
    Amount.value = '',
    Category.value = ''

    // foco no input de despesas
    Expense.focus()

}

