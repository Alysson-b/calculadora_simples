//array para armazenar o historico de calculos
let history = [];


//funçao para adiconar valor ao display
function appendToDisplay(value){
    const result = document.getElementById('result');
    result.value += value; // adiciona o valor ao campo de exibiçao
}


// funçao para limpar o display
function clearDisplay(){
    document.getElementById('result').value = '';// limpar o campo de exibiçao


}

// funçao para deletar o ultimo caractere do display
function deleteLast(){
    const result =  document.getElementById('result');
    result.value = result.value.slice(0, -1); // remove o ultimo caractere do campo de exibiçao
}

//funçao para calcular o resultado da expressão
function calcularResult(){
    const result = document.getElementById('result')
    const expression = result.value;

    if(isValidExpression(expression)){
        const evaluatedResult = evaluatedExpression(expression)
        addToHistory(expression, evaluatedResult)
        result.value = evaluatedResult
    }else{
        alert('Expressão inválide');
    }
}

function isValidExpression(expression){
    const regex = /^[0-9+\-*/^.()]*$/;
    return regex.test(expression)
}

function evalueteExpression(expression) {
    let formattedExpression = expression.replace(/\^/g,'**');
    return Function(`"use strict"; return(${formattedExpression})`)();
}

function addToHistory(expression, result) {
    history.pushState({expression, result});
    updateHistory();
}

function updateHistory() {
    const history = document.getElementById('historyList');
    historyListy.innerHTML = ''
    history.forEach(entry =>{
        let li = document.createElement('li');
        li.textContent = `${entry.expression} =${entry.result}`;
        historyList.appendChild(li);
        
    });
}


function toggleScientificMode(){
    const sciButtons = document.getElementById('scientific-buttons')
    if(sciButtons.style.display === 'none'){
        sciButtons.style.display = 'grid'
    }else{
        sciButtons.style.display = 'none'
    }
}