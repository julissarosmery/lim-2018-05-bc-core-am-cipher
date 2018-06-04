 window.cipher = {
  encode:  (offset,string) => {
     let codCipher=''; //mostrar cifra codificada
     for (let i=0; i<string.length; i++){ //esto se lee el  contador  i=va a comensar en 0 i= va a ser mayor o igual que  i= va a avanzar de uno en uno.
      let a=string.charCodeAt(i);//a es el codigo ascii
      if (a>=65 && a<=90){//if= si..a es mayor o igual y menor o igual que
        let x=(a-65+parseInt(offset))%26+65; //x = mayusculas
        codCipher = codCipher+String.fromCharCode(x);//parapasarlo de numeros a letras 
      }
      else if (a>=97 && a<=122){ //if= si..a es mayor o igual y menor o igual que
        let y=(a-97+parseInt(offset))%26+97; //y =ninusculas tambien se inporporo el parseado
        codCipher=codCipher+String.fromCharCode(y);//parapasarlo de numeros a letras 
      }else {
        codCipher+= string[i]; //de lo contrario el codigo cifrado es igual al codigo cifrado de el contador 
      }
     }
     return codCipher;//respuesta
  },
  decode:  (offset,string) => {
    let decodCipher='';//mostrar cifra decodificada
    for (let i=0; i<string.length; i++){//for= para ..esto se lee el contador  i=va a comensar en 0 i= va a ser mayor o igual que  i= va a avanzar de uno en uno.
      let a=string.charCodeAt(i); //a es codigo asccii
      if(a>=65 && a<=90){ //if= si..a es mayor o igual y menor o igual que
        let x=(a+65-parseInt(offset))%26+65; //x=mayuscul
        decodCipher = decodCipher+String.fromCharCode(x);//parapasarlo de numeros a letras
      }
      else if(a>=97 && a<=122){ //if= si..a es mayor o igual y menor o igual que
        let y=((a+97-parseInt(offset))-12)%26+97; //y =ninusculas
         decodCipher=decodCipher+String.fromCharCode(y);//parapasarlo de numeros a letras
      }
        else {//si es igual
          decodCipher+= string[i];
        }
      }
      return decodCipher;//regresa
    },
  
    
    createCipherWithOffset: (offset) =>{
    let retornar ={
     encode:(string) =>cipher.encode(offset,string),
     decode:(string) =>cipher.decode(offset,string),
     }
     return retornar;
  }
};