//random color
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  //button identification and time initialization
  const startBtn = document.querySelector('[data-start]');
  const stopBtn = document.querySelector('[data-stop]');
  let timerId = null;
  
  //comportament start- color background
  startBtn.addEventListener('click', () => {
    timerId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor(); //atribuire culoare random la interval de 1ms
    }, 1000);
    startBtn.disabled = true; //disable buton start
    stopBtn.disabled = false; //butonul stop ramane/devine enable
  });
  
  //stop background color generation
  stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    stopBtn.disabled = true; //disable buton stop
    startBtn.disabled = false; //butonul stop ramane/devine enable
  });