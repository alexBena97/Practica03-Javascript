
var bandera = false;
function escribirNumero(numero) {
   var caja2 = document.getElementById("caja2").value;
   console.log(bandera);
   if (bandera == true) {
      document.getElementById("caja2").value = "";
      bandera = false
      document.getElementById("caja2").value = numero;
   }
   else if (caja2 == "0" && numero != ".") {
      cajao = caja2.replace("0", "");
      document.getElementById("caja2").value = cajao + numero;
   }
   else {
      document.getElementById("caja2").value = caja2 + numero;
   }
}

function eliminarcaracter() {
   var caja2 = document.getElementById("caja2").value;
   if (caja2 == "" || caja2 == "0" || caja2.length == 1) {
      document.getElementById("caja2").value = "0";
   }
   else if (caja2 != "") {
      var res = caja2.substring(0, caja2.length - 1);
      document.getElementById("caja2").value = res;
   }
}

function Operaciones(signo) {
   var caja1 = document.getElementById("caja1").value;
   var caja2 = document.getElementById("caja2").value;
   var operacion = caja1.substring(caja1.length - 1);
   if (signo == '%') {
      if (caja1 != "") {
         por = caja2 / 100;
         console.log(por)
         document.getElementById("caja1").value = caja1 + por;
      }

   }
   if (operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") {
      var res = caja1.substring(0, caja1.length - 1);
      document.getElementById("caja1").value = res + operacion;
   }
   if (caja1 == "" && caja2 != "") {
      document.getElementById("caja1").value = caja2 + signo;
   }
   else {
      document.getElementById("caja1").value = caja1 + caja2 + signo;
   }
   bandera = true;
}

function calcular() {
   var caja1 = document.getElementById("caja1").value;
   var caja2 = document.getElementById("caja2").value;
   document.getElementById("caja2").value = eval(caja1 + caja2);
   document.getElementById("caja1").value = "";
   bandera = true;
}

function raiz() {
   var caja1 = document.getElementById("caja1").value;
   var caja2 = document.getElementById("caja2").value;
   document.getElementById("caja1").value = "Math.sqrt(" + caja2 + caja1 + ")";
   document.getElementById("caja2").value = "";
}

function masmenos() {
   var caja2 = document.getElementById("caja2").value;
   var menos = caja2.indexOf('-');
   if (caja2 != 0) {
      if (menos == 0) {
         var mas = new Array(2);
         mas = caja2.split('-');
         console.log(mas)
         var caja2 = document.getElementById("caja2").value = mas[1];
      } else {
         document.getElementById("caja2").value = "-" + caja2;
      }

   } else {
      document.getElementById("caja2").value = caja2;
   }

}


function unMedio(signo) {
   var caja1 = document.getElementById("caja1").value;
   var caja2 = document.getElementById('caja2').value;

   var medio = signo.value;
   var total = "1/" + caja2 + ""
   document.getElementById("caja1").value = caja1 + total;
   totalmedio = eval(total);
   document.getElementById("caja2").value = totalmedio;

   

   console.log(medio);
   console.log(totalmedio);
}