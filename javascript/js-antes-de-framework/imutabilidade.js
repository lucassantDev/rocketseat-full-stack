const  address1 = {
    stree: 'Av. Recife',
    number: 20
}

// isso não é uma cópia, e sim uma referência na memória 
//const address2 = address1;

// agora podem ser considerados objetos diferentes
const address2 = {... address1}
address2.number = 30;

console.log(address1, address2)


// criando cópia com array
const listaFrutas = ['Banana', 'Uva', 'Maçã']

// ... se refere ao Spread Operator
const listaFrutasCOPY = [...listaFrutas]
listaFrutasCOPY.push('Mamão')

console.log(listaFrutas, listaFrutasCOPY)
