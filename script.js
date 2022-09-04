const container = document.querySelector('.container')
const newDiv = document.createElement('div')

newDiv.classList.add('gridSquare')

for (let i = 0; i < 256; i++) {
    container.appendChild(newDiv.cloneNode(true))
}

function gridSquareMouseOver() {
    this.classList.add('gridSquareHover')
}

function gridSquareMouseOut(){
    this.classList.add('gridSquareReset')
    this.classList.remove('gridSquareHover')
}

const gridSquare = document.querySelectorAll('.gridSquare')
gridSquare.forEach(square => square.addEventListener('mouseover', gridSquareMouseOver))

gridSquare.forEach(square => square.addEventListener('mouseout', gridSquareMouseOut))



