let btnMobile = document.querySelector(".btn-mobile")
let ulLeft = document.querySelector(".ul-left")
let setaNav = document.querySelectorAll(".btn-menu img")
let subMenu = document.querySelector(".submenu")
let btnMenu = document.querySelectorAll(".btn-menu")


btnMobile.addEventListener("click", function(){
   btnMobile.classList.toggle("active")
   ulLeft.classList.toggle("active-menu")
}) 
 function clicar(e){
   e.firstChild.classList.toggle("ativar")
   
}