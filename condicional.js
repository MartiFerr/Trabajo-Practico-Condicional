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
function edadmayor(edadUsuario) {
    {
        if (edadUsuario >= 18) {
            alert('Sos mayor o igual a dieciocho')
        } else {
            alert('Sos menor de dieciocho')
        }
    }
    return 0
}
edadmayor(edadUsuario)



let edad = prompt('¿Cual es tu edad?')

if (edad <= 11) {
    alert('Sos un niño')
}
else if (edad <= 18) {
    alert('Sos un adolecente')
}
else if (edad <= 26) {
    alert('Sos un Joven Adulto')
}
else if (edad <= 59) {
    alert('Sos un adulto')
}
else if (edad <= 60) {
    alert('Sos un anciano')
}


let Semana = prompt("¿Que dia de la semana es hoy?")
function Semana(dias) {
    if ((dias == "Lunes") || (dias == "Martes") || (dias == "Miercoles") || (dias == "Jueves") || (dias == "Viernes") || (dias == "Sabado"))
    {
        alert("Es un dia laborable")
        return dias
    } else {
        alert("Es un dia no laborable")
        return dias
    }
}
Semana(dias)



let acceso = prompt("Ingrese una Contraseña")
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
if ((numero % 5) == 0) {

    alert(numero + ' es multiplo de 5');
} else {

    alert(numero + ' no es multiplo de 5');
}

function CalculoDescuento(edad, precio) 
    {
        if (edad > 65){
            return ((precio * 90) % 100)
        } else {
        return precio
    }
}


let ClasificacionNum = prompt('¿Cual es tu nota del 0 al 100?')
function Condicion(ClasificacionNum) {
    if (ClasificacionNum < 60) {
       return 'Tu calificacion es EP (En Proceso)'
    }
    else if (ClasificacionNum < 80) {
        return 'Tu calificacion es S (Satifactorio)'
    }
    else if (edad < 60) {
        return 'Tu calificacion es MS (Muy Satifactorio)'
}}
Condicion(ClasificacionNum)





let diadesemana = prompt('¿Que dia de la semana es?')
function recibir(diadesemana) {
    if (diadesemana == 1) {
        alert('1 es Lunes')
    }
    else if (diadesemana == 2) {
      return  alert('2 es Martes')
    }
    else if (diadesemana == 3) {
       return alert('3 es Miercoles')
    }
    else if (diadesemana == 4) {
     return   alert('4 es Jueves')
    }
    else if (diadesemana == 5) {
     return   alert('5 es Viernes')
    }
    else if (diadesemana == 6) {
      return  alert('6 es Sabado')
    }
    else if (diadesemana == 7) {
     return   alert('7 es Domingo')
    }
}
recibir(diadesemana)




let añobisiesto = Number(prompt('Coloca un año'))
if ((añobisiesto % 4) == 0) {

    alert(añobisiesto + ' es año bisiesto');
} else {

    alert(añobisiesto + ' no es año bisiesto');
}


let primeracadena = prompt('Coloca una palabra')
let segundacadena = prompt('Coloca una palabra')
function texto(primeracadena) {
    if (primeracadena == segundacadena) {

        alert(' son iguales');
    } else {

        alert('no son iguales');
    }
}



let añoNacimiento = Number(prompt('Ingresa tu año de nacimiento'))
function calcular(año){
     let edad = 2023 - año
   return edad
}
