const colors = ['#f54242', '#f59e42', '#f5e342', '#aaf542', '#42f554', '#42f5bc', '#42bcf5', '#42bcf5', '#8442f5', '#b042f5', '#e942f5', '#f542bf', '#f54275'];

const body = document.querySelector('body');

function generateColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  body.style.backgroundColor = randomColor;
}