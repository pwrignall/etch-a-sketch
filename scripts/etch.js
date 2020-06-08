const divContainer = document.querySelector('#grid-container');

for (let i = 0; i < 16 * 16; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    divContainer.appendChild(gridSquare);
}

function changeHoverStatus(e) {
    e.target.classList.add('hovered');
    e.target.removeEventListener('mouseover', changeHoverStatus);
}

const squares = document.querySelectorAll('.grid-square');
squares.forEach((square) => {
    square.addEventListener('mouseover', changeHoverStatus)
})