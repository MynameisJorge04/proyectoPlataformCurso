const button_menu =  document.querySelector("#btn_menu");
const menu =  document.querySelector(".menu_mobile");
const header =  document.querySelector("#header-menu");
const main =  document.querySelector("#main");
const btn_cerrar =  document.querySelector("#btn_cerrar");
const contenedor_ofertas = document.querySelector('#ofertas--contenedor')
 
button_menu.addEventListener("click", function(){
    menu.classList.remove("show_cerrar");
    menu.classList.add("show");
    header.classList.add("show_header"); 
    main.classList.add("show--main"); 
});


btn_cerrar.addEventListener("click", function(){
    menu.classList.add("show_cerrar");
    header.classList.remove("show_header");
    main.classList.remove("show--main"); 
});


const btn_cerrar_oferta =  document.querySelector("#btn_cerrar_oferta");

btn_cerrar_oferta.addEventListener("click", (event) => {
    contenedor_ofertas.classList.add("ocultar");
});


