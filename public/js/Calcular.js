function resolver(a,b,r){
    a = recuperarFlotante(a);
    b = recuperarFlotante(b);

    c = Math.sqrt(a*a + b*b)
    c = c.toFixed(2);
    cambiarTexto(r,"la hipotenusa es:  "+c);
}


function resolver2(c,b,r){
    c = recuperarFlotante(c);
    b = recuperarFlotante(b);
    
    a = Math.sqrt(c*c - b*b);
    a = c.toFixed(2);
    cambiarTexto(r,"el cateto opuesto es: "+a)
}

function resolver3(c,a,r){
    c = recuperarFlotante(c);
    a = recuperarFlotante(a);

    b = Math.sqrt(c*c - a*a);
    b = c.toFixed(2);
    cambiarTexto(r,"el cateto Adyacente es: "+b)
}