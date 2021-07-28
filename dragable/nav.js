const box=document.querySelector('.box')
const nav=document.querySelector('.navigation')

function tog(){
    box.classList.toggle('active')

    nav.classList.toggle('active')
}
box.addEventListener('click',tog)