const container = document.querySelector('.main-container');
const gridContainer = document.querySelector('.grid-container');
let  gridFragment = document.createDocumentFragment();

let squareSize = 16;

function addHoverEventListener(hoverObject)
{
    hoverObject.addEventListener('mouseover', function(event) {
        changeColor(hoverObject);
    });
}

function changeColor(square)
{
    let currentSquareColor = square.style.backgroundColor;
    console.log(currentSquareColor);

    if (currentSquareColor == "red")
    {
        square.style.backgroundColor = "blue";
    }
    else
    {
        square.style.backgroundColor = "red"
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
        square.innerText = i + 1;
        square.classList.add('square');
        square.style.backgroundColor = "red";
        addHoverEventListener(square);

        gridFragment.appendChild(square);
    }
    console.log(squareSize)
    gridContainer.appendChild(gridFragment);
}

createGridOfSquares(16);