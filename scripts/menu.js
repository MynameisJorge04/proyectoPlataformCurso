const button_menu =  document.querySelector("#btn_menu");
const menu =  document.querySelector(".menu_mobile");
const header =  document.querySelector("#header-menu");
const btn_cerrar =  document.querySelector("#btn_cerrar");
 
button_menu.addEventListener("click", function(){
    menu.classList.remove("show_cerrar");
    menu.classList.add("show");
    header.classList.add("show_header"); 
    
});


btn_cerrar.addEventListener("click", function(){
    menu.classList.add("show_cerrar");
    header.classList.remove("show_header");
    
});

