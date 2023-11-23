function resolver(distancia,velocidad){
    let tiempo;

    distanciaFloat = recuperarFlotante(distancia);
    velocidadFloat = recuperarFlotante(velocidad);
    $resContainer = document.getElementById("res");
    $errorContainer = document.getElementById("error");
    $exContainer = document.getElementById("ex");

    if(isNaN(distanciaFloat) || isNaN(velocidadFloat)){
        $exContainer.style.display="none";
        $resContainer.style.display="none";
        $errorContainer.style.display="block";
        $errorContainer.innerHTML="🤨?"
        return;
    }else{
        $resContainer.style.display="block"
        $errorContainer.style.display="none"
        tiempo = distanciaFloat / velocidadFloat;
        tiempo = tiempo.toFixed(2);
        $resContainer.innerHTML  = "El tiempo es "+ tiempo +" segundos"
    }

}

function explicacion(distancia, velocidad) {
    distanciaFloat = recuperarFlotante(distancia);
    velocidadFloat = recuperarFlotante(velocidad);
    $resContainer = document.getElementById("res");
    $errorContainer = document.getElementById("error");
    $exContainer = document.getElementById("ex");

    if (isNaN(distanciaFloat) || isNaN(velocidadFloat)) {
        $exContainer.style.display="none";
        $resContainer.style.display="none";
        $errorContainer.style.display="block";
        $errorContainer.innerHTML="🤨?"
        return;
    } else {
        $errorContainer.style.display="none"

        tiempo = distanciaFloat / velocidadFloat;
        tiempo = tiempo.toFixed(2);
        // Construye la explicación
        var explicacionTexto = "Primero vemos los datos. <br>";
        explicacionTexto += "distancia = " + distanciaFloat + ", velocidad = " + velocidadFloat + "<br>";
        explicacionTexto += "Luego realizamos la fórmula que es:<br>";
        explicacionTexto += "Tiempo = distancia ÷ velocidad<br>";
        explicacionTexto += "Remplazamos valores<br>";
        explicacionTexto += "Tiempo = " + distanciaFloat + " ÷ " + velocidadFloat + "<br>";
        explicacionTexto += "Y resolvemos quedando como resultado que:<br>";
        explicacionTexto += "Tiempo = " + tiempo + " segundos";
        
        // Muestra la explicación en el elemento con id "explicacionResultado"
        $exContainer.style.display = "block"
        $exContainer.innerHTML = explicacionTexto;
    }
}