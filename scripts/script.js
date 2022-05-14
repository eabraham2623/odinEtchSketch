const container = document.querySelector('.main-container');
const gridContainer = document.querySelector('.grid-container');
const rangeSlider = document.querySelector('.rangeSlider');
const firstColor = "rgb(36, 123, 160)";
const secondColor = "rgb(112, 193, 179)";
let  gridFragment = document.createDocumentFragment();

let squareSize = 16;

function addHoverEventListener(hoverObject)
{
    hoverObject.addEventListener('mouseover', function(event) {
        changeColor(hoverObject);
    });
}

function addRangeEventListener(rangeObject)
{
    rangeObject.addEventListener('input', function(event) {
        changeGridOfSquares(rangeObject.value);
    });
}

function changeColor(square)
{
    let currentSquareColor = square.style.backgroundColor;
    console.log(currentSquareColor);

    if (currentSquareColor == firstColor)
    {
        square.style.backgroundColor = secondColor;
    }
    else
    {
        square.style.backgroundColor = firstColor;
    }
}

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
        square.classList.add('square');
        square.style.backgroundColor = firstColor;
        addHoverEventListener(square);

        gridFragment.appendChild(square);
    }
    console.log(squareSize)
    gridContainer.appendChild(gridFragment);
}

function changeGridOfSquares(squareSize)
{
    while(gridContainer.firstChild)
    {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    createGridOfSquares(squareSize);
}

function promptForNewGrid()
{
    
    changeGridOfSquares(newSquareSize);
}

createGridOfSquares(16);
addRangeEventListener(rangeSlider);
