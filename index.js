let openBtn =document.querySelector("#menu")
let closeBtn =document.querySelector("#mar")
let links =document.querySelector("#link")
openBtn.addEventListener("click", function(){
    links.style.display = "flex"
    openBtn.style.display = "none"
    closeBtn.style.display = "block"
})
closeBtn.addEventListener("click",function(){
    closeBtn.style.display = "none"
    links.style.display = "none"
    openBtn.style.display = "block"
})
