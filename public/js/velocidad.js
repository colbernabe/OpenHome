function resolver(distancia,tiempo){
    let velocidad;
    
    distanciaFloat = recuperarFlotante(distancia);
    tiempoFloat = recuperarFlotante(tiempo);
    $resContainer = document.getElementById("res");
    $errorContainer = document.getElementById("error");
    $exContainer = document.getElementById("ex");

    if(isNaN(distanciaFloat) || isNaN(tiempoFloat)){
        $exContainer.style.display="none";
        $resContainer.style.display="none";
        $errorContainer.style.display="block";
        $errorContainer.innerHTML="🤨?"
        return;
    }else{
        velocidad = distanciaFloat / tiempoFloat;
        velocidad = velocidad.toFixed(2);
        $resContainer.innerHTML = "La velocidad es "+ velocidad +" m/s";
    }

}
function explicacion(distancia, tiempo) {
    distanciaFloat = recuperarFlotante(distancia);
    tiempoFloat = recuperarFlotante(tiempo);
    $resContainer = document.getElementById("res");
    $errorContainer = document.getElementById("error");
    $exContainer = document.getElementById("ex");

    if (isNaN(distanciaFloat) || isNaN(tiempoFloat)) {
        $exContainer.style.display="none";
        $resContainer.style.display="none";
        $errorContainer.style.display="block";
        $errorContainer.innerHTML="🤨?"
        return;
    } else {
        $errorContainer.style.display="none"

        velocidad = distanciaFloat / tiempoFloat;
        velocidad = velocidad.toFixed(2);
        // Construye la explicación
        var explicacionTexto = "Primero vemos los datos. <br>";
        explicacionTexto += "distancia = " + distanciaFloat + ", tiempo = " + tiempoFloat + "<br>";
        explicacionTexto += "Luego realizamos la fórmula que es:<br>";
        explicacionTexto += "Velocidad = distancia ÷ tiempo<br>";
        explicacionTexto += "Remplazamos valores<br>";
        explicacionTexto += "Velocidad = " + distanciaFloat + " ÷ " + tiempoFloat + "<br>";
        explicacionTexto += "Y resolvemos quedando como resultado que:<br>";
        explicacionTexto += "Velocidad = " + velocidad + " m/s";
        
        // Muestra la explicación en el elemento con id "explicacionResultado"
        $exContainer.style.display = "block"
        $exContainer.innerHTML = explicacionTexto;
    }
}
