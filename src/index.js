//se crea la function del boton sifrad
function sifrad(){
    // se crea una variable tex que llama a textarea por su id cifra
let tex = document.getElementById('cifra').value ;
//para que tambien aparesca en la consola
console.log(tex);

//se crea una variable paran el imput offset y asi el usuario elija sus espacios
let posicion=parseInt(document.getElementById('offset').value);
//para que tambien aparesca en la consola
console.log(posicion);
//se obtiene el elemento con el id =respuesta del texarea=area de texto ..para grabar el resultado
//y se le llama del html y vincula la formula de encode =codificar insertandola en tex y posicion
document.getElementById("respuesta").innerHTML=window.cipher.encode(tex,posicion);
}
//se crea la function del boton desc
function desc(){
     // se crea una variable tex que llama a textarea por su id cifra
let tex = document.getElementById('decifra').value ;
//para que tambien aparesca en la consola
console.log(tex);
//se crea una variable paran el imput offset y asi el usuario elija sus espacios
let posicion=parseInt(document.getElementById('offset').value);
//para que tambien aparesca en la consola
console.log(posicion);
//se obtiene el elemento con el id =respuesta del texarea=area de texto ..para grabar el resultado
//y se le llama del html y vincula la formula de decode =codificar insertandola en tex y posicion
document.getElementById("respuesta").innerHTML=window.cipher.decode(tex,posicion);



}
