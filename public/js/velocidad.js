function resolver(distancia,tiempo,resultado){
    let velocidad;
    
    distancia = recuperarFlotante(distancia);
    tiempo = recuperarFlotante(tiempo);

    if(isNaN(distancia) || isNaN(tiempo)){
        alert("🤨?");
        return;
    }else{
        velocidad = distancia / tiempo;
        velocidad = velocidad.toFixed(2);
        cambiarTexto(resultado,"La velocidad es "+ velocidad +" m/s");
    }

}

function resolver2(distancia,tiempo,resultado){
    let velocidad;
    
    distancia = recuperarFlotante(distancia);
    tiempo = recuperarFlotante(tiempo);

    if(isNaN(distancia) || isNaN(tiempo)){
        alert("🤨?");
        return;
    }else{
        velocidad = distancia / tiempo;
        velocidad = velocidad.toFixed(2);
        cambiarTexto(resultado,"La velocidad es "+ velocidad +" km/h");
    }

}