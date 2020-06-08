const divContainer = document.querySelector('#grid-container');

let squares;
let numSquares;

function initialiseGrid() {

    if (numSquares == undefined || numSquares == '') numSquares = 16;

    divContainer.style.gridTemplate = `repeat(${numSquares}, 1fr) / repeat(${numSquares}, 1fr)`;

    for (let i = 0; i < numSquares * numSquares; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        divContainer.appendChild(gridSquare);
    };

    squares = document.querySelectorAll('.grid-square');

    let selectedOption = document.querySelector('input[name = "options"]:checked').value;

    switch (selectedOption) {
        case 'simple':
            squares.forEach((square) => {
                square.addEventListener('mouseover', changeHoverStatus)
            });
            break;
        case 'colours':
            squares.forEach((square) => {
                square.addEventListener('mouseover', changeHoverColour)
            });
            break;
        case 'shades':
            squares.forEach((square) => {
                square.addEventListener('mouseover', changeHoverDarker)
            });
            break;
    }
};

function removeElements() {
    while (divContainer.childNodes.length > 0) {
        divContainer.removeChild(divContainer.lastChild);
    };
};

function clearGrid() {
    removeElements();
    initialiseGrid();
};

function resetGrid() {
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

    e.target.removeEventListener('mouseover', changeHoverColour);
};

function changeHoverDarker(e) {
    e.target.style.backgroundColor = 'rgb(60, 60, 60)';
    if (e.target.style.opacity != '1') {
        e.target.style.opacity -= '-0.1';
    } else {
        e.target.removeEventListener('mouseover', changeHoverDarker);
    };
};

const clearButton = document.querySelector('#btn-clear');
clearButton.addEventListener('click', resetGrid);

const radioGroup = document.querySelector('#behaviour-options');
radioGroup.addEventListener('click', clearGrid);

initialiseGrid();