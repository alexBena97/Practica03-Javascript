
var borrar = false;
function eliminarcaracter(){
   var caja2 = document.f1.txtcaja2.value;
         if (caja2 == "" || caja2 == "0" || caja2.length == 1 ){
            document.getElementById("caja2").value = "0";
         }
         else if(caja2 != ""){
             var res = caja2.substring(0,caja2.length-1);
             document.getElementById("caja2").value = res;
         }
}
function escribirNumero(n){
var caja2 = document.getElementById("caja2").value;
if (borrar) { 
   console.log(borrar);
   document.getElementById("caja2").value="";
   borrar = false;
   document.getElementById("caja2").value = n;
}
else if (caja2 == "0" && n != "."){
   cajao = caja2.replace("0", "");
   document.getElementById("caja2").value= cajao + n;
}
else{
   document.getElementById("caja2").value = caja2 + n;
}
}
function raiz(){
var caja1 = document.getElementById("caja1").value;
var caja2 = document.getElementById("caja2").value;
document.getElementById("caja1").value = "Math.sqrt("+ caja2 + caja1 +")";
document.getElementById("caja2").value = "";
}
function Operaciones(signo){
var caja1 = document.getElementById("caja1").value;
var caja2 = document.getElementById("caja2").value;
var operacion = caja1.substring(caja1.length-1);
calcular()
if (operacion == "+" || operacion == "-" || operacion =="*" || operacion =="/") {
   operacion = operacion.replace(operacion,signo);
   var res = caja1.substring(0,caja1.length-1);
   document.getElementById("caja1").value = res+operacion;
}
if (caja1 == "" && caja2 != ""){
   document.getElementById("caja1") = caja2 + o;
}
else{
   document.getElementById("caja1") = caja1 + caja2 + o;
 }
 borrar = true;
}
function calcular(){
var caja1 = document.f1.txtcaja1.value;
var caja2 = document.f1.txtcaja2.value;
document.f1.txtcaja2.value = eval(caja1 + caja2);
document.f1.txtcaja1.value = "";
borrar = true;
blocdel = true;
}
function masmenos(){
var caja2 = document.f1.txtcaja2.value;
if (caja2 > 0){
   document.f1.txtcaja2.value = "(-" + caja2 + ")";
}
else{
   cajaplus = caja2.replace(/[-|(|)]/g, "");
   document.f1.txtcaja2.value = cajaplus;
}
}