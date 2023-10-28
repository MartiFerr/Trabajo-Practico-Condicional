let nombre = prompt("¿Como es tu nombre?")
function Bienvenida(nombre) {
    if ((nombre == "Nahuel") || (nombre == "Santino")) {
        alert("Bienvenido,¿Como te va en futbol?")
        return nombre
    } else {
        alert("Bienvenido/a  " + nombre)
        return nombre
    }
}
Bienvenida(nombre)

let edadUsuario = Number(prompt('¿Como es tu edad?'))  
function edadmayor(edadUsuario){
       {if ( edadUsuario >=18)
       {alert ('Tu edad es mayor o igual a dieciocho')
        }else{
         alert   ('Tu edad es menos de dieciocho')
        } }
        return 0
}
edadmayor (edadUsuario)



let edad = prompt ('¿Cual es tu edad?')

if (edad <= 11){
    alert ('Sos un niño')
}
else if (edad <=18){
    alert ('Sos un adolecente')
}
else if (edad <=26){
    alert ('Sos un Joven Adulto')
}
else if (edad <=59){
    alert ('Sos un adulto')
}
else if (edad <=60){
    alert ('Sos un anciano')
}


let dias = prompt ("¿Que dia de la semana es hoy?")
function Semana(dias) {
    if ((dias == "Lunes") || (dias == "Martes") ||(dias == "Miercoles") || (dias == "Jueves") || (dias == "Viernes")) {
        alert("Es un dia semanal")
        return dias
    } else {
        alert("Es Finde Semana")
        return dias
    }
}
Semana(dias)



let acceso = prompt ("Ingrese una Contraseña")
function Contraseña(acceso) {
    if (acceso = "secreto") {
        alert("acceso concedido")
        return acceso
    } else {
        alert("acceso denegado")
        return acceso
    }
}
Contraseña(acceso)



let numero = Number(prompt('Coloca un numero')) 
if(( numero % 5) == 0){
    
    alert(numero + ' es multiplo de 5');
    }else{

    alert(numero + ' no es multiplo de 5');
}







let ClasificacionNum = prompt ('¿Cual es tu nota del 0 al 100?')
function Condicion  (ClasificacionNum){
if (ClasificacionNum<= 100){
    alert ('Tu calificacion es MS (Muy Satifactorio)')
}
else if (ClasificacionNum <=79){
    alert ('Tu calificacion es S (Satifactorio)')
}
else if (edad <60){
    alert ('Tu calificacion es EP (En Proceso)')
}
}
Condicion (ClasificacionNum)





let diadesemana = prompt ('¿Que dia de la semana es?')
function recibir (diadesemana){
if (diadesemana = 1 ){
    alert ('1 es Lunes')
}
else if (diadesemana = 2 ){
    alert ('2 es Martes')
}
else if (diadesemana = 3 ){
    alert ('3 es Miercoles')
}
else if (diadesemana = 4){
    alert ('4 es Jueves')
}
else if (diadesemana = 5){
    alert ('5 es Viernes')
}
else if (diadesemana = 6){
    alert ('6 es Sabado')
}
else if (diadesemana = 7){
    alert ('7 es Domingo')
}
}
recibir (diadesemana)




let añobisiesto = Number(prompt('Coloca un año')) 
if(( añobisiesto % 4) == 0){
    
    alert(añobisiesto + ' es año bisiesto');
    }else{

    alert(añobisiesto+ ' no es año bisiesto');
}


let primeracadena = prompt ('Coloca una palabra')
let segundacadena = prompt ('Coloca una palabra')
function texto (primeracadena){
    if(( primeracadena) == segundacadena){
    
        alert(añobisiesto + ' son iguales');
        }else{
    
        alert(añobisiesto+ ' no son iguales');
    }
}

function calcular (edadadactual) {
    let edadadactual = 2023 + prompt ("Ingrese su año de nacimiento")
    return edadadactual
}




let precioyedad= prompt ("Diagme su edad y El precio de cualquier producto")
function parametros (precioyedad) {
    if (precioyedad = "100") {
        alert("Precio con descuento ")
        return acceso
    } else {
        alert("precio sin descuento")
        return acceso
    }
}
parametros(precioyedad)