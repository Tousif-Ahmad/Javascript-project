let counterValue = document.querySelector("#counter-value");
const decreaseBtn = document.querySelector("#decrease-btn");
const increaseBtn = document.querySelector("#increase-btn");
const resetBtn = document.querySelector("#reset-btn");

// console.log(counterValue, decreaseBtn, increaseBtn, resetBtn)


function handleIncrement(){
    counterValue.textContent++;
    updateColor()
}

function handleDecrement(){
    if (counterValue.textContent <= 0){
        return;
    }else{
        counterValue.textContent--;
    }
    updateColor()
}

function handleReset(){
    counterValue.textContent = 0;
    updateColor()
}

// function to update colors 
function updateColor(){
    if (counterValue.textContent > 0){
        counterValue.style.color = "#27ae60"
    }else if (counterValue.textContent < 0){
        counterValue.style.color = "#e74c3c"
    }else{
        counterValue.style.color = "#667eea"
    }
}



increaseBtn.addEventListener("click", handleIncrement)
decreaseBtn.addEventListener("click", handleDecrement)
resetBtn.addEventListener("click", handleReset)