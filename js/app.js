const btEncriptar = document.getElementById("btEncriptar");
const btDesencriptar = document.getElementById("btDesencriptar");
const btCopiar = document.getElementById("btCopiar");
const btPegar = document.getElementById("btPegar");
const txProcesar = document.getElementById("procesarTexto");
const txResultado = document.getElementById("resultado");
const lbTitulo = document.getElementById("tituloResultado");

function startPage(){
    txResultado.style.backgroundImage="url(./img/blanco.png)";
}

startPage()

function imagenEncriptado(){
    txResultado.style.backgroundImage="url(./img/encriptado.png)";
}

function imagenDesencriptado(){
    txResultado.style.backgroundImage="url(./img/abierto.png)";
}

//Evento que se desencadena al dar clic sobre el boton encriptar
btEncriptar.addEventListener("click",()=>{
    //Asignar valor y replazar caracteres
    if(txProcesar.value != ""){
        txResultado.value = txProcesar.value.toLowerCase().replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
        lbTitulo.textContent = "Texto encriptado";
        imagenEncriptado();
    }else{
        lbTitulo.textContent = "No hay ningun texto para encriptar";
        lbTitulo.style.backgroundColor = "red";
        lbTitulo.style.color = "white";
        setTimeout(()=>{
            lbTitulo.textContent = "Resultado de texto encriptado o desencriptado";
            lbTitulo.style.backgroundColor = "white";
            lbTitulo.style.color = "black";
        },2000)
    }
})

//Evento que se desencadena al dar clic sobre el boton desencriptar
btDesencriptar.addEventListener("click",()=>{
    if(txProcesar.value != ""){
        //Desencriptar caracteres
        txResultado.value = txProcesar.value.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
        lbTitulo.textContent = "Texto desencriptado";
        imagenDesencriptado();
    }else{
        lbTitulo.textContent = "No hay ningun texto para desencriptar";
        lbTitulo.style.backgroundColor = "red";
        lbTitulo.style.color = "white";
        setTimeout(()=>{
            lbTitulo.textContent = "Resultado de texto encriptado o desencriptado";
            lbTitulo.style.backgroundColor = "white";
            lbTitulo.style.color = "black";
        },2000)
    }
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

txProcesar.addEventListener("change",()=>{txResultado.value =""})