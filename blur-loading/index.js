const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".loading-text");

let load = 0;

// trigger function
let interval = setInterval(blurText, 30); // every 30ms

function blurText() {
  load++;

  if (load > 99) {
    clearInterval(interval);
  }

  loadingText.innerHTML = `${load}%`;
  bg.style.filter = `blur(${load}px)`;
}
