let elementoSegundos = document.getElementById("tiempoelegido").value; //
let elementotextoAlarma = document.getElementById("textoalarma"); //
let elementoSonidoAlarma = document.getElementById("audioAlarma"); //

function comenzarTiempo() { //Llama funcion interna de java script
    //Set Time out (Es un temporizador)
    setTimeout(tiempocumplido, 1000 + elementoSegundos); //Funcion interna SetTime - espera 5 segundos para ejecutar la funcion tiempo cumplido
}
function tiempocumplido() { //Dispara una alerta
    elementotextoAlarma.textContent = "ENCENDIDO"; //Extrae toda la parametrisacion de ese elemento
    elementotextoAlarma.style.color = "green"; //Cambia el dolor rojo a verde cuando cumpla los segundos o el tiempo
    elementoSonidoAlarma.play();
}