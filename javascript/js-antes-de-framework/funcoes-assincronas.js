//setTimeOut() -> executa a função após um determinado intervalo de tempo

setTimeout(() => {
    console.log("Primeira mensagem!")
}, 1000) // o tempo é definido em milisegundos 1000 = 1s


//setInterval() -> executa a função em sequencia até definir o ponto para para

let count = 10
const interval =setInterval(() => {
    console.log(count)
    count-- // decrementando 

    if(count == 0){
        console.log('Fim da contagem');
        clearInterval(interval); // clearInterval para a contagem
    }
}, 1000)