const container = document.querySelector('.container')
const newDiv = document.createElement('div')
const button = document.querySelector('.button')

newDiv.classList.add('gridSquare')



function gridSquareMouseOver() {
    this.setAttribute('style', `
    transition: 0s;
    background-color: rgb(${Math.floor((Math.random() * 255) + 1)},${Math.floor((Math.random() * 255) + 1)},${Math.floor((Math.random() * 255) + 1)},100)
    `)
}

function gridSquareMouseOut() {
    this.removeAttribute('style')
    this.setAttribute('style', `transition: 0.5s;
    transition-delay: 5s;
    background-color: rgb(0, 0, 0, 0);')`
    )


    // this.classList.add('gridSquareReset')
    // //this.classList.remove('gridSquareHover')
}

function newGrid() {
    document.querySelectorAll('.gridSquare').forEach(e => e.remove())
    let newGridWidth = prompt('How many squares per side of your new grid?')
    let newGridWidthInt = parseInt(newGridWidth)


    if (newGridWidthInt >= 100) {
        let newGridWidthInt = 100;
        let newGridTotalSquares = newGridWidthInt * newGridWidthInt
        for (let i = 0; i < newGridTotalSquares; i++) {
            container.appendChild(newDiv.cloneNode(true))
        }
        container.setAttribute('style',
            `grid-template-columns: repeat(${newGridWidthInt}, 1fr);
            grid-template-rows: repeat(${newGridWidthInt}, 1fr);`)

    } else if (newGridWidthInt <= 1) {
        let newGridWidthInt = 2;
        let newGridTotalSquares = newGridWidthInt * newGridWidthInt
        for (let i = 0; i < newGridTotalSquares; i++) {
            container.appendChild(newDiv.cloneNode(true))
        }
        container.setAttribute('style',
            `grid-template-columns: repeat(${newGridWidthInt}, 1fr);
            grid-template-rows: repeat(${newGridWidthInt}, 1fr);`)

    } else {
        let newGridTotalSquares = newGridWidthInt * newGridWidthInt
        for (let i = 0; i < newGridTotalSquares; i++) {
            container.appendChild(newDiv.cloneNode(true))
        }

        container.setAttribute('style',
            `grid-template-columns: repeat(${newGridWidthInt}, 1fr);
            grid-template-rows: repeat(${newGridWidthInt}, 1fr);`)
    }




    const gridSquare = document.querySelectorAll('.gridSquare')
    gridSquare.forEach(square => square.addEventListener('mouseover', gridSquareMouseOver))

    gridSquare.forEach(square => square.addEventListener('mouseout', gridSquareMouseOut))
}

button.addEventListener('click', newGrid)













