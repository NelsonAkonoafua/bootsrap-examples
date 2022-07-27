function buton(){
const mobileBtn = document.getElementById('mobile-menu')
    nav= document.querySelector('nav');
    mobileBtnExit = document.getElement('mobile-exit');
mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn')  
    }) 
mobileBtnExit .addEventListener('click', () => {
        nav.classList.remove('menu-btn')  
        })    
}