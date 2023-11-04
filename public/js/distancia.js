function resolver(velocidad,tiempo,resultado){
    let distancia;
    
    velocidadFloat = recuperarFlotante(velocidad);
    tiempoFloat = recuperarFlotante(tiempo);

    if(isNaN(velocidadFloat) || isNaN(tiempoFloat)){
        alert("🤨?");
        return;
    }else{
        distancia = velocidadFloat * tiempoFloat;

        cambiarTexto(resultado,"La distancia es "+ distancia +" metros")
    }

}

function explicacion(velocidad,tiempo,resultado){
    velocidadFloat = recuperarFlotante(velocidad);
    tiempoFloat = recuperarFlotante(tiempo);
    
    if(isNaN(velocidadFloat) || isNaN(tiempoFloat)){
        alert("🤨?");
        return;
    }else{

        distancia = velocidadFloat * tiempoFloat;

        console.log("primero vemos los datos");
        console.log("velocidad = ",velocidadFloat," tiempo = ", tiempoFloat);
        console.log("Luego realizamos la fórmula que es:");
        console.log("distancia = velocidad x tiempo");
        console.log("Remplazamos valores");
        console.log("distancia = ",velocidadFloat," x ",tiempoFloat);
        console.log("y resolvemos quedando como resultado que: ");
        console.log("distancia = ", distancia, " metros");
    }
}