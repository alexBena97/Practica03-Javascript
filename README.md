# Practica03-Javascript 
1.	Creamos la pagina html de la calculadora y llamamos a los metodos de javascript con la etiqueta script.Para poder llamar a los metodos de javascript utilizamos onclick en cada uno de los inputs de la pagina html
 
 


 
1.2.	Creamos la función para que podamos escribir los números en la calculadora, donde hacemos las validaciones correctas para poder escribir un numero desde cero y cuando no.
 







1.3.	Creamos una función para eliminar los caracteres en la calculadora donde cogemos el ultimo carácter de la caja de la calculadora utilizando la palabra reservada length

 

1.4.	Creamos otro método para hacer las operaciones en la calculadora donde obtenemos de parámetro el símbolo de la operación y comprobamos si es un símbolo correcto  y procedemos a juntarlo con los demás caracteres.
 








1.5.	Creamos la función calcular donde obtenemos los valores de las dos cajas que hemos implementado, donde utilizamos eval para poder concatenar las dos cajas  y que nos realice las operaciones.

 


1.6.	Creamos la función raíz, donde obtenemos los valores de las 2 cajas de nuevo. Utilizamos el método sqrt de la clase Math para poder hacer la raíz cuadrada.

 




1.7.	Creamos por último el método más menos donde obtenemos el valor de la caja 2 y le cambiamos con un menos o un más  haciendo las validaciones necesarias donde utilizamos indexOf para buscar si hay un más en el número , y un Split para poder quitar  de una manera el menos del numero 

 


1.8.	Creamos el ultimo método que se llama unMedio donde  obtenemos los valores de las cajas de la calculadora y a la caja 1 ponemos el valor de la caja dos pero pasada a fracción.
 
2.	Procedemos a crear la validacion de usuario , donde creamos la pagina html crear_usuario.html, donde en cada input utilizamos onblur y onkeyup para poder validar cada campo llamando con estas acciones a los métodos. 
  
    



2.2.	Creamos la funcion validar campos donde verificamos si todos los campos estan vacios nos muestre un mensaje. Donde procedemos primeramente a obtener cada unos de los inputs y verificar si están vacíos.



  

2.3.	Creamos la function validar cedula donde procedemos a verificar si tiene el máximo de 10 caracteres , si esto se cumple procede  a verificar si es una cedula correcta mediante el ultimo carácter.  
 
  

2.4.	Creamos la función validar letras donde mediante el código ascii de cada una de las letras que vamos ingresando comprobamos que no sea un numero el que ingresemos , donde si lo ingresamos no lo borra de manera automática. Despues hacemos la validación de que se pueda ingresar solo dos nombres y dos apellidos, en lo cual comprobamos que se encuentre solo un espacio en blanco, por lo que hemos utilizado nuevamente al código asccii de nuevo.  


  





2.5.	Creamos otro metodo que  lo hemos llamado validarCorreo donde comprobamos que el correo termine en @est.ups.edu.ec o @ups.edu.ec, en el cual hemos utilizado la palabra reservada substring y length para poder obtener los ultimos caracteres del correo y verficar si el correo se encuentra con estas extensiones. Tambien  hemos utilizado la palabra reservada split que nos ayudara a verificar el numero de caracteres antes del arroba.

  

2.6.	Creamos la función validar números que nos permitirá verificar que solo haya números en el input del teléfono donde utilizamos de nuevo el código ascii de los números para poder saber si a la hora de ingresar los caracteres ingresamos solo números. 
  
  
2.7.	Creamos la función valFecha donde verificaremos que se ingrese la fecha de manera correcta, es decir, del mismo formato de la base de datos. Para poder hacer las validaciones, debemos comprobar que el número de caracteres ingresados sea mayor a 10. Despues validamos que los días sean correctos de cada mes. 
 

  
 
3.	Creamos la pagina html de la galeria de imagenes , donde utilizamos tres botones uno para iniciar. Despues creamos otro boton  que sera el adelante que nos permitira pasar las fotos y para finalizar creamos  un boton que lo hemos llamado anterior, este nos permitira atrasar las fotos de la galeria. 
  

3.2.	Creamos la function Iniciar donde creamos dos arrays para poder hacer las comparaciones y un contador. Después utilizamos dos for anidados para comprobar que los números aleatorios no se hayan repetido. Despues utilizamos uno de los array para dar el nombre de la imagen completa y asi poder acceder a las imágenes de la carpeta images de manera aleatoria.  

   
3.3.	Despues creamos la function Siguiente donde comprobramos con el  contador global que hemos creado si es menor a 5, si es asi nos devolverá la siguiente imagen del array creado con los nombres de las imágenes. Y finalmente si el contador es igual o mayor a 5 nos desabilita el botón siguiente.  

  

3.4.	Creamos la function Anterior donde utilizamos el contador global que hemos creado  
comprobamos que estemos en el rango de 0 a 4 para poder obtener las imágenes del array con los nombres de las imágenes. Si en caso el contador llegara a menos uno el botón se desabilitara y el contador se sumara mas uno para que empieze desde 0 de nuevo. 
 
 

