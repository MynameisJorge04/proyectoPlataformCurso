const btnCargar = document.querySelector('#registro');

btnCargar.addEventListener('click', cargarContenidoAjax);

function cargarContenidoAjax(){

    //crear nuestro xmlhttprequest

    var xhr = new XMLHttpRequest();

    //abrir la conexion

    xhr.open('GET', 'texto.txt', true);
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState);
        if(xhr.readyState == 4 && xhr.status == 200){
            var contenido = document.getElementById('contenido--ajax');
            contenido.innerHTML = xhr.responseText;
        }
    }

    xhr.send();

}