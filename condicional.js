let nombrealumno = prompt ('¿Como es tu nombre?')
alert ('Bienvenido/a ' +  nombrealumno )

let edadmayor = Number(prompt('¿Como es su fecha de nacimiento?'))  

function edad(edadUsuario){

    { if ( edadUsuario >=18)
        {
            alert ('Tu edad es mayor o igual a dieciocho')
        }else {
         alert   ('Tu edad es menos de dieciocho')
        }
        
        }
        return 0
}

edad(edadmayor)