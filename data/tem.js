const container = document.querySelector('.container');
const mainContainer = document.createElement('div');
mainContainer.classList.add('canvas-container');

container.appendChild(mainContainer)


const DEFAULT_COLOR = 'white';

const size = 70;
let currentColor = DEFAULT_COLOR;
const backgroundColor = 'black';


const colorPicker = document.getElementById('colorPicker');
const resetButton = document.getElementById('reset');

const pixels = document.querySelectorAll('.cell');
pixels.forEach(pixel => pixel.addEventListener('mouseover', function (e) { e.target.style.background = currentColor }));


colorPicker.onchange = (e) => setCurrentColor(e.target.value);
resetButton.onchange = (e) => reset();


for (let index = 0; index < size; index++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let index = 0; index < size; index++) {
        const col = document.createElement('div');
        col.classList.add('cell');
        const span = document.createElement('span');
        row.appendChild(col);
    };
    mainContainer.appendChild(row);
};

function reset() {
    pixels.forEach((pixel) => {
        pixel.style.background = backgroundColor;
    })
}





function setCurrentColor(newColor) {
    currentColor = newColor;
}

