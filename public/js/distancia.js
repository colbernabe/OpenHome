function resolver(velocidad,tiempo){
    let distancia;
    
    velocidadFloat = recuperarFlotante(velocidad);
    tiempoFloat = recuperarFlotante(tiempo);
    $resContainer = document.getElementById("res");
    $errorContainer = document.getElementById("error");
    $exContainer = document.getElementById("ex");
    if(isNaN(velocidadFloat) || isNaN(tiempoFloat)){
        $exContainer.style.display="none";
        $resContainer.style.display="none";
        $errorContainer.style.display="block";
        $errorContainer.innerHTML="🤨?";
        return;
    }else{
        $resContainer.style.display="block"
        $errorContainer.style.display="none"
        distancia = velocidadFloat * tiempoFloat;
        distancia = distancia.toFixed(2);
        $resContainer.innerHTML = "La distancia es "+ distancia +" metros"
    }

}

function explicacion(velocidad, tiempo) {
    velocidadFloat = recuperarFlotante(velocidad);
    tiempoFloat = recuperarFlotante(tiempo);
    $resContainer = document.getElementById("res");
    $errorContainer = document.getElementById("error");
    $exContainer = document.getElementById("ex");

    if (isNaN(velocidadFloat) || isNaN(tiempoFloat)) {
        $exContainer.style.display="none";
        $resContainer.style.display="none";
        $errorContainer.style.display="block";
        $errorContainer.innerHTML="🤨?"
        return;
    } else {
        $errorContainer.style.display="none"

        distancia = velocidadFloat * tiempoFloat;
        distancia = distancia.toFixed(2);
        // Construye la explicación
        var explicacionTexto = "Primero vemos los datos. <br>";
        explicacionTexto += "velocidad = " + velocidadFloat + ", tiempo = " + tiempoFloat + "<br>";
        explicacionTexto += "Luego realizamos la fórmula que es:<br>";
        explicacionTexto += "Distancia = velocidad x tiempo<br>";
        explicacionTexto += "Remplazamos valores<br>";
        explicacionTexto += "Distancia = " + velocidadFloat + " x " + tiempoFloat + "<br>";
        explicacionTexto += "Y resolvemos quedando como resultado que:<br>";
        explicacionTexto += "Distancia = " + distancia + " metros";
        
        // Muestra la explicación en el elemento con id "explicacionResultado"
        $exContainer.style.display = "block"
        $exContainer.innerHTML = explicacionTexto;
    }
}
