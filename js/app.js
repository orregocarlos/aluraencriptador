const btEncriptar = document.getElementById("btEncriptar");
const btDesencriptar = document.getElementById("btDesencriptar");
const btCopiar = document.getElementById("btCopiar");
const btPegar = document.getElementById("btPegar");
const txProcesar = document.getElementById("procesarTexto");
const txResultado = document.getElementById("resultado");

//Evento que se desencadena al dar clic sobre el boton encriptar
btEncriptar.addEventListener("click",()=>{
    //Asignar valor y replazar caracteres
    document.getElementById("resultado").value = document.getElementById("procesarTexto").value.toLowerCase().replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
})

//Evento que se desencadena al dar clic sobre el boton desencriptar
btDesencriptar.addEventListener("click",()=>{
    //Desencriptar caracteres
    document.getElementById("resultado").value = document.getElementById("procesarTexto").value.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
})


btCopiar.addEventListener("click",()=>{
    navigator.clipboard.writeText(txResultado.value);
})

btPegar.addEventListener("click",()=>{
    navigator.clipboard.readText()
    .then(text=>{
        txProcesar.value = text; 
    });
})