function suma(){
    let n1 =parseFloat(document.getElementById(`nro1`).value)
    let n2 =parseFloat(document.getElementById(`nro2`).value)
    let suma = n1 +  n2
    resultado =  document.getElementById(`resultado`).textContent = suma



}
function resta(){
    let n1 =parseFloat(document.getElementById(`nro1`).value)
    let  n2 =parseFloat(document.getElementById(`nro2`).value)
    let resta = n1 -  n2
    resultado =  document.getElementById(`resultado`).textContent = resta

}
function multiplicacion(){
    let n1 =parseFloat(document.getElementById(`nro1`).value)
    let n2 =parseFloat(document.getElementById(`nro2`).value)
    let multiplicacion = n1 *  n2
    resultado =  document.getElementById(`resultado`).textContent = multiplicacion
}
function division(){
    let n1 =parseFloat(document.getElementById(`nro1`).value)
    let n2 =parseFloat(document.getElementById(`nro2`).value)
   
if(n2 != 0){}
let division = n1 /  n2
        
 resultado =  document.getElementById(`resultado`).textContent = division
}