const Container = document.getElementsByClassName("color-container")[0];

function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  Container.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
