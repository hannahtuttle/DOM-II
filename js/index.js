// Your code goes here

const navBtn = document.querySelectorAll('.nav-link')
navBtn[0].addEventListener('mouseover', event => {
    event.target.style.color = 'blue';})
navBtn[1].addEventListener('mouseover', event => {
        event.target.style.color = 'blue';})
navBtn[2].addEventListener('mouseover', event => {
            event.target.style.color = 'blue';})
navBtn[3].addEventListener('mouseover', event => {
                event.target.style.color = 'blue';})


// navBtn.forEach(item => item.addEventListener('mouseover', event => {
//     event.target.style.color = 'blue';
// }))

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

const photo = document.querySelectorAll('.img-content')
console.log(photo)
photo[0].addEventListener('dblclick', event => {
    event.target.style.transform = 'scale(1.4)'
})
photo[1].addEventListener('dblclick', event => {
    event.target.style.transform = 'scale(1.4)'
})



const buttons = document.querySelectorAll('.btn')
buttons[0].addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'blue';
})
buttons[1].addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'blue';
})
buttons[2].addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'blue';
})

// const funBus = document.querySelector('.nav-container')
// funBus.addEventListener('focus', (event) => {
//     event.target.style.background = 'orange'
// })

const funBusPic = document.querySelector('.intro img')
funBusPic.addEventListener('contextmenu', event => {
    event.preventDefault();
})

// const destinationPic = document.querySelector('.content-destination img')
// destinationPic.addEventListener('wheel', event => {
//     event.target.style.display = 'none';
// })

// const display  = document.querySelectorAll('.destination')
// display[0].addEventListener('resize', event => {
//     console.log('window size')
// })

const msDown = document.querySelector('h1')
msDown.addEventListener('mousedown', event => {
    event.target.style.color = 'blue';
})

