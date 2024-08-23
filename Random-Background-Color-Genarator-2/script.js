// COLOR COPIER
const body = document.querySelector('body');

function copyColor() {
  const hexColor = document.getElementById('hexColor').textContent;
  navigator.clipboard.writeText(hexColor).then(() => {
      document.getElementById('copyStatus').textContent = 'Text copied successfully!';
  }).catch(err => {
      document.getElementById('copyStatus').textContent = 'Failed to copy text.';
      console.error('Error copying text: ', err);
  });
}

// COLOR GENERATOR
function generateColor() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  body.style.backgroundColor = randomColor;
  document.getElementById("hexColor").innerText = randomColor;
  document.getElementById("hexColor").style.textTransform = 'uppercase';
  return randomColor;
}