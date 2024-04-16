//elements from the DOM
const board = document.querySelector('.board');
const message = document.getElementById('message');

//create the grid
function createGrid(size) {
    // Clear the board
    board.innerHTML = '';
    
    //set the grid columns and rows
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
    const color = e.ctrlKey ? 'white' : getColor();
    e.target.style.backgroundColor = color;
}

//get color based on button click
function getColor() {
    const draw = document.getElementById('draw').innerText;
    if (draw === 'Black') {
        return 'black';
    } else if (draw === 'Random') {
        return getRandomColor();
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

//color based on button click
function setColor(color) {
    document.getElementById('draw').innerText = color.charAt(0).toUpperCase() + color.slice(1);
}

//reset the board
function resetBoard() {
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















