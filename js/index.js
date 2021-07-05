// Your code goes here
//1
const navBtn = document.querySelectorAll('.nav-link')

navBtn.forEach((n) => {
    n.addEventListener('mouseover', event => {
        event.target.style.color = 'blue';
    })})


//2
navBtn.forEach((n) => {
    n.addEventListener('mouseleave', event => {
        event.target.style.color = 'black';
    })})

navBtn.forEach((n) => {
    n.addEventListener('click', event => {
        event.preventDefault();
    })})



//3
const photo = document.querySelectorAll('.img-content')
photo.forEach((n) => {
    n.addEventListener('dblclick', event => {
        event.target.style.transform = 'scale(1.4)'
    })})
photo.forEach((n) => {
        n.addEventListener('click', event => {
            event.target.style.transform = 'scale(1)'
        })})

//4

const btnParent = document.querySelectorAll('.destination')
btnParent.forEach((n) => {
    n.addEventListener('click', event => {
    event.target.style.backgroundColor = 'yellow';
})})

const buttons = document.querySelectorAll('.btn')
buttons.forEach((n) => {
    n.addEventListener('click', (event) => {
    event.stopPropagation()
    event.target.style.backgroundColor = 'blue';
})})


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
text.forEach((n) => {
    n.addEventListener('mouseover', event => {
    event.target.style.color = 'purple'
})})

//8
text.forEach((n) => {
    n.addEventListener('mouseleave', event => {
    event.target.style.color = 'green';
})})

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


function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('.intro img');
  el.addEventListener('wheel', zoom);

  el.addEventListener('click', event => {
    event.target.style.transform = 'scale(0.9)'
  })