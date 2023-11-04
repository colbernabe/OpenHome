function resolver(distancia,velocidad,resultado){
    let tiempo;
    
    distancia = recuperarFlotante(distancia);
    velocidad = recuperarFlotante(velocidad);

    if(isNaN(distancia) || isNaN(velocidad)){
        alert("🤨?");
        return;
    }else{
        tiempo = distancia / velocidad;
        tiempo = tiempo.toFixed(2);
        cambiarTexto(resultado,"El tiempo es "+ tiempo +" segundos")
    }

}

function resolver2(distancia,velocidad,resultado){
    let tiempo;
    
    distancia = recuperarFlotante(distancia);
    velocidad = recuperarFlotante(velocidad);

    if(isNaN(distancia) || isNaN(velocidad)){
        alert("🤨?");
        return;
    }else{
        tiempo = distancia / velocidad;
        tiempo = tiempo.toFixed(2);
        cambiarTexto(resultado,"El tiempo es "+ tiempo +" horas")
    }

}