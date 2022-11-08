//reloj

const cero = n => {
    return ('0' + n).slice(-2);
}

const inter = setInterval(() => {

    const now = new Date();
    const dateTime = cero((now.getMonth() + 1)) + ' / ' + cero(now.getUTCDate()) + ' / ' + now.getFullYear() + ' ' + cero(now.getHours()) + ':' + cero(now.getMinutes()) + ':' + cero(now.getSeconds());

    document.getElementById('fechahrs').innerHTML = dateTime;
}, 1000);

//contador regresivo

var countDownDate = new Date("Nov 30, 2022 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var intervalo = countDownDate - now;

  var dias = Math.floor(intervalo / (1000 * 60 * 60 * 24));
  var hrs = Math.floor((intervalo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.floor((intervalo % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((intervalo % (1000 * 60)) / 1000);

  document.getElementById("fecha").innerHTML = dias + " días " + hrs + " horas "
  + min + " minutos " + sec + " segundos ";

  if (intervalo < 0) {
    clearInterval(x);
    document.getElementById("fecha").innerHTML = "TIEMPO AGOTADO";
  }
}, 1000);
