function saludo () {
    alert ("HOLA MUNDO ESTO ES JS")
}

function operaciones (){
    var A;
    var B;
    var suma;
    var resta;
    var multiplicacion;
    var division;
    
    
    alert("Este sistema realiza las operaciones básicas ");
    
    A = parseInt(prompt("Por favor ingrese el primer valor"));
    B = parseInt(prompt("Por favor ingrese el segundo valor"))
    
    suma = A + B;
    resta = A - B;
    multiplicacion = A * B;
    division = A / B;
    
    alert("El resultado de la suma es: " +suma +  " \nEl resultado de la resta es: " +resta+ "\nEl resultado de la multiplicacion: " +multiplicacion+ "\nEl resultado de la division es: " +division );
    
     
}
function  mayorNumero(){
   var número1;
   var número2;
   
   número1=parseInt(prompt("Ingrese el número 1: "));
   número2=parseInt(prompt("Ingrese el número 2: "));
   
   if(número1>número2)
   {
       //imprime el número mayor
   alert("El número mayor es:" + número1 + " (número 1)");
   }
   else 
   { 
    alert("El número mayor es:" + número2 + "(número 2)");
   }
  }
function menorNumero() {
    var num1;
    var num2;
    var num3;
    var menor;
    num1 = parseInt(prompt("Ingrese el primer número"));
    num2 = parseInt(prompt("Ingrese el segundo número"));
    num3 = parseInt(prompt("Ingrese el tercer número"));
    if (num1 <= num2 && num1 <= num3) {
        menor = num1;
    } else if (num2 <= num1 && num2<= num3 ){
        menor = num2;
    } else { 
        menor = num3;
    }
    alert ("El número menor es: " + menor);
     
}

function parImpar(){
    var número; 
    número= prompt("Introducir número")
    if (número % 2 == 0) {
         alert("El número" + número + "es par");
    } else { 
          alert("El número" + número + "es impar");
    }
    }
function cuadradoNumero (){
    var A;
    var B;

    A = parseInt(prompt("Ingrese el primer numero: "));

    B = A * A
    alert("El cuadrado del numero es: " + B);

}
function areaTriángulo() {
 var base = parseInt(prompt("Ingresar la base del triángulo"));
 var altura = parseInt(prompt("Ingresar la altura del triángulo"));
  var area;
  area = (base * altura) / 2;
  alert("El area del triángulo es: " + area + "cm");
 
 }
 
function metrosCentimetros (){
    var metro = parseInt(prompt("Imgrese la cantidad de metros a convertir"));
    var resultado = (metro * 100) / 1 ;
    alert (metro + "metros convertidos a centímetros es: "+ resultado + "centímetros");
}

function añoNacio(){

    
}
 
 function capital (){
     var C;
     var A;
     var P;
     var T;
     var GT; 

     C = parseInt(prompt("Cual es el monto a invertir: "));
     A = parseInt(prompt("Ingrese la cantidad de años: "));

     P = 0.023 * 12;
     GT = (P*A)*C;
     T = GT + C;

     alert("Sus ganacias generadas en: "+ A+", años seria de: " +GT+ ", el total seria de: "+P );

     
 } 

function colegio (){
    var cal1;
    var cal2;
    var cal3;
    var cal4;
    var cal5;
    var cal6;
    var cal7;
    var prom;
    
    cal1 = parseInt(prompt("Ingrese primera calificacion: "));
    cal2 = parseInt(prompt("Ingrese segunda calificacion: "));
    cal3 = parseInt(prompt("Ingrese tercera calificacion: "));
    cal4 = parseInt(prompt("Ingrese cuarto calificacion: "));
    cal5 = parseInt(prompt("Ingrese quinta calificacion: "));
    cal6 = parseInt(prompt("Ingrese sexta calificacion: "));
    cal7 = parseInt(prompt("Ingrese septima calificacion: "))

    prom = (cal1 + cal2 + cal3 + cal4 + cal5 + cal6 + cal7) / 7;

    if ( prom >= 6.3){
        alert("su promedio de calificaiones es de: "+prom+ ", Aprobo");
    } else{ 
        alert("su promedio de calificaiones es de: "+prom+ ",  No Aprobo");

}
}
 
 function fruteria(){
     
 }