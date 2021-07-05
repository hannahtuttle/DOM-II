

let box = document.querySelectorAll('.block')
//console.log(box)
let arrBox = Array.from(box)
console.log(arrBox)

arrBox.forEach((n) => {
    n.addEventListener('click', event => {
        //event.target.style.transition = '10s'
        event.target.style.order = '1';
        console.log('click', event)
})})

arrBox.forEach((n) => {
    n.addEventListener('mousedown', event => {
        event.target.style.transition = '10s'
        event.target.style.marginLeft = '900%'
        console.log('mousedown', event)
})})

arrBox.forEach((n) => {
    n.addEventListener('mouseup', event => {
        event.target.style.marginLeft = '10px'
        console.log('mouseup', event)
})})