const zodiacSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces"
];

// console.log(zodiacSigns[11-1]);
let randomZodiac = Math.floor(Math.random() * zodiacSigns.length);
// based on date 31 
const compliments = [
  "You are amazing",
  "You have great energy",
  "You are very talented",
  "You make things better",
  "You are incredibly smart",
  "You have a kind heart",
  "You are doing great",
  "You inspire people",
  "You are strong and confident",
  "You have a beautiful smile",
  "You are very creative",
  "You are a quick learner",
  "You bring positivity everywhere",
  "You are dependable",
  "You have great ideas",
  "You are unique",
  "You are impressive",
  "You make people feel comfortable",
  "You are thoughtful",
  "You have great communication skills",
  "You are hardworking",
  "You are brave",
  "You have a great sense of humor",
  "You are focused and disciplined",
  "You are trustworthy",
  "You are full of potential",
  "You are doing better than you think",
  "You are calm under pressure",
  "You are a problem solver",
  "You are valuable",
  "You deserve success"
];

let randomCompliments = Math.floor(Math.random() * compliments.length);
// console.log(compliments[randomCompliments]);

// size 20
const victimCardCompliments = [
  "You are stronger than what you went through",
  "Your feelings are valid",
  "You did not deserve what happened",
  "Surviving took courage",
  "You are allowed to heal at your own pace",
  "Your pain does not define you",
  "You showed incredible resilience",
  "You are worthy of kindness and respect",
  "It’s okay to speak your truth",
  "You are not weak for feeling this way",
  "You handled a difficult situation bravely",
  "Your experience matters",
  "You are still standing, and that matters",
  "You are allowed to set boundaries",
  "You are not broken",
  "You deserve peace",
  "Your strength is real, even if it’s quiet",
  "You are doing the best you can",
  "Healing looks different for everyone",
  "You are not alone"
];

let randomVictimCardCompliments = Math.floor(Math.random() * victimCardCompliments.length);

const recommendations = [
  "Take a short walk daily",
  "Drink more water",
  "Get enough sleep",
  "Practice deep breathing",
  "Write your thoughts down",
  "Set small daily goals",
  "Take breaks when needed",
  "Limit screen time before bed",
  "Eat balanced meals",
  "Exercise at least 3 times a week",
  "Learn something new regularly",
  "Stay consistent, not perfect",
  "Spend time with positive people",
  "Practice gratitude daily",
  "Avoid comparing yourself to others",
  "Organize your workspace",
  "Read books that inspire you",
  "Listen more than you speak",
  "Be kind to yourself",
  "Manage your time wisely",
  "Save a portion of your income",
  "Ask for help when needed",
  "Focus on what you can control",
  "Take care of your mental health",
  "Practice self-discipline",
  "Stay curious",
  "Reflect on your progress weekly",
  "Maintain a healthy routine",
  "Trust the process",
  "Never stop improving"
];
let randomRecommendations = Math.floor(Math.random() * recommendations.length);
const predictions = [
  "A new opportunity will appear soon",
  "You will learn something valuable",
  "Positive changes are on the way",
  "Your hard work will pay off",
  "An important decision is coming",
  "You will gain clarity on a situation",
  "A meaningful conversation will happen",
  "Your confidence will grow",
  "You will overcome a challenge",
  "Good news will arrive unexpectedly",
  "You will feel more focused",
  "A fresh start is possible",
  "Your skills will improve",
  "You will make progress toward your goals",
  "Someone will appreciate your efforts",
  "You will find balance in your routine",
  "Your patience will be rewarded",
  "You will discover a new interest",
  "A small win will boost your motivation",
  "You are moving in the right direction"
];
let randomPredictions = Math.floor(Math.random()* predictions.length);


let astroForm = document.querySelector("#astroForm");
astroForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    let name = document.querySelector("#firstName").value;
    let surName = document.querySelector("#surname").value;
    let day = Number(document.querySelector("#day").value);
    let month = Number(document.querySelector("#month").value);
    let year = Number(document.querySelector("#year").value);

    // let text = `Hii ${name} ${surName}, Zodiac Sign is ${zodiacSigns[month-1]},
    // ${compliments[day-1]}, ${victimCardCompliments[year%20]}, ${recommendations[(day * month) % 30]},
    // ${predictions[(name.length * surName.length) % 30]}.
    // `;

    // using math random function 
    let text = `Hii ${name} ${surName}, Zodiac Sign is ${zodiacSigns[randomZodiac]},
    ${compliments[randomCompliments]}, ${victimCardCompliments[randomVictimCardCompliments]}, ${recommendations[randomRecommendations]},
    ${predictions[randomPredictions]}.
    `;
    let result =document.querySelector("#result");
    result.classList.add("show");
    let resultContent = document.querySelector("#resultContent")
    resultContent.textContent = text;


})
