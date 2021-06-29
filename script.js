const navbar = document.querySelector('nav')
const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const btnBack = document.querySelector('.btn-back')


window.addEventListener('scroll', ()=>{
if(window.scrollY > 20){
    navbar.classList.add('anim-nav')
}else{
    navbar.classList.remove('anim-nav')
}
})

menuBtn.addEventListener('click', ()=>{
    if(document.querySelector('.menu').style.left='100%'){
        document.querySelector('.menu').style.left='0'
    }else{
        document.querySelector('.menu').style.left='100%'
    }
})



