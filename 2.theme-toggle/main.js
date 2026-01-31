let themeToggle = document.querySelector("#theme-toggle");
let body = document.querySelector("body");

let savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark"){
    body.classList.add("dark-theme");
    themeToggle.checked = true;
}

themeToggle.addEventListener("click", function(){
    body.classList.toggle("dark-theme")

    if (body.classList.contains("dark-theme")){
        localStorage.setItem("theme","dark")
    }else{
        localStorage.setItem("theme", "light")
    }
   
})



// let themeToggle = document.querySelector("#theme-toggle");
// let body = document.querySelector("body");

// // Load saved theme when page loads
// function loadTheme() {
//     // Get the saved theme from local storage
//     let savedTheme = localStorage.getItem('theme');
    
//     // If a theme was saved, apply it
//     if (savedTheme === 'dark') {
//         body.classList.add('dark-theme');
//         themeToggle.checked = true;
//     } else {
//         body.classList.remove('dark-theme');
//         themeToggle.checked = false;
//     }
// }

// // Save theme preference
// function saveTheme(theme) {
//     localStorage.setItem('theme', theme);
// }

// // Load theme when page first loads
// loadTheme();

// // Toggle theme when user clicks
// themeToggle.addEventListener("click", function() {
//     body.classList.toggle("dark-theme");
    
//     // Save the current theme to local storage
//     if (body.classList.contains('dark-theme')) {
//         saveTheme('dark');
//     } else {
//         saveTheme('light');
//     }
// });
