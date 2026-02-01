let body = document.querySelector("body");

let parent = document.querySelector(".parent");


parent.addEventListener("click",function(e){
    if (e.target.classList.contains("red")){
        body.style.backgroundColor = "red";
    }
    if (e.target.classList.contains("green")){
        body.style.backgroundColor = "green";
    }
    if (e.target.classList.contains("pink")){
        body.style.backgroundColor = "pink";
    }
    if (e.target.classList.contains("yellow")){
        body.style.backgroundColor = "yellow";
    }
    if (e.target.classList.contains("teal")){
        body.style.backgroundColor = "teal";
    }

})