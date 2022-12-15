/*Vamos a hacer el toggle de la navegacion en la navegacion responsive*/
const btn = document.querySelector(".bx-list")
const navResponsive = document.querySelector(".nav-header-principal")
btn.addEventListener("click",function(){
    console.log("se clickeo")
    if(navResponsive.classList.contains("show")){
        navResponsive.classList.remove("show")
    }else{
        navResponsive.classList.add("show")
    }
})