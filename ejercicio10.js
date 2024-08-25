let operacion = prompt("Ingrese la operación matematica que desea realizar");
let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));

var suma = num1 + num2;
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var division = num1 / num2;

if (operacion === "suma") 
    {
    console.log("El resultado de la suma es: " + suma);
    alert("El resultado de la suma es: " + suma);

} else if (operacion === "resta") 
    {
    console.log("El resultado de la resta es: " + resta);
    alert("El resultado de la resta es: " + resta);
    } 
     if (operacion === "multiplicacion") 
    {
    console.log("El resultado de la multiplicación es: " + multiplicacion);
    alert("El resultado de la multiplicación es: " + multiplicacion);
    } 

    else if (operacion === "division")
     {
        console.log("El resultado de la división es: " + division);
        alert("El resultado de la división es: " + division);
    } 
     else 
     {
    console.log("Operación incorrecta.");
    alert("Operación incorrecta.");
     }

