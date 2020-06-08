const divContainer = document.querySelector('#grid-container');

let squares;
let numSquares;

function removeElements() {
    while (divContainer.childNodes.length > 0) {
        divContainer.removeChild(divContainer.lastChild);
    };
};

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

function changeHoverStatus(e) {
    e.target.classList.add('hovered');
    e.target.removeEventListener('mouseover', changeHoverStatus);
}

function clearGrid() {
    numSquares = prompt('How many squares would you like on each side of the grid?');
    removeElements();
    initialiseGrid();
};

const clearButton = document.querySelector('#btn-clear');
clearButton.addEventListener('click', clearGrid);

initialiseGrid();