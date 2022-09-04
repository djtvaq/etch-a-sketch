let container = document.querySelector('.container')
let newDiv = document.createElement('div')

newDiv.classList.add('gridSquare')

for (let i = 0; i < 256; i++) {
    container.appendChild(newDiv.cloneNode(true))
}
