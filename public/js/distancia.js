function resolver(velocidad,tiempo,resultado){
    let distancia;
    
    velocidadFloat = recuperarFlotante(velocidad);
    tiempoFloat = recuperarFlotante(tiempo);
    $errorContainer = document.getElementById('error')
    if(isNaN(velocidadFloat) || isNaN(tiempoFloat)){
        cambiarTexto(resultado,"");
        $exContainer.style.display="none"
        $errorContainer.style.display="block"
        $errorContainer.innerHTML="🤨?"
        return;
    }else{
        $errorContainer.style.display="none"
        distancia = velocidadFloat * tiempoFloat;

        cambiarTexto(resultado,"La distancia es "+ distancia +" metros")
    }

}

function explicacion(velocidad, tiempo, resultado) {
    velocidadFloat = recuperarFlotante(velocidad);
    tiempoFloat = recuperarFlotante(tiempo);
    $exContainer = document.getElementById(resultado)
    $errorContainer = document.getElementById('error')

    if (isNaN(velocidadFloat) || isNaN(tiempoFloat)) {
        $exContainer.style.display="none"
        $errorContainer.style.display="block"
        $errorContainer.innerHTML="🤨?"
        return;
    } else {
        $errorContainer.style.display="none"

        distancia = velocidadFloat * tiempoFloat;
        
        // Construye la explicación
        var explicacionTexto = "Primero vemos los datos. <br>";
        explicacionTexto += "Velocidad = " + velocidadFloat + ", tiempo = " + tiempoFloat + "<br>";
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
