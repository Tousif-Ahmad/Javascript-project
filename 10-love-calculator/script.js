const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const Boy =document.querySelector("#Boy");
    const Girl = document.querySelector("#Girl");

    let l1 = Boy.value.length;
    let l2 = Girl.value.length;


    const result = Math.pow(l1 + l2, 3) % 101;
    
    const h2 = document.querySelector("h2");
    h2.textContent = `Result : ${result}`
    form.reset();
})