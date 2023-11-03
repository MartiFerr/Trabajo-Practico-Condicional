 //Buscar elemento H1 y guardar variable
 let titulo = document.querySelector (h1)
 // Modificar texto del elemento H1
 titulo.innerText = 'Hola'
 let imagen = document.querySelector ('.Imagen')
 imagen.src = 'imagenes/pizza_casera_31391_orig.jpg'
 let verficar = false;
 
 
 boton.onclick = function() {
     if (verficar == false){
     titulo.innerText = 'Hola'
     imagen.src = 'imagenes/pizza_casera_31391_orig.jpg'
      verificar = true
    }else{
     titulo.innerText = 'DOM'
     imagen.src = 'imagenes/pizza_casera_31391_orig.jpg'
    }
     
 }

