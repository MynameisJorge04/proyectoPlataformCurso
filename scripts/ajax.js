var btnCargar = document.getElementById('registro');

function cargarContenidoAjax(){
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'texto.txt', true);
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState);
        if(xhr.readyState == 4 && xhr.status == 200){
            var contenido = document.getElementById('contenido');
            contenido.innerHTML = xhr.responseText;
        }
    }

    xhr.send();

}

btnCargar.addEventListener('click', cargarContenidoAjax);