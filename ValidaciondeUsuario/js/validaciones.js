function validarCamposObligatorios() {
    var bandera = true
    for (var i = 0; i < document.forms[0].elements.length; i++) {
        var elemento = document.forms[0].elements[i]
        if (elemento.value == '' && elemento.type == 'text') {
            if (elemento.id == 'cedula') {
                document.getElementById('mensajeCedula').innerHTML = 'La cedula esta vacia'
            }
            if (elemento.id == 'nombres') {
                document.getElementById('mensajeNombres').innerHTML = 'Los nombres estan vacios'
            }
            if (elemento.id == 'apellidos') {
                document.getElementById('mensajeApellidos').innerHTML = 'Las apellidos estan vacios'
            }
            if (elemento.id == 'direccion') {
                document.getElementById('mensajeDireccion').innerHTML = 'La direccion esta vacia'
            }
            if (elemento.id == 'FechaDeNacimiento') {
                document.getElementById('mensajeFechaNacimiento').innerHTML = 'La fecha esta vacia'
            }
            if (elemento.id == 'Telefono') {
                document.getElementById('mensajeTelefono').innerHTML = 'el telefono esta vacio'
            }
            if (elemento.id == 'Correo') {
                document.getElementById('mensajeCorreo').innerHTML = 'El correo esta vacio'
            }
            if (elemento.id == 'Contraseña') {
                document.getElementById('mensajeContraseña').innerHTML = 'La contraseña esta vacia'
            }
            elemento.style.border = '1px red solid'
            bandera = false
        }
    }
    if (!bandera) {
    }
    return bandera
}

function ValidacionDeCedula() {
    var cedula = document.getElementById('cedula').value.trim();
    var longitud = cedula.length
    if (longitud < 10 || longitud > 10) {
        for (var i = 0; i < document.forms[0].elements.length; i++) {
            var elemento = document.forms[0].elements[i]
            if (elemento.id == 'cedula') {
                document.getElementById('mensajeCedula').innerHTML = "La cedula debe de tener 10 digitos";
                elemento.style.border = '1px red solid'
            }
        }
    } else {
        var total = 0;
        var longcheck = longitud - 1;

        if (cedula !== '' && longitud === 10) {
            for (i = 0; i < longcheck; i++) {
                if (i % 2 === 0) {
                    var aux = cedula.charAt(i) * 2;
                    if (aux > 9) aux -= 9;
                    total += aux;
                } else {
                    total += parseInt(cedula.charAt(i));
                }
            }

            total = total % 10 ? 10 - total % 10 : 0;

            if (cedula.charAt(longitud - 1) == total) {
                document.getElementById('mensajeCedula').innerHTML = ("Cedula Válida");
            } else {
                for (var i = 0; i < document.forms[0].elements.length; i++) {
                    var elemento = document.forms[0].elements[i]
                    if (elemento.id == 'cedula') {
                        document.getElementById('mensajeCedula').innerHTML = ("Cedula Inválida");
                        elemento.style.border = '1px red solid'
                    }
                }
            }
        }
    }
}
var contadorNombres = 0;
var contadorApellidos = 0;
function validarLetras(n) {
    var letras = document.getElementById(n.id).value
    console.log(letras)

    if (n.id == 'nombres') {
        var ultimo = letras.substr(letras.length - 1).charCodeAt(0)
        if ((ultimo >= 65 && ultimo <= 90) || (ultimo >= 97 && ultimo <= 122) || ultimo == 32) {
            if (ultimo == 32) {
                contadorNombres++
                console.log(contadorNombres)
                if (contadorNombres > 1) {
                    var bien = letras.substring(0, letras.length - 1)
                    document.getElementById('nombres').value = bien   
                }
            }
        } else {
            var bien = letras.substring(0, letras.length - 1)
            document.getElementById('nombres').value = bien
        }
    } else if (n.id == 'apellidos') {
        var ultimo = letras.substr(letras.length - 1).charCodeAt(0)
        if ((ultimo >= 65 && ultimo <= 90) || (ultimo >= 97 && ultimo <= 122) || ultimo == 32) {
            if (ultimo == 32) {
                contadorApellidos++
                console.log(contadorApellidos)
                if (contadorApellidos >1) {
                    var bien = letras.substring(0, letras.length - 1)
                    document.getElementById('apellidos').value = bien
                }
            }
        } else {
            var bien2 = letras.substring(0, letras.length - 1)
            document.getElementById('apellidos').value = bien2
        }
    }
}

function validarNumeros(datos) {
    var letras = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
    var numeros = document.getElementById(datos.id).value
    var cadena
    cadena = numeros.substring(numeros.length - 1)
    if (letras.indexOf(cadena, 0) != -1) {
        var bien = numeros.substring(0, numeros.length - 1);
        document.getElementById(datos.id).value = bien
    }

}

function validarCorreo() {
    var correo = document.getElementById("correo").value;
    var long = correo.length
    var val = correo.substring(correo.length - 15)
    var val2 = correo.substring(correo.length - 11)   
    var arreglo = new Array(2);
    arreglo = correo.split('@'); 
    var val3 = arreglo[0]  
    console.log(val3.length)
    if ((val != "@est.ups.edu.ec" && val2 != "@est.ups.ec") || val3.length<3) {
        for (var i = 0; i < document.forms[0].elements.length; i++) {
            var elemento = document.forms[0].elements[i]
            if (elemento.id == 'correo') {
                document.getElementById('mensajeCorreo').innerHTML = ("Correo Incorrecto");
                elemento.style.border = '1px red solid'
            }
        }
    } else if (long > 70) {
        for (var i = 0; i < document.forms[0].elements.length; i++) {
            var elemento = document.forms[0].elements[i]
            if (elemento.id == 'correo') {
                document.getElementById('mensajeCorreo').innerHTML = ("No puede tener mas de 70 caracteres");
                elemento.style.border = '1px red solid'
            }
        }
    }
}

function valFecha(datos) {
    var fecha = document.getElementById(datos.id).value
    console.log(fecha)
    if (fecha.length == 10) {
        var dia = fecha.substr(0, 2)
        var mes = fecha.substr(3, 2)
        var año = fecha.substr(6, 4)
        var val1 = false;
        var val2 = false;
        var val3 = false;
        var val4 = false;
        añov = parseInt(año)
        diav = parseInt(dia)

        if (mes == '01' || mes == '03' || mes == '05' || mes == '07' || mes == '08' || mes == '10' || mes == '12') {
            diav = parseInt(dia)
            if (diav >= 1 && diav <= 31) {
                val1 = true;
                console.log(val1)
            }
        } else if (mes == '02') {
            if (añov % 4 == 0) {
                if (diav >= 1 && diav <= 29) {
                    val2 = true;
                    console.log(val2)
                }
            } else {
                if (diav >= 1 && diav <= 28) {
                    val3 = true;
                    console.log(val3)
                }
            }
        } else {
            if (diav >= 1 && diav <= 30) {
                val4 = true;
                console.log(val4)
            }
        }
        if (val1 == true || val2 == true || val3 == true || val4 == true) {
            document.getElementById('mensajeFechaNacimiento').innerHTML = ''
        }
        if (val1 == false && val2 == false && val3 == false && val4 == false) {
            document.getElementById('mensajeFechaNacimiento').innerHTML = 'La fecha es incorrecta'
        }
    } else {
        document.getElementById('mensajeFechaNacimiento').innerHTML = 'La fecha es incorrecta'
    }
}

