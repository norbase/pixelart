

window.onload = function() {
    // store reference to HTML square in a variable named square
    let main = document.querySelector('#main')
    let color = 'black'
    // append squares to container
    let squareDiv;
    for (let i = 0; i < 10; i++) {
      // create an HTML element
      squareDiv = document.createElement('div')
      // add class of 'square' to HTML element
      squareDiv.classList.add('square')
      squareDiv.id = 'square-' + i
      // append HTML element to container
      // creater unique identifier using i variable
      main.appendChild(squareDiv)
  
      squareDiv.addEventListener('pointerover', function(event){
        if (color==='black'){
          color='yellow'
        }else{
          color='black'
        }
        console.log(event.target.id)
        document.querySelector('#' + event.target.id).style.backgroundColor = color
      })
    }
  
  }