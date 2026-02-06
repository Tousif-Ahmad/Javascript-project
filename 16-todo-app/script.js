const form = document.querySelector("form");
let input = document.querySelector("input");
console.log(input);
const allTask = document.querySelector("#allTask");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let text = input.value.trim();

    if (text === "") return;

    const parent = document.createElement("div");
    parent.style.marginTop = "20px";

    const task = document.createElement("span");
    task.textContent = text;
    task.style.marginRight = "50px"

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.width = "50px";

    const DoneBtn = document.createElement("button");
    DoneBtn.textContent = "Done";
    DoneBtn.style.width = "50px"
    DoneBtn.style.marginRight = "20px"

    parent.append(task, DoneBtn, deleteBtn);

    allTask.append(parent)


    deleteBtn.addEventListener("click", (()=>{
        parent.remove();
    }))

    DoneBtn.addEventListener("click", (()=>{
        task.style.textDecoration = "line-through"
        task.style.color = "grey"
    }))

    form.reset();

})