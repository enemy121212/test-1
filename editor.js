const CELL_AMOUNT=64;
current_color = 'yellow'


let container = document.querySelector ('.container')

for(let i=0; i<CELL_AMOUNT;i+=1) {
    let newElement=document.createElement('div')
    newElement.classList.add('cell')
    newElement.addEventListener('click',function(event){
      event.target.style.backgroundColor=current_color  
    })
     container.appendChild(newElement);
}
    const colors = document.querySelectorAll('.color')

    colors.forEach (color =>{
      color.addEventListener('click',function() {
        current_color=this.style.backgroundColor
    })
    })


  function paint(event) {
    let element = event.target
    let isCell = element.classList.contains('cell')

     if (isCell) {
      element.style.backgroundColor = current_color
     }
  }

  container.addEventListener ('mousedown', function() {
    container.addEventListener ('mousemove', paint)
  })

  container.addEventListener ('mouseup', function() {
    container.removeEventListener ('mousemove' , paint)
  })
