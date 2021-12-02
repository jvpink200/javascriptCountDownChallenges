let display = document.getElementById("countdown-display");

function renderCountDown() {
  let date = new Date().getDate();

  let christmasDay = 25;

  let remainingDays = christmasDay - date;

  display.textContent = remainingDays;
}

renderCountDown();
