window.onload = function() {

    let contadorDias = document.querySelector('.container .container-contadores .dias .contador-num');
    let contadorHoras = document.querySelector('.container .container-contadores .horas .contador-num');
    let contadorMinutos = document.querySelector('.container .container-contadores .minutos .contador-num');
    let contadorSegundos = document.querySelector('.container .container-contadores .segundos .contador-num');
    let fechaSeleccionada = document.querySelector(".container .selector-fecha input");


    function countdown() {
        let fecha_finCountdown = new Date(fechaSeleccionada.value);
        let hoy = new Date();
        let milisegundos = (fecha_finCountdown.getTime() - hoy.getTime());
        let segundos = milisegundos / 1000;

        let diasN = Math.floor(segundos / 86400);
        let horasN = Math.floor((segundos % 86400) / 3600);
        let minutosN = Math.floor(((segundos % 86400) % 3600 ) / 60);
        let segundosN = Math.floor(((segundos % 86400) % 3600) % 60);

        contadorDias.innerHTML = diasN;
        contadorHoras.innerHTML = horasN;
        contadorMinutos.innerHTML = minutosN;
        contadorSegundos.innerHTML = segundosN;
    }

    setInterval(countdown, 1000);

}