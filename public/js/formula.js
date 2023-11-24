//i = -1;

function validar (valA,valB,valC){
    aFloat = recuperarFlotante(valA);
    bFloat = recuperarFlotante(valB);
    cFloat = recuperarFlotante(valC);

    $errorContainer = document.getElementById("error");
    $exContainer = document.getElementById("ex");

    dis = (bFloat*bFloat - 4*aFloat*cFloat)

    if (isNaN(aFloat), isNaN(bFloat), isNaN(cFloat)) {
        $exContainer.style.display="none";
        $errorContainer.style.display="block";
        $errorContainer.innerHTML='Ingresa valores numéricos válidos para a, b y c.';
        return;
    }

    if(dis < 0){
        $exContainer.style.display="none";
        $errorContainer.style.display="block";
        $errorContainer.innerHTML='La ecuación cuadrática no tiene soluciones reales';
        return;
    }else{
        $errorContainer.style.display="none"
        resultado1 = (-bFloat + Math.sqrt(dis))/(2*aFloat);
        resultado2 = (-bFloat - Math.sqrt(dis))/(2*aFloat);
    
        resultado1 = resultado1.toFixed(2);
        resultado2 = resultado2.toFixed(2);

        cambiarTexto("resultado1","Resultado 1: "+ resultado1 +",");
        cambiarTexto("resultado2","Resultado 2: "+ resultado2);
    }
}

function explicacion(valA,valB,valC){
    aFloat = recuperarFlotante(valA);
    bFloat = recuperarFlotante(valB);
    cFloat = recuperarFlotante(valC);
    $errorContainer = document.getElementById("error");
    $exContainer = document.getElementById("ex");

    discriminante = (bFloat*bFloat - 4*aFloat*cFloat);

    if (isNaN(aFloat), isNaN(bFloat), isNaN(cFloat)) {
        $exContainer.style.display="none";
        $errorContainer.style.display="block";
        $errorContainer.innerHTML='Ingresa valores numéricos válidos para a, b y c.';
        return;
    }

    if(discriminante < 0){
        $exContainer.style.display="none";
        $errorContainer.style.display="block";
        $errorContainer.innerHTML='La ecuación cuadrática no tiene soluciones reales';
        return;
    }else{
        $errorContainer.style.display="none"
        let raizDiscriminante = Math.sqrt(discriminante);
        let parte1 = -bFloat / (2 * aFloat);
        let parte2 = raizDiscriminante / (2 * aFloat);

        let resultado1 = parte1 + parte2;
        let resultado2 = parte1 - parte2;

        resultado1 = resultado1.toFixed(2);
        resultado2 = resultado2.toFixed(2);
    
        let explicacionTexto = "Primero, veamos los datos: <br>";
        explicacionTexto += "valor a = " + aFloat + ", valor b = " + bFloat + ", valor c = " + cFloat + "<br>";
        explicacionTexto += "Luego aplicamos la fórmula general para resolver la ecuación cuadrática: <br>";
        explicacionTexto += "x = (-b ± √(b^2 - 4ac)) / (2a) <br>";
        explicacionTexto += "Reemplazamos los valores: <br>";
        explicacionTexto += "x = (-(" + bFloat + ") ± √((" + bFloat + ")^2 - 4 * " + aFloat + " * " + cFloat + ")) / (2 * " + aFloat + ") <br>";
        explicacionTexto += "Simplificamos y resolvemos: <br>";
        explicacionTexto += "x = (" + -bFloat + " ± " + raizDiscriminante + ") / " + (2 * aFloat) + "<br>";
        explicacionTexto += "Las soluciones son: <br>";
        explicacionTexto += "x1 ="+resultado1 + ", x2 = " + resultado2;

        $exContainer.style.display = "block"
        $exContainer.innerHTML = explicacionTexto;
    }
}

function limpiar(){
    aFloat = recuperarFlotante(valA);
    bFloat = recuperarFlotante(valB);
    cFloat = recuperarFlotante(valC);
}