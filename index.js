let date = new Date();
let day = date.getDate(); 

let christmasDay = 25;

let remainingDays = christmasDay - day;

let display = document.getElementById("countdown-display");
display.textContent = remainingDays;