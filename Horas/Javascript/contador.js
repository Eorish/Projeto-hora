
const shoras = document.getElementById('shoras');

const sminutos = document.getElementById('sminutos');

const ssegundos = document.getElementById('ssegundos');

var hh = 0;

var mm = 0;

var ss = 0;

var mls = 0; 

var tempo = 1000;

var counter;

var visibilidade = true; 

//Variável que vai manipular o botão Exibir/ocultar

function start() {

    counter = setInterval(() => { timer();}, tempo);

    document.getElementById("iniciar").style.display = "none";

    document.getElementById("Pausar").style.display = "block";

    document.getElementById("Zerar").style.display = "block";

}

function pause() {
    
    clearInterval(counter);

}

function stop() {

    clearInterval(counter);

    hh = 0;

    mm = 0;

    ss = 0;

    document.getElementById('shoras').innerText = "00";

    document.getElementById('sminutos').innerText = "00";

    document.getElementById('ssegundos').innerText = "00";

    document.getElementById("iniciar").style.display = "block";

    document.getElementById("Pausar").style.display = "none";

    document.getElementById("Zerar").style.display = "none";
    
}

function timer() {

    ss++;

    if (ss == 60) {

        ss = 0;

        mm++;
    
        if (mm == 60) {

            mm = 0;

            hh++;

        }

    }

    var horas = (hh < 10 ? '0' + hh : hh);

    document.getElementById('shoras').innerText = horas;

    var minutos =  (mm < 10 ? '0' + mm : mm);

    document.getElementById('sminutos').innerText = minutos;

    var segundos =  (ss < 10 ? '0' + ss : ss);

    document.getElementById('ssegundos').innerText = segundos;

    console.log(segundos);

}