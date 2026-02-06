const button =document.querySelector("button");
let h1 = document.querySelector("h1");
const quotes =[
    "Start now. Perfect comes later.",
    "Small steps every day win big.",
    "Learn first. Earn later.",
    "Discipline beats motivation.",
    "Consistency creates confidence.",
    "Your future needs your effort today.",
    "Dream big. Act bigger.",
    "Skills pay the bills.",
    "Progress, not perfection.",
    "Hard work compounds.",
    "Build yourself before building wealth.",
    "Knowledge turns into power through action.",
    "Stay patient. Stay hungry."
]

function randomQuote(){
    let randomNums =Math.floor(Math.random() * quotes.length);
    h1.textContent = quotes[randomNums];
}
// randomQuote()
button.addEventListener("click", randomQuote)