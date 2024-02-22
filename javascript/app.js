const Menu = document.querySelector('#menu')
const MenuIcon = document.querySelector('#menu_icon')

MenuIcon.addEventListener('click',()=>{
    Menu.classList.toggle("block")
})