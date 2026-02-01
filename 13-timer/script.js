let result = document.querySelector("#result");
let interval = setInterval(() => {
  const currentTime = Date.now();
  let cricketTime = new Date(2026, 1, 7).getTime();
  let timer = cricketTime - currentTime;

  if (timer <= 0){
    result.textContent = "Match Started";
    clearInterval(interval)
    return;
    
  }

  const day = Math.floor(timer / (1000 * 60 * 60 * 24));
  timer %= 1000 * 60 * 60 * 24;

  const hour = Math.floor(timer / (1000 * 60 * 60));
  timer %= 1000 * 60 * 60;

  const minutes = Math.floor(timer / (1000 * 60));
  timer %= 1000 * 60;

  const seconds = Math.floor(timer / 1000);
  timer %= 1000;

  result.textContent = `${day} Days ${hour} Hour ${minutes} Minutes ${seconds} Seconds`;
}, 1000);
