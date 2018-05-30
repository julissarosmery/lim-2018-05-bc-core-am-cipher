let tex;
let posicion;
let offset1;
//se crea la function del boton sifrad
let resultCifred = () => {
     // se crea una variable tex que llama a textarea por su id cifra
     let tex = document.getElementById('cifra').value;
     //para que tambien aparesca en la consola
     //se crea una variable paran el imput offset y asi el usuario elija sus espacios
     let posicion = parseInt(document.getElementById('offset').value);
     offset1= parseInt(posicion);
     //para que tambien aparesca en la consola
     console.log(posicion);
     //se obtiene el elemento con el id =respuesta del texarea=area de texto ..para grabar el resultado
     //y se le llama del html y vincula la formula de encode =codificar insertandola en tex y posicion
     let result = cipher.encode(tex, posicion);
     document.getElementById("respuesta").innerHTML = result;
}

document.getElementById("cifrado").addEventListener('click', resultCifred);

 //se crea la function del boton desc
 let resultDecifre = () => {
     // se crea una variable tex que llama a textarea por su id cifra
     let tex = document.getElementById('decifra').value;
     //para que tambien aparesca en la consola
     //se crea una variable paran el imput offset y asi el usuario elija sus espacio
     let posicion = parseInt(document.getElementById('offset').value);
     offset1=parseInt(posicion);
     //para que tambien aparesca en la consola
     console.log(posicion);
     //se obtiene el elemento con el id =respuesta del texarea=area de texto ..para grabar el resultado   
     //y se le llama del html y vincula la formula de decode =codificar insertandola en tex y posicion
     let r =cipher.decode(tex,posicion);
     document.getElementById("respuesta").innerHTML=r;
}

     document.getElementById("descifra").addEventListener("click",resultDecifre);
 
