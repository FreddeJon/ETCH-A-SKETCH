const container = document.querySelector(".container");
const mainContainer = document.createElement("div");
mainContainer.classList.add("canvas-container");
container.appendChild(mainContainer);

const DEFAULT_COLOR = "black";
const DEFAULT_BACKGROUND = "#fefefe";

const size = 50;
let currentColor = DEFAULT_COLOR;
let backgroundColor = DEFAULT_BACKGROUND;

const colorPicker = document.getElementById("colorPicker");
const resetButton = document.getElementById("reset");
const ereaserButton = document.getElementById("eraser");
const paintButton = document.getElementById("paint");

colorPicker.onchange = (e) => setCurrentColor(e.target.value);
paintButton.onclick = () => setCurrentColor(DEFAULT_COLOR);
resetButton.onclick = () => reset();
ereaserButton.onclick = () => setCurrentColor(backgroundColor);

for (let index = 0; index < size; index++) {
  const row = document.createElement("div");
  row.classList.add("row");

  for (let index = 0; index < size; index++) {
    const col = document.createElement("div");
    col.classList.add("cell");
    col.style.backgroundColor = backgroundColor;
    row.appendChild(col);
  }
  mainContainer.appendChild(row);
}

const col = document.querySelectorAll(".cell");
col.forEach((col) =>
  col.addEventListener("mouseover", function (e) {
    e.target.style.background = currentColor;
  })
);

function reset() {
  col.forEach((pixel) => {
    pixel.style.background = backgroundColor;
  });
}

function setCurrentColor(newColor) {
  currentColor = newColor;
}
