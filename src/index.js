let resultCifred = () => {//se crea la function del boton resultado de cifrad
    let tex = document.getElementById('cifra').value;// se crea una variable tex que llama a textarea por su id cifra
    let posicion = parseInt(document.getElementById('offset').value);//se crea una variable paran el imput offset y asi el usuario elija sus espacios
    //console.log(posicion);//para que tambien aparesca en la consola
    let result = cipher.encode(tex, posicion);//se obtiene el elemento con el id =respuesta del texarea=area de texto ..para grabar el resultado..//y se le llama del html y vincula la formula de encode =codificar insertandola en tex y posicion
    document.getElementById("respuesta").innerHTML = result;
}
document.getElementById("cifrado").addEventListener('click', resultCifred);

let resultDecifre = () => {//se crea la function del boton resultado de decifrar
    let tex = document.getElementById('decifra').value;// se crea una variable tex que llama a textarea por su id cifra
    let posicion = parseInt(document.getElementById('offset').value);//se crea una variable paran el imput offset y asi el usuario elija sus espacio
    ////console.log(posicion); //para que tambien aparesca en la consola
    let r =cipher.decode(tex,posicion);//se obtiene el elemento con el id =respuesta del texarea=area de texto ..para grabar el resultado   //y se le llama del html y vincula la formula de decode =codificar insertandola en tex y posicion 
    document.getElementById("respuesta").innerHTML=r;
}
document.getElementById("descifra").addEventListener("click",resultDecifre);
 

