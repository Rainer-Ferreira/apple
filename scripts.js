const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const numberIndicator = document.getElementById('.numbers')
const list = document.querySelector('.list')

let active = 0;
const total = items.length
let timer;


function update(direction) {

    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')


    if (direction > 0) {
        active = active + 1
    }

    else if (direction < 0) {

    }

}



prevButton.addEventListener('click', function () {
    update(-1)
})

nextButton.addEventListener('click', function () {
    update(1)
})
