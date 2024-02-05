// const menu = document.querySelector(".menu")
// const menuLine = document.querySelector("nav ul")
// menu.addEventListener('click',()=>{
//     menuLine.classList.toggle('showmenu')
// })

var toggle = document.getElementById("small-device")
var smallDevice = document.querySelector('.small-device')
var closeBtn = document.getElementById("close-btn")
var smallList = document.querySelector('.small-list')

function showMenu(){
    smallDevice.style.display = "block"
    toggle.style.display = "none"
    closeBtn.style.display = "block"
    smallList.style.display = "block"
}

function closeButton(){
    smallDevice.style.display = "none"
    toggle.style.display = "block"
    closeBtn.style.display = "none"
    smallList.style.display = "none"

}
