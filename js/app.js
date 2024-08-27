
/**La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

const btEncriptar = document.getElementById("btEncriptar");
const btDesencriptar = document.getElementById("btDesencriptar");
const btCopiar = document.getElementById("btCopiar");
const btPegar = document.getElementById("btPegar");
const txProcesar = document.getElementById("procesarTexto");
const txResultado = document.getElementById("resultado");


btEncriptar.addEventListener("click",()=>{
    document.getElementById("resultado").value = document.getElementById("procesarTexto").value.replace("e","enter").replace("i","imes").replace("a","ai").replace("o","ober").replace("u","ufat")
    console.log(document.getElementById("resultado").value)
})

btDesencriptar.addEventListener("click",()=>{
    document.getElementById("resultado").value = document.getElementById("procesarTexto").value.replace("enter","e").replace("imes","i").replace("ai","a").replace("ober","o").replace("ufat","u")
    console.log(document.getElementById("resultado").value)
})

btCopiar.addEventListener("click",()=>{
    alert("copiar")
})

btPegar.addEventListener("click",()=>{
    alert("pegar")
})