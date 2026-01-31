const checkBoxList = document.querySelectorAll(".custom-checkbox");
let goalInput = document.querySelectorAll(".goal-Input");
const errorLabel = document.querySelector(".error-label");
let progressBar = document.querySelector(".progress-bar");
let progressValue = document.querySelector(".progress-value")


const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {}; 
// console.log(progressBar, progressValue);
// console.log(goalInput);
checkBoxList.forEach((checkbox)=>{
    checkbox.addEventListener("click", function(){
        const allGoalsAdded = [...goalInput].every((input)=>{
            return input.value;
           
        })

        if (allGoalsAdded){
            checkbox.parentElement.classList.toggle("completed");
            progressValue.style.width = "33.33%"
        }else{
            errorLabel.style.display = "block";
        }
        
    })
})

goalInput.forEach((input)=>{
    // console.log(allGoals[input.id]);
    input.value = allGoals[input.id].name;
    if(allGoals[input.id.completed]){
        input.parentElement.classList.add("completed");
    }
    input.addEventListener("focus", function(){
        errorLabel.style.display = "none";
    })
    input.addEventListener("input",function(e){
        allGoals[input.id] = {
            name : input.value,
            completed : false,
        }
        localStorage.setItem("allGoals", JSON.stringify(allGoals))
    })
})