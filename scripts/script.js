const container = document.querySelector('.main-container');
const gridContainer = document.querySelector('.grid-container');
let  gridFragment = document.createDocumentFragment();

let squareSize = 16;

function squareNum(num)
{
    return num * num;
}

function createGridOfSquares(squareSize)
{
    let gridSquareSize = squareNum(squareSize);
    let gridSquareCSSSize = `repeat(${squareSize}, 1fr)`;
    gridContainer.style.gridTemplateColumns = gridSquareCSSSize;
    for (let i = 0; i < gridSquareSize; i++)
    {
        let square = document.createElement('div');
        square.innerText = i + 1;
        square.classList.add('square');
        gridFragment.appendChild(square);
    }
    console.log(squareSize)
    gridContainer.appendChild(gridFragment);
}

createGridOfSquares(16);