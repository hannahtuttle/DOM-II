// Your code goes here
//1
const navBtn = document.querySelectorAll('.nav-link')
navBtn[0].addEventListener('mouseover', event => {
    event.target.style.color = 'blue';})
navBtn[1].addEventListener('mouseover', event => {
        event.target.style.color = 'blue';})
navBtn[2].addEventListener('mouseover', event => {
            event.target.style.color = 'blue';})
navBtn[3].addEventListener('mouseover', event => {
                event.target.style.color = 'blue';})


//2
navBtn[0].addEventListener('mouseleave', event => {
    event.target.style.color = 'black';
})
navBtn[1].addEventListener('mouseleave', event => {
    event.target.style.color = 'black';
})
navBtn[2].addEventListener('mouseleave', event => {
    event.target.style.color = 'black';
})
navBtn[3].addEventListener('mouseleave', event => {
    event.target.style.color = 'black';
})

navBtn[0].addEventListener('click', event => {
    event.preventDefault
})
navBtn[1].addEventListener('click', event => {
    event.preventDefault
})
navBtn[2].addEventListener('click', event => {
    event.preventDefault
})
navBtn[3].addEventListener('click', event => {
    event.preventDefault
})


//3
const photo = document.querySelectorAll('.img-content')
console.log(photo)
photo[0].addEventListener('dblclick', event => {
    event.target.style.transform = 'scale(1.4)'
})
photo[1].addEventListener('dblclick', event => {
    event.target.style.transform = 'scale(1.4)'
})

//4

const btnParent = document.querySelector('.destination')
btnParent.addEventListener('click', event => {
    event.target.style.backgroundColor = 'yellow';
})
const buttons = document.querySelectorAll('.btn')
buttons[0].addEventListener('click', (event) => {
    event.stopPropagation()
    event.target.style.backgroundColor = 'blue';
})
buttons[1].addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'blue';
})
buttons[2].addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'blue';
})

// const welcome = document.querySelector('.intro h2')
// welcome.addEventListener('auxclick', event => {
//     event.target.style.backgroundColor = 'blue'
// })
//5
const funBusPic = document.querySelector('.intro img')
funBusPic.addEventListener('contextmenu', event => {
    event.preventDefault();
})

//6
const msDown = document.querySelector('h1')
msDown.addEventListener('mousedown', event => {
    event.target.style.color = 'blue';
})
//7
const text = document.querySelectorAll('.text-content h2')
text[0].addEventListener('mouseover', event => {
    event.target.style.color = 'purple'
})
text[1].addEventListener('mouseover', event => {
    event.target.style.color = 'purple'
})

//8
text[0].addEventListener('mouseleave', event => {
    event.target.style.color = 'green';
})
text[1].addEventListener('mouseleave', event => {
    event.target.style.color = 'green';
})

//9
const parent = document.querySelector('.content-destination')
parent.addEventListener('dblclick', event => {
    parent.style.backgroundColor ='purple'
})
const bottomPhoto = document.querySelector('.content-destination img')
bottomPhoto.addEventListener('dblclick', event => {
    event.stopPropagation();
    event.target.style.transform = 'scale(1.1)'
})

//10

const intro = document.querySelector('.intro h2')
intro.addEventListener('mouseover', event => {
    event.target.style.color = 'pink'
})
intro.addEventListener('mouseleave', event => {
    event.target.style.color = 'black' 
})


