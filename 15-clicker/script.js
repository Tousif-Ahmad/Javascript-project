const body = document.querySelector("body");
body.addEventListener("click", function(e){

    const circleElement = document.createElement("div");
    circleElement.classList.add("circle");
    circleElement.textContent = "Sam"
    const colors = ["red", "green", "blue", "pink", "white", "aqua", "teal"];
    circleElement.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]

    circleElement.style.top = `${e.clientY-25}px`;
    circleElement.style.left = `${e.clientX-25}px`;
    body.append(circleElement);

    setTimeout(()=>{
        circleElement.remove();
    }, 5000)
})