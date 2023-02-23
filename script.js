let runningTotal = 0;
let buffer = "0";
let previousOperator;

const visor = document.querySelector('.visor');

function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }else {
        handleNumber(value);
        console.log("Teclado númerico foi acionado!");
    }
    visor.innerText = buffer;
}

function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            limparC = "Botão Limpar foi acionado"; 
            buffer = '0';
            runningTotal = 0;
            console.log(limparC);
            break;
        case '=':
            if(previousOperator === null){
                return
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            console.log(`Resultado: ${runningTotal}`);
            runningTotal = 0;
            break;
        case '←':
            if(buffer.length === 1){
                buffer = '0';
            }else{
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '÷':
            divisao = "Divisão foi acionado e esta aguardando entrada do proximo número";
            console.log(divisao);
            handleMath(symbol);
            break;
        case '×':
            multiplicacao = "Multiplicação foi acionado e esta aguardando entrada do proximo número";
            console.log(multiplicacao);
            handleMath(symbol);
            break;
        case '+':
            adicao = "Adição foi acionado e esta aguardando entrada do proximo número";
            console.log(adicao);
            handleMath(symbol);
            break;
        case '−':
            subtracao = "Subtracao foi acionado e esta aguardando entrada do proximo número";
            console.log(subtracao);
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol){
    if(buffer === '0'){
        return;
    }

    const intBuffer = parseInt(buffer);

    if(runningTotal === 0){
        runningTotal = intBuffer;
    }else{
        flushOperation(intBuffer);
    }
    previousOperator = symbol;
    buffer = '0';
}

function flushOperation(intBuffer){
    if(previousOperator === '+'){
        runningTotal += intBuffer;
    }else if(previousOperator === '−'){
        runningTotal -= intBuffer;
    }else if(previousOperator === '×'){
        runningTotal *= intBuffer;
    }else if(previousOperator === '÷'){
        runningTotal /= intBuffer;
    }

}

function handleNumber(numberString){
    if(buffer === "0"){
        buffer = numberString;
    }else{
        buffer += numberString;
    }
}

function init(){
    document.querySelector('.calc-buttons').addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })
}

init();