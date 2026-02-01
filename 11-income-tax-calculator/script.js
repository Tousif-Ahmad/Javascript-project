const form = document.querySelector("form");
let income = document.querySelector("#income");
form.addEventListener("submit", function(e){
    e.preventDefault();
    let amount = Number(income.value);
    let result = document.querySelector("h2");

    if (!amount || amount === 0){
        result.textContent = `Please enter a valid amount`;
        return;
    }

    let totalTax = 0;
    if (amount <= 1200000){
        totalTax = 0
    }else if (amount <= 1600000){
        totalTax = (amount - 1200000)* 0.15
    }else if (amount <= 2000000){
        totalTax = (amount - 1600000)*0.20 + 60000;
    }else if (amount <= 2400000){
        totalTax = (amount - 2000000)* 0.25 + 60000 + 80000;
    }else{
        totalTax = (amount - 2400000)* 0.30 + 60000 + 80000 + 100000;
    }
    
    result.textContent = `Total Tax ${totalTax}`;

    form.reset();
})