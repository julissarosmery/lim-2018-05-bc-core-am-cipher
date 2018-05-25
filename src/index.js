//se crea lafunction sifrad qu incluye el primer textarea.
function sifrad(){
let tex = document.getElementById('cifra').value ;
//charCodeAt(tex);
console.log(tex);


let posicion=parseInt(document.getElementById('offset').value);
console.log(posicion);
document.getElementById("respuesta").innerHTML=window.cipher.encode(tex,posicion);
}

function desc(){
    let tex = document.getElementById('decifra').value ;
//charCodeAt(tex);
console.log(tex);
// para ver tus resultados
document.getElementById("respuesta").innerHTML=tex;
//esto es para vincularlo con el elector de numeros o espacios
let posicion=document.getElementById('offset').value;
console.log(posicion);
}



//document.getElementById("respuesta").innerHTML('tex');
/*} 
let fuera =document.getElementById("offset")
fuera.charCodeAt("offset")

let desifrar = document.getElementById("cifrado")
//desifrar.charCodeAt("cifrado")

let descifrado = document.getElementById("descifrado")
//descifrado.charCodeAt("descifrado")*/





