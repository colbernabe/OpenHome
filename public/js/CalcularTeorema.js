function resolver(a,b,r){
    a = recuperarFlotante(a);
    b = recuperarFlotante(b);

    if(isNaN(a) || isNaN(b)){
        alert("🤨?");
    }else{ 
        c = Math.sqrt(a*a + b*b)
        c = c.toFixed(2);
        if(isNaN(c)){
            alert("no tiene soluciones reales");
        }else{
            cambiarTexto(r,"la hipotenusa es:  "+c);
        }
    }

    ex = explicacion(a,b,r);

}


function resolver2(c,b,r){
    c = recuperarFlotante(c);
    b = recuperarFlotante(b);
    
    if(isNaN(c) ||  isNaN(b)){
        alert("🤨?");
    }else{
        a = Math.sqrt(c*c - b*b);
        a = a.toFixed(2);
        if(isNaN(a)){
            alert("no tiene soluciones reales");
        }else{
            cambiarTexto(r,"el cateto opuesto es: "+a);
        }
    }
}

function resolver3(c,a,r){
    c = recuperarFlotante(c);
    a = recuperarFlotante(a);

    if(isNaN(c) || isNaN(a)){
        alert("🤨?");
    }else{
        b = Math.sqrt(c*c - a*a);
        b = b.toFixed(2);
        if(isNaN(b)){
            alert("no tiene soluciones reales");
        }else{
            cambiarTexto(r,"el cateto opuesto es: "+b);
        }
    }
}

function explicacion1(a,b){
    let re = document.getElementById("ex");
    let ex = "La hipotenusa es igual a: <br>";
    ex += "raiz cuadrada del cateto opuesto al cuadrado más el cateto adyacente al cuadrado <br>";
    ex += "1. elevamos al cuadrado el cateto opuesto y al cateto adyacente <br>";
    ex += "2. luego sumamos la respuesta del lo que elevamos (cateto opuesto e adyacente) <br>";
    ex += "3. al resultado de la suma le sacamos la raíz cuadrada y listo <br>";
    re.innerHTML = ex
}