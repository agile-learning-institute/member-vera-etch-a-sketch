//elements from the DOM
const board = document.querySelector('.board');
const message = document.getElementById('message');
let currentColor = 'black'; //global variable

//create the grid
function createGrid(size) {
    //clear the board
    board.innerHTML = '';
    
    //set grid columns and rows
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    //create cells and append them to the board
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', changeColor);
        board.appendChild(cell);
    }
}

//change the color of the cell
function changeColor(e) {
    const color = getColor();
    e.target.style.backgroundColor = color;
}

//get color based on button click
function getColor() {
    if (currentColor === 'random') {
        return getRandomColor();
    } else if (currentColor === 'white') {
        return 'white';
    } else {
        return currentColor;
    }
}

//generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setColor(color) {
    if (color === 'white') { //set the color to white
        document.getElementById('draw').innerText = 'Erase';
    } else if (color === 'random') {
        document.getElementById('draw').innerText = 'Random';
    } else {
        document.getElementById('draw').innerText = color.charAt(0).toUpperCase() + color.slice(1);
    }
    currentColor = color === 'random' ? 'random': color;
}



//erase button
function resetBoard() {
    setColor('white'); //set color to white
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
}

//popup button to select grid size
document.getElementById('popup').addEventListener('click', function() {
    const size = prompt('Enter grid size (e.g., 16 for a 16x16 grid):');
    if (size) {
        if (size < 1 || size > 100) {
            message.textContent = 'Grid size must be between 1 and 100.';
            return;
        }
        createGrid(size);
    }
});

//default grid size
createGrid(16);















