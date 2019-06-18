// Your code goes here

const navBtn = document.querySelectorAll ('#navBtn')
//console.log(navBtn)
navBtn.addEventListener('mouseover', event => {
    event.target.style.color = 'blue'
})


// const navItems = document.querySelectorAll('.nav-link');

// navItems.forEach((gc) => gc.style.color = 'red')


// function wheel(event) {
//     event.preventDefault();
//     scale += event.deltaY * -0.01;
//     el.style.transform = `scale(${scale})`
// }
// let scale = 1;

// const txContent = ducument.querySelectorAll('.text-content')
// el.onwheel = zoom;
