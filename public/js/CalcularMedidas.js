function calcularCelsius(Celsius,resultado,resultado2){
    let floatC;
    let GradosFahrenheit;
    let GradosKelvin;


    floatC = recuperarFlotante(Celsius);

    if(isNaN(floatC)){
        alert("🤨?");
    }else{
        GradosFahrenheit = (floatC * 9/5)+32;
        GradosFix = GradosFahrenheit.toFixed(3)
        cambiarTexto(resultado,"los grados celsius "+floatC+"°"+" en Fahrenheit es: "+GradosFix+"°");
        GradosKelvin = floatC + 273.15;
        kelvinFix = GradosKelvin.toFixed(3)
        cambiarTexto(resultado2,"los grados celsius "+floatC+"°"+"en kelvin es : "+kelvinFix);
    }
}


function calcularFahrenheit(Fahrenheit,resultado,resultado2){
    let floatF;
    let GradosCelsius;
    let GradosKelvin;

    floatF = recuperarFlotante(Fahrenheit);
    if(isNaN(floatF)){
        alert("🤨?");

    }else{

        GradosCelsius = (floatF - 32) * 5/9;
        GradosFix = GradosCelsius.toFixed(3);
        cambiarTexto(resultado,"los grados Fahrenheit "+floatF+"°"+" en celsius es: "+GradosFix+"°");
    
    
        GradosKelvin =(floatF - 32) * 5/9 + 273.15;
        kelvinFix = GradosKelvin.toFixed(3);
        cambiarTexto(resultado2,"los grados Fahrenheit "+floatF+"°"+"en kelvin es: "+kelvinFix);
        
    }
  
  

}


function calcularKelvin(Kelvin,resultado,resultado2){
    let floatK;
    let GradosCelsius;  
    let GradosFahrenheit;

    floatK = recuperarFlotante(Kelvin);

    if(isNaN(floatK)){
        alert("🤨?");
    }else{
        GradosCelsius = floatK - 273.15;
        GradosFix = GradosCelsius.toFixed(3);
        cambiarTexto(resultado,"kelin "+floatK+" en celsius es: "+GradosFix+"°");
    
        GradosFahrenheit = ( floatK - 273.15) * 9/5 + 32;
        GradosFF = GradosFahrenheit.toFixed(3);
        cambiarTexto(resultado2,"kelvin "+floatK+" en Fahrenheit es: "+GradosFF+"°");
    }



} 
