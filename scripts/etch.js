const divContainer = document.querySelector('#grid-container');

let squares;

function removeElements() {
    while (divContainer.childNodes.length > 0) {
        divContainer.removeChild(divContainer.lastChild);
    };
};

function initialiseGrid(numSquares = 16) {

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
    removeElements();
    initialiseGrid();
};

const clearButton = document.querySelector('#btn-clear');
clearButton.addEventListener('click', clearGrid);

initialiseGrid();