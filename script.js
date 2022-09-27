// const orange = document.querySelector('.orange');
// const green = document.querySelector('.green');
// const blue = document.querySelector('.blue');
// const yellow = document.querySelector('.yellow');
// const red = document.querySelector('.red');

function changeColor(){
    document.body.classList = this.classList;
}

const items = document.querySelectorAll('.color')
items.forEach(function(item){
    item.addEventListener('click', changeColor)
})


// orange.addEventListener("click", changeColor);
// green.addEventListener("click", changeColor);
// blue.addEventListener("click", changeColor);
// yellow.addEventListener("click", changeColor);
// red.addEventListener("click", changeColor);
