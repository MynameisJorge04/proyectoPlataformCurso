//reloj

const cero = n => {
    return ('0' + n).slice(-2);
}

const inter = setInterval(() => {

    const now = new Date();
    const dateTime = cero(now.getHours()) + ':' + cero(now.getMinutes()) + ':' + cero(now.getSeconds());

    document.getElementById('fechahrs').innerHTML = dateTime;
}, 1000);

//contador regresivo

let countDownDate = new Date("Nov 30, 2022 15:37:25").getTime();

let x = setInterval(function() {

  let now = new Date().getTime();

  let intervalo = countDownDate - now;

  let dias = Math.floor(intervalo / (1000 * 60 * 60 * 24));
  let hrs = Math.floor((intervalo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let min = Math.floor((intervalo % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((intervalo % (1000 * 60)) / 1000);

  if (intervalo < 0) {
    clearInterval(x);
    document.getElementById("fecha").innerHTML = "TIEMPO AGOTADO";
  }
}, 1000);
