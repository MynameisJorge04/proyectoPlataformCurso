const compraCarro = () =>{


    
}

const añadirPopup = (event) =>{
    const popup = document.createElement('div');
    popup.classList.add('carrito--productos');

    const texto = document.createElement('p');
    texto.textContent = 'Tu cesta está vacía';
    popup.appendChild(texto);

    const textoVacio = document.createElement('a');
    textoVacio.textContent = 'Seguir comprando';
    popup.appendChild(textoVacio);

    /*A travez de un estilo page sacamos las coordenada adapatables la pagina*/
    const X = event.pageX;
    const Y = event.pageY;

    const valorY = Y + 50;
    const valorX = X - 200;

    popup.style.left = valorX + "px";
    popup.style.top = valorY + "px";

    document.body.appendChild(popup);

    event.currentTarget.removeEventListener('mouseover', añadirPopup);

    
}


const destruirPopup = () =>{
    document.querySelector('.carrito--productos').remove();
    event.currentTarget.addEventListener('mouseover', añadirPopup);
}



/*const buttonCompra = document.shadowRoot.querySelector('card-curso #botonCompra')
console.log(buttonCompra);*/

const botonCarrito = document.querySelector('#boton--compra--desktop');
botonCarrito.addEventListener('mouseover', añadirPopup);
botonCarrito.addEventListener('mouseout', destruirPopup);