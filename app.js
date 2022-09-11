const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const calculateButton = document.querySelector("#calculate");
const output = document.querySelector("#output");

calculateButton.addEventListener("click", submitHandler);
function submitHandler(){
    const ip = Number(initialPrice.value);
    const curr = Number(currentPrice.value);
    const sq = Number(stockQuantity.value);
    checkValue(ip, sq, curr);
}

 function calculateProfitAndLoss(initial, quantity, current){
    if(initial>current){
        const loss = (initial - current)*quantity;
        const lossPercentage = (loss/initial)*100;
        document.getElementById("output").style.color="red";
        showMessage("Oops! your loss is "+loss+ " and loss percentage is "+
        dotTwoLimiter(lossPercentage)+"%");

    }else if(current>initial){
        const profit = (current - initial)*quantity;
        const profitPercentage = (profit/initial)*100;
        document.getElementById("output").style.color="green";
        showMessage("great! your profit is "+profit+" and profit percentage is "
        +dotTwoLimiter(profitPercentage)+"%");
    }
    else{
        document.getElementById("output").style.color="blue";
            showMessage("no profit, no loss");
    }

}
function showMessage(message){
    output.innerText = message;
}
function dotTwoLimiter(y){
    return Number.parseFloat(y).toFixed(2);
}
function checkValue(ip, sq, curr){
    if(ip === 0 && sq===0 && curr===0){
        document.getElementById("output").style.color="red";
        showMessage("nothing is entered");
    }else if(ip === 0 || sq===0 || curr===0){
        document.getElementById("output").style.color="orange";
        showMessage("some fields are still empty");
    }
    else{
        calculateProfitAndLoss(ip, sq, curr);
    }
}