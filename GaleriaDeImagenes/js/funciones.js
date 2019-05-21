var numeroDeImagenes = new Array(5);
var repetidos = new Array(5);
var cont = 0;

function Iniciar() {
    cont = 0;
    for (var i = 0; i < 5; i++) {
        repetidos[i] = Math.round(Math.random() * (10 - 1) + 1);
        for (var j = 0; j < i; j++) {
            if (repetidos[i] == repetidos[j]) {
                i--;
            }
        }
    }

    for (m = 0; m < numeroDeImagenes.length; m++) {  
        numeroDeImagenes[m] = "images/imagen" + repetidos[m]  + ".jpg"
    } 

    var imagen = numeroDeImagenes[0];
    document.getElementById('imagen').src = imagen;
}

function Siguiente() {
    cont++;
    if (cont < 5) {
        console.log("Siguiente "+cont);
        var imagen2 = numeroDeImagenes[cont];
        document.getElementById('imagen').src = imagen2;
    } else {
        document.getElementById('siguiente').disable = true; 
        cont--;
    }
} 

function Anterior(){ 
    cont--; 
    if(cont > -1){ 
        console.log("Atras "+cont);
        var imagen2 = numeroDeImagenes[cont];
        document.getElementById('imagen').src = imagen2;
    }else{ 
        document.getElementById('anterior').disable = true; 
        cont++;
    }
}