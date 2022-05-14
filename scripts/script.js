const container = document.querySelector('.main-container');
const gridContainer = document.querySelector('.grid-container');
const rangeSlider = document.querySelector('.rangeSlider');
const firstColor = "rgb(36, 123, 160)";
const secondColor = "rgb(112, 193, 179)";
let  gridFragment = document.createDocumentFragment();

// square color changes when mouse hovers over
function addHoverEventListener(hoverObject)
{
    hoverObject.addEventListener('mouseover', function(event) {
        changeColor(hoverObject);
    });
}

// number of squares in grid changes when range slider adjusted
// range represents slider html element
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
    // set string representation of css style
    // 1fr per square
    let gridSquareCSSSize = `repeat(${squareSize}, 1fr)`;
    gridContainer.style.gridTemplateColumns = gridSquareCSSSize;
    for (let i = 0; i < gridSquareSize; i++)
    {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.backgroundColor = firstColor;
        addHoverEventListener(square);
        // Document fragment used to construct square grid
        gridFragment.appendChild(square);
    }
    // fragment appended to main grid container
    gridContainer.appendChild(gridFragment);
}

// removes existing grid of squares and replaces it with new grid size
function changeGridOfSquares(squareSize)
{
    while(gridContainer.firstChild)
    {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    createGridOfSquares(squareSize);
}

// MAIN
// create default grid of 16x16
createGridOfSquares(16);
addRangeEventListener(rangeSlider);
