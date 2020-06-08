const divContainer = document.querySelector('#grid-container');

let squares;
let numSquares;

function initialiseGrid() {

    if (numSquares == undefined) numSquares = 16;

    divContainer.style.gridTemplate = `repeat(${numSquares}, 1fr) / repeat(${numSquares}, 1fr)`;

    for (let i = 0; i < numSquares * numSquares; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        divContainer.appendChild(gridSquare);
    };

    squares = document.querySelectorAll('.grid-square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', changeHoverStatus)
    });
};

function removeElements() {
    while (divContainer.childNodes.length > 0) {
        divContainer.removeChild(divContainer.lastChild);
    };
};

function clearGrid() {
    numSquares = prompt('How many squares would you like on each side of the grid?');
    removeElements();
    initialiseGrid();
};

function changeHoverStatus(e) {
    e.target.classList.add('hovered');
    e.target.removeEventListener('mouseover', changeHoverStatus);
};

function changeHoverColour(e) {

    function generateRandomNumber() {
        return Math.floor(Math.random() * 255);
    };

    let red = generateRandomNumber();
    let green = generateRandomNumber();
    let blue = generateRandomNumber();

    e.target.style.backgroundColor = `rgba(${red}, ${green}, ${blue})`;
};

function changeHoverDarker(e) {
    e.target.style.backgroundColor = 'rgb(60, 60, 60)';
    if (e.target.style.opacity != '1') {
        e.target.style.opacity -= '-0.1'
    };
};

const clearButton = document.querySelector('#btn-clear');
clearButton.addEventListener('click', clearGrid);

initialiseGrid();